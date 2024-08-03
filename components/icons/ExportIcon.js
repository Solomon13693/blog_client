import React from 'react';
import PropTypes from 'prop-types';

const ExportIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 17 16"
        fill='none'
        className={className}
    >
        <path d="M8.74707 5.91992H12.2471" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.75293 5.91992L5.25293 6.41992L6.75293 4.91992" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.74707 10.5867H12.2471" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.75293 10.5867L5.25293 11.0867L6.75293 9.58667" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.49967 14.6666H10.4997C13.833 14.6666 15.1663 13.3333 15.1663 9.99992V5.99992C15.1663 2.66659 13.833 1.33325 10.4997 1.33325H6.49967C3.16634 1.33325 1.83301 2.66659 1.83301 5.99992V9.99992C1.83301 13.3333 3.16634 14.6666 6.49967 14.6666Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



ExportIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ExportIcon.defaultProps = {
    color: "#1D2329",
    width: "17",
    height: "16",
};

export default ExportIcon;
