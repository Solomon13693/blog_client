import React from 'react';
import PropTypes from 'prop-types';

const DiscountIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 60 60"
        fill='none'
        className={className}
    >
        <path d="M30 4.99927C16.2 4.99927 5 16.1993 5 29.9993C5 43.7993 16.2 54.9993 30 54.9993C43.8 54.9993 55 43.7993 55 29.9993C55 16.1993 43.8 4.99927 30 4.99927ZM22.5 19.9993C23.875 19.9993 25 21.1243 25 22.4993C25 23.8743 23.9 24.9993 22.5 24.9993C21.125 24.9993 20 23.8743 20 22.4993C20 21.1243 21.125 19.9993 22.5 19.9993ZM23.825 38.8243C23.45 39.1993 22.975 39.3743 22.5 39.3743C22.025 39.3743 21.55 39.1993 21.175 38.8243C20.45 38.0993 20.45 36.8993 21.175 36.1743L36.175 21.1743C36.9 20.4493 38.1 20.4493 38.825 21.1743C39.55 21.8993 39.55 23.0993 38.825 23.8243L23.825 38.8243ZM37.5 39.9993C36.1 39.9993 34.975 38.8743 34.975 37.4993C34.975 36.1243 36.1 34.9993 37.475 34.9993C38.85 34.9993 39.975 36.1243 39.975 37.4993C39.975 38.8743 38.875 39.9993 37.5 39.9993Z" fill={color}/>
    </svg>
);


DiscountIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiscountIcon.defaultProps = {
    color: "#18B01F",
    width: "60",
    height: "60",
};

export default DiscountIcon;
