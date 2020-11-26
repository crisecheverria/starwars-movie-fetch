import axios from "axios";

const filmsAPI = axios.create({
  baseURL: "https://star-wars-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default filmsAPI;
