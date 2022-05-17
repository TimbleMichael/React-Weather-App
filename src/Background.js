import React from "react";
import video1 from "./Videos/Clouds.mp4";
import video2 from "./Videos/Thunderstorm.mp4";
import video3 from "./Videos/Clear.mp4";
import video4 from "./Videos/Snow.mp4";
import video5 from "./Videos/Drizzle.mp4";
import video6 from "./Videos/Rain.mp4";
import video7 from "./Videos/Ash.mp4";
import video8 from "./Videos/Mist.mp4";
import video9 from "./Videos/Haze.mp4";
import video10 from "./Videos/Dust.mp4";
import video11 from "./Videos/Fog.mp4";
import video12 from "./Videos/Sand.mp4";
import video13 from "./Videos/Smoke.mp4";

function Background(props) {

    const videos = [
        {
            name:"Clouds",
            background: video1

        },
        {
            name:"Thunderstorm",
            background: video2
        },
        {
            name:"Clear",
            background: video3   
        },
        {
            name:"Snow",
            background: video4
        },
        {
            name:"Drizzle",
            background: video5
        },
        {
            name:"Rain",
            background: video6
        },
        {
            name:"Ash",
            background: video7
        },
        {
            name:"Mist",
            background: video8
        },
        {
            name:"Haze",
            background: video9
        },
        {
            name:"Dust",
            background: video10
        },
        {
            name:"Fog",
            background: video11
        },
        {
            name:"Sand",
            background: video12
        },
        {
            name:"Smoke",
            background: video13
        }
        
        
    ]

    const videoUrl = videos.find(el => el.name === props.weatherDescription)?.background

    return (
    <div>

        <video id="background" key={videoUrl} autoPlay loop muted>
            <source src = {videoUrl} type="video/mp4"/> 
        </video>
    </div>
    )
}



export default Background;




