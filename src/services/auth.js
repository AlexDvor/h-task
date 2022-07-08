import axios from 'axios';

const BASE_URL = 'http://51.38.51.187:5050/api/v1/auth/log-in';

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
    const { data } = await axios.post(BASE_URL, userData);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    console.log('🚀 - error', error);
  }
};

export const signUp = async userData => {
  try {
    const res = await axios.post(BASE_URL, userData);
    return res.data;
  } catch (error) {
    console.log('🚀 - error', error);
  }
};
