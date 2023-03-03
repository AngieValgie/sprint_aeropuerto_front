import axios from "axios";
import { URL } from "./endPoint";

export const getDataVuelos = async () => {
  const { data } = await axios.get(URL.vuelos);
  return data;
};
