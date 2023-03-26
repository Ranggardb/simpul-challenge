import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dummyjson.com/users/";

const getAllUsers = () => axios.get(API_URL);
const getSingleUser = (id) => axios.get(API_URL + id, { headers: authHeader });
const getSearchUser = (name) =>
  axios.get(API_URL + `search?q=${name}`, { headers: authHeader });

const UserService = { getAllUsers, getSingleUser, getSearchUser };
export default UserService;
