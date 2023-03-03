import axios from "axios";
import { URL } from "./endPoint";

export const getDataVuelos = async () => {
  const { data } = await axios.get(URL.vuelos);
  console.log(data);
  return data;
};
