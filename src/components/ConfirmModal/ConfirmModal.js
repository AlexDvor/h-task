import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmModal({ isHidden, onCloseClick, user, text, onHandleLogout }) {
  return (
    <>
      <Modal show={isHidden} onHide={onCloseClick} centered>
        <Modal.Header closeButton>
          {user && (
            <>
              <Modal.Title>{` ${user.name} ${user.surname}`}</Modal.Title>
            </>
          )}
        </Modal.Header>
        <Modal.Body className="text-center">{text}</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            className="custom-button"
            variant="secondary"
            onClick={onHandleLogout || onCloseClick}
          >
            Yes
          </Button>
          <Button className="custom-button" variant="primary" onClick={onCloseClick}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
