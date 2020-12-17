import React, {useState, useEffect} from 'react';
import { TimelineLite } from "gsap/all";
import './App.css'

const SchoolComponent = () =>{

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
                display: "flex"
            }, 0)

    }, []);

    return (

        <div className="third">
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
                <button type="button" onClick={() => third_button_forward.play()}>Move forward</button>
            </div>
        </div>
    )
}

export default SchoolComponent
