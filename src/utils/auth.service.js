import axios from "axios";

const API_URL = "https://dummyjson.com/";

const register = (firstName, lastName, age) =>
  axios.post(API_URL + "users/add", { firstName, lastName, age });

const login = (username, password) =>
  axios
    .post(API_URL + "auth/login", { username, password })
    .then((response) => {
      console.log(response);
      if (response.data.token) console.log("yuhuuu");
      // localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    });

const logout = () => localStorage.removeItem("user");

const AuthService = { register, login, logout };
export default AuthService;
