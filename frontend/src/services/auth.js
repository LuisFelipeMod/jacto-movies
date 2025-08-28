import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  const token = response.data.token;
  localStorage.setItem("token", token);
  return response.data.user;
};

export const logout = async () => {
  await api.post("/logout");
  localStorage.removeItem("token");
};
