"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  const startPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    // Some iOS in-app browsers ignore the JSX attributes until they are also
    // applied directly to the media element before play() is requested.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    try {
      await video.play();
      setNeedsTap(false);
    } catch {
      setNeedsTap(true);
    }
  }, []);

  useEffect(() => {
    void startPlayback();

    const retry = () => void startPlayback();
    const retryWhenVisible = () => {
      if (document.visibilityState === "visible") retry();
    };

    window.addEventListener("pageshow", retry);
    document.addEventListener("visibilitychange", retryWhenVisible);
    document.addEventListener("touchstart", retry, { once: true, passive: true });
    document.addEventListener("pointerdown", retry, { once: true, passive: true });

    return () => {
      window.removeEventListener("pageshow", retry);
      document.removeEventListener("visibilitychange", retryWhenVisible);
      document.removeEventListener("touchstart", retry);
      document.removeEventListener("pointerdown", retry);
    };
  }, [startPlayback]);

  return <>
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      disablePictureInPicture
      onCanPlay={() => void startPlayback()}
    >
      <source src={src} type="video/mp4" />
    </video>
    {needsTap && <button className="video-play-fallback" type="button" onClick={() => void startPlayback()} aria-label="Play background video">
      <span aria-hidden="true">▶</span> Play video
    </button>}
  </>;
}
