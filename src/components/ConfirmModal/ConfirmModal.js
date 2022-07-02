import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal({ isHidden, onCloseClick, user }) {
  return (
    <>
      <Modal show={isHidden} onHide={onCloseClick} centered>
        <Modal.Header closeButton>
          <Modal.Title>{` ${user.name} ${user.surname}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">{`Are you sure you want to delete this user?`}</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={onCloseClick}>
            Yes
          </Button>
          <Button variant="primary" onClick={onCloseClick}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
