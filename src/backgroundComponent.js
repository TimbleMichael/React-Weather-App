import React from "react";
import video1 from "./Videos/Clouds.mp4"
import video2 from "./Videos/Thunderstorm.mp4"

function backgroundChange(props) {


    const videos = [
        {
            name:"Clouds",
            background: video1

        },
        {
            name:"Thunderstorm",
            background: video2
        }
    ]

    return (
        <div>

            <video id="background" autoPlay loop muted>
                <source src = {videos[0].name === props.weatherDescription ? videos[0].background : null}
               
                
                
                
                
                type="video/mp4"

                    
                /> 
                
            </video>

            
        </div>
    )
}



export default backgroundChange;




