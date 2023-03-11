import axios from "axios";

const instance = axios.create({
  baseURL: "https://np-71pp.onrender.com/api/",
});

export const fetchTNNInfo = async (tnnNumber) => {
  const { data } = await instance.get(`/tracking/${tnnNumber}`);
  return data;
};
