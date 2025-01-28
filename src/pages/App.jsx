import React from "react"
import Navbar from "../components/navbar.jsx"
import Banner from "../assets/pink_gradiant.jpg";
import FeaturedWork from "../components/featuredwork.jsx";
import Hero from "../components/hero.jsx";
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
    className="bg-gradient-to-br from-pink-200 to-purple-300 text-black p-4 shadow-md  overflow-hidden relative isolate">   
      
      <Navbar />
      <Hero />
      <FeaturedWork />
    
    </section>
 

    
  )
  
}

export default App
