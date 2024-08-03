import moment from 'moment'
import React from 'react'
import Category from '@/public/images/category.jpg';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ post }) => {

    return (
        <div className="box jl_grid_layout1 blog_grid_post_style" >
            <div className="post_grid_content_wrapper">
                <div className="image-post-thumb">
                    <Link href={`/post/${post.slug}`} className="link_image featured-thumbnail" title={post.title}>
                        <Image width="780" height="450" src={Category.src} alt="" />
                        <div className="background_over_image"></div>
                    </Link>
                    <span className="meta-category-small">
                        <Link className="post-category-color-text" style={{ background: 'red' }} href={`/category/${post.category}`}>
                            {post.category}
                        </Link>
                    </span>
                </div>
                <div className="post-entry-content">
                    <div className="post-entry-content-wrapper">
                        <div className="large_post_content">
                            <h3 className="image-post-title">
                                <Link href={`/post/${post.slug}`}>{post.title}</Link>
                                </h3>
                            <span className="jl_post_meta">
                                <span className="jl_author_img_w">
                                    <Image src='/images/author.jpg' width="30" height="30" alt={post.author} className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" />
                                    <Link href={`/author/${post.author}`} title={`Posts by ${post.author}`} rel="author">{post.author}</Link>
                                </span>
                                <span className="post-date"><i className="fa fa-clock-o"></i>{moment(post.created_at).format('lll')}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard