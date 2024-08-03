import Image from 'next/image';
import Category from '@/public/images/category.jpg';
import moment from 'moment';
import Link from 'next/link';

function CardOne({ post, className }) {

    return (
        <div className={`jl_grid5_item ${className}`}>
            <div className="jl_grid5_itemin">
                <div className="black-overlay"></div>
                <span
                    className="image_grid_header_absolute"
                    style={{ backgroundImage: `url(${Category.src})` }}
                ></span>
                <Link
                    href={`/post/${post.slug}`}
                    className="link_grid_header_absolute"
                    title={post.title}
                ></Link>
                <span className="meta-category-small">
                    <Link
                        className="post-category-color-text"
                        style={{ background: '#7fbc1e' }}
                        href={`/category/${post.category}`}
                    >
                        {post.category}
                    </Link>
                </span>
                <div className="wrap_box_style_main image-post-title">
                    <h3 className="image-post-title">
                        <Link href={`/post/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h3>
                    <span className="jl_post_meta">
                        <span className="jl_author_img_w">
                            <Image
                                src="/images/author.jpg"
                                width={30}
                                height={30}
                                alt="Anna Nikova"
                                className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo"
                            />
                            <Link href={`/author/${post.author}`} title={post.author} rel="author">
                                {post.author}
                            </Link>
                        </span>
                        <span style={{ paddingTop: '10px' }} className="post-date">
                            <i className="fa fa-clock-o"></i> {moment(post.created_at).format('llll')}
                        </span>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default CardOne;
