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
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/win${num}.jpg`}
              alt={`Photo ${num}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* First Grid - 3 columns */}
      <div className="photo-grid columns-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/art${num}.jpg`}
              alt={`Photo ${num}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* First Grid - 3 columns */}
      <div className="photo-grid columns-3">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="photo-item">
            <Image
              src={`/photos/fun${num}.jpg`}
              alt={`Photo ${num}`}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
    </section>
  );
}
