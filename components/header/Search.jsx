import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = ({ open, setOpen }) => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = search.trim().replace(/\s+/g, '+');
        router.push(`/search?s=${query}`);
        setOpen(false)
    };

    return (
        <div className={`search_form_menu_personal ${open ? 'search_form_menu_personal_active' : ''}`}>
            <div onClick={() => setOpen(false)} className="menu_mobile_large_close">
                <span className="jl_close_wapper search_form_menu_personal_click">
                    <span className="jl_close_1"></span>
                    <span className="jl_close_2"></span>
                </span>
            </div>
            <form method="get" className="searchform_theme" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="s"
                    className="search_btn"
                    required
                />
                <button type="submit" className="button">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default Search;
