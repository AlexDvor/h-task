import { useState } from 'react';
import { Form, Button, Spinner, Card, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'services/auth';
import { Link } from 'react-router-dom';
import s from './SignupForm.module.css';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      setLoading(true);
      const response = await signUp({ name, surname, email, password });
      if (response) navigate('/login', { replace: true });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card className={`${s.wrapperCard}`}>
        <Card.Header className={`${s.cardHeader}`}>
          <Card.Title className={`${s.cardTitle}`}>Sign Up</Card.Title>
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
                <i className="fas fa-user"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </InputGroup>
            {/*  */}
            <InputGroup className={`${s.inputGroup}`}>
              <InputGroup.Text>
                <i className="fas fa-user-tie"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={e => setSurName(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your surname!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup className={`${s.inputGroup}`}>
              <InputGroup.Text>
                <i className="fas fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="email"
                placeholder="email"
                autoComplete="true "
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup className={`${s.inputGroup}`}>
              <InputGroup.Text>
                <i className="fas fa-key"></i>
              </InputGroup.Text>
              <Form.Control
                required
                type="password"
                placeholder="password"
                autoComplete="true "
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`${s.inputField}`}
              />
              <Form.Control.Feedback type="invalid">This field is required!</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
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
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </Form>
        </Card.Body>

        <Card.Footer>
          <div className={`${s.links}`}>
            You are already registered?
            <Link to="/login" className={`${s.signUpLink}`}>
              Login
            </Link>
            <Link to="/" className={`${s.passwordLink}`}>
              Forgot your password?
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
