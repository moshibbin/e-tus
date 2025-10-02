import { useEffect } from "react";

function useScrollEffect() {
  useEffect(() => {
    const header = document.querySelector(".menu__scroll");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useScrollEffect;
