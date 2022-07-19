import axios from 'axios';
import { getTokenStorage } from 'helpers/TokenStorage';

export const getDataUsers = async () => {
  const token = getTokenStorage();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const res = await axios('users');
  return res.data;
};

export const removeUserByID = async id => {
  const res = await axios.delete(`users/${id}`);
  return res;
};

export const updateUserByID = async ({ id, data }) => {
  const res = await axios.put(`users/${id}`, data);
  return res.data;
};

export const createNewUser = async data => {
  const res = await axios.post(`users`, data);
  return res.data;
};
