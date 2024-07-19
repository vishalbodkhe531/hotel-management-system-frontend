import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { toast } from "react-toastify";

export type loginFormData = {
  email: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit } = useForm<loginFormData>();

  const navigateUser = useNavigate();

  const mutation = useMutation(apiClient.loginUser, {
    onSuccess: () => {
      toast.success(`login successfully`);
      navigateUser("/");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    mutation.mutate(data);
  });

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <form
        className="flex flex-col gap-5 shadow-2xl p-9 rounded-2xl"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold">Sign In</h2>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "This feild is required" })}
          ></input>
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", { required: "This feild is required" })}
          ></input>
          {/* {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )} */}
        </label>
        <span className="flex items-center justify-between">
          <span className="text-sm">
            Not Registered?{" "}
            <Link className="underline" to="/sign-up">
              Create an account here
            </Link>
          </span>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl rounded-xl ml-5"
          >
            Login
          </button>
        </span>
      </form>
    </div>
  );
}

export default SignIn;
