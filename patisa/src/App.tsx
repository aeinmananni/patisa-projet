import { Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./components/home"));

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
