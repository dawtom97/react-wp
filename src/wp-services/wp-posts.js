import { useQuery } from "react-query";
import axiosClient from "../utils/axiosClient";
const getWpPosts = async (limit) => {
  try {
    const response = await axiosClient.get(`/wp/v2/posts?per_page=${limit}`);

    const postsData = response.data;

    const postsWithImages = await Promise.all(
      postsData.map(async (post) => {
        if (post.featured_media) {
          try {
            const mediaResponse = await axiosClient.get(
              `/wp/v2/media/${post.featured_media}`
            );
            return {
              ...post,
              featuredMediaAlt: mediaResponse.data.alt_text,
              featuredMedia:
                mediaResponse.data.media_details.sizes.medium.source_url,
            };
          } catch (error) {
            console.log(error);
            return { ...post, featuredMedia: null, featuredMediaAlt: null };
          }
        } else {
            return { ...post, featuredMedia: null, featuredMediaAlt: null };
        }
      })
    );

    return postsWithImages;
  } catch (error) {
    console.log(error);
  }
};
export const useGetWpPosts = (limit) => {
  return useQuery("fetchPosts", () => getWpPosts(limit));
};
