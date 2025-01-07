import React from "react";

type TPaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: TPaginationProps) => {
    return (
        <div className="flex justify-center items-center space-x-4 my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded text-gray-600 bg-gray-200 ${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
            >
                « Previous
            </button>

            <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        className={`px-3 py-2 rounded ${
                            currentPage === index + 1
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded text-gray-600 bg-gray-200 ${
                    currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
            >
                Next Page »
            </button>
        </div>
    );
};

export default Pagination;
