import React from 'react';

const DashboardPagination = ({ currentPage, totalPages, perPage, onChangePage, title }) => {
    
    const startingOrder = (currentPage - 1) * perPage + 1;
    const endingOrder = Math.min(currentPage * perPage, totalPages);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            onChangePage(newPage);
        }
    };

    const disableNext = Math.ceil(totalPages / perPage);

    const renderPageLinks = () => {
        const links = [];

        // Calculate the total number of pages
        const totalData = Math.ceil(totalPages / perPage);

        for (let i = Math.max(1, currentPage - 3); i <= Math.min(totalData, currentPage + 3); i++) {
            links.push(
                <span
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-4 cursor-pointer h-4 justify-center text-gray-500 p-[11px] inline-flex items-center text-[11px] font-medium rounded-full ${currentPage === i ? 'bg-blue-500 text-white bg-blue' : 'bg-white text-blue/80'
                        }`}
                >
                    {i}
                </span>
            );
        }

        return links;
    };

    return (
        <div className="flex px-5 gap-y-3 items-center justify-between flex-wrap text-xs mt-5">

            <p className='text-blue/60 text-xs font-medium'>
                Show {startingOrder} to {endingOrder} of {totalPages}
            </p>

            <nav className="flex flex-wrap gap-y-2 items-center space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`text-dark text-xs hover:text-blue cursor-pointer inline-flex items-center gap-2 rounded-md ${currentPage === 1 ? 'opacity-50' : ''}`}
                    type='button'
                    disabled={currentPage === 1}
                >
                    <span>Prev</span>
                </button>

                {renderPageLinks()}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    type="button"
                    className={`text-dark text-xs cursor-pointer hover:text-blue inline-flex items-center gap-2 rounded-md ${currentPage === disableNext ? 'opacity-50' : ''}`}
                    disabled={currentPage === disableNext}
                >
                    <span>Next</span>
                </button>
            </nav>

        </div>
    );
};

export default DashboardPagination;
