import { useState } from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from 'context/authContext';
import { logOut } from 'services/auth';
import s from './NavBar.module.css';
import ConfirmModal from 'components/ConfirmModal';

export default function NavBar() {
  const { setToken } = useAuthContext();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmModal(false);
    logOut();
    setToken();
  };

  const handleClose = () => setShowConfirmModal(false);
  const handleShow = () => setShowConfirmModal(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className=" navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn-sm" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/users"
                style={isActive => ({
                  color: isActive ? '#0d6efd' : 'blue',
                  textDecoration: 'none',
                })}
              >
                Users
              </NavLink>
            </Nav>
            <Nav className="ml-auto">
              <Button className={`${s.customBtn}`} variant="primary" onClick={handleShow}>
                Sign Out
                <div className={`${s.wrapperIcon}`}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ConfirmModal
        isHidden={showConfirmModal}
        onCloseClick={handleClose}
        onHandleClick={handleLogout}
        text="Are you sure you want to go out?"
      />
    </>
  );
}
