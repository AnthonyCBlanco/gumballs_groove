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
      className="pt-24"
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