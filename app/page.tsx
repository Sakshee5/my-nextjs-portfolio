import Image from "next/image";
import "app/styles/theme.css";

export default function Page() {
  return (
    <div className="w-full">
      <div className="custom-card">
        <div className="flex flex-col md:flex-row items-start gap-8 p-8">
          {/* Profile Image */}
          <div className="image-container w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0">
            <Image
              src="/profile.jpeg"
              alt="Profile photo"
              width={224}
              height={224}
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-1">
                Graduate Student | Duke University
              </h2>
              <h3 className="text-lg text-[var(--text-secondary)]">
                Artificial Intelligence
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-[var(--text-primary)]">
                A builder at heart, passionate about transforming ideas into impactful realities.
              </p>
              <p className="text-[var(--text-primary)]">
                Hey! I'm <span className="text-gradient font-semibold">Sakshee</span>, 
                an AI Engineer with 2+ years building Generative AI solutions at Deloitte, 
                specializing in multi-agent LLM systems and RAG. Currently pursuing my master's in{" "}
                <a 
                  href="https://ai.meng.duke.edu/degree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gradient hover:opacity-80"
                >
                  AI
                </a> at Duke, with a focus on Explainable AI for interpretable systems.
              </p>
            </div>

            {/* Affiliations Logos */}
            <div className="logo-grid mt-6">
              {/* Education Section */}
              <div className="logo-section">
                <div className="logo-item">
                  <Image
                    src="/assets/iiti.png"
                    alt="IIT Indore"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="logo-item">
                  <Image
                    src="/assets/duke.png"
                    alt="Duke University"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Work Section */}
              <div className="logo-section">
                <div className="logo-item">
                  <Image
                    src="/assets/deloitte.png"
                    alt="Deloitte"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="logo-item">
                  <Image
                    src="/assets/chewy.png"
                    alt="Chewy"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="logo-item">
                  <Image
                    src="/assets/fashivly.png"
                    alt="Fashivly"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
