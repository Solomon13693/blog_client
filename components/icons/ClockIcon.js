import React from 'react';
import PropTypes from 'prop-types';

const ClockIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M14.6663 8.00016C14.6663 11.6802 11.6797 14.6668 7.99967 14.6668C4.31967 14.6668 1.33301 11.6802 1.33301 8.00016C1.33301 4.32016 4.31967 1.3335 7.99967 1.3335C11.6797 1.3335 14.6663 4.32016 14.6663 8.00016Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4729 10.1202L8.40626 8.88684C8.04626 8.6735 7.75293 8.16017 7.75293 7.74017V5.00684" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



ClockIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClockIcon.defaultProps = {
    color: "#586283",
    width: "16",
    height: "16",
};

export default ClockIcon;
