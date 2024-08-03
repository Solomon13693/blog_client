import React from 'react';
import PropTypes from 'prop-types';

const CopyIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M11.334 8.93366V10.9337C11.334 13.6003 10.2673 14.667 7.60065 14.667H5.06732C2.40065 14.667 1.33398 13.6003 1.33398 10.9337V8.40033C1.33398 5.73366 2.40065 4.66699 5.06732 4.66699H7.06732" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3331 8.93366H9.19974C7.59974 8.93366 7.06641 8.40033 7.06641 6.80033V4.66699L11.3331 8.93366Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.73242 1.33301H10.3991" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.66602 3.33301C4.66602 2.22634 5.55935 1.33301 6.66602 1.33301H8.41268" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6663 5.33301V9.45967C14.6663 10.493 13.8263 11.333 12.793 11.333" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.666 5.33301H12.666C11.166 5.33301 10.666 4.83301 10.666 3.33301V1.33301L14.666 5.33301Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



CopyIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CopyIcon.defaultProps = {
    color: "#A3A3A3",
    width: "16",
    height: "16",
};

export default CopyIcon;
