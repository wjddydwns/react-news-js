import React from 'react';

const Pagination = ({ setPage, totalPages, page }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <ul className="flex justify-center  text-gray-900 select-none">
      {/* 이전 버튼 */}
      <li>
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {/* 페이지 번호 */}
      {pages.map((p) => (
        <li key={p}>
          <button
            onClick={() => goToPage(p)}
            className={`block size-8 rounded border text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 ${
              page === p
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-gray-200 text-gray-900'
            }`}
          >
            {p}
          </button>
        </li>
      ))}

      {/* 다음 버튼 */}
      <li>
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className={`grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 ${
            page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
