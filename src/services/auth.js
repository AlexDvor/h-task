import axios from 'axios';
import { toast } from 'react-toastify';
import { toastAuthOptions } from '../helpers/toastAuthOptions';
import { authState } from 'helpers/authState';

axios.defaults.baseURL = 'http://51.38.51.187:5050/api/v1/';

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
    authState.clear();
  } catch (error) {
    toast.error(error.message, toastAuthOptions);
  }
};

export const getCurrentUser = async () => {
  const authToken = authState.get();
  if (!authToken) return;

  try {
    const { data } = await axios.get('users/me');
    return data;
  } catch (error) {
    const {
      response: { data },
    } = error;

    authState.clear();
    toast.error(data.message, toastAuthOptions);
  }
};
