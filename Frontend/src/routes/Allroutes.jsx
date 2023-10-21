import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/account" element={<Account />}></Route>
    </Routes>
  );
}
