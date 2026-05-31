export const SITE = {
  name: 'Vertex Volleyball Club',
  domain: 'vertexvbc.ca',
  tagline: 'Development-focused volleyball for young athletes',
  email: 'vertexvbc@gmail.com',
  instagram: 'https://www.instagram.com/vertexvbc',
  tryoutForm: 'https://forms.google.com/', // Replace with your Google Form URL
  season: '2026–2027',
}

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/documents', label: 'Documents' },
  { to: '/refund-policy', label: 'Refund Policy' },
  { to: '/contact', label: 'Contact' },
]

export const CORE_VALUES = [
  { title: 'Development', description: 'Long-term growth through fundamentals and quality reps.' },
  { title: 'Respect', description: 'For teammates, opponents, officials, and the game.' },
  { title: 'Accountability', description: 'Owning effort, attitude, and improvement every day.' },
  { title: 'Teamwork', description: 'Success built together on and off the court.' },
  { title: 'Discipline', description: 'Consistent habits that carry into competition.' },
  { title: 'Positive Culture', description: 'An environment where athletes love to train and compete.' },
]

export const BOYS_PROGRAMS = [
  {
    name: '12U Boys 4v4',
    ages: 'Born 2015 or later',
    focus: ['Fun', 'Fundamentals', 'Movement skills', 'Teamwork'],
    roster: '6 athletes',
  },
  {
    name: '13U Boys 6v6',
    ages: 'Born 2014 or later',
    focus: ['Skill development', 'Team systems', 'Competition'],
    roster: '10–12 athletes',
  },
  {
    name: '14U Boys TLS',
    ages: 'Born 2013 or later',
    focus: ['Tactical understanding', 'Position training', 'Competitive development'],
    roster: '10–12 athletes',
  },
]

export const GIRLS_PROGRAMS = [
  {
    name: '12U Girls 4v4',
    ages: 'Born 2015 or later',
    focus: ['Fun', 'Fundamentals', 'Movement skills', 'Teamwork'],
    roster: '6 athletes',
  },
  {
    name: '13U Girls 6v6',
    ages: 'Born 2014 or later',
    focus: ['Skill development', 'Team systems', 'Competition'],
    roster: '10–12 athletes',
  },
  {
    name: '14U Girls TLS',
    ages: 'Born 2013 or later',
    focus: ['Tactical understanding', 'Position training', 'Competitive development'],
    roster: '10–12 athletes',
  },
]

export const DOCUMENTS = [
  { title: 'Club Handbook', file: '/documents/handbook.pdf' },
  { title: 'Parents Code of Conduct', file: '/documents/parents-code-of-conduct.pdf' },
  { title: 'Athlete Code of Conduct', file: '/documents/athlete-code-of-conduct.pdf' },
  { title: 'Coach Code of Conduct', file: '/documents/coach-code-of-conduct.pdf' },
  { title: 'Discipline & Complaints Policy', file: '/documents/discipline-complaints-policy.pdf' },
  { title: 'Concussion Policy', file: '/documents/concussion-policy.pdf' },
]

export const TRYOUT_INFO = {
  locations: [
    { name: 'Main gym', detail: 'Add your facility name and address here.' },
    { name: 'Secondary location', detail: 'Add alternate tryout location if applicable.' },
  ],
  cost: 'Tryout fee and payment details will be posted before registration opens. Contact us with questions.',
  bring: [
    'Athletic shoes (non-marking court shoes)',
    'Comfortable athletic clothing',
    'Water bottle',
    'Knee pads (recommended)',
    'Completed registration / waiver (if required)',
  ],
}
