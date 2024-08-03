import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Avatar from '@/components/Avatar';

const ProfileImage = ({ setFieldValue, image }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (image) {
            setPreview(`${process.env.NEXT_PUBLIC_PROFILE}/${image}`);
        }
    }, [image]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5000000) {
                setErrorMessage('File size must be less than 5MB.');
                return;
            }
            if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
                setErrorMessage('Invalid file format. Please select a JPEG, JPG, or PNG file.');
                return;
            }
            setSelectedFile(file);
            setErrorMessage('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setFieldValue('image', file); // Set the value in Formik
        }
    };

    return (
        <>
            <div className="relative h-24 w-24 text-lg rounded-full font-semibold bg-secondary flex items-center justify-center">
                {preview ? (
                    <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-full" />
                ) : (
                    <Avatar name="Adeoye Solomon" size="h-24 w-24" bgColor="bg-blue" textColor="text-white" fontSize="text-2xl" />
                )}
                <input
                    type="file"
                    accept='image/*'
                    className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                    style={{ zIndex: 10 }}
                    onChange={handleFileChange}
                />
            </div>
            {errorMessage && <p className="text-red-500 text-xs text-center">{errorMessage}</p>}
        </>

    );
};

export default ProfileImage;
