import { loginFormData } from "./pages/SignIn";
import { RegisterFormData } from "./pages/SignUp";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegisterFormData) => {
  //   const response = await fetch(`${API_BASE_URL}/api/user/register`, {
  const response = await fetch(`/api/user/register-user`, {
    method: "POST",
    credentials: "include",
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

export const loginUser = async (formData: loginFormData) => {
  const response = await fetch(`/api/user/login-user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  console.log(responseBody._doc);

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const valideToken = async () => {
  const response = await fetch("/api/user/validate-token", {
    credentials: "include",
  });

  // const responseBody = await response.json();

  if (!response.ok) {
    throw new Error("token invalid");
  }

  // console.log(responseBody);
};
