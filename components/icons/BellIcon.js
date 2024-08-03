import React from 'react';
import PropTypes from 'prop-types';

const BellIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M7.99993 4.29398V6.51399M8.01327 1.33398C5.55993 1.33398 3.57327 3.32065 3.57327 5.77398V7.17399C3.57327 7.62732 3.3866 8.30732 3.15327 8.69399L2.3066 10.1073C1.7866 10.9807 2.1466 11.954 3.1066 12.274C6.29412 13.334 9.73908 13.334 12.9266 12.274C13.1369 12.2038 13.3288 12.0873 13.4881 11.933C13.6473 11.7788 13.7699 11.5907 13.8467 11.3827C13.9235 11.1747 13.9525 10.9521 13.9318 10.7313C13.911 10.5106 13.8409 10.2973 13.7266 10.1073L12.8799 8.69399C12.6466 8.30732 12.4599 7.62065 12.4599 7.17399V5.77398C12.4533 3.33398 10.4533 1.33398 8.01327 1.33398Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M10.2203 12.5466C10.2203 13.7666 9.22027 14.7666 8.00027 14.7666C7.39361 14.7666 6.83361 14.5133 6.43361 14.1133C6.03361 13.7133 5.78027 13.1533 5.78027 12.5466" stroke={color} strokeMiterlimit="10" />
    </svg>
);



BellIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellIcon.defaultProps = {
    color: "#1D2329",
    width: "16",
    height: "16",
};

export default BellIcon;
