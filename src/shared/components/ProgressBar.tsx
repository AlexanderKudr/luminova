import { useEffect } from "react";

export const ProgressBar = () => {
  const progressBar = () => {
    const pixelsFromTop = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const difference = documentHeight - windowHeight;
    const percentage = (100 * pixelsFromTop) / difference;
    document.querySelector<HTMLElement>(".ProgressBar-inner")!.style.width = `${percentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", progressBar);
    return () => window.removeEventListener("scroll", progressBar);
  }, []);

  return (
    <div className="ProgressBar">
      <div className="ProgressBar-inner"></div>
    </div>
  );
};
