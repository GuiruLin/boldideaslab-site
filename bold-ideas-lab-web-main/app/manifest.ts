import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bold Ideas Lab",
    short_name: "Bold Ideas Lab",
    description: "Premium youth creativity and AI education for international families.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e6",
    theme_color: "#002fa7",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
