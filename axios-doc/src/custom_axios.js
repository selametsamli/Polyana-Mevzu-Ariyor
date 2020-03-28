import axios from "axios"

const instance = axios.create({
  baseURL: "https://vuejs-axio-7eb9b.firebaseio.com",

});

/*
instance.defaults.headers.common[]
*/

export default instance;
