import type { Metadata } from "next";
import { Secular_One, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Display face — matches the headline font used on srisakthi.net
const secular = Secular_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-secular",
  display: "swap",
});

// Body face — also lifted from the live brand site
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sri Sakthi Cinemas — Premium Cinema Experiences",
    template: "%s · Sri Sakthi Cinemas",
  },
  description:
    "Sri Sakthi Cinemas operates six landmark multiplexes across Tamil Nadu. Discover our properties, book tickets, and explore partnership opportunities for your development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${secular.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
