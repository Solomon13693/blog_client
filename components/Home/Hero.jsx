import React from 'react'
import CardOne from '../Blog/CardOne';
import { EachElement } from '@/utils/Each';

const Hero = ({ posts }) => {
    return (
        <div className="row jl_front_b_cont">
            <div className="col-md-12 jl_mid_main_3col">
                <div className="jl_3col_wrapin">
                    <div id="pl-3476" className="panel-layout">
                        <div id="pg-3476-0" className="panel-grid panel-no-style">
                            <div id="pgc-3476-0-0" className="panel-grid-cell">
                                <span className="jl_none_space"></span>
                                <div
                                    id="panel-3476-0-0-0"
                                    className="so-panel widget widget_disto_recent_grid5_widgets jl_widget_recent_grid5 panel-first-child panel-last-child"
                                    data-index="0"
                                >
                                    <div className="jl_grid5_builder jelly_homepage_builder">
                                        <div className="jl_grid5_wrapper">
                                            <div className="jl_grid5_container">

                                                <CardOne post={posts[0]} className='jl_grid5main' />

                                                <EachElement of={posts.slice(1, 5)} render={(item, index) => (
                                                    <CardOne post={item} className='jl_grid5small' />
                                                )} />

                                            </div>
                                        </div>
                                    </div>
                                    <span className="jl_none_space"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero