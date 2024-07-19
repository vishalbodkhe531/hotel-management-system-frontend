import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";

function AppRoutes() {
  return (
    <div className="h-[90vh] bg-black text-white">
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route
            path="/"
            element={
              <Layout>
                <p>Home Page</p>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <p>Search Page</p>
              </Layout>
            }
          />
        </Route>

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRoutes;
