import React from 'react';
import styled from 'styled-components';
import {IHabitat} from "../../../../../server/db/models/habitat/habitat.interface";
import Tile from "../../../TileDisplay/tile2";
import SearchBar from './search-bar';
import {COLORS} from "../../../style-config";

const StyledTileContainer = styled.div`
`;

const StyledNoHabitatsMessage = styled.div`
    text-align: center;
    color: ${COLORS.lightGray};
`;

interface IProps {
    searchHabitats: (searchString: string) => any;
    habitats: IHabitat[];
    onClickHabitat: (habitat: IHabitat) => any;
}

export default (props: IProps) => {
    const { habitats, searchHabitats, onClickHabitat } = props;
    return (
        <div>
            <SearchBar onSearch={(searchString: string) => searchHabitats(searchString)} />
            {
                habitats.length === 0
                    ? (
                        <StyledNoHabitatsMessage>no matching habitats found</StyledNoHabitatsMessage>
                    )
                    : null
            }
            <StyledTileContainer>
                {habitats.map(habitat => (
                    <Tile
                        title={habitat.name}
                        details={''}
                        elementKey={habitat.id}
                        imageUrl={habitat.imageUrl}
                        containerStyle={{ width: '100%' }}
                        onClick={() => onClickHabitat(habitat)}
                    />
                ))}
            </StyledTileContainer>
        </div>
    );
};
