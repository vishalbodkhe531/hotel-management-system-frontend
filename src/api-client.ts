import { RegisterFormData } from "./pages/SignUp";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegisterFormData) => {
  //   const response = await fetch(`${API_BASE_URL}/api/user/register`, {
  const response = await fetch(`/api/user/register-user`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};
