import './App.css';
import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/all";




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
      backgroundImage: 'url(https://media3.giphy.com/media/3oEdv4idg2DBlVCU6I/giphy.gif)', 
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
        backgroundImage: 'none', 
        backgroundColor: 'rgb(252, 88, 88)',
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
        <h1 className="title before">test</h1>
        <a className="before" href="#" onClick={() => tlp.play()}>test</a>
        <h1 className="after">Hello !</h1>
        </div>
        );
      }
      
      export default App;