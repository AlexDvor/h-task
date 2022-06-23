import LoginForm from 'components/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';
import s from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <div>
        <LoginForm />

        <h2>New Here?</h2>
        <p>Sign Up and discover a great amount of new opportunities! </p>
      </div>
    </>
  );
}
