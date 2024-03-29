import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useRemoveUser } from 'hooks/useRemoveUser';
import PaginationUsers from 'components/Pagination';
import EditUserModal from 'components/EditUserModal';
import ConfirmModal from 'components/ConfirmModal';
import CreateUserModal from 'components/CreateUserModal';
import UserModal from 'components/UserModal';
import normalizeSearchQuery from 'helpers/normalizeSearchQuery';
import AVA from '../../images/man.png';
import './UserTable.css';

export default function UsersTable({ usersData }) {
  const { data } = usersData;

  const { removeUserById } = useRemoveUser();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
  const [postsPerPage] = useState(21);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentUsers = useMemo(() => {
    if (!filteredData) {
      return data.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      return filteredData;
    }
  }, [filteredData, indexOfFirstPost, indexOfLastPost, data]);

  const paginate = pageNum => setCurrentPage(pageNum);
  const nextPage = () => setCurrentPage(prevState => prevState + 1);
  const prevPage = () => setCurrentPage(prevState => prevState - 1);

  const handleClose = () => setShowConfirmModal(false);
  const handleShow = () => setShowConfirmModal(true);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const handleUserClose = () => setShowUserModal(false);
  const handleUserShow = () => setShowUserModal(true);

  const handleRemove = id => {
    removeUserById(id);
    setShowConfirmModal(false);
    if (filteredData) {
      const result = filteredData.filter(user => user._id !== id);
      setFilteredData(result);
    }
  };

  const handleFilter = e => {
    const value = e.target.value;
    if (value) {
      setFilter(value);
    } else {
      setFilteredData(null);
      setFilter('');
    }
  };

  const handleSubmitFilter = e => {
    e.preventDefault();
    if (filter === '') return;
    const normalizedQuery = normalizeSearchQuery(filter, data);
    setFilteredData(normalizedQuery);
  };

  return (
    <>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-4">
              <h2>{`Total Users : ${data.length}`}</h2>
            </div>

            <div className="col-sm-4 form-wrapper">
              <form className="d-flex" onSubmit={handleSubmitFilter}>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  aria-label="Search"
                  name="filter"
                  onChange={handleFilter}
                />
                <button type="submit" className="btn btn-secondary search-btn">
                  Search
                </button>
              </form>
            </div>

            <div className="col-sm-4">
              <button className="btn btn-secondary" onClick={handleShowCreateModal}>
                <i className="fa-solid fa-address-card"></i> <span>Add New User</span>
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive" style={{ position: 'relative' }}>
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
              {currentUsers &&
                currentUsers.map((user, index) => (
                  <tr key={user._id} id={user._id}>
                    <td>{index}</td>
                    <td>
                      <Link
                        to="/users"
                        onClick={() => {
                          handleUserShow();
                          setCurrentUser({ ...user });
                        }}
                      >
                        <img src={AVA} className="avatar" alt="Avatar" width={25} />
                        {`${user.name} ${user.surname}`}
                      </Link>
                    </td>
                    <td>{user.email}</td>
                    <td>Publisher</td>
                    <td>
                      <div className="wrapper-status">
                        <span className="status text-success">&bull;</span>
                        <span> Active</span>
                      </div>
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
                          onClick={e => {
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

        {!filteredData && (
          <PaginationUsers
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currPage={currentPage}
          ></PaginationUsers>
        )}

        <EditUserModal isHidden={showEditModal} onCloseClick={handleEditClose} user={currentUser} />
        <ConfirmModal
          isHidden={showConfirmModal}
          onCloseClick={handleClose}
          onHandleClick={handleRemove}
          user={currentUser}
          text="Are you sure you want to delete this user?"
        />
        <CreateUserModal isHidden={showCreateModal} onCloseClick={handleCloseCreateModal} />
        <UserModal isHidden={showUserModal} onCloseClick={handleUserClose} user={currentUser} />
      </div>
    </>
  );
}
