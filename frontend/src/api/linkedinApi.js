import axiosClient from "./axiosClient";

export const getLinkedInUrl = async () => {
  const res = await axiosClient.get("/linkedin/url");
  return res.data;
};

export const importLinkedInProfile = async () => {
  const res = await axiosClient.get("/linkedin/import");
  return res.data;
};
