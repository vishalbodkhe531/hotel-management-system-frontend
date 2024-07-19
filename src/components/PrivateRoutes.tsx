import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

function PrivateRoutes() {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

export default PrivateRoutes;
