import { useRef, useEffect } from 'react';

export interface IVideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

const VideoPlayer = ({ src, isPlaying }: IVideoPlayerProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
};

export { VideoPlayer };
