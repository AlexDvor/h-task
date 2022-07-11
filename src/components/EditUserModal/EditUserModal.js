import { Form, Modal, Button } from 'react-bootstrap';
import './EditUserModal.css';
import { useState } from 'react';

export default function EditUserModal({ isHidden, onCloseClick, user }) {
  const [name, setName] = useState(user.name);
  const [surname, setSurName] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [id, setId] = useState(user.id);
  console.log('🚀 - surname', surname);
  console.log('🚀 - email', email);

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ name, surname, email, id, password });
  };
  return (
    <>
      <Modal show={isHidden} onHide={onCloseClick} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User ({`${user.name} ${user.surname}`})</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                defaultValue={user.name}
                autoComplete="off"
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                defaultValue={user.surname}
                autoComplete="off"
                onChange={e => setSurName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={user.email}
                autoComplete="off"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new password"
                autoComplete="off"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new ID"
                defaultValue={user.id}
                autoComplete="off"
                onChange={e => setId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Check type="checkbox" label="Are you sure you want to change?" />
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
