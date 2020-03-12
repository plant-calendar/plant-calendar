import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {entityId} from "../../../server/db/types";
import {IAugmentedPlant} from "../../store/habitat/selectors";
import CreatePlant2 from '../CreatePlantModal';
import {actions as habitatActions, selectors as habitatSelectors} from '../../store/habitat';
import {actions as plantActions} from '../../store/plant';
import {PlantTile} from "./plant-tiles";
import {PlantTileWrapper} from "./plant-tiles/wrapper";
import { AllTilesContainer, Title, Container } from "./styled-components";
import AddTile from "../common/AddTile";
import JustWateredTile from './plant-tiles/just-watered';

export interface IHabitatComponentProps {
  name: string;
  plantData: IAugmentedPlant[];
  match: any;
  images: { [plantId: string]: object };
  fetchHabitat: (habitatId: entityId) => void;
  waterPlantsByIds: (plantIds: entityId[], callback?) => void;
}


const Habitat = (props: IHabitatComponentProps) => {
  const habitatId = +props.match.params.id;
  const { name, plantData, images, fetchHabitat, waterPlantsByIds } = props;

  useEffect(() => {
    fetchHabitat(habitatId);
  }, []);
  const [justWateredPlantIds, setJustWateredPlantIds] = useState([-1]);
  const [createPlantOpen, setCreatePlantOpen] = useState(false);

  const waterPlants = (plantIds: entityId[]) => {
    waterPlantsByIds(plantIds, () => {
      setJustWateredPlantIds(plantIds);
      // allow the just watered message to stay there a couple seconds, then refresh all plants
      setTimeout(() => {
        fetchHabitat(habitatId);
        setJustWateredPlantIds([]);
      }, 2000);
    });
  };

  const plantWasJustWatered = (plantId: entityId): boolean => justWateredPlantIds.includes(plantId);
  const plantDataForDisplay = plantData.map(({ plant, subscribed, daysOverdueForWater }) => {
    if (plantWasJustWatered(plant.id)) {
      return { plant, tile: <JustWateredTile plant={plant} /> };
    }
    return {
      plant,
      tile: <PlantTile plant={plant} subscribed={subscribed} daysOverdueForWater={daysOverdueForWater} />,
    };
  });

  const onCreatePlant = () => {
    setCreatePlantOpen(false);
    props.fetchHabitat(habitatId);
  };
  return (
    <div>
      {
        createPlantOpen
            ? <CreatePlant2
                habitatId={habitatId}
                afterCreate={onCreatePlant}
                onCancel={
                  () => setCreatePlantOpen(false)
                }/>
            : null
      }
      <Container>
        <Title>@{props.name}</Title>
        <AddTile message="Add a plant" onClick={() => setCreatePlantOpen(true)}/>
        <AllTilesContainer>
          {plantDataForDisplay.map(({ plant, tile }) => (
            <div  key={`tile-container-${plant.id}`}>
              <PlantTileWrapper
                plant={plant}
                canWater={!plantWasJustWatered(plant.id)}
                onReachEndOfWaterTransition={() => waterPlants([plant.id])}>
                {tile}
              </PlantTileWrapper>
            </div>
          ))}
        </AllTilesContainer>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Habitat));
