import LoginForm from 'components/LoginForm';
import s from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <div className={s.backGroundImage}>
        <div className="container-fluid">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
