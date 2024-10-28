import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { createClient } from "./utils/supabaseServerClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jerry's Favorite Podcasts",
  description:
    "Jerry uploads his favorite podcast episodes here, and crowd can upvote to pick their favorites.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = await createClient();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
