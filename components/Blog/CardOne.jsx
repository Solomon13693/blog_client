import Image from 'next/image';
import Category from '@/public/images/category.jpg';
import moment from 'moment';
import Link from 'next/link';
import Avatar from '../Avatar';

function CardOne({ post, className }) {

    return (
        <div className={`jl_grid5_item ${className}`}>
            <div className="jl_grid5_itemin">
                <div className="black-overlay"></div>
                <span
                    className="image_grid_header_absolute"
                    style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_POST}/${post?.image})`, backgroundPosition: 'center top' }}
                ></span>
                <Link
                    href={`/post/${post?.slug}`}
                    className="link_grid_header_absolute"
                    title={post?.title}
                ></Link>
                <span className="meta-category-small">
                    <Link
                        className="post-category-color-text"
                        style={{ background: '#7fbc1e' }}
                        href={`/category/${post?.category?.name.toLowerCase().replace(/ /g, '+')}`}
                    >
                        {post?.category?.name}
                    </Link>
                </span>
                <div className="wrap_box_style_main image-post-title">
                    <h3 className="image-post-title">
                        <Link href={`/post/${post?.slug}`} className=' line-clamp-2'>
                            {post?.title}
                        </Link>
                    </h3>
                    <span className="jl_post_meta flex items-center">
                        <span className="jl_author_img_w">

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

                        </span>
                        <span style={{ paddingTop: '5px' }} className="post-date">
                            <i className="fa fa-clock-o"></i> {moment(post?.createdAt).format('llll')}
                        </span>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default CardOne;
