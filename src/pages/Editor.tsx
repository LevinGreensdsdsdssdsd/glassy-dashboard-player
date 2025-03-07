
import { Card } from "@/components/ui/card";
import { Player } from "@remotion/player";
import { VideoComposition } from "@/remotion/VideoComposition";
import { useCallback, useState } from "react";

export default function Editor() {
  const [playing, setPlaying] = useState(false);

  const handleStateChange = useCallback((state: {
    isPlaying: boolean;
    frame: number;
  }) => {
    setPlaying(state.isPlaying);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Video Editor</h1>
      
      <Card className="backdrop-blur-md bg-card/50 border border-border/50 p-4">
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <Player
            component={VideoComposition}
            durationInFrames={5 * 150} // 5 videos × 150 frames
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop
            controls
            onStateChange={handleStateChange}
          />
        </div>
      </Card>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Sequence Information</h2>
        <p>
          This sequence contains 5 videos from Pexels, each playing for 5 seconds at 30fps.
        </p>
      </div>
    </div>
  );
}
