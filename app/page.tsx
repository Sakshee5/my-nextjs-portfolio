import Image from "next/image";
import "app/styles/theme.css";

export default function Page() {
  return (
    <div className="w-full">
      <div className="custom-card">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
          {/* Content */}
          <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-medium text-[var(--text-primary)]">
                Graduate Student | Duke University
              </h2>
              <h3 className="text-sm md:text-base text-[var(--text-secondary)] mb-5">
                Artificial Intelligence
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-[var(--text-secondary)] text-sm md:text-base font-medium">
                A builder at heart, passionate about transforming ideas into impactful realities.
              </p>
              <p className="text-[var(--text-primary)] text-xs md:text-sm">
                Hey! I'm <span className="text-gradient">Sakshee</span>, 
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
            <div className="logo-grid mt-8">
              {/* Education Section */}
              <div>
                <div className="logo-section-title">Education</div>
                <div className="logo-section">
                  <div className="logo-item tooltip-container" data-tooltip="IIT Indore">
                    <Image
                      src="/assets/iiti.png"
                      alt="IIT Indore"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="logo-item tooltip-container" data-tooltip="Duke University">
                    <Image
                      src="/assets/duke.png"
                      alt="Duke University"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Work Section */}
              <div>
                <div className="logo-section-title">Work Experience</div>
                <div className="logo-section">
                  <div className="logo-item tooltip-container" data-tooltip="Deloitte">
                    <Image
                      src="/assets/deloitte.png"
                      alt="Deloitte"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="logo-item tooltip-container" data-tooltip="Chewy">
                    <Image
                      src="/assets/chewy.png"
                      alt="Chewy"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="logo-item tooltip-container" data-tooltip="Fashivly">
                    <Image
                      src="/assets/fashivly.png"
                      alt="Fashivly"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="logo-item tooltip-container" data-tooltip="National University of Singapore">
                    <Image
                      src="/assets/nus.png"
                      alt="National University of Singapore"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="image-container w-48 h-48 md:w-64 md:h-64 flex-shrink-0 order-1 md:order-2">
            <Image
              src="/profile.jpeg"
              alt="Duke AIPI Hacakathon 2024 Winner"
              width={256}
              height={256}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
