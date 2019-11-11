import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { plantDataAccessors } from '../../../common/data-accessors/plant';
import Tile from '../Tile';
import { IPlant } from '../../../server/db/models/plant/plant.interface';
import {
  actions as habitatActionCreators,
  selectors as habitatSelectors,
} from '../../store/habitat';
import { PlantToWater } from './plant-tiles/to-water';
import { NoWaterNeededPlant } from './plant-tiles/no-water-needed';
import { PlantTileWrapper } from './plant-tiles/wrapper';
import {
  AllTilesContainer,
  SingleTileContainer,
  Title,
  Container,
} from './styled-components';
import AddTile from '../AddTile';
import PlantTransition from './plant-transition';
import JustWateredTile from './plant-tiles/just-watered';
import { NonSubscribedPlant } from './plant-tiles/non-subscribed';
import { waterPlantById } from '../../store/plants/actions';

export interface IHabitatComponentProps {
  name: string;
  plantsToWater: IPlant[];
  plantsThatDontNeedWater: IPlant[];
  nonSubscribedPlants: IPlant[];
  match: any;
  images: { [plantId: string]: object };
  fetchHabitat: (habitatId: number) => void;
  waterPlantById: Function;
}

const Habitat = (props: IHabitatComponentProps) => {
  useEffect(() => {
    props.fetchHabitat(+props.match.params.id);
  }, []);
  const [justWateredPlantId, setJustWateredPlantId] = useState(null);

  const waterPlant = plantId => {
    // make the PUT/PATCH to water the plant here
    console.log(`watering plant ${plantId}`);
    props.waterPlantById(plantId, () => {
      setTimeout(() => {
        props.fetchHabitat(+props.match.params.id);
        setJustWateredPlantId(null);
      }, 2000);
    });
    setJustWateredPlantId(plantId);
    // allow the just watered message to stay there a couple seconds
  };

  const getTileWithContainer = (tile, plant) => (
    <div key={`tile-container-${plant.id}`}>
      <PlantTileWrapper
        plant={plant}
        canWater={justWateredPlantId !== plant.id}
        onReachEndOfWaterTransition={() => waterPlant(plant.id)}
      >
        {tile}
      </PlantTileWrapper>
    </div>
  );

  const plantsToWaterTiles = props.plantsToWater.map(plant => {
    const tile =
      justWateredPlantId === plant.id ? (
        <JustWateredTile plant={plant} />
      ) : (
        <PlantToWater plant={plant} />
      );
    return getTileWithContainer(tile, plant);
  });
  const noWaterNeededTiles = props.plantsThatDontNeedWater.map(plant =>
    getTileWithContainer(<NoWaterNeededPlant />, plant)
  );
  const nonSubscribedTiles = props.nonSubscribedPlants.map(plant =>
    getTileWithContainer(<NonSubscribedPlant />, plant)
  );

  return (
    <div>
      <Title>{props.name}</Title>
      <Container>
        <AddTile message="Add a plant" />
        <AllTilesContainer>
          {plantsToWaterTiles}
          {noWaterNeededTiles}
          {nonSubscribedTiles}
        </AllTilesContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  name: habitatSelectors.habitatById(state, ownProps).name,
  plantsToWater: habitatSelectors.plantsToWater(state, ownProps),
  plantsThatDontNeedWater: habitatSelectors.plantsThatDontNeedWater(
    state,
    ownProps
  ),
  nonSubscribedPlants: habitatSelectors.nonSubscribedPlants(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
  fetchHabitat: (habitatId: number) => {
    console.log('called habitat.props.fetchHabitat');
    const { type, habitatIds } = habitatActionCreators.fetchHabitatsByIds([
      habitatId,
    ]);
    dispatch({ type, habitatIds });
  },
  waterPlantById: (plantId: number, callback: Function) => {
    dispatch(waterPlantById(plantId, callback));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Habitat)
);
