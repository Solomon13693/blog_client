import React from 'react';
import PropTypes from 'prop-types';

const MessageIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 60 60"
        fill='none'
        className={className}
    >
        <path d="M42.5 5H17.5C10.6 5 5 10.575 5 17.45V32.4V34.9C5 41.775 10.6 47.35 17.5 47.35H21.25C21.925 47.35 22.825 47.8 23.25 48.35L27 53.325C28.65 55.525 31.35 55.525 33 53.325L36.75 48.35C37.225 47.725 37.975 47.35 38.75 47.35H42.5C49.4 47.35 55 41.775 55 34.9V17.45C55 10.575 49.4 5 42.5 5ZM32.5 34.375H17.5C16.475 34.375 15.625 33.525 15.625 32.5C15.625 31.475 16.475 30.625 17.5 30.625H32.5C33.525 30.625 34.375 31.475 34.375 32.5C34.375 33.525 33.525 34.375 32.5 34.375ZM42.5 21.875H17.5C16.475 21.875 15.625 21.025 15.625 20C15.625 18.975 16.475 18.125 17.5 18.125H42.5C43.525 18.125 44.375 18.975 44.375 20C44.375 21.025 43.525 21.875 42.5 21.875Z" fill={color}/>
    </svg>
);


MessageIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MessageIcon.defaultProps = {
    color: "#18B01F",
    width: "60",
    height: "60",
};

export default MessageIcon;
