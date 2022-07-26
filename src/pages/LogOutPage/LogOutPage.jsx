import img from '../../images/back-user.jpg';
import s from './LogOutPage.module.css';

export default function LogOutPage() {
  console.log('logout');
  return (
    <>
      <div className={s.backGroundImage} style={{ backgroundImage: `url(${img})` }}>
        <div className="container-fluid">
          <div>Logout</div>
        </div>
      </div>
    </>
  );
}
