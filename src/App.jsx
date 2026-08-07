import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="projectsDetail" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
