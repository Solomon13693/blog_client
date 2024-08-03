import BlogSideBar from '@/components/Blog/BlogSideBar';
import posts from '@/json/posts.json'
import BlogCard from '@/components/Blog/BlogCard';
import { EachElement } from '@/utils/Each';
import UserLayout from '@/app/UserLayout';

export default function Home() {
    return (
        <UserLayout>

            <div class="main_title_wrapper category_title_section jl_cat_img_bg">
                <div class="category_image_bg_image" ></div>
                <div class="category_image_bg_ov"></div>
                <div class="jl_cat_title_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 main_title_col">
                                <div class="jl_cat_mid_title">
                                    <h3 class="categories-title title">Gaming</h3>
                                    <p>Sample category description goes here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="jl_post_loop_wrapper">
                <div class="container" id="wrapper_masonry">

                    <div className="jl_home_section">

                        <div className="container">


                            <div class="row">

                                <div class="col-md-8 grid-sidebar" id="content">
                                    <div class="jl_wrapper_cat">

                                        <div className="jl_grid_bellow_mian">
                                            <div id="content_masonry">

                                                <EachElement of={posts} render={(item, index) => (
                                                    <BlogCard post={item} />
                                                )} />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <BlogSideBar posts={posts} />

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </UserLayout>
    );
}
