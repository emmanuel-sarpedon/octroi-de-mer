import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://octroi-de-mer.myapp.re",
      priority: 1.0,
    },
  ];
}
