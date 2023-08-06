import React from "react";
import { HashRouter , Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Authorization from "../pages/Authorization.jsx";
import UserPage from "../pages/UserPage.jsx";
import Config from "../pages/Config.jsx";
import Stories from "../pages/history/Stories.jsx";

const AppRouter = (props) => {
  return (
    <HashRouter >
      <Navbar {...props} />
      <Routes>
        <Route path="/authorization" element={<Authorization {...props} />} />
        <Route path="/config" element={<Config {...props} />} />
        <Route path="/userpage" element={<UserPage {...props} />} />
        <Route path="/history" element={<Stories {...props} />} />
        <Route
          path="*"
          element={
            <div>
              <UserPage {...props} />
              <Outlet />
            </div>
          }
        />
      </Routes>
    </HashRouter >
  );
};

export default AppRouter;
