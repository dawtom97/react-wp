import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";
const getWpPosts = async () => {
  try {
    const response = await axiosClient.get(`/posts`);

    const postsData = response.data;

    const postsWithImages = await Promise.all(
      postsData.map(async (post) => {
        if (post.featured_media) {
          try {
            const mediaResponse = await axiosClient.get(
              `/media/${post.featured_media}`
            );
            return {
              ...post,
              featuredMedia:
                mediaResponse.data.media_details.sizes.medium.source_url,
            };
          } catch (error) {
            console.log(error);
            return { ...post, featuredMedia: null };
          }
        } else {
            return { ...post, featuredMedia: null };
        }
      })
    );

    return postsWithImages;
  } catch (error) {
    console.log(error);
  }
};
export const useGetWpPosts = () => {
  return useQuery("fetchPosts", () => getWpPosts());
};
