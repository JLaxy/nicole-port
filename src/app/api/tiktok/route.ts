import Tiktok from "@xct007/tiktok-scraper";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "Missing TikTok URL" }), { status: 400 });
  }

  try {
    const isVideo = url.includes("/video/");
    const data = await Tiktok(url, {
      parse: isVideo, // parse only for videos; profile may fail with parse:true
    });

    // If it's a profile, extract some stats manually
    if (!isVideo) {
      const user = (data as any)?.user || (data as any)?.userInfo || {};
      const stats = user?.stats || {};
      const profileData = {
        username: user?.uniqueId || user?.nickname || "N/A",
        followers: stats?.followerCount ?? 0,
        following: stats?.followingCount ?? 0,
        likes: stats?.heart ?? 0,
        raw: data, // include raw data for inspection
      };
      return new Response(JSON.stringify(profileData, null, 2), { status: 200 });
    }

    // For videos, return parsed or raw data as is
    return new Response(JSON.stringify(data, null, 2), { status: 200 });
  } catch (error: any) {
    console.error("TikTok Scraper Error:", error.message);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch TikTok data. Check URL.",
        detail: error.message,
      }),
      { status: 500 }
    );
  }
}
