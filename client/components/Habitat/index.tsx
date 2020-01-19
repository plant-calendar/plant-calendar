import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {plantDataAccessors} from "../../../common/data-accessors/plant";
import {entityId} from "../../../server/db/types";
import {CreatePlant} from "../CreatePlantModal";
import Tile from '../Tile';
import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {actions as habitatActions, selectors as habitatSelectors} from '../../store/habitat';
import {actions as plantActions} from '../../store/plant';
import {PlantToWater} from "./plant-tiles/to-water";
import {NoWaterNeededPlant} from "./plant-tiles/no-water-needed";
import {PlantTileWrapper} from "./plant-tiles/wrapper";
import {
  AllTilesContainer,
  SingleTileContainer,
  Title,
  Container,
} from "./styled-components";
import AddTile from "../AddTile";
import PlantTransition from './plant-transition';
import JustWateredTile from './plant-tiles/just-watered';
import {NonSubscribedPlant} from './plant-tiles/non-subscribed';

export interface IHabitatComponentProps {
  name: string;
  plantsToWater: IPlant[];
  plantsThatDontNeedWater: IPlant[];
  nonSubscribedPlants: IPlant[];
  match: any;
  images: { [plantId: string]: object };
  fetchHabitat: (habitatId: entityId) => void;
  waterPlantsByIds: (plantIds: entityId[], callback?) => void;
}


const Habitat = (props: IHabitatComponentProps) => {
  const habitatId = +props.match.params.id;
  useEffect(
    () => {
      props.fetchHabitat(habitatId);
    },
    [],
  );
  const [justWateredPlantIds, setJustWateredPlantIds] = useState([]);
  const [createPlantOpen, setCreatePlantOpen] = useState(false);

  const waterPlants = (plantIds: entityId[]) => {
    props.waterPlantsByIds(plantIds, () => {
      setJustWateredPlantIds(plantIds);
      // allow the just watered message to stay there a couple seconds, then refresh all plants
      setTimeout(() => props.fetchHabitat(habitatId), 2000);
    });
  };

  const plantWasJustWatered = (plantId: entityId): boolean => justWateredPlantIds.includes(plantId);
  const plantTiles = [
    ...props.plantsToWater.map(plant => ({
        plant,
        tile: plantWasJustWatered(plant.id) ? <JustWateredTile plant={plant} /> : <PlantToWater plant={plant} />,
      })),
    ...props.plantsThatDontNeedWater.map(plant => ({ plant, tile: <NoWaterNeededPlant plant={plant} /> })),
    ...props.nonSubscribedPlants.map(plant => ({ plant, tile: <NonSubscribedPlant/> })),
  ];

  const onCreatePlant = () => {
    setCreatePlantOpen(false);
    props.fetchHabitat(habitatId);
  };
  return (
    <div>
      {createPlantOpen ? <CreatePlant habitatId={habitatId} onCreate={onCreatePlant} onCancel={() => setCreatePlantOpen(false)}/> : null}
      <Title>{props.name}</Title>
      <Container>
        <AddTile message="Add a plant" onClick={() => setCreatePlantOpen(true)}/>
        <AllTilesContainer>
          {plantTiles.map(({ plant, tile }) => (
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
  plantsToWater: habitatSelectors.plantsToWater(state, ownProps),
  plantsThatDontNeedWater: habitatSelectors.plantsThatDontNeedWater(state, ownProps),
  nonSubscribedPlants: habitatSelectors.nonSubscribedPlants(state, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  fetchHabitat: (habitatId: entityId) => dispatch(habitatActions.fetchHabitatsByIds([habitatId])),
  waterPlantsByIds: (plantIds, callback?) => dispatch(plantActions.waterByIds(plantIds, callback)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Habitat));
