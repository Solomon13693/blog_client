import React from 'react';
import { useField } from 'formik';

function CustomCheckbox({ label, className, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className="flex items-center gap-x-2">
            <input
                type='checkbox'
                className={`p-2 focus:outline-none focus:ring-0 block outline-none border tracking-tight border-gray-300 rounded shadow-none ${meta.touched && meta.error ? 'is-invalid' : ''} ${className || ''}`}
                id={props.id || 'check'} 
                {...field}
                {...props}
                checked={field.value} 
            />

            <label className="form-label text-xs pt-1.5" htmlFor={props.id || 'check'}>
                {label}
            </label>

            {meta.touched && meta.error && (
                <div className="text-danger text-xs mt-0">{meta.error}</div>
            )}
        </div>
    );
}

export default CustomCheckbox;
