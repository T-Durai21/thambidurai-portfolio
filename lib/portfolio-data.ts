export const profile = {
  name: 'V. Thambidurai',
  role: 'QA Engineer',
  location: 'Chennai, India',
  title:
    'QA Engineer | Manual Testing | Test Automation (Selenium, Java) | Technical Documentation',
  tagline: 'Ensuring software quality across banking, payments, healthcare and AI',
  email: '',
  linkedin: '',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: '4.5+', label: 'Years in QA' },
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

export type SkillGroup = {
  title: string
  icon: 'shield' | 'bot' | 'server' | 'code' | 'wrench'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
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
    highlights: [
      'Authored an 80-page engineering and data documentation deliverable for Handshake AI.',
    ],
  },
]
