import axios from 'axios';
import { removeTokenStorage } from '../helpers/TokenStorage';
import { toast } from 'react-toastify';
import { toastAuthOptions } from '../helpers/toastAuthOptions';

axios.defaults.baseURL = 'http://51.38.51.187:5050/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const login = async userData => {
  try {
    const { data } = await axios.post('auth/log-in', userData);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    const {
      response: { data },
    } = error;
    toast.error(data.message, toastAuthOptions);
  }
};

export const signUp = async userData => {
  try {
    const response = await axios.post('auth/sign-up', userData);
    if (response.status === 204) {
      toast.success('User was created successfully', toastAuthOptions);
      return true;
    }
  } catch (error) {
    const {
      response: { data },
    } = error;

    toast.error(data.message, toastAuthOptions);
  }
};

export const logOut = () => {
  try {
    token.unset();
    removeTokenStorage();
  } catch (error) {
    toast.error(error.message, toastAuthOptions);
  }
};

export const getCurrentUser = async () => {
  // token.set(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhMjhmOThmLTllMWQtNDkyOC04MmNhLWY3ZGNlODk1MTRjNSIsImRhdGUiOiIyMDIyLTA3LTE5VDE0OjQ4OjAzLjc2MVoiLCJpYXQiOjE2NTgyNDIwODMsImV4cCI6MTY1ODMyODQ4M30.eFdmDoXplGt6HFSlMjiC_J3Mr5Mv59xdX3o8yv6UAKc',
  // );
  try {
    const { data } = await axios.get('users/me');
    return data;
  } catch (error) {
    const {
      response: { data },
    } = error;
    token.unset();
    removeTokenStorage();
    toast.error(data.message, toastAuthOptions);
  }
};
