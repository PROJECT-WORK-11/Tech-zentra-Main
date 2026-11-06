"use strict";

const courses = [
  {
    id: "python", title: "Python Programming", category: "PROGRAMMING", level: "Beginner friendly",
    description: "Start writing clear, useful code and build a strong foundation for automation, data, and software projects.",
    intro: "Build a confident foundation in Python, from your first line of code to useful applications that solve everyday problems.",
    tools: ["Python 3", "VS Code", "Jupyter", "Git", "pytest"],
    topics: [
      ["Getting started with Python", "Set up a development environment, run scripts, and learn how Python executes instructions."],
      ["Variables, data types & operators", "Represent information with strings, numbers, booleans, collections, and expressions."],
      ["Decisions, loops & functions", "Control program flow, create reusable functions, and handle common exceptions."],
      ["Collections & object-oriented basics", "Organize related data with lists, dictionaries, modules, and introductory classes."],
      ["Files, libraries & testing", "Read and write files, use standard libraries, and test code with reliable workflows."],
      ["Build and share a Python project", "Plan, implement, document, and present a small complete application."]
    ],
    skills: ["Programming logic", "Python syntax", "Debugging", "Working with data", "Problem solving"],
    assignments: ["Write a unit converter with input validation", "Analyze a text file and summarize word counts", "Create and test reusable functions"],
    miniProjects: ["Personal expense tracker", "Command-line quiz and score keeper"],
    finalProject: "Create a documented Python application that solves a practical student or community problem, with clear input, useful output, and a small set of automated tests.",
    outcomes: "Write readable Python programs, use core data structures, break problems into functions, handle files and exceptions, and explain a completed project.",
    modes: {
      college: { days: 60, classTime: "60 days · 5 days a week · 90-minute classes", weekly: ["Python setup, syntax, and first scripts", "Variables, types, and operators", "Conditions, loops, and functions", "Collections, modules, and classes", "Files, libraries, and testing", "Project studio and final assessment"] },
      online: { days: 30, classTime: "30 days · 5 guided sessions a week · 60 minutes each", weekly: ["Python basics and setup", "Variables and operators", "Conditions and loops", "Functions and collections", "Libraries and file handling", "Practical project and showcase"] },
      offline: { days: 45, classTime: "45 days · 5 classroom days a week · 2 hours each", weekly: ["Python introduction and environment", "Programming fundamentals", "Conditions, loops, and functions", "Data structures and modules", "Libraries and practical exercises", "Real-world project and evaluation"] }
    }
  },
  {
    id: "web-development", title: "Web Development", category: "WEB & SOFTWARE", level: "Beginner friendly",
    description: "Design and build responsive websites with thoughtful interfaces and interactive browser experiences.",
    intro: "Learn how the web works and create responsive, accessible websites using the core tools behind modern front-end experiences.",
    tools: ["HTML5", "CSS3", "JavaScript", "Git", "Browser DevTools"],
    topics: [
      ["How the web works & HTML", "Explore browsers, requests, semantic page structure, and accessible HTML elements."],
      ["CSS foundations & layout", "Style pages with typography, color, the box model, Flexbox, and Grid."],
      ["Responsive & accessible design", "Build adaptable layouts and improve keyboard access, contrast, and semantics."],
      ["JavaScript fundamentals", "Use values, variables, functions, arrays, objects, and browser events."],
      ["DOM, forms & web APIs", "Make pages interactive, validate forms, and work with browser storage and APIs."],
      ["Publish a complete website", "Polish, test, document, and publish a multi-page portfolio project."]
    ],
    skills: ["Semantic HTML", "Responsive CSS", "JavaScript", "Accessibility", "Interface design"],
    assignments: ["Recreate a responsive editorial landing page", "Add keyboard-friendly navigation to a page", "Build a validated contact form"],
    miniProjects: ["Student portfolio page", "Interactive campus event guide"],
    finalProject: "Design and publish a responsive multi-page website with an accessible navigation system, interactive form, and project documentation.",
    outcomes: "Structure semantic websites, style responsive layouts, write browser-side JavaScript, improve accessibility, and publish a polished web project.",
    modes: {
      college: { days: 64, classTime: "64 days · 5 days a week · 90-minute classes", weekly: ["Web foundations and semantic HTML", "CSS styling and layout", "Responsive design and accessibility", "JavaScript fundamentals", "DOM interactions, forms, and testing", "Portfolio website and presentation"] },
      online: { days: 32, classTime: "32 days · 5 guided sessions a week · 60 minutes each", weekly: ["HTML and web foundations", "CSS and responsive layouts", "Accessibility and visual design", "JavaScript essentials", "Interactive pages and browser tools", "Website project and review"] },
      offline: { days: 48, classTime: "48 days · 5 classroom days a week · 2 hours each", weekly: ["HTML structure and web basics", "CSS layout workshops", "Responsive and accessible interfaces", "JavaScript and browser logic", "DOM, forms, and debugging", "Team website project and demo"] }
    }
  },
  {
    id: "java", title: "Java Programming", category: "PROGRAMMING", level: "Beginner friendly",
    description: "Learn object-oriented programming and build dependable applications with one of the most widely used languages.",
    intro: "Develop programming fundamentals with Java, then use object-oriented design and testing to create maintainable applications.",
    tools: ["Java", "IntelliJ IDEA", "Maven", "JUnit", "Git"],
    topics: [
      ["Java setup & first programs", "Install a JDK, understand the edit-compile-run cycle, and write simple programs."],
      ["Types, expressions & control flow", "Work with Java types, operators, decisions, loops, and input."],
      ["Methods, arrays & strings", "Design reusable methods and process arrays and text safely."],
      ["Classes & object-oriented design", "Model problems with classes, objects, encapsulation, and composition."],
      ["Collections, errors & testing", "Use collections, handle exceptions, and write unit tests."],
      ["Application design & final build", "Combine core concepts in a structured, documented Java application."]
    ],
    skills: ["Java syntax", "Object-oriented design", "Collections", "Unit testing", "Application structure"],
    assignments: ["Create a menu-driven grade calculator", "Model a library catalog with Java classes", "Write unit tests for a booking utility"],
    miniProjects: ["Library inventory manager", "Personal budget planner"],
    finalProject: "Build a maintainable Java application with a clear domain model, collection-based data handling, error handling, tests, and setup instructions.",
    outcomes: "Write Java programs, apply object-oriented principles, use common collections, handle errors, and test an application with confidence.",
    modes: {
      college: { days: 65, classTime: "65 days · 5 days a week · 90-minute classes", weekly: ["JDK, syntax, and first programs", "Types, operators, and control flow", "Methods, arrays, and strings", "Classes, objects, and encapsulation", "Collections, exceptions, and tests", "Application project and review"] },
      online: { days: 33, classTime: "33 days · 5 guided sessions a week · 60 minutes each", weekly: ["Java basics and setup", "Types and program flow", "Methods and data structures", "Object-oriented programming", "Collections and testing", "Build and present an application"] },
      offline: { days: 49, classTime: "49 days · 5 classroom days a week · 2 hours each", weekly: ["Java introduction and coding lab", "Variables, decisions, and loops", "Methods, arrays, and problem solving", "Classes and object-oriented practice", "Collections, errors, and JUnit", "Team application project and evaluation"] }
    }
  },
  {
    id: "data-science", title: "Data Science", category: "DATA & INSIGHTS", level: "Foundational",
    description: "Move from raw datasets to useful findings with Python, statistics, visualization, and responsible modeling.",
    intro: "Explore the data science workflow: ask clear questions, prepare information, find patterns, and communicate evidence responsibly.",
    tools: ["Python", "Jupyter", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
    topics: [
      ["Questions, data & the workflow", "Frame answerable questions and understand how data moves through a project."],
      ["Python for data work", "Use notebooks and core Python tools to inspect and organize information."],
      ["Data cleaning & exploration", "Assess quality, handle missing values, and explore distributions and relationships."],
      ["Statistics & visualization", "Use foundational statistics and clear charts to explain patterns and uncertainty."],
      ["Introductory predictive modeling", "Prepare features, build baseline models, and evaluate results responsibly."],
      ["Communicate a data science project", "Document decisions, limitations, and findings in a reproducible final project."]
    ],
    skills: ["Data preparation", "Exploratory analysis", "Statistics", "Visualization", "Model evaluation"],
    assignments: ["Audit a public dataset for quality issues", "Compare distributions and explain a chart", "Evaluate a baseline model with suitable metrics"],
    miniProjects: ["Campus transport trends", "Public health indicators explorer"],
    finalProject: "Complete a reproducible analysis of a suitable public dataset, explaining the question, preparation choices, findings, uncertainty, and limitations.",
    outcomes: "Prepare datasets, conduct exploratory analysis, use foundational statistics, communicate findings visually, and evaluate a simple model responsibly.",
    modes: {
      college: { days: 72, classTime: "72 days · 5 days a week · 90-minute classes", weekly: ["Data questions and Python notebooks", "Python, NumPy, and Pandas", "Cleaning and exploratory analysis", "Statistics and visualization", "Introductory modeling and evaluation", "Reproducible project and presentation"] },
      online: { days: 36, classTime: "36 days · 5 guided sessions a week · 60 minutes each", weekly: ["Data science workflow and Python", "Pandas and notebook practice", "Cleaning and exploration", "Statistics and clear charts", "Baseline models and evaluation", "Project write-up and showcase"] },
      offline: { days: 54, classTime: "54 days · 5 classroom days a week · 2 hours each", weekly: ["Data questions and Python lab", "Tabular data with Pandas", "Cleaning, exploration, and quality", "Statistics and visualization workshops", "Modeling and responsible evaluation", "Team dataset project and review"] }
    }
  },
  {
    id: "ai-ml", title: "Artificial Intelligence & Machine Learning", category: "INTELLIGENT SYSTEMS", level: "Foundational",
    description: "Understand how machine learning systems learn, how to evaluate them, and where responsible use matters.",
    intro: "Build a grounded understanding of AI and machine learning by exploring data, simple models, evaluation, and responsible design.",
    tools: ["Python", "Jupyter", "Pandas", "scikit-learn", "Matplotlib"],
    topics: [
      ["AI concepts & responsible practice", "Distinguish AI, machine learning, and automation; examine limitations and responsible use."],
      ["Python and data preparation", "Use Python notebooks to inspect, clean, and prepare small datasets."],
      ["Supervised learning foundations", "Understand train/test splits and fit introductory classification and regression models."],
      ["Unsupervised learning & features", "Explore clustering, feature representations, and the questions these methods can answer."],
      ["Model evaluation & error analysis", "Use suitable metrics, inspect errors, and identify overfitting and data limitations."],
      ["Responsible model project", "Build and explain a small educational model with transparent evaluation and limitations."]
    ],
    skills: ["ML workflow", "Data preparation", "Classification", "Model evaluation", "Responsible AI"],
    assignments: ["Compare model predictions with a simple baseline", "Use a confusion matrix to discuss errors", "Write a short model card describing limitations"],
    miniProjects: ["Plant observation classifier using a teaching dataset", "Study habit pattern explorer"],
    finalProject: "Create an educational machine-learning demonstration using an appropriate dataset, baseline comparisons, documented evaluation, and a clear statement of limitations.",
    outcomes: "Explain core ML concepts, prepare data, train simple models, interpret evaluation metrics, and communicate responsible-use considerations.",
    modes: {
      college: { days: 72, classTime: "72 days · 5 days a week · 90-minute classes", weekly: ["AI foundations and responsible use", "Python and preparing data", "Supervised learning concepts", "Features and unsupervised learning", "Evaluation, errors, and limitations", "Responsible ML demonstration and review"] },
      online: { days: 36, classTime: "36 days · 5 guided sessions a week · 60 minutes each", weekly: ["AI concepts and safe practice", "Python notebook and data basics", "Classification and regression", "Clustering and features", "Metrics and error analysis", "ML project and model explanation"] },
      offline: { days: 54, classTime: "54 days · 5 classroom days a week · 2 hours each", weekly: ["AI concepts and group discussion", "Data preparation lab", "Supervised model experiments", "Unsupervised learning activities", "Model evaluation and responsible use", "Team demonstration and evaluation"] }
    }
  },
  {
    id: "aws-cloud", title: "AWS & Cloud Computing", category: "CLOUD & INFRASTRUCTURE", level: "Foundational",
    description: "Understand cloud concepts and practice designing, deploying, and monitoring a small, cost-aware cloud solution.",
    intro: "Learn cloud fundamentals, core AWS services, security basics, and how to plan a small resilient deployment responsibly.",
    tools: ["AWS Academy / Free Tier", "IAM", "S3", "EC2", "CloudWatch", "AWS CLI"],
    topics: [
      ["Cloud concepts & shared responsibility", "Explore cloud service models, regions, availability, and shared security responsibilities."],
      ["Identity, access & cost awareness", "Understand least-privilege concepts, account hygiene, budgets, and safe lab practices."],
      ["Storage, networking & compute", "Compare object storage, virtual networks, and compute options for simple workloads."],
      ["Deploying a small application", "Plan and deploy a learning application using suitable managed or virtual services."],
      ["Monitoring, reliability & backup", "Review logs and metrics, basic reliability, backups, and incident-aware operations."],
      ["Cloud architecture project", "Document a cost-aware cloud design and present a small controlled demonstration."]
    ],
    skills: ["Cloud architecture basics", "AWS service selection", "Identity awareness", "Deployment planning", "Cost controls"],
    assignments: ["Map a sample application to cloud components", "Create a least-privilege access design on paper", "Estimate a small lab's costs and shutdown plan"],
    miniProjects: ["Static learning-resource site design", "Cloud-ready student club application blueprint"],
    finalProject: "Design and demonstrate a small cloud-hosted application or architecture using a controlled learning environment, with access, cost, monitoring, and cleanup notes.",
    outcomes: "Explain cloud models, select foundational services, plan secure access, estimate costs, and document a small cloud deployment.",
    modes: {
      college: { days: 60, classTime: "60 days · 5 days a week · 90-minute classes", weekly: ["Cloud concepts and AWS orientation", "Identity, access, and cost controls", "Storage and networking foundations", "Compute and application deployment", "Monitoring, reliability, and backup", "Cloud design project and assessment"] },
      online: { days: 30, classTime: "30 days · 5 guided sessions a week · 60 minutes each", weekly: ["Cloud models and shared responsibility", "AWS navigation and identity basics", "Storage, networking, and compute", "Application deployment concepts", "Monitoring and cost review", "Architecture brief and presentation"] },
      offline: { days: 45, classTime: "45 days · 5 classroom days a week · 2 hours each", weekly: ["Cloud introduction and lab safety", "Access management and budgeting", "Storage and network lab", "Compute and deployment workshop", "Monitoring and resilience exercises", "Team cloud project and evaluation"] }
    }
  },
  {
    id: "cybersecurity", title: "Cybersecurity", category: "SECURITY & TRUST", level: "Foundational",
    description: "Build security awareness through defensive concepts, safe lab exercises, risk thinking, and practical protection habits.",
    intro: "Learn the foundations of protecting people, devices, and information through defensive practices and authorized, safe exercises.",
    tools: ["Linux basics", "OWASP Juice Shop (local lab)", "Wireshark (sample captures)", "NIST CSF", "Password manager"],
    topics: [
      ["Security principles & threat awareness", "Explore confidentiality, integrity, availability, threat modeling, and everyday risks."],
      ["Accounts, devices & safe configuration", "Practice strong authentication, updates, backups, and secure device habits."],
      ["Networks & traffic fundamentals", "Understand network concepts and interpret instructor-provided sample traffic safely."],
      ["Web security awareness", "Recognize common web risks and discuss defensive design using a local training environment."],
      ["Incident response & risk management", "Practice reporting, response planning, evidence care, and risk-based prioritization."],
      ["Defensive security improvement plan", "Assess a fictional learning environment and present prioritized protective measures."]
    ],
    skills: ["Security fundamentals", "Risk awareness", "Defensive practices", "Incident reporting", "Security communication"],
    assignments: ["Create a personal account-security checklist", "Classify risks in a fictional campus scenario", "Write a concise incident notification and response timeline"],
    miniProjects: ["Student club security awareness guide", "Defensive checklist for a fictional small organization"],
    finalProject: "Develop a defensive security improvement plan for a fictional organization, prioritizing practical controls, response roles, and user education.",
    outcomes: "Explain foundational security principles, identify common risks, recommend defensive practices, and communicate a clear incident response plan.",
    modes: {
      college: { days: 60, classTime: "60 days · 5 days a week · 90-minute classes", weekly: ["Security principles and responsible conduct", "Accounts, devices, and safe configuration", "Network foundations and sample traffic", "Web security awareness in a local lab", "Risk management and incident response", "Defensive improvement plan and review"] },
      online: { days: 30, classTime: "30 days · 5 guided sessions a week · 60 minutes each", weekly: ["Security basics and threat awareness", "Authentication, updates, and backups", "Networks and safe sample analysis", "Web risks and defensive design", "Incident response and risk planning", "Security awareness project"] },
      offline: { days: 45, classTime: "45 days · 5 classroom days a week · 2 hours each", weekly: ["Responsible security and core concepts", "Secure account and device workshops", "Network concepts with provided samples", "Local training lab and defensive review", "Incident tabletop and risk assessment", "Team protection plan and evaluation"] }
    }
  },
  {
    id: "data-analytics", title: "Data Analytics", category: "DATA & INSIGHTS", level: "Beginner friendly",
    description: "Use spreadsheets, SQL, Python, and dashboards to turn everyday data into clear, actionable insights.",
    intro: "Learn a practical analytics workflow: ask a useful question, prepare data, query and explore it, then communicate findings clearly.",
    tools: ["Excel", "SQL", "Python", "Pandas", "Power BI", "Tableau concepts"],
    topics: [
      ["Analytics questions & data literacy", "Define a decision-focused question and understand common data types and sources."],
      ["Spreadsheets & data quality", "Organize tables, use formulas, and identify missing, duplicate, or inconsistent values."],
      ["SQL for exploration", "Filter, aggregate, join, and summarize relational data with clear queries."],
      ["Python and repeatable analysis", "Use Pandas to clean, transform, and analyze a dataset consistently."],
      ["Dashboards & data storytelling", "Choose clear visuals, build an accessible dashboard, and explain caveats."],
      ["Analytics recommendation project", "Deliver a concise analysis and evidence-based recommendations for a chosen audience."]
    ],
    skills: ["Spreadsheet analysis", "SQL queries", "Data cleaning", "Dashboard design", "Data storytelling"],
    assignments: ["Clean a spreadsheet and document quality checks", "Write SQL queries to answer business questions", "Design a one-page dashboard with a clear takeaway"],
    miniProjects: ["Campus events attendance dashboard", "Student club budget and participation analysis"],
    finalProject: "Analyze a suitable public or sample dataset, answer a practical question, build a clear dashboard, and present evidence-backed recommendations with limitations.",
    outcomes: "Clean and query data, use spreadsheets and Python for analysis, build informative dashboards, and communicate findings accurately.",
    modes: {
      college: { days: 60, classTime: "60 days · 5 days a week · 90-minute classes", weekly: ["Analytics questions and data basics", "Spreadsheets and data quality", "SQL queries and summaries", "Python and repeatable analysis", "Dashboard design and storytelling", "Insight project and presentation"] },
      online: { days: 30, classTime: "30 days · 5 guided sessions a week · 60 minutes each", weekly: ["Analytics workflow and data literacy", "Spreadsheet formulas and cleanup", "SQL filters, joins, and aggregates", "Pandas and analysis practice", "Visuals and dashboard principles", "Recommendation project and review"] },
      offline: { days: 45, classTime: "45 days · 5 classroom days a week · 2 hours each", weekly: ["Data questions and spreadsheet lab", "Quality checks and useful formulas", "SQL hands-on exercises", "Python analysis workshop", "Dashboard critique and presentation", "Team analytics project and evaluation"] }
    }
  }
];

const projects = [
  { id: "python-budget-planner", category: "Python", course: "python", title: "Student Budget Planner", description: "Create a small tool that helps students organize expenses, compare monthly spending, and set simple savings goals.", tech: ["Python", "CSV", "pytest"], difficulty: "Beginner", scope: "Design a simple command-line flow, validate entries, store transactions in a CSV file, and summarize spending by category. Keep sample data fictional and protect personal information.", deliverables: ["A working budget summary tool", "Example fictional CSV data", "Basic automated tests", "A short setup and usage guide"], skills: ["Functions and data structures", "File handling", "Input validation", "Testing"] },
  { id: "web-campus-guide", category: "Web Development", course: "web-development", title: "Campus Events Guide", description: "Build a responsive, accessible guide that helps students discover events by date, category, and location.", tech: ["HTML", "CSS", "JavaScript"], difficulty: "Beginner", scope: "Create clear event cards, a category filter, keyboard-friendly controls, and an event detail view using local sample data.", deliverables: ["Responsive multi-view website", "Accessible filtering and navigation", "Sample event dataset", "Browser and keyboard test notes"], skills: ["Semantic HTML", "Responsive design", "DOM interaction", "Accessibility"] },
  { id: "ai-study-helper", category: "AI & Machine Learning", course: "ai-ml", title: "Study Habit Pattern Explorer", description: "Explore a fictional learning dataset and build a transparent model demonstration to discuss study patterns.", tech: ["Python", "Pandas", "scikit-learn"], difficulty: "Intermediate", scope: "Use a small fictional or public teaching dataset, compare a baseline with a simple model, inspect errors, and explain why patterns do not prove causation.", deliverables: ["Reproducible notebook", "Baseline comparison", "Error analysis", "Plain-language limitations note"], skills: ["Data preparation", "Model evaluation", "Responsible AI", "Communication"] },
  { id: "data-science-transit", category: "Data Science", course: "data-science", title: "Community Transit Trends", description: "Analyze a public transit dataset to identify timing and service patterns that could inform better planning.", tech: ["Python", "Pandas", "Jupyter", "Matplotlib"], difficulty: "Intermediate", scope: "Frame a focused question, assess data quality, compare patterns over time, and visualize findings without overstating what the data can show.", deliverables: ["Cleaned analysis notebook", "Three explanatory visualizations", "Data quality notes", "Short findings brief"], skills: ["Exploratory analysis", "Statistics", "Visualization", "Reproducibility"] },
  { id: "cloud-resource-site", category: "Cloud Computing", course: "aws-cloud", title: "Cloud Learning Resource Site", description: "Plan a small, cost-aware cloud architecture for a static learning-resource site with a clear deployment and operations guide.", tech: ["AWS S3", "IAM concepts", "CloudFront concepts", "Cost planning"], difficulty: "Intermediate", scope: "Design a static-site architecture in a controlled learning environment, document access boundaries, estimate costs, and include monitoring and teardown steps.", deliverables: ["Architecture diagram", "Service selection rationale", "Cost and access checklist", "Deployment and cleanup guide"], skills: ["Cloud architecture", "Cost awareness", "Identity planning", "Documentation"] },
  { id: "security-awareness-kit", category: "Cybersecurity", course: "cybersecurity", title: "Safer Student Club Toolkit", description: "Create practical, friendly security guidance and an incident reporting plan for a fictional student organization.", tech: ["NIST CSF concepts", "Password manager", "MFA", "Backup checklist"], difficulty: "Beginner", scope: "Review a fictional club scenario and produce proportionate guidance on account safety, file sharing, backups, and how to report concerns.", deliverables: ["One-page security checklist", "Account and backup guide", "Incident contact flow", "Short awareness presentation"], skills: ["Risk awareness", "Defensive planning", "Clear communication", "Incident readiness"] },
  { id: "analytics-club-dashboard", category: "Data Analytics", course: "data-analytics", title: "Student Club Insights Dashboard", description: "Turn fictional attendance and event data into an approachable dashboard with useful, carefully explained trends.", tech: ["Excel", "SQL", "Power BI"], difficulty: "Beginner", scope: "Clean a sample dataset, define relevant metrics, create an interactive dashboard, and explain how small sample sizes affect interpretation.", deliverables: ["Documented data cleanup", "Dashboard with key metrics", "Metric definitions", "One-page insight summary"], skills: ["Data cleaning", "SQL", "Dashboard design", "Data storytelling"] },
  { id: "java-library-app", category: "Java Programming", course: "java", title: "Library Collection Manager", description: "Model a small library collection with Java classes and create a clear way to search and update sample records.", tech: ["Java", "Collections", "JUnit"], difficulty: "Beginner", scope: "Create an in-memory collection manager with a small domain model, helpful validation, and tests for core operations.", deliverables: ["Java application", "Domain class diagram", "JUnit tests", "Run instructions"], skills: ["Object-oriented design", "Collections", "Validation", "Unit testing"] }
];

const resourceGroups = [
  { key: "notes", title: "Programming notes", desc: "Concise reference notes for language fundamentals, common patterns, and essential terminology.", items: ["Python syntax and data structures", "HTML semantics and CSS layout", "Java programming and object-oriented terms", "SQL query patterns and data concepts"] },
  { key: "study", title: "Study materials", desc: "Guided revision sheets and checklists to help turn new ideas into durable understanding.", items: ["Weekly review and reflection template", "Data quality checklist", "Cloud concepts revision sheet", "Defensive security habits checklist"] },
  { key: "coding", title: "Coding exercises", desc: "Small practice prompts that build problem-solving confidence one step at a time.", items: ["String and collection challenges", "Responsive layout practice", "SQL filtering and aggregation prompts", "Data visualization critique activities"] },
  { key: "interview", title: "Interview preparation", desc: "Practice explaining how you think, what you built, and what you learned along the way.", items: ["Project walkthrough prompts", "Behavioral reflection questions", "Technical concept flash prompts", "Portfolio review checklist"] },
  { key: "questions", title: "Practice questions", desc: "Review questions to check understanding and find topics worth revisiting.", items: ["Programming logic self-check", "Data interpretation questions", "Web accessibility review prompts", "Cloud and security concept checks"] },
  { key: "roadmaps", title: "Learning roadmaps", desc: "Choose a sensible sequence of topics and projects for your next learning goal.", items: ["Python to data science path", "Web foundations to portfolio path", "Analytics and dashboard path", "Cloud fundamentals to architecture path"] }
];

function headerMarkup() {
  const file = location.pathname.split("/").pop() || "index.html";
  const prefix = location.pathname.includes("/courses/") ? "../" : "";
  const active = file === "index.html" ? "home" : file.replace(".html", "");
  const links = [
    ["Home", `${prefix}index.html#home`, "home"], ["Programs", `${prefix}programs.html`, "programs"],
    ["Projects", `${prefix}projects.html`, "projects"], ["Resources", `${prefix}resources.html`, "resources"], ["About", `${prefix}about.html`, "about"]
  ];
  return `<div class="container navigation"><a class="brand" href="${prefix}index.html" aria-label="TechZentra home"><span class="brand-symbol" aria-hidden="true">T</span><span class="brand-word">TECH<span>ZENTRA</span></span></a><button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">☰</button><nav class="nav-links" aria-label="Main navigation">${links.map(([label, href, key]) => `<a href="${href}"${active === key ? ' class="nav-current" aria-current="page"' : ""}>${label}</a>`).join("")}</nav><a class="button button-nav" href="${prefix}programs.html">Explore Programs <span aria-hidden="true">↗</span></a></div>`;
}

function footerMarkup() {
  const prefix = location.pathname.includes("/courses/") ? "../" : "";
  return `<div class="container footer-inner"><a class="brand footer-brand" href="${prefix}index.html"><span class="brand-symbol" aria-hidden="true">T</span><span class="brand-word">TECH<span>ZENTRA</span></span></a><div class="footer-copy"><p>© 2026 TechZentra. All Rights Reserved.</p><p>Designed and Co-authored by Pooja Sree.</p></div></div>`;
}

function courseCard(course, index) {
  const label = String(index + 1).padStart(2, "0");
  const artClass = course.id === "ai-ml" ? "ai" : course.id === "data-science" ? "data" : course.id === "cybersecurity" ? "security" : course.id === "aws-cloud" ? "cloud" : course.id === "web-development" ? "web" : course.id;
  const art = course.id === "python" ? "<span>&lt; &gt;</span>" : course.id === "web-development" ? "<span>✳</span>" : course.id === "java" ? "<strong>J</strong>" : course.id === "data-science" ? "<span>⌁</span>" : course.id === "ai-ml" ? "<strong>AI</strong>" : course.id === "aws-cloud" ? "<span>☁</span>" : course.id === "cybersecurity" ? "<span>◇</span>" : "<span>▥</span>";
  return `<article class="course-card reveal"><div class="course-art course-art-${artClass}" aria-hidden="true"><span class="art-index">TZ / ${label}</span><div class="art-code">${art}</div></div><div class="course-card-body"><div class="course-meta"><span class="course-category">${course.category}</span><span class="course-level">${course.level}</span></div><h3>${course.title}</h3><p>${course.description}</p><div class="course-facts"><span><b>06</b> modules</span><span><b>03</b> projects</span><span><b>3</b> formats</span></div><div class="course-tags">${course.tools.slice(0, 3).map(tool => `<span>${tool}</span>`).join("")}</div><a class="course-link" href="${course.id}.html">View Course <span aria-hidden="true">↗</span></a></div></article>`;
}

function renderCourseCards() {
  const featured = document.querySelector("#featured-courses");
  const all = document.querySelector("#all-courses");
  if (featured) featured.innerHTML = courses.map(courseCard).join("");
  if (all) all.innerHTML = courses.map(courseCard).join("");
}

function scheduleRows(course, mode) {
  const total = mode.days;
  const topics = mode.weekly.map((name, index) => {
    const start = index === 0 ? 1 : Math.floor(total * index / mode.weekly.length) + 1;
    const end = index === mode.weekly.length - 1 ? total : Math.floor(total * (index + 1) / mode.weekly.length);
    const module = course.topics[index];
    return `<li><span class="schedule-days">DAYS ${start}–${end}</span><span class="schedule-topic">${name}<small>${module[1]}</small></span></li>`;
  });
  return topics.join("");
}

function modePanel(course, modeKey, mode) {
  const modeName = modeKey[0].toUpperCase() + modeKey.slice(1);
  const modeSupport = {
    college: ["Instructor-led classes aligned to a steady college-term rhythm.", "Weekly learning plan", "Practical assignments", "Mini projects", "Final project", "Learning outcomes"],
    online: ["Live and recorded lessons with guided independent practice.", "Video lessons and live sessions", "Recorded class access", "Practice exercises and weekly assignments", "Online assessments and projects", "Completion certificate: awarded on successful completion of course requirements"],
    offline: ["Classroom instruction with guided lab practice and group feedback.", "Classroom training and instructor guidance", "Practical laboratory sessions and hands-on practice", "Group activities and weekly tests", "Real-time project feedback", "Final evaluation"]
  }[modeKey];
  const assignments = modeKey === "online" ? ["Short weekly practice exercises", course.assignments[0], course.assignments[1]] : modeKey === "offline" ? ["Instructor-guided lab challenges", course.assignments[1], course.assignments[2]] : course.assignments;
  const projects = modeKey === "online" ? [course.miniProjects[0], course.finalProject] : modeKey === "offline" ? [course.miniProjects[1], course.finalProject] : [...course.miniProjects, course.finalProject];
  const sideList = (items) => `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  const totalWeeks = Math.ceil(mode.days / 5);
  const weeklyPlan = mode.weekly.map((topic, index) => {
    const firstWeek = index === 0 ? 1 : Math.floor(totalWeeks * index / mode.weekly.length) + 1;
    const lastWeek = index === mode.weekly.length - 1 ? totalWeeks : Math.floor(totalWeeks * (index + 1) / mode.weekly.length);
    const weekLabel = firstWeek === lastWeek ? `Week ${firstWeek}` : `Weeks ${firstWeek}–${lastWeek}`;
    return `${weekLabel}: ${topic}`;
  });
  return `<section class="learning-panel" id="${modeKey}-panel" role="tabpanel" aria-labelledby="${modeKey}-tab"${modeKey === "college" ? "" : " hidden"}><div class="mode-summary"><div><h3>${course.title} — ${modeName} Learning</h3><p>${modeSupport[0]}</p></div><span class="duration-badge">${mode.days} days</span></div><div class="mode-columns"><div><div class="mode-block"><h4>Day-wise syllabus · ${mode.days} days</h4><ol class="schedule-list">${scheduleRows(course, mode)}</ol></div><div class="learning-outcomes"><h4>Learning outcomes</h4><p>${course.outcomes}</p></div></div><aside class="mode-sidebar"><div class="mode-block"><h4>Daily class schedule</h4><p>${mode.classTime}</p></div><div class="mode-block"><h4>Weekly learning plan</h4>${sideList(weeklyPlan)}</div><div class="mode-block"><h4>Practical assignments</h4>${sideList(assignments)}</div><div class="mode-block"><h4>Mini &amp; final projects</h4>${sideList(projects)}</div>${modeKey === "online" ? `<div class="mode-block"><h4>Completion certificate</h4><p>Certificate information is provided by the program team on successful completion of required lessons, assessments, and project work.</p></div>` : ""}</aside></div></section>`;
}

function renderCoursePage(root) {
  const course = courses.find(item => item.id === root.dataset.course);
  if (!course) {
    document.title = "Program not found | TechZentra";
    document.querySelector("#course-content").innerHTML = `<section class="page-hero"><div class="container"><h1>Program not found.</h1><p>Explore our full program catalogue to find your next learning path.</p><a class="button button-primary" href="programs.html">Back to Programs <span aria-hidden="true">↗</span></a></div></section>`;
    return;
  }
  document.title = `${course.title} | TechZentra`;
  const moduleList = course.topics.map(([title, detail], i) => `<article class="mode-block"><h4>MODULE ${String(i + 1).padStart(2, "0")}</h4><strong>${title}</strong><p>${detail}</p></article>`).join("");
  document.querySelector("#course-content").innerHTML = `<section class="course-hero"><div class="container course-hero-layout"><div><p class="eyebrow">${course.category} / TECHZENTRA PROGRAM</p><h1>${course.title}</h1><p class="course-intro">${course.intro}</p><div class="detail-actions"><a class="button button-primary" href="enroll.html?course=${course.id}">Enroll Now <span aria-hidden="true">↗</span></a><a class="button button-outline" href="programs.html">← Back to Programs</a></div></div><div class="course-hero-stats"><div><b>06</b><span>Modules</span></div><div><b>03</b><span>Learning options</span></div><div><b>06</b><span>Learning phases</span></div><div><b>${course.skills.length}</b><span>Core skills</span></div></div></div></section><section class="detail-section"><div class="container"><div class="detail-grid"><article class="info-panel"><p class="eyebrow">COURSE OVERVIEW</p><h2>Make a strong start.</h2><p>${course.description} Learn through guided modules, practical assignments, and a final project. Choose college, online, or offline learning below; each option has its own duration and day-by-day plan.</p><div class="skills-list">${course.skills.map(skill => `<span>${skill}</span>`).join("")}</div></article><article class="info-panel"><p class="eyebrow">TOOLS &amp; TECHNOLOGIES</p><h2>Your toolkit.</h2><p>Get comfortable with the tools used throughout the program.</p><div class="tool-list">${course.tools.map(tool => `<span>· ${tool}</span>`).join("")}</div></article></div><div class="info-panel" style="margin-top:16px"><p class="eyebrow">THE CURRICULUM</p><h2>Six modules, built step by step.</h2><div class="mode-columns" style="margin-top:17px">${moduleList}</div></div></div></section><section class="learning-section" id="learning-options"><div class="container"><div class="section-heading"><div><p class="eyebrow">CHOOSE YOUR LEARNING MODE</p><h2>Three ways to <span>make progress.</span></h2></div><p>Choose an option to see its schedule, duration, activities, and project plan.</p></div><div class="learning-tabs" role="tablist" aria-label="Learning options"><button class="learning-tab" id="college-tab" type="button" role="tab" aria-selected="true" aria-controls="college-panel" tabindex="0" data-mode="college">College Learning</button><button class="learning-tab" id="online-tab" type="button" role="tab" aria-selected="false" aria-controls="online-panel" tabindex="-1" data-mode="online">Online Learning</button><button class="learning-tab" id="offline-tab" type="button" role="tab" aria-selected="false" aria-controls="offline-panel" tabindex="-1" data-mode="offline">Offline Learning</button></div>${Object.entries(course.modes).map(([key, mode]) => modePanel(course, key, mode)).join("")}</div></section>`;
  activateLearningTabs();
}

function activateLearningTabs() {
  const tabs = [...document.querySelectorAll(".learning-tab")];
  if (!tabs.length) return;
  const selectTab = (tab, focus = false) => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", event => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
      selectTab(tabs[next], true);
    });
  });
  const requested = location.hash.replace("#", "").replace("-learning", "");
  const initial = tabs.find(tab => tab.dataset.mode === requested);
  if (initial) selectTab(initial);
}

function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(project => `<article class="project-card reveal"><div class="project-card-top"><span>${project.category.toUpperCase()}</span><span class="difficulty">${project.difficulty}</span></div><h2>${project.title}</h2><p>${project.description}</p><div class="project-tech">${project.tech.map(tool => `<span>${tool}</span>`).join(" · ")}</div><a class="project-detail-link" href="project.html?id=${encodeURIComponent(project.id)}">View project brief <span aria-hidden="true">↗</span></a></article>`).join("");
}

function renderProjectDetail() {
  const target = document.querySelector("#project-detail");
  if (!target) return;
  const project = projects.find(item => item.id === new URLSearchParams(location.search).get("id"));
  if (!project) {
    target.innerHTML = `<div class="info-panel"><h1>Project brief not found.</h1><p>Choose a project from the studio to view its details.</p><a class="button button-primary" href="projects.html">Back to Projects <span aria-hidden="true">↗</span></a></div>`;
    return;
  }
  document.title = `${project.title} | TechZentra Project Studio`;
  target.innerHTML = `<p class="eyebrow">${project.category.toUpperCase()} / PROJECT BRIEF</p><h1>${project.title}</h1><p class="project-lede">${project.description}</p><div class="project-card-top"><span>DIFFICULTY: ${project.difficulty.toUpperCase()}</span><span>RELATED PROGRAM: ${courses.find(course => course.id === project.course).title.toUpperCase()}</span></div><div class="project-tech">${project.tech.map(tool => `<span>${tool}</span>`).join(" · ")}</div><article class="info-panel"><p class="eyebrow">THE CHALLENGE</p><h2>Project details</h2><p>${project.scope}</p></article><article class="info-panel"><p class="eyebrow">WHAT YOU WILL CREATE</p><h2>Suggested deliverables</h2><ul>${project.deliverables.map(item => `<li>${item}</li>`).join("")}</ul></article><article class="info-panel"><p class="eyebrow">SKILLS IN PRACTICE</p><h2>What you will practice</h2><div class="skills-list">${project.skills.map(skill => `<span>${skill}</span>`).join("")}</div></article><div class="detail-actions"><a class="button button-primary" href="${project.course}.html">Explore related course <span aria-hidden="true">↗</span></a><a class="button button-outline" href="projects.html">← Back to Projects</a></div>`;
}

function renderResources() {
  const grid = document.querySelector("#resource-grid");
  if (!grid) return;
  grid.innerHTML = resourceGroups.map((resource, index) => `<article class="resource-card reveal"><span>RESOURCE / ${String(index + 1).padStart(2, "0")}</span><h2>${resource.title}</h2><p>${resource.desc}</p><details class="resource-details"><summary>Explore this collection</summary><ul>${resource.items.map(item => `<li>${item}</li>`).join("")}</ul></details></article>`).join("");
}

function setupEnrollment() {
  const select = document.querySelector("#enroll-course");
  if (select) {
    courses.forEach(course => {
      const option = document.createElement("option");
      option.value = course.id;
      option.textContent = course.title;
      select.append(option);
    });
    const requestedCourse = new URLSearchParams(location.search).get("course");
    if (courses.some(course => course.id === requestedCourse)) select.value = requestedCourse;
  }
  document.querySelectorAll("[data-enrollment-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const course = courses.find(item => item.id === data.get("course"));
    const status = form.querySelector(".form-status");
    status.textContent = `Thank you, ${data.get("name")}. Your interest in ${course.title} (${data.get("mode")}) was submitted in this demo only. It was not sent or saved.`;
    form.reset();
  }));
}

function setupMobileNavigation() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    button.textContent = open ? "×" : "☰";
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      button.textContent = "☰";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const usesMainNav = document.body.hasAttribute("data-main-nav");
  const header = document.querySelector("#site-header");
  if (header && !usesMainNav) { header.className = "site-header"; header.innerHTML = headerMarkup(); }
  renderCourseCards();
  renderProjects();
  renderProjectDetail();
  renderResources();
  const courseRoot = document.querySelector("[data-course]");
  if (courseRoot) renderCoursePage(courseRoot);
  setupEnrollment();
  if (!usesMainNav) setupMobileNavigation();
});
