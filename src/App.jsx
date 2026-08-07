import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import TaskDetails from "./pages/TaskDetails";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projectsDetail" element={<ProjectDetails />} />
            <Route path="taskDetails" element={<TaskDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
