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
    { src: "/photos/win4.jpg", caption: "Presenting at Responsible AI Symposium at Duke" },
  ];

  const artPhotos = [
    "/photos/art1.jpg",
    "/photos/art2.jpg",
    "/photos/art3.jpg",
    "/photos/art4.jpg",
    "/photos/art5.jpg",
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {winPhotos.map((photo, index) => (
            <div key={index} className="relative aspect-[4/3] w-full group overflow-hidden rounded-md bg-gray-100">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm text-center font-medium px-4 py-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Art Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎨 Art</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artPhotos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full bg-gray-100 rounded-md shadow-sm overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Art ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fun Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎉 Fun</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {funPhotos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full bg-gray-100 rounded-md shadow-sm overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Fun ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}