import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo7.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo8.jpg",
            alt: "",
            href: "",
          },
          {
            src: "/photos/photo9.jpg",
            alt: "",
            href: "",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "" },
          { src: "/photos/photo2.jpg", alt: "" },
          { src: "/photos/photo3.jpg", alt: "" },
          { src: "/photos/photo4.jpg", alt: "" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo5.jpg", alt: "" },
          { src: "/photos/photo6.jpg", alt: "" },
          { src: "/photos/photo7.jpg", alt: "" },
          { src: "/photos/photo8.jpg", alt: "" },
          { src: "/photos/photo9.jpg", alt: "" },
        ]}
      />
    </section>
  );
}
