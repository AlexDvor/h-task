import { Spinner, Button } from 'react-bootstrap';
import s from './LoaderButton.module.css';

export default function LoaderButton({ text = 'Loading...' }) {
  return (
    <>
      <Button variant="secondary" type="submit" className={`${s.button}`} disabled>
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        {text}
      </Button>
    </>
  );
}
