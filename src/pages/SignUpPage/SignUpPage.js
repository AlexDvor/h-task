import SignupForm from 'components/SignupForm';
import img from '../../images/back-auth.jpg';
import s from './SignUpPage.module.css';

export default function SignUpPage() {
  return (
    <>
      <div className={s.backGroundImage} style={{ backgroundImage: `url(${img})` }}>
        <div className="container-fluid">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
