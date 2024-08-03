import React from 'react';
import PropTypes from 'prop-types';

const HealthIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 15"
        fill='none'
        className={className}
    >
        <path d="M5.23275 13.3337H8.73275C11.6494 13.3337 12.8161 12.167 12.8161 9.25033V5.75033C12.8161 2.83366 11.6494 1.66699 8.73275 1.66699H5.23275C2.31608 1.66699 1.14941 2.83366 1.14941 5.75033V9.25033C1.14941 12.167 2.31608 13.3337 5.23275 13.3337Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.14941 7.90807L4.64941 7.8964C5.08691 7.8964 5.57691 8.2289 5.74025 8.63724L6.40525 10.3172C6.55691 10.6964 6.79608 10.6964 6.94775 10.3172L8.28358 6.92807C8.41191 6.6014 8.65108 6.58974 8.81441 6.8989L9.42108 8.04807C9.60191 8.39224 10.0686 8.67224 10.4536 8.67224H12.8219" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



HealthIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HealthIcon.defaultProps = {
    color: "#FFF",
    width: "14",
    height: "15",
};

export default HealthIcon;
