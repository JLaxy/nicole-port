export interface VideoItem {
  id: string;
  url: string;
  title?: string;
  description?: string;
}

export const videoData: VideoItem[] = [
  {
    id: "vid1",
    url: "/videos/vid1.mp4",
    title: "Montage Video",
    description: "Quick, fast-paced clips highlighting ambiance, food, and location."
  },
  {
    id: "vid2",
    url: "/videos/vid2.mp4",
    title: "Voice Over Video",
    description: "A long, detailed video with storytelling that guides the viewer through the experience."
  },
  {
    id: "vid3",
    url: "/videos/vid3.mp4",
    title: "Photo Slide Video",
    description: "A slideshow-style format that showcases clear shots of the place and its offerings with detailed text overlays."
  }
];
