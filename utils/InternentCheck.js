"use client";

import React, { useEffect, useCallback } from "react";
import toast, { Toaster } from 'react-hot-toast';

const InternetCheck = () => {
    const handleToast = useCallback((message, type) => {
        toast.dismiss();

        toast[type](message, {
            position: "bottom-center",
            duration: 10000,
            icon: null,
            className: 'toast-custom-class',
        });
    }, []);

    const InternetRestored = useCallback(() => handleToast("Internet Restored 🚀", "success"), [handleToast]);
    const NoInternetConnection = useCallback(() => handleToast("No/Bad Internet Connection 😭", "error"), [handleToast]);

    useEffect(() => {
        const handleOnlineEvent = () => InternetRestored();
        const handleOfflineEvent = () => NoInternetConnection();

        window.addEventListener("online", handleOnlineEvent);
        window.addEventListener("offline", handleOfflineEvent);

        return () => {
            window.removeEventListener("online", handleOnlineEvent);
            window.removeEventListener("offline", handleOfflineEvent);
        };
    }, [InternetRestored, NoInternetConnection]);

    return <Toaster />;
};

export default InternetCheck;
