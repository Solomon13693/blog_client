'use client'
import UserLayout from '@/app/UserLayout';
import BlogSideBar from '@/components/Blog/BlogSideBar';
import SingleBlogBreadcrumb from '@/components/Blog/SingleBlogBreadcrumb';
import Spinner from '@/components/loader/Spinner';
import DetailsLoader from '@/components/skeleton/DetailsLoader';
import userServices from '@/services/userServices';
import useFetchData from '@/utils/useFetchData';

export default function page({ params }) {

    const { slug } = params

    const fetchFunction = (slug) => userServices.getPost(slug);

    const { data, loading, error, refetch } = useFetchData(fetchFunction,
        [slug],
        [slug]
    );

    const post = data?.post

    return (
        <UserLayout>

            {loading ? (
                
                <div className="container mx-auto">
                    <DetailsLoader />
                </div>

            ) : (

                <div class="jl_single_style4">

                    <SingleBlogBreadcrumb post={post} />

                    <section id="content_main" className="clearfix jl_spost">
                        <div className="container">
                            <div className="row main_content">

                                <div className="col-md-8 loop-lare-post" id="content">
                                    <div className="widget_container content_page">

                                        <div
                                            className="post-2961 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-inspire tag-relaxing tag-shooting"
                                            id="post-2961"
                                        >
                                            <div className="single_section_content box blog_large_post_style">

                                                <div className="post_content">

                                                    <p dangerouslySetInnerHTML={{ __html: post?.content }} />

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <BlogSideBar />

                            </div>
                        </div>
                    </section>

                </div>

            )}

        </UserLayout>
    );
}
