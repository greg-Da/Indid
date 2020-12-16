import './App.css';
import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/all";
import Button from "./downloadBtn";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const [tl] = useState(new TimelineLite());
  const [tlp] = useState(new TimelineLite({paused:true}));
  
  
  useEffect(() => {
    tl.from(".title", {
      x:200,
      duration: 1.5,
      opacity: 0,
    })
    
    tlp.to(".App", {
      duration: .9,
      backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/788768540336586792/MOSHED-2020-12-16-15-3-51.gif)',
      opacity: 1 })
      
      .to(".App", 0.1,{
        x: "+=10",
        yoyo: true,
        repeat: 11,
      }, 0)
      
      .to(".before", {
        display: "none"
      }, 0)
      
      .to(".App",{
        duration: .5,
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800429102759988/783715777953923102/decor-ecole.jpg)',
        opacity: 1 },"+=1.5")
        
      .from(".after", {
        y:200,
        duration: 1.5,
        opacity: 0,
      })

      .to(".after", {
        display: "block"
      }, 0)
        
      }, []);
      

      return (

        <div className="App">
          <nav>
            <div className="nav-wrapper">
              <img src="https://cdn.discordapp.com/attachments/755800455506034728/788775593503358996/indid.png"/>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <Button/> </li>
              </ul>
            </div>
          </nav>
        <div className="before">
          <div className="container" id="accueil_container">
            <div className="row" id="accueil_row">
              <div className="col-10">
                <p>CatchPhrase</p>
                <p>
                  Incarnez Lilia, une jeune fille souffrant du trouble dissociatif de l'identité.
                  Accompagnez-là au cours de la découverte de sa condition, et découvrez sa relation
                  avec le mystérieux Fabrice.
                </p>
              </div>
              <div className="col-2">
                <button type="button" onClick={() => tlp.play()}>Move forward</button>
              </div>
            </div>
          </div>
        </div>
          <div className="after">
            <div id="title_section" className="container">
              <h4>Title - School section</h4>
            </div>

            <div className="container">

              <div className="row">

                <div id="first_part" className="col">
                  <div id="first_part_text">
                    <h4>Text</h4>
                  </div>

                  <div id="first_part_img">
                    <h4>Img</h4>
                  </div>
                </div>

                <div id="second_part" className="col">
                  <div className="second_col_text">
                    <h4>Text</h4>
                  </div>

                  <div className="second_col_text">
                    <h4>Text</h4>
                  </div>

                  <div className="second_col_text">
                    <h4>Text</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
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
