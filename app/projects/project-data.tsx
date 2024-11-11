export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Unsupervised Segmentation of Peck-damaged Rice Grains",
    year: 2022,
    description:
      "Guide: Dr. Pavan Kankar, Dr. Ankur Miglani | B.Tech Thesis\nEarned highest grade for conducting research in a field with limited existing literature, utilizing a novel dataset.\nDeveloped an unsupervised Convolutional Neural Network (CNN) based segmentation algorithm for the sub-classification of pecky-damaged rice grains, achieving a 92.54 Dice coefficient accuracy.",
    url: "https://github.com/Sakshee5/Rice-Grain-Quality-Inspection-/tree/main",
  },
  {
    title: "Design and Vision-based Control of Miniature Rolling Capsule",
    year: 2021,
    description:
      "Guide: Dr. Debanik Roy, Dr. Pavan Kankar, Dr. Ankur Miglani\nDesigned & 3D printed a CAD model of a miniature rolling capsule fitted with a CCD camera for pipe inspection.\nDeveloped a modified U-net architecture for detecting the type, spread, and severity of defects on steel surfaces, achieving an accuracy 2% higher than the baseline results on the dataset.",
    url: "https://github.com/Sakshee5/Steel-Defect-Detection",
  },
  {
    title: "Prognostics and Health Management - Data Challenge",
    year: 2021,
    description:
      "Worked on predicting Remaining Useful Life in a fleet of aircraft engines with multiple failure modes.\nUsed ragged tensors for input data of varying lengths and trained it on CNN as well as RNN-based models.\nLearned the basics of LSTMs, GRUs, Bi-directional LSTMs, and Attention Models for time series prediction.",
    url: "https://github.com/Sakshee5/PHM--RUL-Prediction-Challenge",
  },
  {
    title: "Bosch’s Traffic Sign Recognition | Inter IIT",
    year: 2021,
    description:
      "Worked on the ML team with UI designers to develop the backend of a customizable CNN architecture.\nExplored various metrics to develop a baseline model for the GTSRB traffic sign dataset with 43 classes.\nLearned about data augmentation, new CNN layers/hyperparameters, and UI design/deployment.",
    url: "https://github.com/Sakshee5/traffic_sign_recognition",
  },
  {
    title: "Heart Rate Estimation from Non-contact Face Videos Using Deep Learning",
    year: 2020,
    description:
      "Guide: Dr. Puneet Gupta | CSE-IIT Indore\nWorked on extracting facial landmarks and temporal signals from non-contact facial videos to differentiate between authentic and spoof (DeepFake) videos.\nLearned about the OpenFace library, facial landmarks, and the basics of coding in MATLAB.",
    url: "",
  },
  {
    title: "OpenCV Self Projects",
    year: 2020,
    description:
      "Real-time attendance monitoring with face detection.\nVirtual painting with Webcam, Document Scanner.\nAugmented Reality with orb feature matching, homography, and Aruco Markers.",
    url: "https://github.com/Sakshee5",
  },
  {
    title: "Renewable Energy Forecasting for a Smart Grid | Smart India Hackathon",
    year: 2020,
    description:
      "Worked in a team of five to develop a scheduling system for a simulated microgrid controller.\nDeveloped a multivariate time-series forecasting model to predict renewable energy generation.\nLearned about Recurrent Neural Networks and got acquainted with convex optimization algorithms.",
    url: "https://github.com/Sakshee5/Renewable-Energy-Forecasting-for-Integrated-Smart-Grid",
  },
];
