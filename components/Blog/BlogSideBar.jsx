'use client'
import React, { useState, useEffect } from 'react';
import { EachElement } from '@/utils/Each';
import Link from 'next/link';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getLoading } from '@/redux/features/slices/categorySlice';
import { fetchRecentPosts, fetchUserCategory } from '@/redux/features/thunks/othersThunk';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getRecentLoading, getRecentPost } from '@/redux/features/slices/recentPostSlice';

const BlogSideBar = () => {

  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY >= 750) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(getLoading);

  // RECENT POSTS
  const posts = useSelector(getRecentPost);
  const isLoading = useSelector(getRecentLoading);

  useEffect(() => {
    dispatch(fetchUserCategory());
    dispatch(fetchRecentPosts())
  }, [dispatch]);

  return (
    <div className="col-md-4" id="sidebar" style={{
      position: 'relative',
      overflow: 'visible',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease-in-out'
    }}>

      <div className={`${isSticky ? 'sticky-sidebar ' : ''}`}>

        <div id="disto_category_image_widget_register-5" className="widget jellywp_cat_image">
          <div className="wrapper_category_image">

            <div className="category_image_wrapper_main">

              {loading ? (

                <Skeleton height={50} count={7} />

              ) : (

                <EachElement of={categories?.slice(0, 5)} render={(item, index) => (

                  <div
                    className="category_image_bg_image"
                    style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_CATEGORY}/${item.image})` }}
                  >
                    <Link className="category_image_link" id="category_color_2" href={`/category/${item.name.toLowerCase().replace(/ /g, '+')}`}>
                      <span className="jl_cm_overlay">
                        <span className="jl_cm_name"> {item.name} </span>
                        <span className="jl_cm_count"> {item.postCount} </span>
                      </span>
                    </Link>
                    <div className="category_image_bg_overlay" style={{ background: '#ed1c1c' }}></div>
                  </div>

                )} />

              )}

            </div>

            <span className="jl_none_space"></span>
          </div>
        </div>

        <span className="jl_none_space"></span>

        <div id="disto_recent_post_widget-7" className="widget post_list_widget">
          <div className="widget_jl_wrapper">
            <span className="jl_none_space"></span>
            <div className="widget-title">
              <h2>Recent Posts</h2>
            </div>
            <div>
              <ul className="feature-post-list recent-post-widget">
                <EachElement of={posts} render={(item, index) => (
                  <li key={index}>
                    <Link href={`/post/${item.slug}`} className="jl_small_format feature-image-link image_post featured-thumbnail" title={item.title}>
                      <img
                        width="120"
                        height="120"
                        src={`${process.env.NEXT_PUBLIC_POST}/${item.image}`}
                        className="attachment-disto_small_feature recent_post_image size-disto_small_feature wp-post-image"
                        alt=""
                      />
                      <div className="background_over_image"></div>
                    </Link>

                    <div className="item-details">
                      <span className="meta-category-small">
                        <Link className="post-category-color-text" style={{ background: '#d800f9' }} href={`/category/${item.category.name.toLowerCase().replace(/ /g, '+')}`}> {item.category.name} </Link>
                      </span>
                      <h3 className="feature-post-title">
                        <Link className=' line-clamp-1' href={`/post/${item.slug}`}> {item.title} </Link>
                      </h3>
                      <span className="post-meta meta-main-img auto_image_with_date">
                        <span className="post-date">
                          <i className="fa fa-clock-o"></i> {moment(item.createdAt).format('lll')}
                        </span>
                      </span>
                    </div>
                  </li>
                )} />
              </ul>
            </div>
            <span className="jl_none_space"></span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default BlogSideBar;
