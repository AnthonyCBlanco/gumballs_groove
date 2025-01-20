import React, { useEffect, useState } from "react";
import Banner from "../assets/bubble_gumm.jpg";
import Listener from "./listening";

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
      className="bg-pink-300 text-black p-4 rounded-lg shadow-md h-screen overflow-hidden relative isolate"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "30% auto",
        backgroundPosition: `calc(50% + ${scrollPosition * 0.5}px) calc(50% + ${scrollPosition * 0.5}px)`, // Adjust the transition speed by changing the multiplier
        transition: "background-position 0.2s ease-in-out", // Adjust the transition duration and easing function as needed
      }}
    >
      <div className="flex items-center justify-center">
        <p className="text-lg font-semibold mb-4">Check Out My Latest Mix</p>
      </div>

      <div className="flex items-center justify-center">
        <Listener />
      </div>

      
    </section>
  );
};

export default Hero;