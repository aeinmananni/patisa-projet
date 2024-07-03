import { Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./components/home"));
const WindowMode = React.lazy(() => import("./components/home/windows-mode"));
const Sales = React.lazy(() => import("./components/sales"));
const WomenDress = React.lazy(
  () => import("./components/women-dress-components-link")
);

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<WindowMode />} />
            <Route path="sales" element={<Sales />} />
            <Route path="womenDress" element={<WomenDress />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
