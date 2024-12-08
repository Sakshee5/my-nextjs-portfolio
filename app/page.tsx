import Image from "next/image";

export default function Page() {
  return (
    <section className="text-center">
      {/* Profile Image */}
      <div className="mb-3 -mt-8">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 mx-auto"
          unoptimized
          width={240}
          height={200}
          priority
        />
      </div>

      {/* Name and Title */}
      <h2 className="text-xl font-medium text-gray-400 mb-2">
        Graduate Student | Duke University
      </h2>

      {/* Program & Field */}
      <h3 className="text-lg font-light text-gray-400 mb-4">
        Artificial Intelligence
      </h3>

      {/* Profile Description */}
      <div className="prose prose-neutral dark:prose-invert mx-auto">
        <p>A builder at heart, passionate about transforming ideas into impactful realities.</p>
        <p>
          Hey! I’m <strong>Sakshee</strong>, an AI Engineer with 2+ years building Generative AI solutions at Deloitte, specializing in multi-agent LLM systems and RAG. Currently pursuing my master’s in{" "}
          <a href="https://ai.meng.duke.edu/degree" target="_blank" className="text-blue-600 hover:underline">
            AI
          </a> at Duke, with a focus on Explainable AI for interpretable systems.
        </p>
      </div>
    </section>
  );
}
