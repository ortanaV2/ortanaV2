const PORTFOLIO_DATA = {
  "profile": {
    "name": "Viktor Ibi",
    "tagline": "Engineer",
    "bio": "Electronics engineering student with a strong passion for software development. I enjoy building personal projects that combine hardware and software into practical, real-world solutions.",
    "birthDate": "2007-11-01",
    "skills": ["Backend Development", "Electronics", "Mechanics"],
    "contact": {
      "github": "https://github.com/ortanaV2"
    }
  },
  "timeline": [
    {
      "id": 1,
      "year": "2023",
      "title": "Started Programming",
      "description": "Began my journey into software development, starting with Batch scripting before moving on to Python and its fundamentals.",
      "image": null,
      "imageSize": "medium",
      "tags": ["Python", "Batch"]
    },
    {
      "id": 2,
      "year": "2024",
      "title": "First Major Project",
      "description": "Developed my first substantial project — a neuron growth simulation written in Python, combining algorithmic thinking with visual output.",
      "image": null,
      "imageSize": "large",
      "tags": ["Python", "Simulation", "Desktop Application"]
    },
    {
      "id": 3,
      "year": "2024",
      "title": "Internship — Kapsch TrafficCom · Deep Learning",
      "description": "Developed an automated data collection pipeline for a Computer Vision AI model at Kapsch TrafficCom's Deep Learning department. The script crawled footage from multiple video streaming sources, filtering recordings by conditions such as weather and time of day to build structured training datasets.",
      "image": null,
      "imageSize": "medium",
      "tags": ["Python", "Computer Vision", "Deep Learning", "Internship"]
    },
    {
      "id": 6,
      "year": "2025",
      "title": "Botball Competition — Innsbruck",
      "description": "My first hands-on experience with robotics and hardware development, competing at the Botball Competition in Innsbruck.",
      "image": "images/botball2025.png",
      "imageSize": "medium",
      "tags": ["Robotics", "Competition"]
    },
    {
      "id": 7,
      "year": "2025",
      "title": "CanSat Competition by ESA — Linz",
      "description": "Gained practical experience in hardware design and aerospace engineering as part of the ESA CanSat Competition held in Linz.",
      "image": "images/cansat2025.png",
      "imageSize": "medium",
      "tags": ["Satellites", "Aerospace", "Competition"]
    },
    {
      "id": 8,
      "year": "2025",
      "title": "Internship — Kapsch TrafficCom · Deep Learning",
      "description": "Returned to Kapsch TrafficCom's Deep Learning department for a second month-long internship, contributing to the deployment pipeline of an AI-powered video analytics platform. First hands-on exposure to DevOps practices, including CI/CD workflows and infrastructure automation.",
      "image": null,
      "imageSize": "medium",
      "tags": ["DevOps", "Deep Learning", "Deployment", "Internship"]
    },
    {
      "id": 9,
      "year": "2025",
      "title": "Austrian Federal AI Competition — Winner 🏆",
      "description": "A winner of the Austrian Federal Competition for Artificial Intelligence (BWKI by ASAI), receiving the prestigious \"AI for Green Award\".",
      "link": {
        "label": "View on BWKI",
        "url": "https://bwki.asai.ac.at/rueckblick/"
      },
      "image": "images/bwki2025.jpg",
      "imageSize": "medium",
      "tags": ["AI", "Award", "Winner", "Competition"]
    },
    {
      "id": 10,
      "year": "2026",
      "title": "Robocup Open Soccer — 3rd Place 🥉",
      "description": "Secured 3rd place at the RoboCup Junior Austria in Innsbruck, competing in the 2v2 Open Soccer category. Designed and built a fully autonomous robot from the ground up, integrating Computer Vision and real-time decision-making.",
      "link": {
        "label": "View on Robocup",
        "url": "https://new.robocupjunior.at/soccer/"
      },
      "image": "images/robocup2026.png",
      "imageSize": "medium",
      "tags": ["Robotics", "Computer-Vision", "Winner", "Competition"]
    }
  ]
  ,
  "projects": [
    {
      "id": 1,
      "title": "CPU Modules",
      "date": "2024 · July",
      "description": "A collection of discrete CPU building blocks — including registers, an instruction parser, and a 4-bit adder — assembled on a breadboard using only logic gates from standard integrated circuits.",
      "images": ["images/cpu_1.jpg", "images/cpu_2.jpg", "images/cpu_3.jpg"]
    },
    {
      "id": 2,
      "title": "Sumobot",
      "date": "2025 · June",
      "description": "Three iterative prototypes of an autonomous Sumobot, inspired by Japanese Sumo robotics competitions. Each robot independently searches for opponents and pushes them out of the ring while staying within bounds.",
      "images": ["images/sumobot_1.jpg", "images/sumobot_2.jpg", "images/sumobot_3.jpg", "images/sumobot_4.jpg", "images/sumobot_5.jpg"]
    },
    {
      "id": 3,
      "title": "Simulated 4-Bit CPU",
      "date": "2025 · November",
      "description": "A fully custom 4-bit CPU architecture designed from scratch and simulated in Falstad Circuit Simulator. Features its own instruction set and control logic, making it near Turing-complete.",
      "images": ["images/4bitcpu.png"]
    },
    {
      "id": 4,
      "title": "Vector Controlled Rocket Engine",
      "date": "2025 · December",
      "description": "A butane/propane-powered rocket engine prototype with thrust vectoring, developed entirely from scratch. Designed for a theoretical thrust output of 5 kgf.",
      "images": ["images/rocket_1.jpg", "images/rocket_2.jpg", "images/rocket_3.jpg"]
    },
    {
      "id": 5,
      "title": "Soccer Robot",
      "date": "2026 · March",
      "description": "An autonomous soccer robot capable of communicating with teammates and coordinating strategy in real time. Built for the RoboCup Junior Austria Open in Innsbruck, where I was solely responsible for all hardware development from the ground up.",
      "images": ["images/robocup_2.jpg", "images/robocup_3.jpg", "images/robocup_4.jpg", "images/robocup_5.jpg", "images/robocup_6.jpg", "images/robocup_7.jpg", "images/robocup_8.jpg", "images/robocup_9.jpg"]
    }
  ]
};
