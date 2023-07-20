import React, { useEffect, useState } from 'react'
import "./BtnUp.css";

export default function BtnUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsVisible(scrollTop > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <div>
        <button
      className={`btn-up ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      Up
    </button>
    </div>
  )
}
