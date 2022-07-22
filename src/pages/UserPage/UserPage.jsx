import NavBar from 'components/NavBar';
import UsersTable from 'components/UsersTable';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';
import { useFetchUsers } from 'hooks/useFetchUsers';
import img from '../../images/back-user.jpg';
import s from './UserPage.module.css';

export default function UserPage() {
  const { users, isLoading } = useFetchUsers();

  return (
    <>
      <NavBar />
      <div className={s.background} style={{ backgroundImage: `url(${img})` }}>
        <Container fluid="xl">
          {users && <UsersTable usersData={users} isLoading={isLoading} />}
        </Container>
      </div>
      <Footer />
    </>
  );
}
