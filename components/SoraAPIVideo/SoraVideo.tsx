'use client'
import { useEffect } from "react";

type Props = {}

const SoraVideo = (props: Props) => {
  useEffect(() => {
    // Get the video element by its ID
    const video = document.getElementById('myVideo') as HTMLVideoElement;

    // Play the video when the component mounts
    video.play();

    // Optionally, you can pause the video when the component unmounts
    return () => {
      video.pause();
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Video element with autoplay and no controls */}
      <video id="myVideo" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 top-0 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10 px-5">
          <h1 className="text-6xl lg:text-8xl text-white  text-center">Breathtaking videos</h1>
          <p className="text-white font-bold text-center text-4xl">integrate <span className="inline-block bg-gradient-to-r from-white/60 via-white/70 to-white/90 bg-clip-text text-transparent">Sora API</span> into your AI applications!</p>
        </div>
      </div>
    </div>
  );
}

export default SoraVideo;
