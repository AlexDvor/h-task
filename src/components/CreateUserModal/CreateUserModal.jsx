import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useCreateUser } from 'hooks/useCreateUser';
import { normalizeUserName } from 'helpers/normalizeUserName';
import LoaderButton from 'components/LoaderButton';

export default function CreateUserModal({ isHidden, onCloseClick }) {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const { addUser, isCreating } = useCreateUser();

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    try {
      const userData = {
        name: normalizeUserName(name),
        surname: normalizeUserName(surname),
        email,
        password,
      };

      const response = await addUser(userData);
      if (response) {
        onCloseClick();
        getDefaultValue();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDefaultValue = () => {
    setName('');
    setSurName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Modal
        show={isHidden}
        onHide={() => {
          onCloseClick();
          getDefaultValue();
          setValidated(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New User </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                autoComplete="off"
                onChange={e => setName(e.target.value)}
                value={name}
                name="name"
              />
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Surname"
                autoComplete="off"
                name="surname"
                value={surname}
                onChange={e => setSurName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your surname!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">This field is required!</Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-center">
              {isCreating ? (
                <LoaderButton />
              ) : (
                <Button variant="secondary" type="submit" className="custom-button">
                  Create
                </Button>
              )}

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
