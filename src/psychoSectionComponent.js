import React, {useState, useEffect} from 'react';
import {TimelineLite} from "gsap/all";
import './psychoSection.css'


const Psycho = (props) =>{
    const [second_button_forward] = useState(new TimelineLite({paused:true}));
    useEffect(() => {

        second_button_forward.to(".App", {
            duration: .9,
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/788768540336586792/MOSHED-2020-12-16-15-3-51.gif)',
            opacity: 1 })

            .to(".App", 0.1,{
                x: "+=10",
                yoyo: true,
                repeat: 11,
            }, 0)

            .to(".second", {
                display: "none"
            }, 0)

            .to(".App",{
                duration: .5,
                backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800429102759988/783715777953923102/decor-ecole.jpg)',
                opacity: 1 },"+=1.5")

            .from(".third", {
                y:200,
                duration: 1.5,
                opacity: 0,
            })

            .to(".third", {
                display: "block"
            }, 0)

    }, []);


    return(
        <div className="second">
            <div className="section-psychology">
                <div className="container">
                    <div className="tile is-ancestor pt-5">
                        <article className="tile is-child box mt-4 ">
                            <p className="title text-center">Psychology Section</p>
                        </article>
                    </div>
                    <div className="d-flex cards">
                        <div className=" left d-flex">
                            <div className=" top-left-image-text-column d-flex flex-column">
                                <div className=" top-left-image-text-row d-flex">
                                    <div className="image-left">
                                        <img src="https://bulma.io/images/placeholders/480x480.png"/>
                                    </div>
                                    <div className="text-left card">
                                        <div className="card-body">
                                            <h5 className="card-title">Text</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-bottom-left card">
                                    <div className="card-body">
                                        <h5 className="card-title">Text</h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="second_right" className=" right d-flex flex-column">
                            <div className="text-right card">
                                <div className="card-body">
                                    <h5 className="card-title">Text</h5>

                                </div>
                            </div>
                            <div className="image-right bg-light">
                                <img src="https://bulma.io/images/placeholders/480x480.png"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button type="button" onClick={() => second_button_forward.play()}>Move forward</button>
        </div>

    )

}


export default Psycho
