import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
};

export default App;
