import { Form, FormControl, Button, Nav, Container, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className=" navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">OM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn-sm" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
