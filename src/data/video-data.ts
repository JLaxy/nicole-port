export interface VideoItem {
  id: string;
  url: string;
  description?: string;
}

export const videoData: VideoItem[] = [
  {
    id: "vid1",
    url: "/videos/vid1.mp4",
    description: "Voice Over Video – A long, detailed video with storytelling that guides the viewer through the experience."
  },
  {
    id: "vid2",
    url: "/videos/vid2.mp4",
    description: "Montage Video – Quick, fast-paced clips highlighting ambiance, food, and location."
  },
  {
    id: "vid3",
    url: "/videos/vid3.mp4",
    description: "Photo Slide Video – A slideshow-style format that showcases clear shots of the place and its offerings with detailed text overlays."
  }
];
