import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section className="space-y-12">
      <h1 className="text-2xl font-medium tracking-tight">Photos</h1>
      
      {/* First Grid - 3 columns */}
      <div className="photo-grid columns-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/photo${num}.jpg`}
              alt={`Photo ${num}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Second Grid - 2 columns */}
      <div className="photo-grid columns-2">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/photo${num}.jpg`}
              alt={`Photo ${num}`}
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Third Grid - 4 columns */}
      <div className="photo-grid columns-4">
        {[5, 6, 7, 8, 9].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/photo${num}.jpg`}
              alt={`Photo ${num}`}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
