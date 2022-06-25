import { useState } from 'react';
import { Form, Button, Spinner, Card, InputGroup } from 'react-bootstrap';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);
    console.log({ email, password });
  };

  return (
    <>
      <Card className={`${s.wrapperCard}`}>
        <Card.Header className={`${s.cardHeader}`}>
          <Card.Title className={`${s.cardTitle}`}>Sign In</Card.Title>
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
                  <Button className={`${s.loginBtn} ${s.isLoadingBtn}`} type="submit" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
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
            <Card.Link className={`${s.signUpLink}`} href="#">
              Sign Up
            </Card.Link>
            <Card.Link className={`${s.passwordLink}`} href="#">
              Forgot your password?
            </Card.Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
