import axios from 'axios';

export const authState = {
  isAuthenticated: false,
  token: '',

  get() {
    const saved = localStorage.getItem('tokenApp');
    const token = JSON.parse(saved);
    if (token) {
      this.set(token);
      this.isAuthenticated = true;
      return token;
    } else {
      return '';
    }
  },

  set(token) {
    localStorage.setItem('tokenApp', JSON.stringify(token));
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.token = token;
    this.isAuthenticated = true;
  },

  clear() {
    localStorage.setItem('tokenApp', JSON.stringify(''));
    axios.defaults.headers.common.Authorization = '';
    this.isAuthenticated = false;
    this.token = '';
  },
};
