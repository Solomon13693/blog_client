import React from 'react';
import PropTypes from 'prop-types';

const ConfigurationIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M5.99967 15.1529H9.99967C13.333 15.1529 14.6663 13.8196 14.6663 10.4862V6.48625C14.6663 3.15291 13.333 1.81958 9.99967 1.81958H5.99967C2.66634 1.81958 1.33301 3.15291 1.33301 6.48625V10.4862C1.33301 13.8196 2.66634 15.1529 5.99967 15.1529Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3799 12.8197V10.2197" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3799 5.45308V4.15308" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3798 8.91955C11.3371 8.91955 12.1132 8.14351 12.1132 7.18621C12.1132 6.22892 11.3371 5.45288 10.3798 5.45288C9.42252 5.45288 8.64648 6.22892 8.64648 7.18621C8.64648 8.14351 9.42252 8.91955 10.3798 8.91955Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.62012 12.8198V11.5198" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.62012 6.75308V4.15308" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.62005 11.5196C6.57735 11.5196 7.35338 10.7436 7.35338 9.78631C7.35338 8.82902 6.57735 8.05298 5.62005 8.05298C4.66276 8.05298 3.88672 8.82902 3.88672 9.78631C3.88672 10.7436 4.66276 11.5196 5.62005 11.5196Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



ConfigurationIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ConfigurationIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default ConfigurationIcon;
