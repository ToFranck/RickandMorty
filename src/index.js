import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CharactersList from "./pages/charactersList/CharactersList";
import Root from "./routes/root";
import Home from "./pages/home/Home";
import Episodes from "./pages/episodes/Episodes";
import Character from "./pages/character/Character";




const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
   
      { path: "/", element: <Home /> },
      { path: "characters", element: <CharactersList /> },
      { path: "characters/:id", element: <Character /> },
      { path: "episodes", element: <Episodes /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
