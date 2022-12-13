import { useForkRef } from "@mui/material";
import axios from "axios";

const API_URL = "/users";

// Register user

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // useForkRef(response.data){
  //     localStorage.setItem('user', )
  // }
};
