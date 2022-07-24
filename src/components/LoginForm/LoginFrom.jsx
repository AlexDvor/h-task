import { useState } from 'react';
import { login } from 'services/auth';
import { useAuthContext } from 'context/authContext';
import { addTokenStorage } from 'helpers/TokenStorage';
import { Form, Button, Spinner, Card, InputGroup } from 'react-bootstrap';
import LoaderButton from 'components/LoaderButton';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const { setToken, setAuth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const submitForm = async data => {
    try {
      setLoading(true);
      const response = await login(data);
      setToken(response.accessToken);
      setAuth(true);
      addTokenStorage(response.accessToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    submitForm({ email, password });
  };

  return (
    <>
      <Card className={`${s.wrapperCard}`}>
        <Card.Header className={`${s.cardHeader}`}>
          <Card.Title className={`${s.cardTitle}`}>Log In</Card.Title>
          <div className={`${s.socialIcon}`}>
            <span>
              <i className="fab fa-facebook-square"></i>
            </span>

            <span>
              <i className="fab fa-google-plus-square"></i>
            </span>

            <span>
              <i className="fab fa-twitter-square"></i>
            </span>
          </div>
        </Card.Header>

        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <InputGroup className={`${s.inputGroup}`}>
              <InputGroup.Text>
                <i className="fas fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="email"
                placeholder="email"
                value={email}
                autoComplete="true"
                onChange={e => setEmail(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Perfecto!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup className={`${s.inputGroup}`}>
              <InputGroup.Text>
                <i className="fas fa-key"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="password"
                placeholder="password"
                autoComplete="true"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">This field is required!</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Perfecto!</Form.Control.Feedback>
            </InputGroup>

            <div className={`${s.buttonsWrapper}`}>
              {isLoading ? (
                <>
                  <LoaderButton />
                </>
              ) : (
                <>
                  <Button className={`${s.loginBtn}`} type="submit">
                    Login
                  </Button>
                </>
              )}
            </div>
          </Form>
        </Card.Body>

        <Card.Footer>
          <div className={`${s.links}`}>
            Don't have an account?
            <Link className={`${s.signUpLink}`} to="/signup">
              Sign Up
            </Link>
            <Link className={`${s.passwordLink}`} to="/">
              Forgot your password?
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
