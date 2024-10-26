import Image from "next/image";
import PodcastTracker from "@/components/PodcastTracker";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Podcast Tracker</h1>
        <PodcastTracker />
      </div>
    </main>
  );
}
