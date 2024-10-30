import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";

const getWpBasicInfo = async () => {
  try {
    const response = await axiosClient.get("/");
    const data = response.data;

    if (data.site_logo) {
      const logoResponse = await axiosClient.get(
        `/wp/v2/media/${data.site_logo}`
      );

      const finalData = {
        ...data,
        logoUrl: logoResponse.data.source_url,
      };

      return finalData;
    } else {
      return {
        ...data,
        logoUrl: null,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
export const useGetWpBasicInfo = () => {
  return useQuery(`fetchBasicInfo`, () => getWpBasicInfo());
};
