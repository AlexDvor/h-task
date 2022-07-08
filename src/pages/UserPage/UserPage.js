import { useState, useEffect } from 'react';
//components
import NavBar from 'components/NavBar';
import UsersTable from 'components/UsersTable';
import Footer from 'components/Footer';
import { Container } from 'react-bootstrap';
// import { getDataUsers } from 'services/auth';
// others
import img from '../../images/back-user.jpg';
import s from './UserPage.module.css';

export default function UserPage() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getDataUsers();
  //       if (response.code === 200) setData(response.data[0].items);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <NavBar />

      <div className={s.background} style={{ backgroundImage: `url(${img})` }}>
        <Container fluid="xl">
          <UsersTable usersData={data} />
        </Container>
      </div>
      <Footer />
    </>
  );
}
