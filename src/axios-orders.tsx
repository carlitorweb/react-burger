import axios from "axios";

const instance = axios.create({
  baseURL: "https://builderburger-39ebc-default-rtdb.firebaseio.com/",
});

export default instance;
