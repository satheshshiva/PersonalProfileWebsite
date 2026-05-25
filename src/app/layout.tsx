import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sathesh.us"),
  title: "Sathesh Sivashanmugam — Sr. Cybersecurity Engineer",
  description:
    "Sr. Cybersecurity Engineer II at American Express. 16+ years building secure systems and scalable architecture. Researcher, awards judge, Harvard-certified leader.",
  keywords: [
    "Sathesh Sivashanmugam",
    "Cybersecurity Engineer",
    "American Express",
    "Software Engineer",
    "Java",
    "Go",
    "Python",
    "Encryption",
    "Cloud Computing",
  ],
  authors: [{ name: "Sathesh Sivashanmugam" }],
  openGraph: {
    title: "Sathesh Sivashanmugam — Sr. Cybersecurity Engineer",
    description:
      "16+ years in secure systems & scalable architecture. Driving innovation at American Express.",
    url: "https://sathesh.us",
    siteName: "sathesh.us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathesh Sivashanmugam",
    description:
      "Sr. Cybersecurity Engineer II at American Express. Researcher. Harvard-certified leader.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
