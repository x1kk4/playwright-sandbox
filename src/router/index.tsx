import { FC } from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Counter from "../pages/Counter";
import FAQ from "../pages/FAQ";
import Root from "../pages/Root";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Root />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='FAQ'
            element={<FAQ />}
          />
          <Route
            path='counter'
            element={<Counter />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
