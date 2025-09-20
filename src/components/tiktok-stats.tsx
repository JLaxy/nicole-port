"use client";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

// Define the types for TikTok data
interface TikTokStatsData {
  author?: {
    uniqueId?: string;
  };
  desc?: string;
  stats?: {
    diggCount?: number;
    followerCount?: number;
    followingCount?: number;
  };
  error?: string;
}

interface TikTokStatsProps {
  tiktokUrl: string;
}

export function Following({ tiktokUrl }: TikTokStatsProps) {
  const [data, setData] = useState<TikTokStatsData | null>(null);

  useEffect(() => {
    fetch(`/api/tiktok?url=${encodeURIComponent(tiktokUrl)}`)
      .then((res) => res.json())
      .then(setData)
      .catch((err) =>
        setData({ error: "Failed to fetch TikTok data: " + err.message })
      );
  }, [tiktokUrl]);

  if (!data) return <Spinner />;
  if (data.error) return <p>Error: {data.error}</p>;

  return (
    <>
        {data.stats?.followingCount ?? 0}
    </>
  );
}
