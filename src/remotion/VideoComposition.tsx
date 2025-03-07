
import { AbsoluteFill, useCurrentFrame, spring, Sequence } from "remotion";

const videoUrls = [
  "https://videos.pexels.com/video-files/10119618/10119618-hd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/9945506/9945506-hd_1080_1920_30fps.mp4",
  "https://videos.pexels.com/video-files/30876553/13202470_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/2711227/2711227-uhd_2560_1440_24fps.mp4",
  "https://videos.pexels.com/video-files/5803633/5803633-uhd_2560_1440_25fps.mp4"
];

const VIDEO_DURATION = 150; // frames

export const VideoComposition = () => {
  return (
    <AbsoluteFill className="bg-black">
      {videoUrls.map((url, index) => (
        <Sequence
          key={index}
          from={index * VIDEO_DURATION}
          durationInFrames={VIDEO_DURATION}
        >
          <VideoClip url={url} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const VideoClip = ({ url }: { url: string }) => {
  const frame = useCurrentFrame();
  const opacity = spring({
    frame,
    from: 0,
    to: 1,
    fps: 30,
    durationInFrames: 30,
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <video src={url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </AbsoluteFill>
  );
};
