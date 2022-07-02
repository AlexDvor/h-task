import { Form, Modal, Button } from 'react-bootstrap';
import './EditUserModal.css';

export default function EditUserModal({ isHidden, onCloseClick, user }) {
  return (
    <>
      <Modal show={isHidden} onHide={onCloseClick} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                defaultValue={user.name}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                defaultValue={user.surname}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={user.email}
                autoComplete="off"
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="secondary" type="submit" className="custom-button">
                Save
              </Button>
              <Button
                className="ms-3 custom-button"
                variant="secondary"
                type="button"
                onClick={() => onCloseClick()}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
