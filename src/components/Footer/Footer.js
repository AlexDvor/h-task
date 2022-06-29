import { Container, Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <Navbar bg="light" expand="lg" className=" navbar-dark bg-dark" fixed="bottom">
        <Container fluid>
          <div class="text-center text-light p-3">
            © 2020 Copyright:
            <a class="text-light" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
