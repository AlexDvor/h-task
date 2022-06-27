import { useState } from 'react';

//components
import NavBar from 'components/NavBar';
import UsersTable from 'components/UsersTable';
import { Container } from 'react-bootstrap';
// others
import img from '../../images/back-user.jpg';
import s from './UserPage.module.css';

const DB = {
  count: 66,
  items: [
    {
      email: 'qqq@qq.qq',
      name: 'qqq',
      surname: 'qqq',
      id: '0ac6a334-8dcc-4c72-8950-b888380bbe64',
    },
    {
      email: 'prueba@prueba',
      name: 'Adriel',
      surname: 'Leonardo',
      id: '1df46ce4-3163-43db-835c-dda9eb02f354',
    },
    {
      email: 'gdiez1@hiberus.com',
      name: 'gonzalo',
      surname: 'diez',
      id: '3979a734-8687-48b1-8043-6dbf487b2687',
    },
    {
      email: 'a@gmail.com',
      name: 'dd',
      surname: 'dd',
      id: '3b5afc2a-48c9-4eba-b670-9e0eb10e2073',
    },
    {
      email: 'dd@gmail.com',
      name: 'adriel',
      surname: 'asdfads',
      id: '4fd926ed-891d-41b3-ae3c-e0b8373c9f49',
    },
    {
      email: 'inigo@gmail.com',
      name: 'inigo',
      surname: 'ind',
      id: '56ee07a3-9c65-4eb4-acfd-9d7bfe9195d4',
    },
    {
      email: 'dfgdfg@mail.com',
      name: 'Alex',
      surname: 'Ol',
      id: '6892b3d4-3360-4451-8c4c-b99f2b25e7aa',
    },
    {
      email: 'apalmer@hiberus.com',
      name: 'Apalmer',
      surname: 'Apalmer',
      id: '721eafcb-9bf0-40ac-b604-d0c37b1f0577',
    },
    {
      email: 'test5@test.com',
      name: 'test',
      surname: 'test',
      id: '770c9e8b-5500-4583-b3fe-c0c0d014e51e',
    },
    {
      email: 'pepe1@gmail.com',
      name: 'lola',
      surname: 'pepelood',
      id: '7786ec17-10fa-4598-a1a9-d5d36ed04229',
    },
    {
      email: 'test6@test6.com',
      name: 'test6',
      surname: 'test6',
      id: '7f24e923-9da5-4dff-9e07-84f408fed70b',
    },
    {
      email: 'statusCode',
      name: 'statusCode',
      surname: 'statusCode',
      id: '82534cdb-b337-4869-a492-27d95d4b5926',
    },
    {
      email: 'pepito@gmail.com',
      name: 'pepito',
      surname: 'pepito',
      id: '82863f0e-a1c9-4b7f-a543-6c214c904d4c',
    },
    {
      email: 'test5@test5.com',
      name: 'test5',
      surname: 'test5',
      id: '834435ea-6715-4be2-a09e-8888ec043fc3',
    },
    {
      email: 'unairaya',
      name: 'unairaya',
      surname: 'unairaya',
      id: '846c2fee-0fe9-44d0-acb0-440ac1f1d9e8',
    },
    {
      email: 'ramon',
      name: 'ramon',
      surname: 'ramon',
      id: '8593aa0b-6469-4936-87ff-0008ca02041f',
    },
    {
      email: 'matias@gmail.com',
      name: 'Matias',
      surname: 'Testing',
      id: '898b0c3f-ecf6-4011-b62e-6ff66e5d9f16',
    },
    {
      email: 'prueba23',
      name: 'prueba23',
      surname: 'prueba23',
      id: '89eb42e3-76af-43a2-9ea6-da83e614a014',
    },
    {
      email: 'test50@test.es',
      name: 'test50',
      surname: 'test50',
      id: '8d27e42c-97d2-41a3-a0d7-aa5e41862d44',
    },
    {
      email: 'm@mail.es',
      name: 'Esther',
      surname: 'Lopez',
      id: '927c8ca2-a0a7-47ed-89ed-9e93c4265159',
    },
    {
      email: 'prueba@prueba3',
      name: 'LEO',
      surname: 'LEO',
      id: '955a1933-05dc-457f-a2c8-b375ce891b66',
    },
    {
      email: 'example@gmail.com',
      name: 'Iñaki',
      surname: 'Serrano',
      id: '959453ed-2baa-4027-87bd-260ccfe8f69b',
    },
    {
      email: 'pepe2@gmail',
      name: 'pepe',
      surname: 'pepe',
      id: '97f73278-2c7f-4144-a58d-11cc20c674bc',
    },
    {
      email: 'pepe',
      name: 'pepe',
      surname: 'pepe',
      id: '98553e54-18f8-435c-ac97-c7f986ef4ad1',
    },
    {
      email: 'test3@gmail.com',
      name: 'ivan',
      surname: 'perez',
      id: '99c8cdb9-a7bf-4129-a415-65227bbd56c1',
    },
    {
      email: 'hiberusTest@hiberusTest.es',
      name: 'hiberusTest',
      surname: 'hiberusTest',
      id: '9ca85f3b-cc0b-497a-bcbe-1f9c74e0cf5e',
    },
    {
      email: 'lobo@gmail.com',
      name: 'lobo',
      surname: 'lobo',
      id: '9e62d380-dee0-4614-83ed-b726cf2b76cd',
    },
    {
      email: 'gabrielbatista1@palomo.com',
      name: 'Gabriel',
      surname: 'batama',
      id: 'a115a47e-8f59-4aca-9d31-434921e16ad1',
    },
    {
      email: 'maria@gmail.com',
      name: 'maria',
      surname: 'maria',
      id: 'a29c64ee-b9de-448a-88b8-90233252b5af',
    },
    {
      email: 'matiasmain@gmail.com',
      name: 'Matias',
      surname: 'Martin',
      id: 'a5d33ab6-b83f-4764-a25d-1bee74e0fcf9',
    },
    {
      email: 'user@user',
      name: 'user',
      surname: 'user',
      id: 'a7c7301a-502c-4a91-8f6f-ea51e42f2aba',
    },
    {
      email: 'frebecroppage-2874@yopmail.com',
      name: 'enrish',
      surname: 'sanchezsh',
      id: 'aa84397c-5d33-49b5-9e0e-f0a276e68760',
    },
    {
      email: 'string',
      name: 'string',
      surname: 'string',
      id: 'ade2d5bd-6782-4d0b-b0a4-c7ea6a289838',
    },
    {
      email: 'sdfsdf@gmail.com',
      name: 'sdfsdf',
      surname: 'sdfsdfsdf',
      id: 'ade34755-3875-4a1b-9f96-1de20e393935',
    },
    {
      email: 'sdwfsdf',
      name: 'Sergio',
      surname: 'Feefe1',
      id: 'ae4a0606-bcb7-46ee-9380-7be181d8d96f',
    },
    {
      email: 'pablo@pablo.com',
      name: '',
      surname: '',
      id: 'be35399a-d695-4187-80da-8c536017787a',
    },
    {
      email: 'ss11@gmail.com',
      name: 'try',
      surname: 'try',
      id: 'bf96aa86-b161-481e-82cc-7a1051a90564',
    },
    {
      email: 'stringg',
      name: 'string',
      surname: 'string',
      id: 'c04b15c5-4a1c-464d-86d4-8cd6eff25f9c',
    },
    {
      email: 'pepe4@gmail.com',
      name: 'pepe',
      surname: 'pepe',
      id: 'c08fffbe-2a69-41cd-aabd-1b3d97088ced',
    },
    {
      email: 'gdiez@hiberus.com',
      name: 'gonzalo',
      surname: 'diez',
      id: 'c195fb98-80cb-40aa-8750-e62193af1c83',
    },
    {
      email: 'cifualonso92@gmail.com',
      name: 'Roberto',
      surname: 'Alonso',
      id: 'c40ecc52-0b54-45f0-90b0-f641c314cc64',
    },
    {
      email: 'spedrero@hiberus.com',
      name: 'sergio',
      surname: 'pedrero',
      id: 'c69fcfcf-4477-444a-8f71-af36f3e195be',
    },
    {
      email: 'scarlyn@hotmail.com',
      name: 'Scarlyn',
      surname: 'Namis123',
      id: 'c720841a-9f9d-416b-9eae-0120264f14b6',
    },
    {
      email: 'test1@test1.com',
      name: 'test1',
      surname: 'test1',
      id: 'c9f55bf5-8d9c-40c3-835c-fac82fd3fd7a',
    },
    {
      email: 'a1i4542zm1@relay.firefox.com',
      name: 'hiberus',
      surname: 'tecnologia',
      id: 'ccdb4fb9-2fe4-4e8c-b8c5-a24b69ae55cf',
    },
    {
      email: 'fabian@hotmail.com',
      name: 'fabian',
      surname: 'mayoral',
      id: 'cf0fd948-7a18-4fe2-b61d-929b0ff8dfaf',
    },
    {
      email: 'manolo@gmail.com',
      name: 'Manolo',
      surname: 'Martinez jose',
      id: 'd464390b-2809-44e1-9ecd-d266afcfb733',
    },
    {
      email: 'dan@dan.com',
      name: 'daniel',
      surname: 'daniel',
      id: 'd5b9877e-46f4-4f35-b620-6e930246edd0',
    },
    {
      email: 'string2@string2.es',
      name: 'string',
      surname: 'strings',
      id: 'd64a3ace-c69f-4124-965b-af05b26c90e3',
    },
    {
      email: 'gutierrez@gmail.com',
      name: 'Manuel',
      surname: 'Gutierrez',
      id: 'd96a7616-2baf-4e6d-be88-0c0ec798cce6',
    },
    {
      email: 'pepito@grillo.es',
      name: 'Pepito',
      surname: 'Grillo',
      id: 'd993efdc-1645-40c2-a215-4121e9d92cac',
    },
    {
      email: 'pepe5@gmail.c',
      name: 'pepe',
      surname: 'pepe',
      id: 'da2deda7-6818-4a1a-9cdb-85630f5314ba',
    },
    {
      email: 'pepe2@gmail.com',
      name: 'pepe',
      surname: 'pepe2@gmail.com',
      id: 'dac1e9a4-7c57-42ef-9eb5-b08537da8860',
    },
    {
      email: 'mail@mail.e',
      name: 'Esther',
      surname: 'Lopez',
      id: 'de2ba29b-5f93-4dbf-8f2c-736cf3793067',
    },
    {
      email: 'jsjsjsjsjs',
      name: 'miguel',
      surname: 'isjsjsj',
      id: 'e24f018a-7a06-4171-827d-721acf120796',
    },
    {
      email: 'jogaro1983@gl.com',
      name: 'Jose Antonio',
      surname: 'Rodriguez',
      id: 'e54f7538-0cb6-4513-b10f-b2e58f2e9c50',
    },
    {
      email: 'test@test.es',
      name: 'test',
      surname: 'test',
      id: 'e91d6831-f3a4-44e7-a671-8553bceefb89',
    },
    {
      email: 'parse',
      name: 'miguel',
      surname: 'parsero',
      id: 'eb9580a2-283a-4a18-9153-bd13f7bde5fb',
    },
    {
      email: 'fabian2@hotmail.com',
      name: 'mayoral',
      surname: 'fabian',
      id: 'edc5b112-51cd-4bce-836c-8dec31ca7b40',
    },
    {
      email: 'user1@user',
      name: 'user',
      surname: 'user',
      id: 'eec77fed-628c-438d-8bef-264748cc070d',
    },
    {
      email: 'Andres@gmai.com',
      name: 'Andres',
      surname: 'Garcia',
      id: 'eee106ac-de78-4e41-a8e0-919aaabc2d45',
    },
    {
      email: 'pepa.gorgorita@gmail.com',
      name: 'Pepita',
      surname: 'Gorgorita',
      id: 'efa8de9e-1bbe-4a9e-9f90-36cacdc7059e',
    },
    {
      email: 'samuel@gmail.com',
      name: 'Samuel',
      surname: 'Samuel',
      id: 'f024f0f9-ccf9-4bac-a9c5-f10b4468e242',
    },
    {
      email: 'comadreja',
      name: 'comadreja',
      surname: 'comadreja',
      id: 'fa8d94c2-9808-4fc5-ad5d-3a592a26be2d',
    },
    {
      email: 'manolo',
      name: 'miguel',
      surname: 'manolo',
      id: 'fa8da98e-e566-45bc-affe-521242dce04c',
    },
    {
      email: 'ana@gmail.com',
      name: 'ana',
      surname: 'ana',
      id: 'fcd52fc9-cb9c-4c21-8d76-305e672f6b4b',
    },
  ],
};

export default function UserPage() {
  const [data, setData] = useState([]);
  return (
    <>
      <div className={s.background} style={{ backgroundImage: `url(${img})` }}>
        <NavBar />
        <Container fluid="xl">
          <UsersTable />
        </Container>
      </div>
    </>
  );
}
