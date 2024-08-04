'use client'

import React, { useState } from 'react'
import TopBar from './TopBar'
import Link from 'next/link'
import Search from './Search'
import SideNav from './SideNav'
import { EachElement } from '@/utils/Each'

const Header = ({ loading, categories }) => {

    const [searchOpen, setSearchOpen] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <>

            <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cusdate_head">

                <TopBar />

                <div className="jl_blank_nav"></div>

                <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick ">
                    <div className="container">
                        <div className="row">
                            <div className="main_menu col-md-12">
                                <div className="logo_small_wrapper_table">
                                    <div className="logo_small_wrapper">

                                        <Link className="logo_link" href="/">
                                            <img src="/images/logo.png" alt="Just another WordPress site" />
                                        </Link>


                                    </div>
                                </div>

                                <div className="menu-primary-container navigation_wrapper">
                                    <ul id="mainmenu" className="jl_main_menu" style={{ display: 'inline-flex', alignItems: 'center' }}>

                                        <li className="menu-item"> <Link href="/">Home<span className="border-menu"></span></Link>
                                        </li>

                                        <EachElement of={categories.slice(0, 5)} render={(item, index) => (

                                            <li className="menu-item"> <Link href={`/category/${item.name.toLowerCase().replace(/ /g, '+')}`}> {item.name} <span className="border-menu"></span></Link>
                                            </li>

                                        )} />

                                    </ul>
                                </div>

                                <div className="search_header_menu">

                                    <div onClick={() => setOpen(true)} className="menu_mobile_icons"><i className="fa fa-bars"></i>
                                    </div>

                                    <div onClick={() => setSearchOpen(true)} className="search_header_wrapper search_form_menu_personal_click"><i className="fa fa-search"></i>
                                    </div>

                                    <div className="menu_mobile_share_wrapper">
                                        <ul className="social_icon_header_top">
                                            <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li><a className="google_plus" href="#" target="_blank"><i className="fa fa-google-plus"></i></a>
                                            </li>
                                            <li><a className="behance" href="#" target="_blank"><i className="fa fa-behance"></i></a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <Search open={searchOpen} setOpen={setSearchOpen} />

            <SideNav open={open} setOpen={setOpen} categories={categories} />

            <div onClick={() => setOpen(false)} className={`mobile_menu_overlay ${open && 'mobile_menu_active'} `}></div>

        </>
    )
}

export default Header