import axios from "axios";

export default axios.create({
  baseURL:
    "https://eu-central-1.aws.data.mongodb-api.com/app/vida-4k-camera-ttzph/endpoint",
  headers: {
    "Content-Type": "application/json",
  },
});
