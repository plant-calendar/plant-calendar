import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Tile from '../Tile';
import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {actions as habitatActions, selectors as habitatSelectors} from '../../store/habitat';
import {COLORS} from "../style-config";
import AddTile from "../AddTile";
import PlantTransition from './plant-transition';
import JustWateredTile from './just-watered-tile';

interface IHabitatComponentProps {
  name: string;
  plants: IPlant[];
  match: any;
  images: { [plantId: string]: object };
  fetchHabitat: (habitatId: number) => void;
}

const Container = styled.div`
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  color: ${COLORS.darkGreen};
  margin-top: 50px;
  margin-bottom: 45px;
`;

const AllTilesContainer = styled.div`
  margin-top: 60px;
`;

const SingleTileContainer = styled.div`
  margin-top: 60px;
`;

const Habitat = (props: IHabitatComponentProps) => {
  useEffect(
    () => {
      props.fetchHabitat(+props.match.params.id);
    },
    [],
  );
  const [justWateredPlantId, setJustWateredPlantId] = useState(null);

  const waterPlant = (plantId) => {
    // make the PUT/PATCH to water the plant here
    console.log(`watering plant ${plantId}`);
    setJustWateredPlantId(plantId);
    // allow the just watered message to stay there a couple seconds
    setTimeout(() => {
      console.log('refetching plants!');
    }, 2000);
  };

  return (
    <div>
      <Title>{props.name}</Title>
      <Container>
        <AddTile message="Add a plant"/>
        <AllTilesContainer>
          {props.plants.map(
            (plant: IPlant) => {
              const tile = justWateredPlantId === plant.id
                ? (<JustWateredTile />)
                : (
                  <PlantTransition
                    onReachEnd={() => waterPlant(plant.id)}
                    plantId={plant.id}>
                    <Tile
                      title={plant.name}
                      details={`Last watered 3 days ago`}
                      imageUrl={plant.imageUrl || ''}
                    />
                  </PlantTransition>
                );
              return (
                <SingleTileContainer key={`tile-container-${plant.id}`}>
                  {tile}
                </SingleTileContainer>
              );
            },
          )}
        </AllTilesContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const habitatId: number = +ownProps.match.params.id;
  return {
    name: habitatSelectors.habitatById(habitatId, state).name,
    plants: habitatSelectors.plantsByHabitatId(habitatId, state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchHabitat: (habitatId: number) => dispatch(habitatActions.fetchHabitatsByIds([habitatId])),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Habitat));
