'use client'
import '../styles/users/bootstrap.css'
import '../styles/users/style.css'
import '../styles/users/responsive.css'
import '../styles/users/main.css'
import Header from '@/components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserCategory } from '@/redux/features/thunks/othersThunk';
import { getCategories, getLoading } from '@/redux/features/slices/categorySlice'

const UserLayout = ({ children }) => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const loading = useSelector(getLoading);

    useEffect(() => {
        dispatch(fetchUserCategory());
    }, [dispatch]);

    return (
        <div className="mobile_nav_class jl-has-sidebar page-template-home-grid-full">

            <div className="options_layout_wrapper jl_radius jl_none_box_styles jl_border_radiuss">

                <div className="options_layout_container full_layout_enable_front">

                    <Header loading={loading} categories={categories} />

                    { children }

                </div>

            </div>

        </div>
    );
};

export default UserLayout;
