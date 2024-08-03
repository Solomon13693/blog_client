import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TopBar = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            setCurrentDate(now.toLocaleDateString(undefined, dateOptions));
            setCurrentTime(now.toLocaleTimeString(undefined, timeOptions));
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="header_top_bar_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="menu-primary-container navigation_wrapper">

                            <ul id="jl_top_menu" className="jl_main_menu">

                                <li className="menu-item menu-item-home">
                                    <Link href="/dashboard" aria-current="Write">Write<span className="border-menu"></span></Link>
                                </li>

                                <li className="menu-item menu-item-3602">
                                    <Link href="/auth/signin">Sign In<span className="border-menu"></span></Link>
                                </li>

                            </ul>
                        </div>
                        <div className="jl_top_bar_right">
                            <span className="jl_current_title">Current Date:</span> {currentDate}, {currentTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
