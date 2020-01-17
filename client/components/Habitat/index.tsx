import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {plantDataAccessors} from "../../../common/data-accessors/plant";
import {entityId} from "../../../server/db/types";
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
  waterPlantById: (plantId: entityId, callback?) => void;
}


const Habitat = (props: IHabitatComponentProps) => {
  const habitatId = +props.match.params.id;
  useEffect(
    () => {
      props.fetchHabitat(habitatId);
    },
    [],
  );
  const [justWateredPlantId, setJustWateredPlantId] = useState(null);

  const waterPlant = (plantId) => {
    console.log(`watering plant ${plantId}`);
    props.waterPlantById(plantId, () => {
      setJustWateredPlantId(plantId);
      // allow the just watered message to stay there a couple seconds
      setTimeout(() => {
        console.log('refetching habitat!');
        props.fetchHabitat(habitatId);
      }, 2000);
    });
  };

  const plantTiles = [
    ...props.plantsToWater.map(plant => justWateredPlantId === plant.id
        ? <JustWateredTile plant={plant} />
        : <PlantToWater plant={plant} />),
    ...props.plantsThatDontNeedWater.map(plant => <NoWaterNeededPlant/>),
    ...props.nonSubscribedPlants.map(plant => <NonSubscribedPlant/>),
  ];

  return (
    <div>
      <Title>{props.name}</Title>
      <Container>
        <AddTile message="Add a plant"/>
        <AllTilesContainer>
          {props.plantsToWater.map(plant => {
              const tile = justWateredPlantId === plant.id
                ? <JustWateredTile plant={plant} />
                : <PlantToWater plant={plant} />;
              return (
                <div  key={`tile-container-${plant.id}`}>
                  <PlantTileWrapper
                    plant={plant}
                    canWater={justWateredPlantId !== plant.id}
                    onReachEndOfWaterTransition={() => waterPlant(plant.id)}>
                    {tile}
                  </PlantTileWrapper>
                </div>
              );
            },
          )}
          {/*{props.plantsThatDontNeedWater.map(plant => (*/}
          {/*  <div  key={`tile-container-${plant.id}`}>*/}
          {/*    <PlantTileWrapper*/}
          {/*      plant={plant}*/}
          {/*      tile={tile}*/}
          {/*      canWater={justWateredPlantId !== plant.id}*/}
          {/*      onReachedEndOfWaterTransition={() => waterPlant(plant.id)}/>*/}
          {/*  </div>*/}
          {/*))}*/}
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
  waterPlantById: (plantId: entityId, callback?) => dispatch(plantActions.waterPlantById(plantId, callback)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Habitat));
