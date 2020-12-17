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

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [third_button_forward] = useState(new TimelineLite({paused:true}));

  useEffect(() => {
  third_button_forward.to(".App", {
    duration: .9,
    backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/788768539363508244/MOSHED-2020-12-16-15-4-11.gif)',
    opacity: 1 })

      .to(".App", 0.1,{
        x: "+=10",
        yoyo: true,
        repeat: 11,
      }, 0)

      .to(".third", {
        display: "none"
      }, 0)

      .to(".App",{
        duration: .5,
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800429102759988/783715777953923102/decor-ecole.jpg)',
        opacity: 1 },"+=1.5")

      .from(".final", {
        y:200,
        duration: 1.5,
        opacity: 0,
      })

      .to(".final", {
        display: "block"
      }, 0)

}, []);


      return (

        <div className="App">

          <NavBar />
          <FirstPageComponent/>
          <Psycho/>
          <SchoolComponent/>
          <div className="final">
            <div className="explanations">
              <div><p>Download the zip file</p></div>
              <div><p>Extract the zip</p></div>
              <div><p>Execute the .exe</p></div>
            </div>

            <div className="downloader">
              <Button/>
            </div>
          </div>
        </div>

        );
      }
      
      export default App;
