import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {IField} from "../../../forms/interfaces";
import {Close} from "../CloseSign";
import {SubmitButton} from "../SubmitButton";
import renderField from '../../../forms/rendering/render-fields';
import { Arrow } from "../arrows";
import {COLORS} from "../../style-config";

const Middle = styled.div`
    display: flex;
    height: 80%;
`;

const LeftArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    justify-content: center;
`;
const RightArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    justify-content: center;
`;

const LeftArrowSubContainer = styled.div`
    display: flex;
`;
const RightArrowSubContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const FieldContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

interface IProps {
    fields: Array<{
        field: IField,
        onChange: (value: any) => any,
        value: any,
        onLeave: () => any,
        clearError: () => any,
        error: string,
    }>;
    canSubmit: boolean;
    canBack: boolean;
    canForward: boolean;
    onBack: () => any;
    onForward: () => any;
    onSubmit: any;
    buttonText?: string;
    onClickForward: () => any;
    submissionError: string;
    close: () => any;
}

export default (props: IProps) => {
    return (
        <ReactModal isOpen style={{content: { left: '33%', width: '50%', minWidth: '300px', maxWidth: '500px' }}}>
            <Close onClick={props.close} />
            <Middle>
                <LeftArrowContainer>
                    {props.canBack
                        ? (
                            <LeftArrowSubContainer>
                                <Arrow onClick={props.onBack} size="medium" direction="left"/>
                            </LeftArrowSubContainer>
                        ) : null
                    }
                </LeftArrowContainer>
                <FieldContainer>
                    {
                        ...(props.fields || [])
                            .map(({ field, onChange, value, error, clearError, onLeave }) =>
                                renderField(field, value, onChange, error, clearError, onLeave))
                    }
                </FieldContainer>
                <RightArrowContainer>
                    {props.canForward
                        ? (
                            <RightArrowSubContainer>
                                <Arrow onClick={props.onForward} size="medium" direction="right"/>
                            </RightArrowSubContainer>
                        ) : null
                    }
                </RightArrowContainer>
            </Middle>
            {props.canSubmit ? (
                <SubmitButtonContainer>
                    <SubmitButton onClick={props.onSubmit} text={props.buttonText || "create!"} />
                </SubmitButtonContainer>
            ) : null}
            {props.submissionError}
        </ReactModal>
    );
};
