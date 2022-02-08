// Check if user is logged in
export const tokenExists = () => (localStorage.getItem("token") ? true : false);

// Establish connection w/ rest api
export const storeToken = (token) => localStorage.setItem("token", token);

// Remove connection
export const removeToken = () => {
  localStorage.removeItem("token");
};
