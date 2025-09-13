import Hero from "@/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome to Next.js!</h1>
      {Hero()}
    </div>
  );
}
