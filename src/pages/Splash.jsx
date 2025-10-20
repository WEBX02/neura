import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This timer will navigate to the dashboard after all animations are complete.
    // The total animation duration is 3 seconds (1s pause + 1.5s shine + 0.5s slide).
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3500); // A little buffer time

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    // This wrapper will handle the slide-up-and-exit animation
    <div className="splash-page-wrapper">
      <h1 className="splash-text-v2">NEURA</h1>
    </div>
  );
};

export default Splash;

