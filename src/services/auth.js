import axios from 'axios';
import { toast } from 'react-toastify';
import { toastAuthOptions } from '../helpers/toastAuthOptions';
import { authState } from 'helpers/authState';

// axios.defaults.baseURL = 'http://localhost:4040/api/v1/';
axios.defaults.baseURL = 'https://data-users-app.herokuapp.com/api/v1/';

export const login = async userData => {
  try {
    const { data } = await axios.post('auth/log-in', userData);
    authState.set(data.accessToken);
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
    const { data } = await axios.post('auth/sign-up', userData);
    if (data.status === 'success') {
      toast.success('User was created successfully', toastAuthOptions);
      return data;
    }
  } catch (error) {
    const {
      response: { data },
    } = error;

    toast.error(data.message, toastAuthOptions);
  }
};

export const logOut = async () => {
  try {
    await axios.get('auth/log-out');
    authState.clear();
  } catch (error) {
    toast.error(error.message, toastAuthOptions);
  }
};

export const getCurrentUser = async () => {
  const authToken = authState.get();
  if (!authToken) return;

  try {
    const { data } = await axios.get('users/current');

    return data;
  } catch (error) {
    const {
      response: { data },
    } = error;

    authState.clear();
    toast.error(data.message, toastAuthOptions);
  }
};
