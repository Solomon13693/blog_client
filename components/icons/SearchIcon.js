import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill='none'
        className={className}
    >
        <path d="M6.70866 12.2498C9.76924 12.2498 12.2503 9.76875 12.2503 6.70817C12.2503 3.64759 9.76924 1.1665 6.70866 1.1665C3.64808 1.1665 1.16699 3.64759 1.16699 6.70817C1.16699 9.76875 3.64808 12.2498 6.70866 12.2498Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.8337 12.8332L11.667 11.6665" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



SearchIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SearchIcon.defaultProps = {
    color: "#FFF",
    width: "14",
    height: "14",
};

export default SearchIcon;
