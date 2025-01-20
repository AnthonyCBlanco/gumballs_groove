import React, { useEffect, useState } from "react";
import Banner from "../assets/bubble_gumm.jpg";
import Listener from "./listening";
import GumBall from "../assets/gumball.png";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="pt-24"
    >
      <div className="flex items-center justify-center">
        <img
          src={GumBall}></img>
      </div>

      <div className="flex items-center justify-center">
        <Listener />
      </div>

      
    </section>
  );
};

export default Hero;