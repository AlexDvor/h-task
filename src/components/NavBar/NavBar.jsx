import { useState } from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { useAuthContext } from 'context/authContext';
import { logOut } from 'services/auth';
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
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button variant="primary" onClick={handleShow}>
                <i className="fa-solid fa-right-from-bracket"></i>
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
