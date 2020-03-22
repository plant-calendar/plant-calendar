import React from 'react';
import {COLORS} from "../style-config";

const Active = ({ onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        >
            <g id="notifications_24px">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64003 5.11 6.00003 7.67 6.00003 10.75V15.75L4.00003 17.75V18.75H20V17.75L18 15.75ZM12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM8.00003 16.75H16V10.75C16 8.27 14.49 6.25 12 6.25C9.51003 6.25 8.00003 8.27 8.00003 10.75V16.75ZM7.58003 3.83L6.15003 2.4C3.75003 4.23 2.17003 7.05 2.03003 10.25H4.03003C4.18003 7.6 5.54003 5.28 7.58003 3.83ZM21.97 10.25H19.97C19.82 7.6 18.45 5.28 16.43 3.83L17.85 2.4C20.24 4.23 21.82 7.05 21.97 10.25Z"
                    fill={COLORS.notification}
                    fillOpacity="0.8"
                />
            </g>
        </svg>
    );
};

const Inactive = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
        >
            <g id="notifications_24px">
                <path
                    id="icon/social/notifications_24px"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75ZM12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM8 16.75H16V10.75C16 8.27 14.49 6.25 12 6.25C9.51 6.25 8 8.27 8 10.75V16.75Z"
                    fill={COLORS.darkGray}
                    fillOpacity="1"
                />
            </g>
        </svg>
    );
};

interface IProps {
    active: boolean;
    onClick: () => any;
}

export default (props: IProps) => props.active ? <Active onClick={props.onClick} /> : <Inactive />;

