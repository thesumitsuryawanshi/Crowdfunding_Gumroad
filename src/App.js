//myip's
import * as React from "react";
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to="/presentation" />} />
    </Routes>
  );
}

export default App;
