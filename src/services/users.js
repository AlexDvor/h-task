import axios from 'axios';

export const getDataUsers = async () => {
  const res = await axios('users/all');
  return res.data;
};

export const removeUserByID = async id => {
  const res = await axios.delete(`users/remove/${id}`);
  return res;
};

export const updateUserByID = async ({ id, data }) => {
  const res = await axios.put(`users/update/${id}`, data);
  return res.data;
};

export const createNewUser = async data => {
  const res = await axios.post(`users/create`, data);
  return res.data;
};
