import React, {useState, useEffect} from 'react';
import {TimelineLite} from "gsap/all";
import './psychoSection.css'
import did from './images/did2.jpg'
import didBis from './images/did3.jpeg'


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
                    <div className="tile is-ancestor">
                        <article className="tile is-child box mt-4 ">
                            <p className="title text-center">Dissociative Identity Disorder (Multiple Personality Disorder)</p>
                        </article>
                    </div>
                    <div className="d-flex cards">
                        <div className=" left d-flex">
                            <div className=" top-left-image-text-column d-flex flex-column">
                                <div className=" top-left-image-text-row d-flex">
                                    <div className="image-left">
                                        <img src={did}/>
                                    </div>
                                    <div className="text-left card">
                                        <div className="card-body">
                                            <h5 className="card-title">What is DID ?</h5>

                                            <p className="psychoSectionText">DID is a psychological response to traumas suffered in a specific time
                                                window in early childhood or a dissociative disorder, and a complex post traumatic stress syndrome
                                                {/*when a person experiences 2 or more identity states in one body.*/}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-bottom-left card">
                                    <div className="card-body">
                                        <h5 className="card-title">What is the cause ?</h5>

                                        <p className="psychoSectionText">
                                            Dissociative Identity Disorder is caused by "overwhelming experiences,
                                            traumatic events, and/or abuse occurring in childhood",
                                            particularly when traumas begin before age 5.
                                            The child's repeated, overwhelming experiences
                                            usually occur alongside disturbed or disrupted
                                            attachment between the parent/caregiver and the child.
                                            Dissociative Identity Disorder is often, but not always,
                                            caused by early child abuse (including neglect and the failure to respond to the child).
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="second_right" className=" right d-flex flex-column">
                            <div className="text-right card">
                                <div className="card-body">
                                    <h5 className="card-title">What is like to have DID ?</h5>

                                    <p className="psychoSectionText">
                                        Disruption of identity characterized by two or more distinct personality states,
                                        which may be described in some cultures as an experience of possession.
                                        The disruption of marked discontinuity in sense of self and sense of agency,
                                        accompanied by related alterations in affect, behavior, consciousness, memory,
                                        perception, cognition, and/or sensory-motor functioning.
                                        These signs and symptoms may be observed by others or reported by the individual.

                                    </p>

                                </div>
                            </div>
                            <div className="image-right bg-light">
                                <img src={didBis}/>
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
