import React, { useEffect, useState } from "react";
import Banner from "../assets/bubble_gumm.jpg";
import Listener from "./listening";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track vertical scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="relative isolate px-6 pt-14 lg:px-8 h-screen overflow-hidden bg-repeat"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "auto", // Keeps the original size of the image
          backgroundPosition: `${scrollY * 0.1}px ${scrollY * 0.1}px`, // Moves in both X and Y directions
        }}
      >
        {/* Your content goes here */}
      </div>

      <div>
        <div>
          <Listener />
        </div>
      </div>
    </>
  );
};

export default Hero;
