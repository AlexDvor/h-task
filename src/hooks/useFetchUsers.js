import { useQuery } from 'react-query';
import axios from 'axios';

const BASE_URL = 'https://next-app-data.herokuapp.com/api/data/items';

const getDataUsers = async () => {
  return await axios(BASE_URL)
    .then(res => res.data)
    .catch(error => error.massage);
};

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery('/users', getDataUsers, {
    onSuccess() {},
  });

  return {
    users: data,
    isLoading,
  };
};
