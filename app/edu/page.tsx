import Link from "next/link"; 

export const metadata = {
  title: "Portfolio",
  description: "Sakshee Patil's Portfolio Timeline",
};

export default function PortfolioTimeline() {
  return (
    <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
  <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
    Education
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
    title: "M.Eng - Artificial Intelligence, Duke University",
    subtitle: "GPA: 4.0, Relevant coursework: Explainable AI, Modeling Process & Algorithms, Deep Learning, LLMs",
    date: "Aug 2024 - Dec 2025",
    link: "https://masters.pratt.duke.edu/ai/",
    details: [
      "GPA: 4.0, Relevant coursework: Explainable AI, Modeling Process & Algorithms, Deep Learning, LLMs",
      "Research Assistant for CREATE: Center for Research & Engineering of AI Technology in Education",
      "Won the “First Grand Prize” and “Best Use of Agents” special prize in the DukeAI Hackathon amongst 500+ participants. Built Inception-Swarm, a multi-agent system capable of building multi-agent systems based on natural language prompts.",
    ]
  },
  {
    title: "B.Tech - Mechanical Engineering, Indian Institute of Technology Indore",
    subtitle: "GPA: 3.47, Relevant coursework: Calculus, Linear Algebra and ODE’s, Numerical Methods, Computer Programming",
    date: "Aug 2018 - Aug 2022",
    link: "https://www.iiti.ac.in/",
    details: [
      "Won silver medal in Inter-IIT Technical Meet, 2021: Led a 10-member team as part of the AI-ML Club.",
      "Published a book chapter titled “Deep learning-based methods for detecting surface defects in steel plates” in Elsevier.",
      "Finalist, Smart India Hackathon 2020: Participated in a nationwide 36-hour product development competition.",
      "Nominee, Best B.Tech Project Award: Recognized for outstanding project work.",
      "Recipient, Summer Research Fellowship, Indian Academy of Sciences, 2020",
    ]
  },
];
