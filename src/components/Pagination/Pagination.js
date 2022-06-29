import { useState } from 'react';
import s from './Pagination.module.css';

export default function PaginationUsers(props) {
  const { postsPerPage, totalPosts, paginate, nextPage, prevPage, currPage } = props;
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState(false);
  const [isDisabledPreviousBtn, setIsDisabledPreviousBtn] = useState(false);

  const pageNumbers = [];
  const quantityPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= quantityPages; i++) {
    pageNumbers.push(i);
  }

  const checkingForLastElement = currentPage => {
    if (currentPage !== quantityPages) {
      nextPage();
      setIsDisabledNextBtn(false);
      setIsDisabledPreviousBtn(false);
    } else {
      setIsDisabledNextBtn(true);
      return;
    }
  };

  const onPageItemClick = currentPage => {
    paginate(currentPage);
    setIsDisabledNextBtn(false);
    setIsDisabledPreviousBtn(false);
  };

  const checkingForFirstElement = currentPage => {
    if (currentPage !== 1) {
      prevPage();
      setIsDisabledPreviousBtn(false);
      setIsDisabledNextBtn(false);
    } else {
      setIsDisabledPreviousBtn(true);
    }
  };

  return (
    <>
      <div className="clearfix">
        <div className="hint-text">
          Showing <b>{currPage}</b> out of <b>{quantityPages}</b> entries
        </div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {!isDisabledPreviousBtn ? (
              <>
                <button
                  className={s.pageButtonLink}
                  onClick={() => checkingForFirstElement(currPage)}
                >
                  Previous
                </button>
              </>
            ) : (
              <>
                <button className={s.pageButtonLink} disabled>
                  Previous
                </button>
              </>
            )}
          </li>
          {pageNumbers.map(num => (
            <li className="page-item" key={num}>
              <button
                className={`${s.pageButtonLink} ${currPage === num ? s.selectedPage : ''}`}
                onClick={e => onPageItemClick(num)}
              >
                {num}
              </button>
            </li>
          ))}
          <li className="page-item">
            {!isDisabledNextBtn ? (
              <>
                <button
                  className={s.pageButtonLink}
                  onClick={e => checkingForLastElement(currPage)}
                >
                  Next
                </button>
              </>
            ) : (
              <>
                <button className={s.pageButtonLink} disabled>
                  Next
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
