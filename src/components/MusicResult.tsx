
import { Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MusicResultProps {
  result: {
    id: string;
    title: string;
    artist: string;
    album?: string;
    coverImage?: string;
  } | null;
}

const MusicResult = ({ result }: MusicResultProps) => {
  if (!result) return null;

  return (
    <Card className="w-full max-w-md bg-blur border-none shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold">Música encontrada!</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <div className={cn("h-20 w-20 rounded-md overflow-hidden flex items-center justify-center music-gradient")}>
          {result.coverImage ? (
            <img 
              src={result.coverImage} 
              alt={`${result.title} cover`} 
              className="h-full w-full object-cover"
            />
          ) : (
            <Music className="h-12 w-12 text-white" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl line-clamp-1">{result.title}</h3>
          <p className="text-muted-foreground">{result.artist}</p>
          {result.album && (
            <p className="text-sm text-muted-foreground">{result.album}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicResult;
