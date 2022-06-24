import axios from "axios";

export const baseUrl = "https://api-football-beta.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      "x-rapidapi-key": "34a6b9574dmsh87d1978c71b0e3ep1500aajsn7b8b3a9cde8a",
    },
  });
  return data;
};
