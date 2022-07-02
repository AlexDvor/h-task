import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CenteredModal({ children, text, isHidden, onCloseClick }) {
  return (
    <>
      <Modal show={isHidden} onHide={onCloseClick} centered>
        <Modal.Header closeButton>{/* <Modal.Title>Modal heading</Modal.Title> */}</Modal.Header>
        <Modal.Body>{children || text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseClick}>
            Confirm
          </Button>
          <Button variant="primary" onClick={onCloseClick}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
