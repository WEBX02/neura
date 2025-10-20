import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SOSButton = ({ onPress, isActive = false }) => {
  return (
    <button
      onClick={onPress}
      className={cn(
        "relative w-48 h-48 rounded-full bg-primary flex items-center justify-center",
        "transition-all duration-300 active:scale-95",
        "glow-pulse",
        isActive && "animate-pulse"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <AlertCircle className="w-16 h-16 text-primary-foreground" />
        <span className="text-2xl font-bold text-primary-foreground">SOS</span>
      </div>
    </button>
  );
};

export default SOSButton;
