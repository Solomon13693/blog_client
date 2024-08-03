import BlogSideBar from '@/components/Blog/BlogSideBar';
import UserLayout from './UserLayout'
import Hero from '@/components/Home/Hero';
import posts from '@/json/posts.json'
import BlogCard from '@/components/Blog/BlogCard';
import { EachElement } from '@/utils/Each';

export default function Home() {
  return (
    <UserLayout>

      <div class="jl_post_loop_wrapper">
        <div class="container" id="wrapper_masonry">

          <div className="jl_home_section">

            <div className="container">

              <Hero posts={posts} />

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
