import googleLogo from '../assets/images/logos/google.svg'
import metaLogo from '../assets/images/logos/meta.svg'
import anthropicLogo from '../assets/images/logos/anthropic.svg'
import umichLogo from '../assets/images/logos/umich.svg'

export const organizations = [
  {
    id: 1,
    name: 'University of Michigan',
    shortName: 'UMICH',
    category: 'Python Development',
    logo: umichLogo,
    courses: [
      'Python for Everybody Specialization',
      'Completed all 5 courses',
    ],
  },
  {
    id: 2,
    name: 'Google',
    shortName: 'GOOGLE',
    category: 'Artificial Intelligence',
    logo: googleLogo,
    courses: [
      'AI Fundamentals',
      'Introduction to Generative AI',
    ],
  },
  {
    id: 3,
    name: 'Meta',
    shortName: 'META',
    category: 'Web Development',
    logo: metaLogo,
    courses: [
      'Programming with JavaScript',
    ],
  },
  {
    id: 4,
    name: 'Anthropic',
    shortName: 'ANTHROPIC',
    category: 'AI Engineering',
    logo: anthropicLogo,
    courses: [
      'Claude Platform 101',
      'Claude Code 101',
      'Claude Code in Action',
    ],
  },
]