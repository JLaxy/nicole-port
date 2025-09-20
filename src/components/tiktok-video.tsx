interface TikTokVideoProps {
  videoUrl: string;
}

export default function TikTokVideo({ videoUrl }: TikTokVideoProps) {
  const videoId = getVideoId(videoUrl);

  if (!videoId) return <p>Invalid video URL</p>;

  return (
    <iframe
      src={`https://www.tiktok.com/embed/${videoId}`}
      width={325}
      height={580}
      frameBorder="0"
      allowFullScreen
      scrolling="no"
    ></iframe>
  );
}

// Helper to extract video ID from URL
function getVideoId(url: string) {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
}
