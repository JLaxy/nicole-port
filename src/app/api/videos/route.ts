import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { videoData, VideoItem } from "@/data/video-data";

export async function GET() {
  try {
    const videosDir = path.join(process.cwd(), "public/videos");
    const files = fs.readdirSync(videosDir).filter((file) => file.endsWith(".mp4"));

    const videos: VideoItem[] = files.map((file) => {
      const url = `/videos/${file}`;
      const existing = videoData.find((v) => v.url === url);

      return (
        existing || {
          id: file,
          url,
        }
      );
    });

    return NextResponse.json(videos);
  } catch (error) {
    // console.error("API error:", error);
    return NextResponse.json({ error: "Failed to load videos" }, { status: 500 });
  }
}
