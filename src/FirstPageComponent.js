import React, {useState, useEffect} from 'react';
import { TimelineLite } from "gsap/all";
import './firstPage.css'


const FirstPageComponent = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [first_button_forward] = useState(new TimelineLite({paused:true}));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        first_button_forward.to(".App", {
            duration: .9,
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/755800455506034728/788768539363508244/MOSHED-2020-12-16-15-4-11.gif)',
            opacity: 1 })

            .to(".App", 0.1,{
                x: "+=10",
                yoyo: true,
                repeat: 11,
            }, 0)

            .to(".first", {
                display: "none"
            }, 0)

            .to(".App",{
                duration: .5,
                backgroundImage: 'url(https://cdn.discordapp.com/attachments/717354031370076190/788787532853805056/decor-salle-de-psy.jpg)',
                opacity: 1 },"+=1.5")

            .from(".second", {
                y:200,
                duration: 1.5,
                opacity: 0,
            })

            .to(".second", {
                display: "block"
            }, 0)

    }, []);

    return(
        <div className="first">
            <div className="container-b">
                    <div className="row" id="container-row" >
                        <div className="col-11">
                            <div className="columns">
                                <div className="column is-full">
                                    <div className="column is-6">
                                        <h1 className="title">Laissez vous Guider</h1>
                                    </div>
                                    <div className="column is-6">
                                        <p>
                                            Incarnez Lilia, une jeune fille souffrant du trouble dissociatif de l'identité.
                                            <br />
                                            Accompagnez-là au cours de la découverte de sa condition, et découvrez sa relation
                                            avec le mystérieux Fabrice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <button type="button" onClick={() => first_button_forward.play()}>Move forward</button>
                        </div>
                    </div>
            </div>
        </div>

    )
};


export default FirstPageComponent;
