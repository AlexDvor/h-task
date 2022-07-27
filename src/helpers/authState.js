import axios from 'axios';

export const authState = {
  isAuthenticated: false,
  token: null,

  get() {
    const saved = localStorage.getItem('tokenApp');
    const token = JSON.parse(saved);
    if (token) {
      this.set(token);
      return token;
    } else {
      return null;
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
    this.token = null;
  },
};
