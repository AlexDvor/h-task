import SignupForm from 'components/SignupForm';
import s from './SignUpPage.module.css';

export default function SignUpPage() {
  return (
    <>
      <div className={s.backGroundImage}>
        <div className="container-fluid">
          <SignupForm />
        </div>
      </div>
    </>
  );
}
