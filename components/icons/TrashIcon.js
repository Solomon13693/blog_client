import React from 'react';
import PropTypes from 'prop-types';

const TrashIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.66699 3.3135L5.81366 2.44016C5.92033 1.80683 6.00033 1.3335 7.12699 1.3335H8.87366C10.0003 1.3335 10.087 1.8335 10.187 2.44683L10.3337 3.3135" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5669 6.09326L12.1336 12.8066C12.0603 13.8533 12.0003 14.6666 10.1403 14.6666H5.86026C4.00026 14.6666 3.94026 13.8533 3.86693 12.8066L3.43359 6.09326" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.88672 11H9.10672" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.33301 8.3335H9.66634" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



TrashIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrashIcon.defaultProps = {
    color: "#586283",
    width: "16",
    height: "16",
};

export default TrashIcon;
