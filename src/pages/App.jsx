import React from "react"
import Navbar from "../components/navbar.jsx"
import Banner from "../assets/pink_gradiant.jpg";
import { useEffect, useState } from "react";

function App() {

const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    
    <section
    className="bg-pink-300 text-black p-4 rounded-lg shadow-md h-screen overflow-hidden relative isolate"
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "100% auto",
            backgroundPosition: `calc(50% + ${scrollPosition * 0.5}px) calc(50% + ${scrollPosition * 0.5}px)`, // Adjust the transition speed by changing the multiplier
            transition: "background-position 0.2s ease-in-out", // Adjust the transition duration and easing function as needed
          }}
    >   
      
      <Navbar />
    
    </section>
 

    
  )
  
}

export default App
