import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import { useField } from 'formik';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = ({ label, ...props }) => {
    const [field, , helpers] = useField(props.name);

    const handleChange = (value) => {
        helpers.setValue(value);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image', 'video'],
            ['code-block'],
            ['clean']
        ],
    };

    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <ReactQuill
                theme="snow"
                value={field.value}
                onChange={handleChange}
                modules={modules}
                className={`form-control ${props.error && 'border-red-500'} `}
            />
            {props.error && <div className="text-red-600 text-xs font-light mt-0 pt-1">{props.error}</div>}
        </div>
    );
};

export default Editor;
