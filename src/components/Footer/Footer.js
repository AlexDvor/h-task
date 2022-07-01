import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar-dark bg-dark">
        <Container fluid className="justify-content-center">
          <div className="text-center text-light p-3">© 2022 Copyright</div>
        </Container>
      </Navbar>
    </>
  );
}
