import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";

const getWpMenu = async (name) => {
  try {
    const response = await axiosClient.get(`/menus/v1/menus/${name}`);
    return response.data;

  } catch (error) {
    console.log(error);
  }
};
export const useGetWpMenu = (name) => {
  return useQuery(`fetchMenu-${name}`, () => getWpMenu(name));
};
