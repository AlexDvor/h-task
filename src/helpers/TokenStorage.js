export const getTokenStorage = () => {
  const saved = localStorage.getItem('tokenApp');
  const initialValue = JSON.parse(saved);
  return initialValue || '';
};

export const addTokenStorage = token => {
  localStorage.setItem('tokenApp', JSON.stringify(token));
};

export const removeTokenStorage = token => {
  localStorage.setItem('tokenApp', JSON.stringify(''));
};
