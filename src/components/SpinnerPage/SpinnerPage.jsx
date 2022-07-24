import { Spinner } from 'react-bootstrap';
import s from './Spinner.module.css';

export default function SpinnerPage() {
  return (
    <>
      <div className={s.wrapper}>
        <div>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        </div>
        Loading...
      </div>
    </>
  );
}
