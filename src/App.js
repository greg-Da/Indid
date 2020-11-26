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
    tl.from(".test", {
      x:200,
      duration: 1.5,
      opacity: 0,
    })
    
    tlp.to(".App", {
         duration: .5,
         backgroundImage: 'url(https://media3.giphy.com/media/3oEdv4idg2DBlVCU6I/giphy.gif)', 
         opacity: 1 })
         .to(".test", {
            duration: 1.5,
            display: "none",
          }, 0)
        .to(".App",{
            duration: .5,
            backgroundImage: 'none', 
            backgroundColor: 'rgb(252, 88, 88)',
            opacity: 1 },"+=0.5")
        
  }, []);



  return (
    <div className="App">
      <h1 className="test">test</h1>
      <a href="#" onClick={() => tlp.play()}>test</a>
    </div>
  );
}

export default App;