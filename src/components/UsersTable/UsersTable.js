import { useState } from 'react';
import PaginationUsers from 'components/Pagination';
import AVA from '../../images/man.png';
import './common.css';

export default function UsersTable({ usersData }) {
  const [users] = useState(usersData.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => setCurrentPage(pageNum);
  const nextPage = () => setCurrentPage(prevState => prevState + 1);
  const prevPage = () => setCurrentPage(prevState => prevState - 1);

  return (
    <>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>Users</h2>
            </div>
            <div className="col-sm-7">
              <button className="btn btn-secondary">
                <i className="fa-solid fa-address-card"></i> <span>Add New User</span>
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index}</td>
                  <td>
                    <a href="#">
                      <img src={AVA} className="avatar" alt="Avatar" width={25} />
                      {`${user.name} ${user.surname}`}
                    </a>
                  </td>
                  <td>{user.email}</td>
                  <td>Publisher</td>
                  <td>
                    <span className="status text-success">&bull;</span> Active
                  </td>
                  <td>
                    <a href="#" className="settings" title="Settings" data-toggle="tooltip">
                      <i className="fa-solid fa-gear"></i>
                    </a>
                    <a href="#" className="delete" title="Delete" data-toggle="tooltip">
                      <i className="fa-solid fa-ban"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaginationUsers
          postsPerPage={postsPerPage}
          totalPosts={users.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currPage={currentPage}
        ></PaginationUsers>
      </div>
    </>
  );
}
