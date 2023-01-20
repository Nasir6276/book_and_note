import React, {Fragment, useContext} from "react";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <NavBar />
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route path="/register" element={user ? <Home /> : <Register />}></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
          <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
