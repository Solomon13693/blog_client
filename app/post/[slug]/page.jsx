import UserLayout from '@/app/UserLayout';
import BlogSideBar from '@/components/Blog/BlogSideBar';
import SingleBlogBreadcrumb from '@/components/Blog/SingleBlogBreadcrumb';
import posts from '@/json/posts'

export default function page() {
    return (
        <UserLayout>

            <div class="jl_single_style4">

                <SingleBlogBreadcrumb />

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

                                                <p>
                                                    Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem.
                                                    Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor
                                                    condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi
                                                    erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus
                                                    neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada
                                                    pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper
                                                    purus, a vehicula massa interdum in. Nulla a magna at diam consequat semper eu vitae elit. In hac
                                                    habitasse platea dictumst.<span id="more-2961"></span>
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <BlogSideBar posts={posts} />

                        </div>
                    </div>
                </section>

            </div>

        </UserLayout>
    );
}
