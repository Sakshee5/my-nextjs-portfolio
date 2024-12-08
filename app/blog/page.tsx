import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "Sakshee Patil's Portfolio Timeline",
};

export default function PortfolioTimeline() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
   <div className="relative border-l-2 border-neutral-300 dark:border-neutral-700 ml-20 pl-15">
    {timelineItems.map((item, index) => (
      <div
        key={index}
        className="mb-10 flex items-start relative"
      >
        {/* Date */}
        <div className="absolute -left-24 w-20 text-right mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {item.date}
        </div>

        {/* Timeline Dot
        <div className="relative flex-shrink-0">
          <div className="w-3 h-3 mt-2 bg-neutral-500 rounded-full border border-white dark:border-neutral-900"></div>
        </div> */}

        {/* Content */}
        <div className="ml-5">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            <Link href={item.link}>
              {item.title}
            </Link>
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {item.subtitle}
          </p>
          {item.extra && (
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              {item.extra}
            </p>
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
    title: "POV: My First Week exploring Mechanistic Interpretability",
    subtitle: "Interpreting Attention Patterns, Ablation, Residual Streams using TransformerLens, and what I learned along the way",
    extra: "Medium publication by Sakshee Patil",
    date: "Nov 2024",
    link: "https://medium.com/@saksheepatil05/pov-my-first-week-exploring-mechanistic-interpretability-f1d3e4a6f01a",
  },
  {
    title: "Cracking the Code: How Adversarial Attacks Manipulate AI Language Models",
    subtitle: "Paper Overview: Adversarial Attacks and Defenses in Large Language Models: Old and New Threats",
    extra: "Medium publication by Sakshee Patil",
    date: "Sept 2024",
    link: "https://saksheepatil05.medium.com/cracking-the-code-how-adversarial-attacks-manipulate-ai-language-models-239620395e58",
  },
  {
    title: "Demystifying LangGraph: A Beginner-Friendly Dive into LangGraph Concepts",
    subtitle: "Medium publication by Sakshee Patil",
    date: "May 2024",
    link: "https://saksheepatil05.medium.com/demystifying-langgraph-a-beginner-friendly-dive-into-langgraph-concepts-5ffe890ddac0",
  },
  {
    title: "Deep learning-based methods for detecting surface defects in steel plates",
    subtitle: "Book Chapter, Smart Electrical and Mechanical Systems: An Application of AI and ML, Elsevier",
    extra: "Sakshee Patil, et al.",
    date: "June 2022",
    link: "https://www.sciencedirect.com/science/article/pii/B9780323907897000014",
  },
  {
    title: "Paper Overview and Code Analysis - ImVoteNet: Boosting 3D Object Detection in Point Clouds with Image Votes",
    subtitle: "CodeX publication by Sakshee Patil",
    date: "July 2021",
    link: "https://medium.com/codex/imvotenet-paper-review-and-code-analysis-bf103117b32e",
  },
  {
    title: "Classification of Peck Damaged Rice Grains using Unsupervised Segmentation",
    subtitle: "Journal Paper, Computers and Electronics in Agriculture, Elsevier",
    extra: "Sakshee Patil, et al.",
    date: "Submitted",
    link: "https://drive.google.com/drive/folders/1Zj8FODrQZ28_UUHMtTjT-vnnxOufIv9t?usp=sharing",
  },
  {
    title: "Design of Rolling Capsule-type Miniature Robot (RCMR) for Pipe Inspection",
    subtitle: "Book Chapter, Assistive Robotics, CRC Press: Taylor & Francis Group, USA",
    extra: "Sakshee Patil, et al.",
    date: "Submitted",
    link: "https://drive.google.com/drive/folders/1SeUJt5s16n4aFpP1cEXWcC-AxzqBd5T0?usp=sharing",
  },
];
