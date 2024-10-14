import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import Homeleft from "../../components/homeleft/Homeleft";
import Random from "../../components/random/Random";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="left">
          <Homeleft />
          
        </div>
        <div className="right">
        <img src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png" alt="" className="home-img"/>
          <p className="description">
            Bienvenue sur le Wiki Rick et Morty, en français à propos de le série animée du même nom
          </p>
          <p className="infos">
            Rick et Morty est une série télévisée animée créée par Dan Harmon et
            Justin Roiland, diffusée depuis le 2 décembre 2013 sur Adult Swim
            aux États-Unis et sur France 4 et Netflix en France. Elle suit les
            aventures de Rick Sanchez, un scientifique de génie alcoolique qui
            entraîne son petit-fils Morty Smith dans ses aventures périlleuses à
            travers les dimensions, alors que ce dernier a déjà des problèmes à
            l'école, ce qui va provoquer des tensions au sein de la famille...
          </p>
        </div>

       
      </div> 
      <Random />
    </>
  );
}
