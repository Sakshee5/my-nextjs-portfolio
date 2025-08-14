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
  <div className="relative mx-auto max-w-2xl flex">
    {/* Timeline Line */}
    <div className="relative border-l-4 border-neutral-400 dark:border-neutral-600" style={{ marginLeft: "40px" }}>
      {/* Invisible spacer for alignment */}
    </div>

    {/* Timeline Content */}
    <div className="pl-0">
      {timelineItems.map((item, index) => (
        <div key={index} className="mb-12 flex items-start relative">
          {/* Date */}
          <div className="absolute -left-28 w-24 text-right mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {item.date}
          </div>

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
  </div>
</section>

  );
}

const timelineItems = [
  {
    title: "AI Innovator Intern",
    subtitle: "Chewy, US : Full-time",
    date: "June 2025 - Aug 2025",
    details: [
      "Led a 3-member team to win Chewy’s Unbound Competition, a program focused on advancing AI in e-commerce.",
      "Building a storefront chatbot with React/TypeScript frontend & FastAPI backend, with function calling, semantic embeddings & user profiles to enhance product discovery with sub-second response times across 500k+ products catalog.",
      "Operationalized insights from 8M+ user reviews, 400k+ Q&A entries and 1k+ articles to drive personalized product suggestions enabling conversational & informational follow-ups with focus on intent understanding & negation handling.",
      "Built an evaluation dashboard with LLM-as-a-Judge & quantitative analysis pipeline to track search quality, engagement, UX metrics and business KPIs, establishing measurable benchmarks for AI-powered e-commerce optimization.",
   ],
    link: ""
  },
  {
    title: "ML Engineer",
    subtitle: "Fashivly, US : Part-time",
    date: "Jan 2025 - May 2025",
    details: [
      "Redesigned the image segmentation pipeline with Meta AI’s LangSAM model, expanding from apparel-only to also accessories, improving Dice score by ~25% and reducing manual edits by ~90%, boosting stylist workflow efficiency.",
      "Evaluated on 91K+ fashion images with category precision up to 95%, and deployed inference endpoints to Hugging Face Spaces (CPU) for prototyping and AWS SageMaker (GPU) for scalable acceleration.",
      "Collaborated directly with C-level leadership in a startup environment, influencing the product roadmap by identifying and addressing bottlenecks such as existing model latency, segmentation inaccuracies, and high manual editing effort.",
   ],
    link: ""
  },
  {
    title: "Research Assistant",
    subtitle: "Center for Research & Engineering of AI Technology in Education, Duke University : Part-time",
    date: "Dec 2024 - Present",
    details: [
      "Developing ClassWise, an AI-powered adaptive learning and revision tool that delivers tailored quizzes from lecture slides, notes, and videos with feedback to 100+ students across multiple courses reducing grading workload by 90%.",
      "Designed and deployed a role-based full-stack platform (React, Node.js, MongoDB, Tailwind, Azure Blob Storage) with secure authentication and scalable content delivery.",
      "Leading GenAI feature development - large-context management, memory storage & adaptive quiz/feedback generation.",
"Prototyping voice-based interaction to promote more engaging, on-demand revision experiences with gamified elements like leaderboards to incentivize non-graded revision through friendly competition.",
    ],
    link: "https://sites.duke.edu/createcenter/"
  },
  {
    title: "AI Analyst - Generative AI Solutioning",
    subtitle: "Deloitte, Mumbai, MH, India : Full-time",
    date: "Aug 2022 - Aug 2024",
    details: [
      "Prototyped and tested an end-to-end multi-agent LLM system utilizing OpenAI’s Assistants API within a 10-person team, enabling autonomous web research, analysis, and deliverable generation (newsletters, reports, presentations). Generated 100+ first draft deliverables during the testing phase.",
      "Built and deployed a prototype (Streamlit + GenAI) utilizing Retrieval Augmented Generation (RAG), Chain of Thought Prompting, and PowerPoint XML for creating customizable and downloadable PowerPoint presentations, estimated to save 30% of consultant time in creating first drafts.",
      "Built a scalable topic modeling approach for advanced document analysis, which was adopted by 10+ teams internally.",
      "Fine-tuned LLM (with LoRA) to edit SVG code of semantically retrieved Visio process flow diagrams. Enabled natural language based customization across 1K+ flow diagrams in internal repository."
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
    subtitle: "Tynker (BYJUs), India : Part-time",
    date: "Oct 2020 - Nov 2021",
    details: [
      "Conducted live personalized virtual mentoring sessions for students in India and overseas.",
      "Taught Python, HTML, CSS, and block coding, along with creating quarterly progress reports for all mentees."
    ],
    link: ""
  }
];

