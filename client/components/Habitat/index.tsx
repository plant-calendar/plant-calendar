import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {actions as habitatActions, selectors as habitatSelectors} from "../../store/habitat";
import {IAugmentedPlant} from "../../store/habitat/selectors";
import {entityId} from "../../../common/db-interfaces/types";
import {actions as plantActions} from "../../store/plant";
import TilesContainer from '../TileDisplay';
import {Container, Title, TitleAndBackContainer} from "./styled-components";
import AddTile from "../common/AddTile";
import getPlantTileData from './get-plant-tile-data';
import PlantModal from "../CreatePlantModal";
import BackButton from '../common/back-button';


interface IProps {
    match: any;
    history: any;
    name: string;
    plantData: IAugmentedPlant[];
    fetchHabitat: (habitatId: entityId) => void;
    waterPlantsByIds: (plantIds: any[], callback?) => any;
}

const Habitat = (props: IProps) => {
    const habitatId = +props.match.params.id;
    const { name, plantData, fetchHabitat, waterPlantsByIds } = props;

    useEffect(() => {
        fetchHabitat(habitatId);
    }, []);

    const [createPlantOpen, setCreatePlantOpen] = useState(false);
    const [plantWithSettingsOpen, setPlantWithSettingsOpen] = useState(null);
    const [justWateredPlantId, setJustWateredPlantId] = useState(0);

    const onCreatePlant = () => {
        setCreatePlantOpen(false);
        props.fetchHabitat(habitatId);
    };
    const onUpdatePlant = () => {
        setPlantWithSettingsOpen(null);
        props.fetchHabitat(habitatId);
    };
    const waterPlant = plantId => {
        waterPlantsByIds([plantId], () => {
           setJustWateredPlantId(plantId);
           setTimeout(() => {
               setJustWateredPlantId(0);
               props.fetchHabitat(habitatId);
           }, 2000);
        });
    };
    return (
      <div>
          {
              createPlantOpen
                  ? <PlantModal
                        isCreate
                        habitatId={habitatId}
                        afterSave={onCreatePlant}
                        onCancel={() => setCreatePlantOpen(false)}
                    />
                  : null
          }
          {
              plantWithSettingsOpen
                  ? <PlantModal
                        isCreate={false}
                        habitatId={habitatId}
                        augmentedPlant={
                          props.plantData.find(augmentedPlant => augmentedPlant.plant.id === plantWithSettingsOpen)
                        }
                        afterSave={onUpdatePlant}
                        onCancel={() => setPlantWithSettingsOpen( null)}
                    />
                  : null
          }
        <Container>
            <TitleAndBackContainer>
                <BackButton onClick={() => props.history.goBack()}/>
                <Title>@{name}</Title>
            </TitleAndBackContainer>
            <AddTile message="Add a plant" onClick={() => setCreatePlantOpen(true)}/>
            <TilesContainer tiles={
                plantData.map(
                    augmentedPlant => getPlantTileData({
                        ...augmentedPlant,
                        // @ts-ignore
                        openSettings: () => setPlantWithSettingsOpen(augmentedPlant.plant.id),
                        justWatered: augmentedPlant.plant.id === justWateredPlantId,
                        onReachEndOfWaveTransition: () => waterPlant(augmentedPlant.plant.id),
                    }),
                )
            }/>
        </Container>
      </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    name: habitatSelectors.habitatById(state, ownProps).name,
    plantData: habitatSelectors.getPlantDataForDisplayInHabitat(state, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
    fetchHabitat: (habitatId: entityId) => dispatch(habitatActions.fetchHabitatsByIds([habitatId])),
    waterPlantsByIds: (plantIds, callback?) => dispatch(plantActions.waterByIds(plantIds, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Habitat);