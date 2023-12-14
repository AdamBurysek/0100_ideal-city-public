import axios from "axios";

export default axios.create({
  baseURL:
    "https://eu-central-1.aws.data.mongodb-api.com/app/idealcitypublic-uwxvn/endpoint",
  headers: {
    "Content-Type": "application/json",
  },
});
