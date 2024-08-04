'use client'
import BlogCard from '@/components/Blog/BlogCard';
import { EachElement } from '@/utils/Each';
import UserLayout from '@/app/UserLayout';
import { useSearchParams } from 'next/navigation';
import userServices from '@/services/userServices';
import useFetchData from '@/utils/useFetchData';

export default function Search() {

    const searchParams = useSearchParams()
    const query = searchParams.get('s')

    const search = { search: query }

    const fetchFunction = (query) => userServices.getPosts(search);

    const { data, loading, error, refetch } = useFetchData(fetchFunction,
        [query],
        [query]
    );

    const posts = data?.posts;

    return (
        <UserLayout>

            <div class="jl_post_loop_wrapper jl_grid_4col_home">

                <div class="container" id="wrapper_masonry">

                    <div class="row">

                        <div class="col-md-12 grid-sidebar">

                            <div class="jl_wrapper_cat">

                                {loading ? (
                                    <h2  className='text-center mt-5'>Loading..............</h2>
                                ) : posts && posts.length === 0 ? (
                                    <h2 className='text-center mt-5'>No posts available</h2>
                                ) : (
                                    <div id="content_masonry">
                                        <EachElement of={posts || []} render={(item, index) => (
                                            <BlogCard post={item} key={index} />
                                        )} />
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </UserLayout>
    );
}
