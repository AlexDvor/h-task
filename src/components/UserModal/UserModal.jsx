import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import AVA from '../../images/man.png';
import s from './UserModal.module.css';

export default function UserModal({ user, isHidden, onCloseClick, onHandleClick }) {
  return (
    <>
      {user && (
        <Modal show={isHidden} onHide={onCloseClick} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="text-center">
            <img src={AVA} className="avatar" alt="Avatar" width={80} />
            <Modal.Title className={`${s.name}`}>{` ${user.name} ${user.surname}`}</Modal.Title>
            <p className={`${s.email}`}>{user.email}</p>
            <p className={`${s.id}`}>Id: {user._id}</p>
            <FloatingLabel controlId="floatingTextarea2" label="Email">
              <Form.Control
                className={`${s.textarea}`}
                as="textarea"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button
              className={`${s.customBtn}`}
              variant="secondary"
              onClick={() => onHandleClick(user.id)}
            >
              Send Email
            </Button>
            <Button className={`${s.customBtn}`} variant="primary" onClick={onCloseClick}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
