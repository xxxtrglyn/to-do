import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Mainpage from "./components/pages/Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import NavBar from "./components/UI/NavBar";
import Login from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import AuthContext from "./store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {authCtx.isLoggedIn && <Route path="/list" element={<Todo />} />}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
