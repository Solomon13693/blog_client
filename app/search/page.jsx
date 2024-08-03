import BlogSideBar from '@/components/Blog/BlogSideBar';
import posts from '@/json/posts.json'
import BlogCard from '@/components/Blog/BlogCard';
import { EachElement } from '@/utils/Each';
import UserLayout from '@/app/UserLayout';

export default function Search() {
    return (
        <UserLayout>

            <div class="jl_post_loop_wrapper jl_grid_4col_home">

                <div class="container" id="wrapper_masonry">

                    <div class="row">

                        <div class="col-md-12 grid-sidebar">

                            <div class="jl_wrapper_cat">

                                <div id="content_masonry">

                                    <EachElement of={posts} render={(item, index) => (
                                        <BlogCard post={item} />
                                    )} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </UserLayout>
    );
}
