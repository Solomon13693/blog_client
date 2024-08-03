import React from "react";
import { EachElement } from "@/utils/Each";
import moment from "moment";
import PostAction from "./PostAction";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "published":
            textColor = "text-[#027A48]";
            bgColor = "bg-[#ECFDF3]";
            break;
        case "draft":
            textColor = "text-[#0000FF]";
            bgColor = "bg-[#F4F4FF]";
            break;
            case "scheduled":
                textColor = "text-[#97741A]";
                bgColor = "bg-[#FFFAED]";
                break;
    }

    return { textColor, bgColor };
};

const PostTable = ({ posts, token, fetchData, isAdmin }) => {

    return (
        <div className="mx-auto">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto scrollbar-thin">
                    <div className="p-1.5 min-w-full inline-block align-middle">

                        {posts?.length < 1 ? (
                            <div className="text-center py-5">
                                <span className="text-lg font-semibold text-gray-600">
                                    No post found
                                </span>
                            </div>

                        ) : (
                            <table className="min-w-full divide-y divide-border_color">

                                <thead className="bg-white rounded-t-xl text-dark">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Title
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Category
                                                </span>
                                            </div>
                                        </th>
                                        { isAdmin && (
                                            <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Author
                                                </span>
                                            </div>
                                        </th>
                                        ) }
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Status
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Publication Date
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Action
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>


                                <tbody className="divide-y divide-border_color">
                                    <EachElement
                                        of={posts}
                                        render={(post, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <span className="block text-xs pb-0 mb-0 text-dark truncate w-[250px]">
                                                        {post.title}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {post.category.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                { isAdmin && (
                                                    <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {post.author.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                ) }
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(post.status).bgColor} ${getStatusStyles(post.status).textColor}`}
                                                        >
                                                            {post.status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            { moment(post.createdAt).format('LLL') }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="relative px-6 py-3 whitespace-nowrap">
                                                    <PostAction isAdmin={isAdmin}  fetchData={fetchData} token={token} data={post} index={index} />
                                                </td>
                                            </tr>
                                        )}
                                    />
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostTable;
