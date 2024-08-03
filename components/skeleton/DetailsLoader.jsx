import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailsLoader = () => {
    return (
        <div className="bg-white p-5 rounded-xl w-full mt-8">
            {/* Skeleton loaders for Avatar and name */}
            <div className="flex items-center flex-wrap gap-3 mb-5">
                <Skeleton circle width={64} height={64} />
                <div className="tracking-tight">
                    <Skeleton width={120} height={24} />
                    <Skeleton width={180} height={16} />
                </div>
            </div>

            {/* Skeleton loaders for list items */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-x-12">
                <ul className="w-full lg:w-1/2 divide-y divide-gray-100">
                    {Array.from({ length: 5 }, (_, index) => (
                        <li key={index} className="py-5">
                            <Skeleton height={50} />
                        </li>
                    ))}
                </ul>
                <ul className="w-full lg:w-1/2 divide-y divide-gray-100">
                    {Array.from({ length: 5 }, (_, index) => (
                        <li key={index} className="py-5">
                            <Skeleton height={50} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DetailsLoader;
