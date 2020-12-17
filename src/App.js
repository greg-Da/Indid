import './App.css';
import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/all";
import Button from "./downloadBtnComponent";
import NavBar from "./navbarComponent";
import FirstPageComponent from "./FirstPageComponent";
import Psycho from "./psychoSectionComponent";
import SchoolComponent from "./SchoolComponent";
import FinalComponent from "./FinalPageComponent"

gsap.registerPlugin(ScrollTrigger);

function App() {


      return (

        <div className="App">

          <NavBar />
          <FirstPageComponent/>
          <Psycho/>
          <SchoolComponent/>
          <FinalComponent/>

        </div>

        );
      }
      
      export default App;
