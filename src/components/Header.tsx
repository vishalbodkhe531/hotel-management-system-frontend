import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-blue-800 py-6">
        <div className="container mx-auto  flex justify-between">
          <span className="text-3xl text-white tracking-tighter font-bold">
            <Link to="/">MernHolidays.com</Link>
          </span>
          <span className="flex space-x-2">
            <Link
              to="/sign-in"
              className="flex items-center text-blue-600 px-3 hover:bg-gray-200 rounded-lg bg-white"
            >
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
