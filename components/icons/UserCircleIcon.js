import React from 'react';
import PropTypes from 'prop-types';

const UserCircleIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 15"
        fill='none'
        className={className}
    >
        <path d="M6.68506 8.5088C7.59035 8.5088 8.32423 7.77492 8.32423 6.86963C8.32423 5.96435 7.59035 5.23047 6.68506 5.23047C5.77978 5.23047 5.0459 5.96435 5.0459 6.86963C5.0459 7.77492 5.77978 8.5088 6.68506 8.5088Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.71223 12.283C9.71223 10.9238 8.35889 9.81543 6.68473 9.81543C5.01056 9.81543 3.65723 10.918 3.65723 12.283" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2503 7.79167C12.2503 10.8542 9.77116 13.3333 6.70866 13.3333C3.64616 13.3333 1.16699 10.8542 1.16699 7.79167C1.16699 4.72917 3.64616 2.25 6.70866 2.25C7.47283 2.25 8.20199 2.40166 8.86699 2.68166C8.79116 2.91499 8.75033 3.16 8.75033 3.41667C8.75033 3.85417 8.87283 4.26833 9.08866 4.61833C9.20533 4.81667 9.35699 4.99748 9.53199 5.14915C9.94033 5.52248 10.4828 5.75 11.0837 5.75C11.3403 5.75 11.5853 5.70915 11.8128 5.62749C12.0928 6.29249 12.2503 7.0275 12.2503 7.79167Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.4167 3.41634C13.4167 3.60301 13.3933 3.78384 13.3467 3.95884C13.2942 4.19217 13.2008 4.41967 13.0783 4.61801C12.7983 5.09051 12.3492 5.45799 11.8125 5.62716C11.585 5.70883 11.34 5.74967 11.0833 5.74967C10.4825 5.74967 9.94 5.52216 9.53167 5.14882C9.35667 4.99716 9.205 4.81634 9.08833 4.61801C8.8725 4.26801 8.75 3.85384 8.75 3.41634C8.75 3.15967 8.79083 2.91467 8.86667 2.68134C8.9775 2.343 9.16417 2.03969 9.40917 1.78885C9.835 1.35135 10.43 1.08301 11.0833 1.08301C11.7717 1.08301 12.3958 1.38052 12.8158 1.85885C13.1892 2.27302 13.4167 2.82134 13.4167 3.41634Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9522 3.40527H10.2139" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.083 2.55371V4.29787" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);



UserCircleIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserCircleIcon.defaultProps = {
    color: "#FFF",
    width: "14",
    height: "15",
};

export default UserCircleIcon;
