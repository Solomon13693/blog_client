import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleBlogBreadcrumb = () => {
    return (
        <div className="single_content_header single_captions_overlay_bottom_image_full_width">
            <div
                className="image-post-thumb"
                style={{
                    backgroundImage: "url('../theme/disto/demo/wp-content/uploads/2019/02/s-o-c-i-a-l-c-u-t-1133933-unsplash-1920x982.jpg')"
                }}
            ></div>
            <div className="single_full_breadcrumbs_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                    </div>
                </div>
            </div>
            <div className="single_post_entry_content_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single_post_entry_content">
                                <span className="meta-category-small">
                                    <Link className="post-category-color-text" style={{ background: '#36c942' }} href={`/category/${Math.random()}`}>Sports</Link>
                                </span>
                                <h1 className="single_post_title_main">
                                    This big boss is work hard and also play hard
                                </h1>
                                <span className="single-post-meta-wrapper">
                                    <span className="post-author">
                                        <span>
                                            <Image
                                                src="/images/author.jpg"
                                                width="50"
                                                height="50"
                                                alt="Anna Nikova"
                                                className="avatar avatar-50 wp-user-avatar wp-user-avatar-50 alignnone photo"
                                            />
                                            <Link href={`/author/${Math.random()}`} title="Posts by Anna Nikova" rel="author">Anna Nikova</Link>
                                        </span>
                                    </span>
                                    
                                    <span className="post-date updated">
                                        <i className="fa fa-clock-o"></i> Dec 24, 2016
                                    </span>

                                    <span className="meta-comment">
                                        <i className="fa fa-comment"></i>
                                        <a href="#">0 Comment</a>
                                    </span>

                                    <span className="view_options">
                                        <i className="fa fa-eye"></i> 9.1k
                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogBreadcrumb