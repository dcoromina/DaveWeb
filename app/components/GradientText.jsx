import { useEffect } from "react";

const GradientText = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const text = document.querySelector(".gradient-text");
      const { clientX, clientY } = event;

      // Get window size and mouse position as a percentage of window width/height
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPercent = (clientX / width) * 100;
      const yPercent = (clientY / height) * 100;

      // Apply the background position to create the gradient-follow effect
      text.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-text text-6xl font-bold text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-black bg-clip-text bg-[length:200%]">
      Follow the Gradient
    </div>
  );
};

export default GradientText;
