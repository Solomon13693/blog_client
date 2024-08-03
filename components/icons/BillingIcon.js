import React from 'react';
import PropTypes from 'prop-types';

const BillingIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M1.33301 6.15625H14.6663" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 11.4897H5.33333" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 11.4897H9.66667" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.29301 2.823H11.6997C14.073 2.823 14.6663 3.40966 14.6663 5.74966V11.223C14.6663 13.563 14.073 14.1497 11.7063 14.1497H4.29301C1.92634 14.1563 1.33301 13.5697 1.33301 11.2297V5.74966C1.33301 3.40966 1.92634 2.823 4.29301 2.823Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



BillingIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BillingIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default BillingIcon;
