
import { Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MicrophoneButtonProps {
  onRecordStart: () => void;
  onRecordEnd: () => void;
}

const MicrophoneButton = ({ onRecordStart, onRecordEnd }: MicrophoneButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleMicClick = () => {
    if (isRecording) {
      setIsRecording(false);
      onRecordEnd();
    } else {
      setIsRecording(true);
      onRecordStart();
    }
  };

  return (
    <div className="relative">
      {isRecording && (
        <div className="absolute inset-0 rounded-full music-gradient opacity-70 animate-pulse-ring" />
      )}
      <Button
        className={cn(
          "h-24 w-24 rounded-full music-gradient shadow-lg transition-transform", 
          isRecording ? "scale-110 animate-bounce-subtle" : "hover:scale-105"
        )}
        onClick={handleMicClick}
      >
        <Mic 
          className={cn("h-10 w-10 text-white", isRecording && "animate-pulse")} 
        />
      </Button>
    </div>
  );
};

export default MicrophoneButton;
