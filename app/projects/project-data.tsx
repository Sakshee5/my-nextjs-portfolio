// project-data.ts
export interface Project {
  title: string;
  year: number;
  description?: string;
  image: string;
  url: string;
  bulletPoints: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Art Meets AI: Neural Style Transfer with Interactive Visualizations",
    year: 2024,
    image: "/projects/style-transfer.png",
    url: "https://github.com/Sakshee5/XAI-style-transfer",
    bulletPoints: [
      "Built and deployed a web application that visualizes Neural Style Transfer (NST) in real-time.",
      "Enhanced interpretability by integrating explainability techniques (XAI) like Feature maps, Gram-matrix and Grad-CAM visualization.",
    ],
    tags: ["XAI", "Neural Style Transfer", "Web Application", "Interactive Visualization"]
  },
  {
    title: "Alphanumeric Audio Dataset Collection",
    year: 2024,
    image: "/projects/dataset-collection.png",
    url: "https://huggingface.co/datasets/sakshee05/alphanumeric-audio-dataset",
    bulletPoints: [
      "Completed data collection process from IRB approval to open-source release on HuggingFace.",
      "Collected over 500 audio samples along with demographic metadata.",
      "Ensured ethical standards with anonymization and open-sourced the dataset to promote inclusivity."
    ],
    tags: ["Speech Recognition", "Dataset Collection", "AI Fairness", "Open Source"]
  },
  {
    title: "Unsupervised Segmentation of Peck-damaged Rice Grains",
    year: 2022,
    image: "/projects/rice-grain.png",
    url: "https://github.com/Sakshee5/Rice-Grain-Quality-Inspection-/tree/main",
    bulletPoints: [
      "Developed an unsupervised CNN-based segmentation algorithm.",
      "Achieved 92.54 Dice coefficient accuracy in segmenting peck-damaged rice grains.",
      "Earned the highest grade for conducting research in a novel field."
    ],
    tags: ["Image Segmentation", "CNN", "Agriculture", "Research"]
  },
  {
    title: "Design and Vision-based Control of Miniature Rolling Capsule",
    year: 2021,
    image: "/projects/steel-defect.png",
    url: "https://github.com/Sakshee5/Steel-Defect-Detection",
    bulletPoints: [
      "Designed a miniature rolling capsule with a CCD camera for pipe inspection.",
      "Developed a U-net model for detecting defects on steel surfaces with high accuracy.",
      "Achieved a 2% improvement over baseline results on steel defect detection dataset."
    ],
    tags: ["Computer Vision", "Robotics", "Pipe Inspection", "U-net"]
  },
  {
    title: "Prognostics and Health Management - Data Challenge",
    year: 2021,
    image: "/projects/time-series.jpg",
    url: "https://github.com/Sakshee5/PHM--RUL-Prediction-Challenge",
    bulletPoints: [
      "Predicted Remaining Useful Life (RUL) in a fleet of aircraft engines with multiple failure modes.",
      "Used ragged tensors with CNN and RNN-based models for time series prediction.",
      "Learned LSTMs, GRUs, Bi-directional LSTMs, and Attention models for time series data."
    ],
    tags: ["PHM", "Time Series", "RNN", "Aerospace"]
  },
  {
    title: "Bosch’s Traffic Sign Recognition | Inter IIT",
    year: 2021,
    image: "/projects/traffic-sign.jpg",
    url: "https://github.com/Sakshee5/traffic_sign_recognition",
    bulletPoints: [
      "Developed the backend of a customizable CNN architecture for traffic sign recognition.",
      "Built baseline model for GTSRB dataset with 43 traffic sign classes.",
      "Learned data augmentation, CNN layers, hyperparameters, and UI design."
    ],
    tags: ["Traffic Sign Recognition", "CNN", "Computer Vision", "Inter IIT"]
  },
  {
    title: "Heart Rate Estimation from Non-contact Face Videos Using Deep Learning",
    year: 2020,
    image: "/projects/deep-learning.png",
    url: "https://github.com/Sakshee5",
    bulletPoints: [
      "Extracted facial landmarks and temporal signals to differentiate between authentic and spoof videos.",
      "Used OpenFace library and learned basics of MATLAB.",
      "Worked with non-contact face video data for heart rate estimation."
    ],
    tags: ["Deep Learning", "Healthcare", "Facial Recognition", "MATLAB"]
  },
  {
    title: "OpenCV Self Projects",
    year: 2020,
    image: "/projects/cv.jpeg",
    url: "https://github.com/Sakshee5",
    bulletPoints: [
      "Real-time attendance monitoring with face detection.",
      "Virtual painting with webcam and document scanner.",
      "Augmented reality with ORB feature matching and Aruco markers."
    ],
    tags: ["OpenCV", "Augmented Reality", "Face Detection", "Computer Vision"]
  },
  {
    title: "Renewable Energy Forecasting for a Smart Grid | Smart India Hackathon",
    year: 2020,
    image: "/projects/sih.png",
    url: "https://github.com/Sakshee5/Renewable-Energy-Forecasting-for-Integrated-Smart-Grid",
    bulletPoints: [
      "Developed a scheduling system for a simulated microgrid controller.",
      "Built a multivariate time-series forecasting model for renewable energy prediction.",
      "Gained experience with RNNs and convex optimization algorithms."
    ],
    tags: ["Renewable Energy", "Smart Grid", "Time Series", "Hackathon"]
  }
];
