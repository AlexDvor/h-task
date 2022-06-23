import { Form, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    event.preventDefault();
    setLoading(true);
    console.log({ email, password });
  };

  return (
    <>
      <div className={s.wrapperForm}>
        <h3 className={s.titleForm}>Login</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              autoComplete="true "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Introduzca una dirección de correo electrónico válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              autoComplete="true "
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Este campo es obligatorio</Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            {isLoading ? (
              <>
                <Button variant="primary" disabled>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  Loading...
                </Button>
              </>
            ) : (
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            )}
          </div>
        </Form>
      </div>
    </>
  );
}
