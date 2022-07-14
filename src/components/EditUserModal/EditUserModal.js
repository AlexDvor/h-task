import { Form, Modal, Button } from 'react-bootstrap';
import './EditUserModal.css';
import { useState, useEffect } from 'react';

export default function EditUserModal({ isHidden, onCloseClick, user }) {
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    id: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(prevState => ({ ...prevState, ...user }));
    }
  }, [user]);

  const handleSubmit = event => {
    event.preventDefault();
    let obj = {};
    for (const key in formData) {
      if (formData[key]) {
        obj[key] = formData[key];
      }
    }
    console.log('obj', obj);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
                onChange={handleChange}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                defaultValue={user.surname}
                autoComplete="off"
                name="surname"
                onChange={e =>
                  setFormData(prevState => ({ ...prevState, ...(prevState.name = e.target.value) }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={user.email}
                autoComplete="off"
                name="email"
                onChange={e =>
                  setFormData(prevState => ({
                    ...prevState,
                    ...(prevState.email = e.target.value),
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new password"
                autoComplete="off"
                onChange={e =>
                  setFormData(prevState => ({ ...prevState, ...(prevState.name = e.target.value) }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new ID"
                defaultValue={user.id}
                autoComplete="off"
                onChange={e =>
                  setFormData(prevState => ({ ...prevState, ...(prevState.name = e.target.value) }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-5">
              <Form.Check
                type="checkbox"
                onChange={e => setIsChecked(e.target.checked)}
                label="Are you sure you want to change?"
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="secondary"
                type="submit"
                className="custom-button"
                disabled={!isChecked}
              >
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
