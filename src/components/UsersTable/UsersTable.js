import { useState, useMemo } from 'react';
import PaginationUsers from 'components/Pagination';
import EditUserModal from 'components/EditUserModal';
import ConfirmModal from 'components/ConfirmModal';
import { useRemoveUsers } from 'hooks/useRemoveUser';
import AVA from '../../images/man.png';
import './UserTable.css';

export default function UsersTable({ usersData, isLoading }) {
  const { count, items } = usersData;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
  const [postsPerPage] = useState(12);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { removeUserById } = useRemoveUsers();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentUsers = useMemo(() => {
    return items.slice(indexOfFirstPost, indexOfLastPost);
  }, [indexOfFirstPost, indexOfLastPost, items]);

  const paginate = pageNum => setCurrentPage(pageNum);
  const nextPage = () => setCurrentPage(prevState => prevState + 1);
  const prevPage = () => setCurrentPage(prevState => prevState - 1);

  const handleClose = () => setShowConfirmModal(false);
  const handleShow = () => setShowConfirmModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const handleRemove = id => {
    removeUserById(id);
    setShowConfirmModal(false);
  };
  return (
    <>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-4">
              <h2>{`Users : ${count}`}</h2>
            </div>

            <div className="col-sm-4 form-wrapper">
              <form className="d-flex">
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control"
                  aria-label="Search"
                />
                <button type="button" className="btn btn-secondary search-btn">
                  Search
                </button>
              </form>
            </div>

            <div className="col-sm-4">
              <button className="btn btn-secondary" onClick={handleShow}>
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
                <tr key={user.id} id={user.id}>
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
                    <span className="status text-success">&bull;</span>
                    Active
                  </td>
                  <td>
                    <div className="wrapper-buttons">
                      <button
                        className="edit-buttons settings"
                        type="button"
                        onClick={e => {
                          setCurrentUser({ ...user });
                          handleEditShow();
                        }}
                      >
                        <i className="fa-solid fa-gear"></i>
                      </button>

                      <button
                        className="remove-buttons delete"
                        type="button"
                        onClick={() => {
                          setCurrentUser({ ...user });
                          handleShow();
                        }}
                      >
                        <i className="fa-solid fa-ban"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PaginationUsers
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currPage={currentPage}
        ></PaginationUsers>

        <EditUserModal isHidden={showEditModal} onCloseClick={handleEditClose} user={currentUser} />
        <ConfirmModal
          isHidden={showConfirmModal}
          onCloseClick={handleClose}
          onHandleClick={handleRemove}
          user={currentUser}
          text="Are you sure you want to delete this user?"
        />
      </div>
    </>
  );
}
