export const profile = {
  name: 'V. Thambidurai',
  role: 'QA Engineer',
  location: 'Chennai, India',
  title: 'QA Engineer Transitioning into Generative AI | Python | AI Evaluation | Test Automation',
  tagline: 'Bringing 5.5+ years of software quality expertise to building and evaluating reliable AI systems',
  email: 'vthambiduraitd@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thambidurai-v',
  github: 'https://github.com/T-Durai21',
  contactNote: 'Open to remote roles in AI evaluation, AI QA and Generative AI.',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#ai-journey', label: 'AI Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: '5.5+', label: 'Years in QA' },
  { value: '10+', label: 'Year career' },
  { value: '6', label: 'Domains tested' },
]

export const domains = [
  'Banking',
  'UPI Payments',
  'Cryptocurrency',
  'Healthcare',
  'Pharmaceuticals',
  'Title Insurance',
]

export type JourneyItem = {
  icon: 'graduation' | 'scale' | 'smartphone' | 'book'
  title: string
  description: string
  period?: string
}

export const aiJourney: JourneyItem[] = [
  {
    icon: 'graduation',
    title: 'AI Engineering Bootcamp',
    description: 'Currently completing an AI Engineering Bootcamp (Generative AI and Python) on Udemy.',
    period: 'In progress',
  },
  {
    icon: 'scale',
    title: 'AI evaluation at Handshake AI',
    description:
      'AI evaluation work on Handshake AI, including comparing GPT-4 vs GPT-5 outputs for instruction following, structure and style.',
  },
  {
    icon: 'smartphone',
    title: 'Building with Claude',
    description: 'Built 3 Android apps and 1 website with Claude through plain-English prompting.',
  },
  {
    icon: 'book',
    title: 'Self-directed study',
    description: 'Self-directed study in prompt engineering, LLM frameworks and ethical AI.',
    period: 'Sep – Dec 2024',
  },
]

export type SkillGroup = {
  title: string
  icon: 'sparkles' | 'shield' | 'bot' | 'server' | 'code' | 'wrench'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Generative AI and Python (Learning)',
    icon: 'sparkles',
    items: [
      'Python',
      'Prompt Engineering',
      'LLM Evaluation',
      'AI Output Testing',
      'Generative AI fundamentals',
    ],
  },
  {
    title: 'Quality Assurance',
    icon: 'shield',
    items: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'Smoke Testing',
      'UAT',
      'SDLC / STLC',
    ],
  },
  {
    title: 'Test Automation',
    icon: 'bot',
    items: [
      'Selenium WebDriver',
      'Java',
      'TestNG',
      'Page Object Model',
      'Data-Driven Framework',
      'Maven',
      'Cross-Browser Testing',
    ],
  },
  {
    title: 'API & Backend',
    icon: 'server',
    items: ['Postman', 'REST APIs', 'JSON / XML Validation', 'Payment Gateway Validation'],
  },
  {
    title: 'Programming',
    icon: 'code',
    items: ['Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Dart (basics)'],
  },
  {
    title: 'Tools & Process',
    icon: 'wrench',
    items: ['JIRA', 'Git', 'Agile / Scrum'],
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
    role: 'Project Contributor, Engineering and Data Documentation',
    company: 'Handshake AI (via Zetta Mine)',
    period: 'Sep 2026 – Present',
    current: true,
    highlights: ['Authored an 80-page end-to-end manual QA testing guide.'],
  },
  {
    role: 'Freelance App Builder and QA Engineer',
    company: 'Self-employed',
    period: 'Jan 2025 – Present',
    current: true,
    highlights: [
      "Built 3 Android apps and 1 website with Claude for Swastick Builders and M'De Vins Labs, including a stockist ordering app with payment gateway and a medical rep tracking app.",
      'Performed manual and TestNG-automated testing.',
    ],
  },
  {
    role: 'Software Test Engineer cum Flutter Developer',
    company: 'India Floats Technologies',
    period: 'Apr 2024 – Aug 2024',
    highlights: [],
  },
  {
    role: 'Software Test Engineer cum Flutter Developer',
    company: 'Kappsoft Systems',
    period: 'Jun 2022 – Oct 2023',
    highlights: [
      'Led QA for UPI payment and crypto apps.',
      'Built a geofencing attendance app proof of concept.',
    ],
  },
  {
    role: 'System Admin',
    company: "M'De Vins Labs",
    period: '2016 – Dec 2019',
    highlights: ['Maintained company systems, backups, and hardware; supported sales reports and payroll.'],
  },
  {
    role: 'Data Analyst',
    company: 'Fidelity National Financial India',
    period: 'Nov 2014 – Dec 2015',
    highlights: [],
  },
  {
    role: 'Software Test Engineer',
    company: 'Indium Software',
    period: 'Sep 2013 – Oct 2014',
    highlights: ['Tested banking and healthcare applications with Selenium.'],
  },
  {
    role: 'Software Test Engineer Intern',
    company: 'Indium Software',
    period: 'Mar 2013 – Aug 2013',
    highlights: [],
  },
  {
    role: 'Feet On Street, Intel Buzztop Program',
    company: 'CPM India Sales & Marketing',
    period: 'Jul 2012 – Dec 2012',
    highlights: [],
  },
  {
    role: 'Executive, Retail Sales (Client: HP)',
    company: 'Xylem Resource Management',
    period: 'Jan 2011 – Jun 2012',
    highlights: [],
  },
]

export const projects = [
  {
    title: 'Evaluating GPT-4 vs GPT-5',
    type: 'AI evaluation project',
    organization: 'Handshake AI Skills Studio',
    year: '2026',
  },
]

export const certifications = [
  { title: 'AI Evaluation Fundamentals', issuer: 'PlatinaIQ' },
  { title: 'How Evals Improve AI Models', issuer: 'Handshake AI', year: '2026' },
  { title: 'Manual Testing and Selenium with Java', issuer: 'Besant Technologies', year: '2023' },
  { title: 'AI Engineering Bootcamp', issuer: 'Udemy', inProgress: true },
]

export const education = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'Anna University',
    year: '2010',
  },
]
