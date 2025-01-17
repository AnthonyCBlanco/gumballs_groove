import React from "react"
import Banner from '../assets/bubble_gumm.jpg'
import Listener from "./listening"

const Hero = () => {

    return(
    <>
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen" style={{backgroundImage: `url(${Banner})`}}>
       
        </div>

        <div>
            <div ><Listener /></div>
        </div>
    </>
    )
}

export default Hero