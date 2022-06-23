// import { useState } from 'react';
import s from './LoginForm.module.css';

export default function LoginForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [validated, setValidated] = useState(false);
  // const [isLoading, setLoading] = useState(false);

  // const handleSubmit = event => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     setValidated(true);
  //     return;
  //   }
  //   event.preventDefault();
  //   setLoading(true);
  //   console.log({ email, password });
  // };

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className={s.card}>
          <div className={s.cardHeader}>
            <h3>Sign In</h3>
            <div className={`d-flex justify-content-end ${s.socialIcon}`}>
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
          </div>

          <div className="card-body">
            <form>
              <div className="input-group form-group mb-3">
                <div className={s.inputGroupPrepend}>
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="username" />
              </div>
              <div className="input-group form-group mb-3">
                <div className={s.inputGroupPrepend}>
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="password" />
              </div>
              <div className={`row align-items-center ${s.remember}`}>
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group d-flex justify-content-end">
                <button type="submit" value="Login" className={`btn float-right ${s.loginBtn}`}>
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="card-footer">
            <div className={`d-flex justify-content-center ${s.links}`}>
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
