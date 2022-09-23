import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./pages/error";
import { Provider } from "react-redux";

import Admin1 from "./pages/admin1";
import Admin2 from "./pages/admin2";
import Admin3 from "./pages/admin3";
import Admin4 from "./pages/admin4";
import Admin5 from "./pages/admin5";
import Admin6 from "./pages/admin6";
import Admin7 from "./pages/admin7";
import Admin8 from "./pages/admin8";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
 <Provider store={store}>
      <Routes>
        <Route path="/admin1" element={<Admin1/>} />
        <Route path="/admin2" element={<Admin2/>} />
        <Route path="/admin3" element={<Admin3/>} />
        <Route path="/admin4" element={<Admin4/>} />
        <Route path="/admin5" element={<Admin5/>} />
        <Route path="/admin6" element={<Admin6/>} />
        <Route path="/admin7" element={<Admin7/>} />
        <Route path="/admin8" element={<Admin8/>} />
        <Route path="*" element={<Error />} />
      </Routes>  
      </Provider>    
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebSkills(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-Skills

