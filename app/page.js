'use client'
import BlogSideBar from '@/components/Blog/BlogSideBar';
import UserLayout from './UserLayout'
import Hero from '@/components/Home/Hero';
import BlogCard from '@/components/Blog/BlogCard';
import { EachElement } from '@/utils/Each';
import userServices from '@/services/userServices';
import useFetchData from '@/utils/useFetchData';

export default function Home() {

  const fetchFunction = () => userServices.getPosts();

  const { data, loading, error, refetch } = useFetchData(fetchFunction,
    [],
    []
  );

  const posts = data?.posts || []

  return (
    <UserLayout>

      <div class="jl_post_loop_wrapper">
        <div class="container" id="wrapper_masonry">

          <div className="jl_home_section">

            <div className="container">

              {loading ? (

                <h2 className='mt-5'>Loading..............</h2>

              ) : (

                <Hero posts={posts} />

              )}

              <div class="row">

                <div class="col-md-8 grid-sidebar" id="content">
                  <div class="jl_wrapper_cat">

                    <div className="jl_grid_bellow_mian">
                      <div id="content_masonry">

                          <EachElement of={posts.slice(5) || []} render={(item, index) => (
                            <BlogCard post={item} />
                          )} />

                      </div>
                    </div>

                  </div>
                </div>

                <BlogSideBar />

              </div>

            </div>

          </div>

        </div>
      </div>

    </UserLayout>
  );
}
