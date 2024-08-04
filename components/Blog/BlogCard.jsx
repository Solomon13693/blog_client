import moment from 'moment'
import React from 'react'
import Link from 'next/link';
import Avatar from '../Avatar';

const BlogCard = ({ post }) => {

    return (
        <div className="box jl_grid_layout1 blog_grid_post_style" >
            <div className="post_grid_content_wrapper">
                <div className="image-post-thumb">
                    <Link href={`/post/${post?.slug}`} className="link_image featured-thumbnail" title={post?.title}>
                        <img width="780" height="450" src={`${process.env.NEXT_PUBLIC_POST}/${post?.image}`} alt="" />
                        <div className="background_over_image"></div>
                    </Link>

                    <span className="meta-category-small">
                        <Link
                            className="post-category-color-text"
                            style={{ background: '#000' }}
                            href={`/category/${post?.category?.name.toLowerCase().replace(/ /g, '+')}`}
                        >
                            {post?.category?.name}
                        </Link>
                    </span>

                </div>
                <div className="post-entry-content">
                    <div className="post-entry-content-wrapper">
                        <div className="large_post_content">
                            <h3 className="image-post-title">
                                <Link className=' line-clamp-2' href={`/post/${post?.slug}`}>{post?.title}</Link>
                            </h3>
                            <span className="jl_post_meta">
                                <span className="jl_author_img_w flex items-center gap-x-2">

                                    {post?.author?.image ? (
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_PROFILE}/${post?.author?.image}`}
                                            width="50"
                                            height="50"
                                            alt={post?.author?.name}
                                            className="avatar avatar-50 wp-user-avatar wp-user-avatar-50 alignnone photo"
                                        />
                                    ) : (
                                        <Avatar name={post?.author?.name} textColor='text-dark' bgColor='bg-primary' size='w-10 h-10' fontSize='text-[9px]' />
                                    )}

                                    {/* <Image src='/images/author.jpg' width="30" height="30" alt={post.author} className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /> */}

                                    <Link href={`/author/${post?.author?.name.replace(/ /g, '+')}`} title={`Posts by ${post?.author?.name}`} rel="author">{post?.author?.name}</Link>

                                </span>
                                <span className="post-date"><i className="fa fa-clock-o"></i>{moment(post?.createdAt).format('lll')}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard