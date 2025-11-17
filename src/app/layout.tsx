import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar/ScrollProgressBar";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Footer from "@/components/Footer/Footer"; // Updated path
import DynamicBackgrounds from "@/components/DynamicBackgrounds/DynamicBackgrounds"; // Updated path
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll"; // Import SmoothScroll

const inter = Inter({ subsets: ["latin"] });

// Added for Vercel deployment test
export const metadata: Metadata = {
  title: "Gwang-il's Portfolio",
  description: "A portfolio of projects by Gwang-il Jeon. Showcasing backend development skills, projects, and journey.",
  keywords: ["backend", "developer", "portfolio", "Next.js", "TypeScript", "Django", "Python"],
  authors: [{ name: "Gwang-il Jeon" }],
  openGraph: {
    title: "Gwang-il's Portfolio",
    description: "A portfolio of projects by Gwang-il Jeon. Showcasing backend development skills, projects, and journey.",
    url: "https://your-portfolio-url.com", // 실제 배포 URL로 변경 필요
    siteName: "Gwang-il's Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // 대표 이미지 URL로 변경 필요
        width: 1200,
        height: 630,
        alt: "Gwang-il Jeon's Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwang-il's Portfolio",
    description: "A portfolio of projects by Gwang-il Jeon. Showcasing backend development skills, projects, and journey.",
    creator: "@your_twitter_handle", // 트위터 핸들로 변경 필요
    images: ["https://your-portfolio-url.com/twitter-image.jpg"], // 트위터용 대표 이미지 URL로 변경 필요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-navy-dark text-light-text`}>
        <SmoothScroll /> {/* Add SmoothScroll component */}
        <CustomCursor />
        <ScrollProgressBar />
        <Header />
        <DynamicBackgrounds>
          <main className="relative">{children}</main>
        </DynamicBackgrounds>
        <Footer />
      </body>
    </html>
  );
}
