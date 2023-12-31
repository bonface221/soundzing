import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter, Alegreya } from "next/font/google";
import "./globals.css";
import { sharedMetadata } from "./shared-metadata";

const inter = Inter({ subsets: ["latin"] });
const alegreya = Alegreya({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alegreya.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = sharedMetadata;
