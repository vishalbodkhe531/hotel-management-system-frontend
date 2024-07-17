import { Link } from "react-router-dom";

function SignIn() {
  const onSubmit = () => {};

  // const {resister} = useForm<RegisterFormData>();

  return (
    // <div className="h-[80vh] w-full flex items-center justify-center">
    //   <form className="flex flex-col gap-5" onSubmit={onSubmit}>
    //     <h2 className="text-3xl font-bold">Create an Account</h2>
    //     <div className="flex flex-col md:flex-row gap-5">
    //       <label className="text-gray-700 text-sm font-bold flex-1">
    //         First Name
    //         <input
    //           className="border rounded w-full py-1 px-2 font-normal"
    //           // {...register("firstName", { required: "This field is required" })}
    //         ></input>
    //         {/* {errors.firstName && (
    //       <span className="text-red-500">{errors.firstName.message}</span>
    //     )} */}
    //       </label>
    //       <label className="text-gray-700 text-sm font-bold flex-1">
    //         Last Name
    //         <input
    //           className="border rounded w-full py-1 px-2 font-normal"
    //           // {...register("lastName", { required: "This field is required" })}
    //         ></input>
    //         {/* {errors.lastName && (
    //       <span className="text-red-500">{errors.lastName.message}</span>
    //     )} */}
    //       </label>
    //     </div>
    //     <label className="text-gray-700 text-sm font-bold flex-1">
    //       Email
    //       <input
    //         type="email"
    //         className="border rounded w-full py-1 px-2 font-normal"
    //         //   {...register("email", { required: "This field is required" })}
    //       ></input>
    //       {/* {errors.email && (
    //     <span className="text-red-500">{errors.email.message}</span>
    //   )} */}
    //     </label>
    //     <label className="text-gray-700 text-sm font-bold flex-1">
    //       Password
    //       <input
    //         type="password"
    //         className="border rounded w-full py-1 px-2 font-normal"
    //         //   {...register("password", {
    //         //     required: "This field is required",
    //         //     minLength: {
    //         //       value: 6,
    //         //       message: "Password must be at least 6 characters",
    //         //     },
    //         //   })}
    //       ></input>
    //       {/* {errors.password && (
    //     <span className="text-red-500">{errors.password.message}</span>
    //   )} */}
    //     </label>
    //     <label className="text-gray-700 text-sm font-bold flex-1">
    //       Confirm Password
    //       <input
    //         type="password"
    //         className="border rounded w-full py-1 px-2 font-normal"
    //         //   {...register("confirmPassword", {
    //         //     validate: (val) => {
    //         //       if (!val) {
    //         //         return "This field is required";
    //         //       } else if (watch("password") !== val) {
    //         //         return "Your passwords do no match";
    //         //       }
    //         //     },
    //         //   })}
    //       ></input>
    //       {/* {errors.confirmPassword && (
    //     <span className="text-red-500">{errors.confirmPassword.message}</span>
    //   )} */}
    //     </label>
    //     <span>
    //       <button
    //         type="submit"
    //         className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
    //       >
    //         Create Account
    //       </button>
    //     </span>
    //   </form>
    // </div>
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
            // {...register("email", { required: "This field is required" })}
            // {...resister("email",{required : "This field is required"})}
          ></input>
          {/* {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )} */}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            // {...register("password", {
            //   required: "This field is required",
            //   minLength: {
            //     value: 6,
            //     message: "Password must be at least 6 characters",
            //   },
            // })}
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
