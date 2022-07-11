import axios from 'axios';
import { removeTokenStorage } from '../helpers/TokenStorage';

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
    console.log('🚀 - error', error);
  }
};

export const signUp = async userData => {
  try {
    const res = await axios.post('auth/sign-up', userData);
    return res.data;
  } catch (error) {
    console.log('🚀 - error', error);
  }
};

export const logOutOperation = () => {
  try {
    removeTokenStorage();
  } catch (error) {
    console.log();
  }
};
