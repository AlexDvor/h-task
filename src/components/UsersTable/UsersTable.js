import './common.css';
import AVA from '../../images/man.png';

export default function UsersTable() {
  return (
    <>
      <div className="table-responsive">
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
          <div className="scroll-table-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
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
                </tr>

                <tr>
                  <td>2</td>
                  <td>
                    <a href="#">
                      <img src={AVA} className="avatar" alt="Avatar" width={25} />
                      Paula Wilson
                    </a>
                  </td>
                  <td>05/08/2014</td>
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

                <tr>
                  <td>3</td>
                  <td>
                    <a href="#">
                      <img src={AVA} className="avatar" alt="Avatar" width={25} />
                      Antonio Moreno
                    </a>
                  </td>
                  <td>11/05/2015</td>
                  <td>Publisher</td>
                  <td>
                    <span className="status text-danger">&bull;</span> Suspended
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

                <tr>
                  <td>4</td>
                  <td>
                    <a href="#">
                      <img src={AVA} className="avatar" alt="Avatar" width={25} /> Mary Saveley
                    </a>
                  </td>
                  <td>06/09/2016</td>
                  <td>Reviewer</td>
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

                <tr>
                  <td>5</td>
                  <td>
                    <a href="#">
                      <img src={AVA} className="avatar" alt="Avatar" width={25} />
                      Martin Sommer
                    </a>
                  </td>
                  <td>12/08/2017</td>
                  <td>Moderator</td>
                  <td>
                    <span className="status text-warning">&bull;</span> Inactive
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

                <tr>
                  <td>6</td>
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
                </tr>

                <tr>
                  <td>7</td>
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
                </tr>

                <tr>
                  <td>8</td>
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
                </tr>

                <tr>
                  <td>9</td>
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
                </tr>

                <tr>
                  <td>10</td>
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
                </tr>

                <tr>
                  <td>11</td>
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
                </tr>

                <tr>
                  <td>12</td>
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
                </tr>
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
      </div>
    </>
  );
}
