import React from 'react';
import { useField } from 'formik';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function CustomPhoneInput({ label, className, formGroupClass, ...props }) {
    const [field, meta, helpers] = useField(props);

    // Convert field.value to a string before passing it to PhoneInput
    const valueAsString = field.value ? field.value.toString() : '';

    const handlePhoneChange = (value) => {
        helpers.setValue(value); // Update Formik field value using helpers.setValue
        helpers.setTouched(true); // Manually mark the field as touched
    };

    return (
        <div className={`form-group ${formGroupClass || 'mb-3.5'} `}>
            <label className="form-label text-xs  mb-1">{label}</label>
            <PhoneInput
                {...field}
                value={valueAsString} // Use the converted value
                onChange={handlePhoneChange}
                onBlur={() => helpers.setTouched(true)} // Manually mark the field as touched
                defaultCountry="NG"
                placeholder="Phone number"
                className={`form-control py-0.5 ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-1">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default CustomPhoneInput;
