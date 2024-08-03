import Spinner from '@/components/loader/Spinner';
import React from 'react';

const Button = ({ type, disabled, onClick, color, bg, className, children, loading, ...rest }) => {
    const buttonClasses = `disabled:opacity-65 disabled:cursor-not-allowed tracking-tight cursor-pointer transition ease-in-out text-xs ${color} ${bg} rounded-full ring-0 hover:ring-0 hover:opacity-90 px-4 ${className} flex items-center py-2 justify-center gap-x-2`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
            {...rest}
        >
            <>
                { loading && <Spinner className='w-4 h-4' /> }
                {children}
            </>
        </button>
    );
};

export default Button;
