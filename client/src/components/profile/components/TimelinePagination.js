import React from 'react';
import PropTypes from 'prop-types';

const TimelinePagination = props => {
  const { pageNo, totalPages, firstPage, prevPage, nextPage, lastPage } = props;
  return (
    <nav aria-label='Timeline Pagination' role='navigation'>
      <ul aria-hidden='true' className='timeline-pagination_list'>
        {totalPages > 10 && (
          <li
            className='timeline-pagination_list_item'
            style={{
              visibility: pageNo === 1 ? 'hidden' : 'unset'
            }}
          >
            <button
              aria-label='Go to First page'
              disabled={pageNo === 1}
              onClick={firstPage}
            >
              &lt;&lt;
            </button>
          </li>
        )}
        <li
          className='timeline-pagination_list_item'
          style={{
            visibility: pageNo === 1 ? 'hidden' : 'unset'
          }}
        >
          <button
            aria-label='Go to Previous page'
            disabled={pageNo === 1}
            onClick={prevPage}
          >
            &lt;
          </button>
        </li>
        <li className='timeline-pagination_list_item'>
          {pageNo} of {totalPages}
        </li>
        <li
          className='timeline-pagination_list_item'
          style={{
            visibility: pageNo === totalPages ? 'hidden' : 'unset'
          }}
        >
          <button
            aria-label='Go to Next page'
            disabled={pageNo === totalPages}
            onClick={nextPage}
          >
            &gt;
          </button>
        </li>
        {totalPages > 10 && (
          <li
            className='timeline-pagination_list_item'
            style={{
              visibility: pageNo === totalPages ? 'hidden' : 'unset'
            }}
          >
            <button
              aria-label='Go to Last page'
              disabled={pageNo === totalPages}
              onClick={lastPage}
            >
              &gt;&gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

TimelinePagination.propTypes = {
  firstPage: PropTypes.func.isRequired,
  lastPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  pageNo: PropTypes.number.isRequired,
  prevPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default TimelinePagination;
