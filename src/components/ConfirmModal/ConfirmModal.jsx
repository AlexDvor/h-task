import { Modal, Button } from 'react-bootstrap';

export default function ConfirmModal({ isHidden, onCloseClick, user, text, onHandleClick }) {
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
            onClick={user ? () => onHandleClick(user._id) : onHandleClick}
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
