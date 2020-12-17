import React from 'react';
import Button from "./downloadBtnComponent";

const FinalComponent = (props) => {
    return (
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
    )
}

export default FinalComponent;