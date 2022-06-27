import './common.css';
import AVA from '../../images/man.png';
import Pagination from 'react-bootstrap/Pagination';

export default function UsersTable({ usersData }) {
  console.log('🚀 - usersData', usersData);
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
              {usersData.items.map((user, index) => (
                <>
                  <tr>
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
                </>
              ))}
              {/* <tr>
                <td>1</td>
                <td>
                  <a href="#">
                    <img src={AVA} className="avatar" alt="Avatar" width={25} /> Michael Holz
                  </a>
                </td>
                <td>04/10/2013</td>
                <td>Admin</td>
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
              </tr> */}
            </tbody>
          </table>
        </div>

        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>

          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

//  email: 'qqq@qq.qq',
//       name: 'qqq',
//       surname: 'qqq',
//       id: '0ac6a334-8dcc-4c72-8950-b888380bbe64',
