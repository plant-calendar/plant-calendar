import React, {useState} from 'react';
import styled from 'styled-components';
import {COLORS} from "../../../style-config";

const StyledBar = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    color: ${COLORS.darkGreen};
`;

const VerticalFlexer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const StyledTextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 30px;
    color: ${COLORS.darkGreen};
    border: 1px solid ${COLORS.darkGreen};
    text-decoration: none;
`;

const StyledLabel = styled.div`
    margin-top: 5px;
    width: 100%;
    text-align: center;
`;

const Component = ({ debouncedSearch }) => {
    const [searchString, setSearchString] = useState('');

    return (
        <StyledBar>
            <VerticalFlexer>
                <StyledTextArea
                    value={searchString}
                    onChange={event => {
                        const searched = event.target.value.toLowerCase();
                        setSearchString(searched);
                        if (searched.length > 2) {
                            debouncedSearch(searched);
                        }
                    }}
                    spellCheck={false}
                />
                <StyledLabel>
                    search for habitats
                </StyledLabel>
            </VerticalFlexer>
        </StyledBar>
    );
};

interface IProps {
    onSearch: (searchString: string) => any;
}

const debounce = (func, delay) => {
    let timerId;
    return (searchStr) => {
        clearTimeout(timerId);
        timerId = setTimeout(() =>  func(searchStr), delay);
    };
};

// we must have a wrapper component to define our debounced function b/c, if we were
// to put the definition in the child component, it would be redefined each time state
// changed, at which point the timerId in the debouncer would be lost.
export default (props: IProps) => {
    const debouncedSearch = debounce(str => {
        props.onSearch(str);
        // console.log(str)
    }, 500);
    return <Component debouncedSearch={debouncedSearch} />;
};