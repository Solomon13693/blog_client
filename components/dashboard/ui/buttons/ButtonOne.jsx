import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Spinner from '@/components/loader/Spinner';

const ButtonOne = ({ type, disabled, onClick, color, bg, iconColor, className, children, loading, circleClass, ...rest }) => {
    const buttonClasses = `disabled:opacity-65 disabled:cursor-not-allowed py-1 px-1 cursor-pointer transition ease-in-out text-xs ${color} ${bg} rounded-full ring-0 hover:ring-0 hover:opacity-90 w-full flex ${className} items-center justify-between pl-6`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
            {...rest}
        >
            <span>{children}</span>

            {loading ? ( 
                <div className={`rounded-full bg-white flex items-center justify-center ${circleClass ? circleClass : 'p-3'}`}>
                    <Spinner className={`h-4 w-4 ${iconColor}`} />
                </div>
            ) : (
                <div className={`rounded-full bg-white ${circleClass ? circleClass : 'p-3'}`}>
                    <ArrowRightIcon className={`h-4 w-4 ${iconColor}`} />
                </div>
            )}

        </button>
    );
};

export default ButtonOne;
