import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./root.css";

export default function Root() {
    return (
      <>
        <div className="nav">
            <Link to="/" className="links">Home</Link>
            <Link to="/characters" className="links">Personnages</Link>
           
        </div>
        <Outlet />
      </>
    );
  }