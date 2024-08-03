import React from 'react';
import PropTypes from 'prop-types';

const UploadIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M9.33301 1.81958H5.99967C2.66634 1.81958 1.33301 3.15291 1.33301 6.48625V10.4862C1.33301 13.8196 2.66634 15.1529 5.99967 15.1529" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.666 7.15283V9.15283" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6663 7.15291H11.9997C9.99967 7.15291 9.33301 6.48625 9.33301 4.48625V1.81958L14.6663 7.15291Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.17305 12.6596C7.60638 12.773 7.60638 15.0396 9.17305 15.153H12.8797C13.3264 15.153 13.7664 14.9863 14.093 14.6863C15.193 13.7263 14.6064 11.8063 13.1597 11.6263C12.6397 8.49962 8.11971 9.68629 9.18638 12.6663" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


UploadIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UploadIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default UploadIcon;
