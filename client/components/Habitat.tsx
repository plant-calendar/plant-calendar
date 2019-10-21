import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Tile from './Tile';
import {IPlant} from "../../server/db/models/plant/plant.interface";
import { actions as plantActions } from '../store/plants';
import {COLORS} from "./style-config";
import AddTile from "./AddTile";

interface IHabitatComponentProps {
  name: string;
  plants: IPlant[];
  match: any;
  images: { [plantId: string]: object };
  fetchPlants: (habitatId: string) => void;
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
      console.log(`dispatched fetchPlants for habitat ${props.match.params.id} from habitat component`);
      props.fetchPlants(props.match.params.id);
    },
    [],
  );
  console.log({ 'props.plants': props.plants })
  return (
    <div>
      <Title>{props.name}</Title>
      <Container>
        <AddTile message="Add a plant"/>
        <AllTilesContainer>
          {props.plants.map(
            (plant: IPlant) => (
              <SingleTileContainer>
              <Tile
                title={plant.name}
                details={`Last watered 3 days ago`}
                imageUrl={plant.imageUrl || ''}
              />
              </SingleTileContainer>
            ),
          )}
        </AllTilesContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: {}, // use selector for this
  plants: state.plants.data,
  name: `@chez-nous`,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlants: (habitatId: string) => dispatch(plantActions.fetchPlantsByHabitatId(habitatId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Habitat));