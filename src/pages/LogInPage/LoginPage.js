import LoginForm from 'components/LoginForm';
import img from '../../images/back-auth.jpg';
import s from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <div className={s.backGroundImage} style={{ backgroundImage: `url(${img})` }}>
        <div className="container-fluid">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
