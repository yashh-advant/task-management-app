export const login = userData => {
  localStorage.setItem('userDetails', JSON.stringify(userData));
};
