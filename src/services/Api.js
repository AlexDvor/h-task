const URL = 'https://next-app-data.herokuapp.com/api/data/items';

const getDataUsers = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

export { getDataUsers };
