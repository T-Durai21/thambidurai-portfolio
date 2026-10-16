export const profile = {
  name: 'V. Thambidurai',
  role: 'QA Engineer',
  location: 'Chennai, Tamil Nadu, India',
  title: 'QA Engineer | Test Automation | LLM Evaluation',
  tagline:
    'Approximately five years of software testing across banking, UPI payments, cryptocurrency, healthcare, pharmaceuticals and title insurance — now applying the same standard of evidence to evaluating what language models produce.',
  email: 'vthambiduraitd@gmail.com',
  phone: '+91 81100 99200',
  linkedin: 'https://www.linkedin.com/in/thambidurai-v',
  github: 'https://github.com/T-Durai21',
  contactNote:
    'Seeking remote or hybrid positions in or around Chennai, on IST day shift, with a notice period of 15 days.',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#ai-journey', label: 'AI Focus' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: '~5 yrs', label: 'Testing experience', note: '3 full-time, freelance since 2025' },
  { value: '7', label: 'Domains covered', note: 'Regulated and financial systems' },
  { value: 'Selenium', label: 'Core stack', note: 'Java, TestNG, Maven, POM' },
  { value: '15 days', label: 'Notice period', note: 'Available to join' },
]

export const openTo = ['QA Engineer', 'Senior QA Engineer', 'SDET', 'AI / LLM Evaluation']

export const domains = [
  'Banking',
  'UPI Payments',
  'Cryptocurrency',
  'Healthcare',
  'Pharmaceuticals',
  'Title Insurance',
  'Construction',
]

export type JourneyItem = {
  icon: 'graduation' | 'scale' | 'smartphone' | 'book'
  title: string
  description: string
  period?: string
}

export const aiJourney: JourneyItem[] = [
  {
    icon: 'scale',
    title: 'LLM response evaluation',
    description:
      'Assessment of model responses against accuracy, instruction following, reasoning, structure and style, with cited evidence for each judgement and a specific remediation rather than a score alone.',
  },
  {
    icon: 'book',
    title: 'Engineering documentation for Handshake AI',
    description:
      'Original engineering and data documentation written by hand for Handshake AI projects through ZettaMine Labs, including an 80-page guide to the manual QA testing workflow.',
    period: 'Current',
  },
  {
    icon: 'smartphone',
    title: 'Building with Claude',
    description:
      'Three Android applications and one website built through plain-English prompting, covering requirements, code generation and debugging, then tested across functional, regression and UAT cycles.',
  },
  {
    icon: 'graduation',
    title: 'AI Engineering Bootcamp',
    description:
      'Structured study in Generative AI and Python, alongside self-directed work in prompt engineering and LLM evaluation methods.',
    period: 'In progress',
  },
]

export type SkillGroup = {
  title: string
  icon: 'sparkles' | 'shield' | 'bot' | 'server' | 'code' | 'wrench'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI Evaluation & Prompting',
    icon: 'sparkles',
    items: [
      'LLM Response Evaluation',
      'Instruction Following',
      'Reasoning & Structure',
      'Prompt Design',
      'Acceptance Criteria',
      'Python (Learning)',
    ],
  },
  {
    title: 'Quality Assurance',
    icon: 'shield',
    items: [
      'Manual Testing',
      'Test Case Design',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'Smoke Testing',
      'UAT',
      'Defect Lifecycle Management',
      'SDLC / STLC',
      'Requirement Traceability',
    ],
  },
  {
    title: 'Test Automation',
    icon: 'bot',
    items: [
      'Selenium WebDriver',
      'Java',
      'TestNG',
      'Maven',
      'Page Object Model',
      'Data-Driven Framework',
      'XPath & CSS Selectors',
      'Cross-Browser Testing',
    ],
  },
  {
    title: 'API & Data',
    icon: 'server',
    items: [
      'REST API Testing (Postman)',
      'JSON & XML Validation',
      'Payment Gateway Validation',
      'SQL / MS-SQL Validation',
    ],
  },
  {
    title: 'Programming',
    icon: 'code',
    items: ['Java', 'SQL', 'Python (Learning)', 'JavaScript (Basics)', 'HTML', 'CSS', 'Dart & Flutter (Basics)'],
  },
  {
    title: 'Tools & Methods',
    icon: 'wrench',
    items: ['JIRA', 'Git', 'GitHub', 'Agile', 'Scrum', 'Microsoft Excel', 'Technical Writing'],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Project Contributor — Engineering and Data Documentation',
    company: 'ZettaMine Labs Pvt. Ltd. · Client: Handshake AI (US)',
    period: 'Sep 2026 – Present',
    current: true,
    highlights: [
      'Prepare original Word documents on engineering and data topics for Handshake AI projects, written fully by hand.',
      "Authored an 80-page end-to-end guide to the manual QA testing workflow, delivered within the project's 100-page limit.",
    ],
  },
  {
    role: 'Freelance Software Developer & QA Engineer (AI Evaluation)',
    company: 'Self-employed',
    period: 'Jan 2025 – Present',
    current: true,
    highlights: [
      'Apply prompt engineering and LLM evaluation to validate AI-generated code and content against defined acceptance criteria before release.',
      'Built three Android applications and one website with Claude through plain-English prompting, covering requirements, code generation and debugging.',
      'Delivered a bilingual support chatbot, a stockist ordering application with an integrated payment gateway, and a medical representative monitoring application covering location-based attendance, visits, distance and target versus achievement.',
      'Tested each application and the website across functional, regression and UAT cycles, and automated the website tests with Selenium WebDriver, Java and TestNG.',
      "Clients: Swastick Builders, M'De Vins Labs Pvt Ltd, Amuthasurabi Pathiram Store, Swastika Traders.",
    ],
  },
  {
    role: 'Software Test Engineer & Flutter Mobile Application Developer',
    company: 'India Floats Technologies Pvt Ltd',
    period: 'Apr 2024 – Aug 2024',
    highlights: [
      'Tested client websites and mobile applications, including a banking website, using manual testing and Selenium WebDriver with Java.',
      'Identified, reproduced and drove resolution of critical defects across functional and regression testing cycles.',
      'Tracked defects through Agile workflows in JIRA, ensuring timely triage, retest and closure.',
      'Contributed to Flutter application development and a Facebook–Instagram integration for automated publishing of marketing content.',
    ],
  },
  {
    role: 'Test Engineer & Flutter Mobile Application Developer',
    company: 'Kappsoft Systems Pvt Ltd',
    period: 'Jun 2022 – Oct 2023',
    highlights: [
      'Led quality assurance for a UPI payment application, validating API-driven transaction flows and payment gateway compliance.',
      'Improved stability of a cryptocurrency application by identifying performance and functional defects.',
      'Designed and executed functional, regression and integration test cases for financial transaction workflows.',
      'Maintained requirement traceability from acceptance criteria through test execution in Agile ceremonies.',
      'Built and tested a geofencing-based attendance monitoring application in Flutter for internal use, with automatic HR alerts.',
    ],
  },
  {
    role: 'Sales Specialist',
    company: 'V5 Global Services Pvt Ltd',
    period: 'Jan 2020 – Nov 2021',
    highlights: [
      'Sold Lenovo laptops and desktops, delivering product demonstrations and guiding customers to the right purchase.',
    ],
  },
  {
    role: 'System Administrator',
    company: "M'De Vins Labs Pvt Ltd",
    period: 'Jan 2016 – Dec 2019',
    highlights: [
      'Maintained company computers, including installation and updates of operating systems, software and drivers.',
      'Managed antivirus and regular system backups, and provided hardware and network support.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Fidelity National Financial India Pvt Ltd',
    period: 'Nov 2014 – Dec 2015',
    highlights: [
      'Analysed title insurance application data (BKFS) with MS-SQL queries to verify data integrity for downstream reporting.',
      'Resolved source-system discrepancies with cross-functional teams and produced validated reports.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Indium Software (India) Limited',
    period: 'Mar 2013 – Oct 2014',
    highlights: [
      'Tested banking applications manually and with Selenium WebDriver (Java) against functional and business requirements.',
      'Validated blood-glucose monitoring features in a healthcare application (GLYTECH) using a Selenium data-driven framework.',
      'Prepared and maintained test cases, test data and defect reports across multiple release cycles.',
      'Progressed from intern (Mar – Aug 2013) to full-time from Sep 2013.',
    ],
  },
]

export const projects = [
  {
    title: 'Evaluating GPT-4 vs GPT-5',
    type: 'Compared two model responses to a 50-word story brief on instruction following, structure and style. Selected the stronger response with cited evidence and proposed a specific correction for the weaker one.',
    organization: 'Handshake AI Skills Studio — "How Evals Improve AI Models"',
    year: 'Sep 2026',
  },
  {
    title: 'Job Applications Tracker',
    type: 'A tracker recording application status, next steps and a tiered company list, used to manage follow-ups across more than 15 companies.',
    organization: 'Microsoft Excel',
    year: 'Oct 2026',
  },
]

export const certifications = [
  { title: 'AI Evaluation Fundamentals (Universal Assessment)', issuer: 'PlatinaIQ' },
  { title: 'How Evals Improve AI Models', issuer: 'Handshake AI Skills Studio', year: '2026' },
  { title: 'Manual Testing and Selenium with Java', issuer: 'Besant Technologies', year: '2023' },
  {
    title: 'AI Engineering Bootcamp — Generative AI and Python',
    issuer: 'Udemy',
    inProgress: true,
  },
]

export const education = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'Anna University, Chennai',
    year: 'December 2010',
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Tamil', level: 'Native' },
  { name: 'Hindi', level: 'Beginner' },
]
