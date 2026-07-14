export const getVideoElement = (videoRef) => {
  return videoRef.current;
};

export const isVideoReady = (video) => {
  return (
    video &&
    video.readyState >= 2 &&
    video.videoWidth > 0 &&
    video.videoHeight > 0
  );
};