
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import MicrophoneButton from "@/components/MicrophoneButton";
import MusicResult from "@/components/MusicResult";
import { Music, Headphones } from "lucide-react";

// Mock data - this would be replaced with actual API call results
const mockMusicResult = {
  id: "1",
  title: "Shape of You",
  artist: "Ed Sheeran",
  album: "÷ (Divide)",
  coverImage: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
};

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchResult, setSearchResult] = useState<null | typeof mockMusicResult>(null);

  const handleRecordStart = () => {
    setIsListening(true);
    setSearchResult(null);
    toast({
      title: "Ouvindo...",
      description: "Tente aproximar o microfone da fonte de áudio.",
    });

    // Simulate API call with timeout
    setTimeout(() => {
      setSearchResult(mockMusicResult);
      setIsListening(false);
    }, 3000);
  };

  const handleRecordEnd = () => {
    setIsListening(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-slate-800">
      <div className="container max-w-4xl px-4 py-12">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Headphones className="h-10 w-10 text-hearNew-purple" />
            <h1 className="text-4xl font-bold text-white">hear<span className="text-hearNew-purple">New</span></h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Descubra qualquer música instantaneamente
          </p>
        </header>

        <main className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4">
            <MicrophoneButton 
              onRecordStart={handleRecordStart} 
              onRecordEnd={handleRecordEnd} 
            />
            <p className="text-lg font-medium text-gray-300">
              {isListening 
                ? "Ouvindo..." 
                : "Toque para reconhecer música"}
            </p>
          </div>

          {searchResult && (
            <div className="w-full animate-fade-in">
              <MusicResult result={searchResult} />
            </div>
          )}

          {!isListening && !searchResult && (
            <div className="text-center text-muted-foreground flex flex-col items-center">
              <Music className="h-16 w-16 mb-4 text-hearNew-purple opacity-50" />
              <p>Toque no botão do microfone para identificar uma música</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
