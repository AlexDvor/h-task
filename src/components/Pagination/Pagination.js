import s from './Pagination.module.css';

export default function PaginationUsers(props) {
  const { postsPerPage, totalPosts, paginate, nextPage, prevPage, currPage } = props;

  const pageNumbers = [];
  const quantityPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= quantityPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="clearfix">
        <div className="hint-text">
          Showing <b>{currPage}</b> out of <b>{quantityPages}</b> entries
        </div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className={s.pageButtonLink} onClick={() => prevPage()}>
              Previous
            </button>
          </li>
          {pageNumbers.map(num => (
            <li className="page-item" key={num}>
              <button className={s.pageButtonLink} onClick={() => paginate(num)}>
                {num}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className={s.pageButtonLink} onClick={() => nextPage()}>
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
