import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Avatar from '../Avatar'

const SingleBlogBreadcrumb = ({ post }) => {
    return (
        <div className="single_content_header single_captions_overlay_bottom_image_full_width">
            <div
                className="image-post-thumb"
                style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_POST}/${post?.image})`
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
                                    <Link className="post-category-color-text" style={{ background: '#36c942' }} href={`/category/${post?.category?.name.toLowerCase().replace(/ /g, '+')}`}> {post?.category?.name} </Link>
                                </span>
                                <h1 className="single_post_title_main">
                                    {post?.title}
                                </h1>
                                <span className="single-post-meta-wrapper flex items-center flex-wrap">

                                    <span className="post-author">
                                        <span className='flex items-center gap-x-2'>
                                            {post?.author?.image ? (
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_PROFILE}/${post?.author?.image}`}
                                                    width="50"
                                                    height="50"
                                                    alt="Anna Nikova"
                                                    className="avatar avatar-50 wp-user-avatar wp-user-avatar-50 alignnone photo"
                                                />
                                            ) : (
                                                <Avatar name={post?.author?.name} textColor='text-dark' bgColor='bg-primary' size='w-16 h-16' />
                                            )}
                                            <Link href={`/author/${post?.author?.name.replace(/ /g, '+')}`} title={`Posts by ${post?.author?.name}`} rel="author"> {post?.author?.name} </Link>
                                        </span>
                                    </span>

                                    <span className="post-date updated">
                                        <i className="fa fa-clock-o"></i> {moment(post?.createdAt).format('lll')}
                                    </span>

                                    <span className="view_options">
                                        <i className="fa fa-eye"></i> {post?.views || 0}
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