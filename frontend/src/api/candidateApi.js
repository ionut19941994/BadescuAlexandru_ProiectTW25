import axiosClient from "./axiosClient";

export const getCandidates = async () => {
  const res = await axiosClient.get("/candidates");
  return res.data;
};

export const getCandidate = async (id) => {
  const res = await axiosClient.get(`/candidates/${id}`);
  return res.data;
};

export const createCandidate = async (payload) => {
  const res = await axiosClient.post("/candidates", payload);
  return res.data;
};

export const updateCandidate = async (id, payload) => {
  const res = await axiosClient.put(`/candidates/${id}`, payload);
  return res.data;
};

export const deleteCandidate = async (id) => {
  await axiosClient.delete(`/candidates/${id}`);
};
