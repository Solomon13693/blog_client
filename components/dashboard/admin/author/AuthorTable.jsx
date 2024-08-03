import Spinner from "@/components/loader/Spinner";
import adminService from "@/services/adminService";
import { EachElement } from "@/utils/Each";
import { getErrorMessage } from "@/utils/errorUtils";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AuthorTable = ({ datas, token, fetchData }) => {

    const getStatusStyles = (status) => {
        let textColor, bgColor;

        switch (status) {
            case "active":
                textColor = "text-[#027A48]";
                bgColor = "bg-[#ECFDF3]";
                break;
            case "banned":
                textColor = "text-[#97741A]";
                bgColor = "bg-[#FFFAED]";
                break;
        }

        return { textColor, bgColor };
    };

    const [loading, setLoading] = useState(false);

    const toggleStatusChange = async (payload, id) => {

        setLoading(true);

        try {

            const response = await adminService.authorAction(token, id, { status: payload })
            toast.success(response.message);
            fetchData()

        } catch (error) {

            const message = getErrorMessage(error);
            toast.error(message);

        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="mx-auto">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto scrollbar-thin">
                    <div className="p-1.5 min-w-full inline-block align-middle">

                        {datas?.length === 0 ? (
                            <div className="text-center py-5">
                                <span className="text-lg font-semibold text-gray-600">
                                    No data found
                                </span>
                            </div>

                        ) : (
                            <table className="min-w-full divide-y divide-border_color">
                                <thead className="bg-white rounded-t-xl text-dark">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Email
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Phone
                                                </span>
                                            </div>
                                        </th>
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
                                                    Number of Posts
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Joined
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Actions
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border_color">
                                    <EachElement
                                        of={datas}
                                        render={(data, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <span className="block text-xs pb-0 mb-0 text-dark">
                                                        {data.name}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {data.email}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {data.phone}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(data.status).bgColor} ${getStatusStyles(data.status).textColor}`}
                                                        >
                                                            {data.status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {data.postCount}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            { moment(data?.joined).format('LLLL') }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="relative px-6 py-3 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <button  onClick={() => toggleStatusChange(data?.status == 'active' ? 'banned' : 'active', data._id)} className={`btn ${data.status == 'active' ? 'bg-danger' : 'bg-success' } py-1.5 px-4 text-white rounded-full text-xs`}> { loading && <Spinner className='w-3 h-3' /> } {data?.status == 'active' ? 'Suspend Author' : 'Activate Author'} </button>
                                                    </div>
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

export default AuthorTable;
