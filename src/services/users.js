import axios from 'axios';
import { getTokenStorage } from 'helpers/TokenStorage';

export const getDataUsers = async () => {
  const token = getTokenStorage();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  try {
    const res = await axios('users');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeUserByID = async id => {
  try {
    const res = await axios.delete(`users/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
