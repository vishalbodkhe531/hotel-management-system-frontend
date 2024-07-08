import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Routes>
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
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
