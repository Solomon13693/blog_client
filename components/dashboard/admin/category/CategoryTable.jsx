import React, { useState } from "react";
import { EachElement } from "../../../../utils/Each";
import EditCategory from "./EditCategory";
import adminService from "@/services/adminService";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/utils/errorUtils";
import Spinner from "@/components/loader/Spinner";

const CategoryTable = ({ datas, token, fetchData }) => {

    const [ id, setID ] = useState(null)
    const [open, setOpen] = useState(false)

    const handleOPen = (value) => {
        setID(value)
        setOpen(true)
    } 

    const [ loading, setLoading ] = useState(false)

    const handleDelete = async (id) => {

        setLoading(true);

        try {

            const response = await adminService.deleteCategory(id, token)
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
        <>

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
                                            <th className="px-6 py-3 text-left whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs tracking-tight font-semibold">Name</span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-left whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs tracking-tight font-semibold">Number Of Posts</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                                <div className="flex items-center gap-x-2 justify-end">
                                                    <span className="text-xs tracking-tight">Action</span>
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
                                                        <span className="block text-xs pb-0 mb-0 text-dark">{data.name}</span>
                                                    </td>
                                                    <td className="px-6 py-3 whitespace-nowrap">
                                                        <span className="block text-xs pb-0 mb-0 text-dark">{data.postCount}</span>
                                                    </td>
                                                    <td className="relative px-6 py-3 whitespace-nowrap text-right">
                                                        <div className="flex items-center gap-x-2 justify-end">
                                                            <button onClick={() => handleOPen(data)} className="btn btn-primary py-1.5 rounded-full text-xs">Edit</button>
                                                            <button onClick={() => handleDelete(data._id)} className="btn bg-danger py-1.5 text-white rounded-full text-xs"> { loading && <Spinner className='w-3 h-3' /> } Delete</button>
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

            <EditCategory token={token} open={open} setOpen={setOpen} category={id} fetchData={fetchData}/>

        </>
    );
};

export default CategoryTable;
