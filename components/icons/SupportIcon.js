import React from 'react';
import PropTypes from 'prop-types';

const SupportIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M3.64003 12.813V10.8664C3.64003 10.2197 4.1467 9.63969 4.8667 9.63969C5.51337 9.63969 6.09337 10.1464 6.09337 10.8664V12.7397C6.09337 14.0397 5.01337 15.1197 3.71337 15.1197C2.41337 15.1197 1.33336 14.033 1.33336 12.7397V8.63303C1.26003 4.88636 4.22003 1.85303 7.9667 1.85303C11.7134 1.85303 14.6667 4.88636 14.6667 8.55969V12.6664C14.6667 13.9664 13.5867 15.0464 12.2867 15.0464C10.9867 15.0464 9.9067 13.9664 9.9067 12.6664V10.793C9.9067 10.1464 10.4134 9.56636 11.1334 9.56636C11.78 9.56636 12.36 10.073 12.36 10.793V12.813" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



SupportIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SupportIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default SupportIcon;
