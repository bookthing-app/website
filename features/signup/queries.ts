import axios from "axios";

export const useSlug = (slug: string) => {
  const queryFn = async () => {
    return axios.post("/api/slug", { slug }).then(({ data }) => data.data);
  };

  return {
    queryKey: ["slug", slug],
    queryFn,
    enabled: slug.length > 3 && slug.length < 64,
  };
};
