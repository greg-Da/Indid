import React, {useState, useEffect} from 'react';
import { TimelineLite } from "gsap/all";
import './App.css'

const SchoolComponent = () =>{

    const [third_button_forward] = useState(new TimelineLite({paused:true}));

    useEffect(() => {
        third_button_forward.to(".App", {
            duration: .9,
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/789140885127299132/MOSHED-2020-12-17-15-43-55.gif)',
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
                backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/789131078367051826/unknown.png)',
                opacity: 1 },"+=1.5")

            .from(".final", {
                y:200,
                duration: 1.5,
                opacity: 0,
            })

            .to(".final", {
                display: "flex"
            }, 0)

    }, []);

    return (

        <div className="third">
            <div id="title_section" className="container">
                <h4>The Game</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div id="first_part" className="col">
                        <div id="first_part_text">
                            <h4>You play Lilia</h4>
                            <br />
                             <h4>A young girl suffering from dissociative identity,
                                 Who wants to clear up her problems</h4>
                        </div>
                        <div id="first_part_img">

                        </div>
                    </div>
                    <div id="second_part" className="col">
                        <div className="second_col_text">
                            <h4>An experience that will provide better informations and
                                a better understanding of identity dissociation</h4>
                        </div>
                        <div className="second_col_text">
                            <h4>Try to understand your journey in your school with the help of your psychologist</h4>
                        </div>
                        <div className="second_col_text">
                            <h4>Download and play the game help Lilia in her day</h4>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => third_button_forward.play()}>Move forward</button>
            </div>
        </div>
    )
}

export default SchoolComponent
