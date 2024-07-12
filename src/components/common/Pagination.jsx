import React, { useState } from 'react';

function Pagination({ items, itemsPerPage, renderItems }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get items for the current page
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Determine the range of pages to display
  const getPaginationRange = () => {
    const totalNumbers = 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      let pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

      if (startPage > 2) {
        pages = ['...', ...pages];
      }
      if (endPage < totalPages - 1) {
        pages = [...pages, '...'];
      }

      return [1, ...pages, totalPages];
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const paginationRange = getPaginationRange();

  return (
    <div>
      {/* Render items using the passed renderItems function */}
      {renderItems(currentItems)}

      <div className="flex justify-center mt-4">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap items-center justify-center">
            {/* Previous Button */}
            <li
              className={`relative block py-2 px-3 leading-tight border border-custom-secondary mr-1 rounded cursor-pointer ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              <button
                className="w-full h-full"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
            </li>

            {/* Pagination Numbers */}
            {paginationRange.map((page, index) => (
              <li
                key={index}
                className={`relative block py-2 px-3 leading-tight border border-custom-secondary mr-1 rounded cursor-pointer ${
                  currentPage === page ? 'bg-custom-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                <button
                  className={`w-full h-full ${currentPage === page ? 'text-white' : ''}`}
                  onClick={() => typeof page === 'number' && handlePageChange(page)}
                  disabled={typeof page !== 'number'}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li
              className={`relative block py-2 px-3 leading-tight border border-custom-secondary mr-1 rounded cursor-pointer ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              <button
                className="w-full h-full"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
