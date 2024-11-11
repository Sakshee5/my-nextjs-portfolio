import { subtle } from "crypto";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "Sakshee Patil's Portfolio Timeline",
};

export default function PortfolioTimeline() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
        Work Experience
      </h1>
      <div className="relative border-l-4 border-neutral-400 dark:border-neutral-600 mx-auto max-w-2xl pl-13">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-12 flex items-start relative">
            {/* Date */}
            <div className="absolute -left-28 w-24 text-right mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {item.date}
            </div>

            {/* Timeline Dot
            <div className="relative flex-shrink-0">
              <div className="w-4 h-4 mt-2 bg-neutral-500 rounded-full border-2 border-white dark:border-neutral-800"></div>
            </div> */}

            {/* Content */}
            <div className="ml-6 space-y-2">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={item.link}>{item.title}</Link>
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.subtitle}
              </p>
              {/* Additional points */}
              {item.details && (
                <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const timelineItems = [
  {
    title: "AI Analyst - Generative AI Solutioning",
    subtitle: "Deloitte, Mumbai, MH, India",
    date: "Aug 2022 - Aug 2024",
    details: [
      "Prototyped and tested an end-to-end multi-agent LLM system utilizing OpenAI’s Assistants API within a 10-person team, enabling autonomous web research, analysis, and deliverable generation (newsletters, reports, presentations). Generated 100+ first draft deliverables during the testing phase.",
      "Built and deployed a prototype (Streamlit + GenAI) utilizing Retrieval Augmented Generation (RAG), Chain of Thought Prompting, and PowerPoint XML for creating customizable and downloadable PowerPoint presentations, estimated to save 30% of consultant time in creating first drafts.",
      "Built a scalable topic modeling approach for advanced document analysis, which was adopted by 10+ teams internally.",
      "Fine-tuned a model to generate SVG code for Process Flow Diagrams by retrieving and adapting similar diagrams from a repository, allowing quick customization based on user requirements."
    ],
    link: ""
  },
  {
    title: "Summer Research Intern",
    subtitle: "National University of Singapore, Remote",
    date: "Apr 2021 - Aug 2021",
    details: [
      "Developed a custom OpenAI Gym environment with Pygame to test deep reinforcement learning algorithms, improving path planning and exploration strategies in partially interactive environments.",
      "Optimized the ImVoteNet repository usability, enabling streamlined object detection on point clouds for research purposes."
    ],
    link: "",
  },
  {
    title: "Coding Tutor",
    subtitle: "Tynker (BYJUs), India",
    date: "Oct 2020 - Nov 2021",
    details: [
      "Conducted live personalized virtual mentoring sessions for students in India and overseas.",
      "Taught Python, HTML, CSS, and block coding, along with creating quarterly progress reports for all mentees."
    ],
    link: ""
  }
];

