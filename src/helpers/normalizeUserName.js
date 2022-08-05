export const normalizeUserName = name => {
  const userName = name.toLowerCase();
  return userName.charAt(0).toUpperCase() + userName.slice(1);
};
