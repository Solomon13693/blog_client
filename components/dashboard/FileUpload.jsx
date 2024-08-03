import React, { useState, useRef } from 'react';
import { useField } from 'formik';
import Button from './ui/buttons/Button';
import PDFIMAGE from '@/public/images/pdf_image.png'
import Others from '@/public/images/file_image.png'
import Image from 'next/image'

const FileUpload = ({ name, title, label, btnColor, className, multiple, accept, maxSize, error }) => {
    const [_, meta, helpers] = useField(name);
    const [files, setFiles] = useState(multiple ? [] : null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);

        if (!validateFileType(selectedFiles)) {
            alert('Invalid file type.');
            return;
        }

        if (!validateFileSize(selectedFiles)) {
            alert('File size exceeds the limit.');
            return;
        }

        setFiles(multiple ? [...files, ...selectedFiles] : selectedFiles[0]);
        helpers.setValue(multiple ? [...files, ...selectedFiles] : selectedFiles[0]);
    };

    const validateFileType = (files) => {
        if (!accept) return true;
        const allowedTypes = accept.split(',');
        return files.every(file => {
            const fileType = file.type || '';
            const fileExtension = file.name.split('.').pop().toLowerCase();
            return allowedTypes.includes(fileType.toLowerCase()) || fileExtension === 'dcm';
        });
    };


    const validateFileSize = (files) => {
        if (!maxSize) return true;
        return files.every(file => file.size <= maxSize);
    };

    const handleRemoveFile = (index) => {
        if (multiple) {
            const newFiles = files.filter((_, i) => i !== index);
            setFiles(newFiles);
            helpers.setValue(newFiles);
        } else {
            setFiles(null);
            helpers.setValue(null);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // Add styles or effects to indicate drop target
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // Remove styles or effects
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const droppedFiles = Array.from(event.dataTransfer.files);

        if (!validateFileType(droppedFiles)) {
            alert('Invalid file type.');
            return;
        }

        if (!validateFileSize(droppedFiles)) {
            alert('File size exceeds the limit.');
            return;
        }

        setFiles(multiple ? [...files, ...droppedFiles] : droppedFiles[0]);
        helpers.setValue(multiple ? [...files, ...droppedFiles] : droppedFiles[0]);
    };

    return (
        <>

<label className="form-label text-xs  mb-2"> {label} </label>

            <div className={`bg-white rounded-xl px-3 md:px-5 py-3 ${className} ${error && error && 'border border-red-600'}`}>

                <div
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className='flex items-center gap-x-5 justify-between cursor-pointer flex-wrap'
                    onClick={() => fileInputRef.current.click()}
                >
                    <input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} multiple={multiple} accept={accept} />

                    <div className="flex gap-x-3 flex-1 items-center">

                        <svg className='sm:w-6 sm:h-6 h-8 w-8' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0583 11.9165L17.725 16.0832C17.6 17.3582 17.5 18.3332 15.2416 18.3332H4.7583C2.49997 18.3332 2.39997 17.3582 2.27497 16.0832L1.94163 11.9165C1.87497 11.2248 2.09163 10.5832 2.4833 10.0915C2.49163 10.0832 2.49163 10.0832 2.49997 10.0748C2.9583 9.5165 3.64997 9.1665 4.42497 9.1665H15.575C16.35 9.1665 17.0333 9.5165 17.4833 10.0582C17.4916 10.0665 17.5 10.0748 17.5 10.0832C17.9083 10.5748 18.1333 11.2165 18.0583 11.9165Z" stroke="#475367" strokeMiterlimit="10" />
                            <path d="M2.91699 9.52523V5.23356C2.91699 2.40023 3.62533 1.69189 6.45866 1.69189H7.51699C8.57533 1.69189 8.81699 2.00856 9.21699 2.54189L10.2753 3.95856C10.542 4.30856 10.7003 4.52523 11.4087 4.52523H13.5337C16.367 4.52523 17.0753 5.23356 17.0753 8.0669V9.55856" stroke="#475367" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.8584 14.1665H12.1417" stroke="#475367" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="flex flex-col">
                            <h2 className="text-xs font-bold mb-0 pb-0.5"> {title} </h2>
                            <p className="text-[10px] text-textColor max-w-sm leading-3"> {label} </p>
                        </div>


                    </div>

                    <Button type="button" className={`${btnColor} py-1 hidden md:block`}>
                        Upload
                    </Button>

                </div>

            </div>

            {files && (Array.isArray(files) ? (

                files.map((file, index) => (
                    <div key={index} className="flex border rounded-[8px] p-1.5 border-primary mt-3 w-full items-center relative">
                        {file.type.startsWith("image/") ? (
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`Image ${index}`}
                                className="h-[26px] w-[26px] object-cover rounded"
                            />
                        ) : file.type === "application/pdf" ? (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="h-[26px] w-[26px] object-cover rounded" height={240} width={240} src={PDFIMAGE} alt='PDF icon' />
                            </div>
                        ) : (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="h-[26px] w-[26px] object-cover rounded" height={240} width={240} src={Others} alt='File' />
                            </div>
                        )}

                        <p className="text-xs text-[#333] pt-0 px-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{file.name}</p>

                        <button
                            type='button'
                            onClick={() => handleRemoveFile(index)}
                            className="absolute -top-2 right-0 flex items-center justify-center bg-black px-1 rounded-full h-4 w-4 text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                ))
            ) : (

                <div>
                    <div className="flex border rounded-[8px] p-1.5 border-primary mt-3 w-full items-center relative">
                        {files.type.startsWith("image/") ? (
                            <img
                                src={URL.createObjectURL(files)}
                                alt={`Image`}
                                className="h-[26px] w-[26px] object-cover rounded"
                            />
                        ) : files.type === "application/pdf" ? (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="h-[26px] w-[26px] object-cover rounded" height={240} width={240} src={PDFIMAGE} alt='PDF icon' />
                            </div>
                        ) : (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="h-[26px] w-[26px] object-cover rounded" height={240} width={240} src={Others} alt='File' />
                            </div>
                        )}

                        <p className="text-xs text-[#333] pt-0 px-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{files.name}</p>

                        <button
                            type='button'
                            onClick={handleRemoveFile}
                            className="absolute -top-2 right-0 flex items-center justify-center bg-black px-1 rounded-full h-4 w-4 text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

            ))}
        </>
    );
};

export default FileUpload;
