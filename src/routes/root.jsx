import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./root.css";

export default function Root() {
    return (
      <>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/episodes">Episodes</Link>
        </div>
        <Outlet />
      </>
    );
  }