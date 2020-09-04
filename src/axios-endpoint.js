import axios from "axios";

const instance = axios.create({
  baseURL: "https://ec2-54-170-173-178.eu-west-1.compute.amazonaws.com"
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
export default instance;
