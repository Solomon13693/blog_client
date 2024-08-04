import { EachElement } from '@/utils/Each'
import Link from 'next/link'
import React from 'react'

const SideNav = ({ open, setOpen, categories }) => {
    return (
        <div id="content_nav" className={`jl_mobile_nav_wrapper ${open ? 'jl_mobile_nav_open' : ''}`}>
            <div id="nav" className="jl_mobile_nav_inner">
                <div onClick={() => setOpen(false)} className="menu_mobile_icons mobile_close_icons closed_menu">
                    <span className="jl_close_wapper">
                        <span
                            className="jl_close_1"></span><span className="jl_close_2"></span>
                    </span>
                </div>

                <ul id="mobile_menu_slide" className="menu_moble_slide mb-5">

                    <li className="menu-item"> <Link href="/">Home<span className="border-menu"></span></Link>
                    </li>

                    <EachElement of={categories.slice(0, 10)} render={(item, index) => (

                        <li className="menu-item"> <Link href={`/category/${item.name.toLowerCase().replace(/ /g, '+')}`}> {item.name} <span className="border-menu"></span></Link>
                        </li>

                    )} />

                </ul>

                <span className="jl_none_space"></span>

                <ul className="menu_moble_slide " style={{ padding: '0 20px' }}>

                    <a href="/dashboard" class="jl_btn_load w-full" style={{ marginTop: '10px', width: '100%' }}>Write</a>

                    <a href="/auth/signin" class="jl_btn_load w-full" style={{ marginTop: '10px', width: '100%' }}>Sign In</a>

                </ul>

            </div>
        </div>
    )
}

export default SideNav