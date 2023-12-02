import { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: "Boniface Maina's Design Project",
  description:
    "Check out the Figma design project that Boniface Maina has been converted to a next js application. It's responsive across all devices, ranging from desktop to mobile screens. Learn more about the design process and how to use Figma effectively.",
  creator: "Boniface Maina",
  metadataBase: new URL("https://bonface221-soudzing.netlify.app/"),
  openGraph: {
    title: "Boniface Maina's Design Project",
    description:
      "Check out the Figma design project that Boniface Maina has been working on. It's responsive across all devices, ranging from desktop to mobile screens. Learn more about the design process and how to use Figma effectively.",
    url: "https://bonface221-soudzing.netlify.app/",
    siteName: "SoundDZing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/twin221/image/upload/v1695118397/mhub/u5ud787lc2ozkvnovqko.jpg",
        width: 1200,
        height: 630,
        alt: "Boniface Maina's Design Project",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
