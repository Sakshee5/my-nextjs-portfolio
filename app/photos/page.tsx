import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  // Win section with captions
  const winPhotos = [
    { src: "/photos/win1.jpg", caption: "Duke AI Hackathon Win" },
    { src: "/photos/win2.jpg", caption: "Won Chewy Unbound Competition - Team" },
    { src: "/photos/win3.jpg", caption: "Presenting at Chewy Unbound Competition" },
    { src: "/photos/win3.jpg", caption: "Presenting at Responsible AI Symposium at Duke" },
  ];

  // Art section
  const artPhotos = [
    "/photos/art1.jpg",
    "/photos/art2.jpg",
    "/photos/art3.jpg",
    "/photos/art4.jpg",
    "/photos/art5.jpg",

  ];

  // Fun section
  const funPhotos = [
    "/photos/fun1.jpg",
    "/photos/fun2.jpg",
    "/photos/fun3.jpg",
    "/photos/fun4.jpg",
    "/photos/fun5.jpg",
    "/photos/fun6.jpg",
  ];

  return (
    <section className="space-y-12">
      <h1 className="text-2xl font-medium tracking-tight">Photos</h1>

      {/* Win Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🏆 Wins</h2>
        <div className="photo-grid grid grid-cols-3 gap-4">
          {winPhotos.map((photo, index) => (
            <div key={index} className="photo-item">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
              <p className="mt-2 text-sm text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Art Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎨 Art</h2>
        <div className="photo-grid grid grid-cols-3 gap-4">
          {artPhotos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Art ${index + 1}`}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Fun Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎉 Fun</h2>
        <div className="photo-grid grid grid-cols-3 gap-4">
          {funPhotos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Fun ${index + 1}`}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
