import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const videosDir = path.join(process.cwd(), "public/videos");
    const files = fs.readdirSync(videosDir).filter((file) => file.endsWith(".mp4"));

    const videos = files.map((file) => `/videos/${file}`);

    return NextResponse.json(videos);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to load videos" }, { status: 500 });
  }
}
