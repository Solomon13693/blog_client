import ForwardIcon from "@/components/icons/ForwardIcon";
import EditIcon from "@/components/icons/EditIcon";
import Link from 'next/link';
import ActionBar from '../../ActionBar';
import { TrashIcon } from "@heroicons/react/24/outline";
import dashboardService from "@/services/dashboardService";
import { getErrorMessage } from "@/utils/errorUtils";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "@/components/loader/Spinner";

const PostAction = ({ data, token, fetchData, isAdmin }) => {

    const handleLinkClick = (onClose) => (event) => {
        if (onClose) {
            onClose();
        }
    };

    const [loading, setLoading] = useState(false);

    const deletePostId = async (id, onClose) => {

        setLoading(true);

        try {

            const response = await dashboardService.deletePost(id, token)
            toast.success(response.message);
            fetchData()

        } catch (error) {

            const message = getErrorMessage(error);
            toast.error(message);

        } finally {
            setLoading(false);
            onClose();
        }

    }

    return (
        <>
            <ActionBar
                trigger={
                    <span className="block text-xs font-medium">
                        Expand
                    </span>
                }
            >
                {({ onClose }) => (
                    <div className="py-1">

                        <Link href={`post/${data?._id}`} passHref>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={handleLinkClick(onClose)}
                            >
                                <ForwardIcon className='w-4 h-4' />
                                <span>View Post</span>
                            </div>
                        </Link>

                        {!isAdmin && (
                            <Link href={`post/${data?._id}/edit`} passHref>
                                <div
                                    className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={handleLinkClick(onClose)}
                                >
                                    <EditIcon className='w-4 h-4' />
                                    <span>Edit Post</span>
                                </div>
                            </Link>
                        )}

                        <Link onClick={() => deletePostId(data?._id, onClose)} href='javascript:void(0)' passHref>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {loading ? <Spinner className='w-3 h-3' /> : <TrashIcon className='w-4 h-4' />}
                                <span>Delete Post</span>
                            </div>
                        </Link>

                    </div>
                )}
            </ActionBar>
        </>
    );
};

export default PostAction;
