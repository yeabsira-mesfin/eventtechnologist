/**
 * Content is kept separate from the UI for easy editing.
 * Every metric, title and credential in this starter comes from the user's supplied background or PDF certificates.
 * Do not add unverified client testimonials, awards, certifications, employment dates or technologies.
 */
export const profile = {
  name: 'Yeabsira Mesfin',
  title: 'Event Technologist & Cvent Specialist',
  email: 'Yeabsira.mesfin29@gmail.com',
  overview: 'I design and deliver the technology behind seamless event experiences, from registration and attendee journeys to operational reliability and reporting.',
};

export const metrics = [
  { value: '200+', label: 'event builds supported' },
  { value: '5,000+', label: 'attendee records managed' },
  { value: '12–20', label: 'concurrent projects' },
  { value: '2 years', label: 'without a critical incident' },
];

export const sessions = [
  {
    id: '01',
    tag: 'CVENT BUILDS',
    title: 'Registration that just works.',
    summary: 'Complex registration paths made intuitive, accurate and attendee-ready.',
    detail: 'Cvent Event Management, registration types and paths, admission items, custom questions, conditional visibility, email confirmations and quality assurance.',
    skills: ['Cvent Event Management', 'Registration workflows', 'Conditional logic', 'Communication setup'],
  },
  {
    id: '02',
    tag: 'ATTENDEE EXPERIENCE',
    title: 'Every touchpoint matters.',
    summary: 'Thoughtful digital experiences before, during and after an event.',
    detail: 'Cvent Attendee Hub, attendee communications, audience segmentation, session discovery and mobile event experiences.',
    skills: ['Attendee Hub', 'Audience segments', 'Event apps', 'Engagement'],
  },
  {
    id: '03',
    tag: 'OPERATIONS & DATA',
    title: 'Confidence behind the scenes.',
    summary: 'High-volume records, reporting and troubleshooting handled with care.',
    detail: 'Accurate attendee data management for 5,000+ records, testing, registration support, reporting and issue resolution across parallel events.',
    skills: ['Data accuracy', 'Reporting', 'QA and testing', 'Production support'],
  },
  {
    id: '04',
    tag: 'LEADERSHIP & DELIVERY',
    title: 'From brief to showtime.',
    summary: 'Coordinating stakeholders, deadlines, systems and teams.',
    detail: 'Progressed from intern to team lead at MMCY, supported 12–20 projects in parallel, and led a team of four.',
    skills: ['Stakeholder management', 'Team leadership', 'Client delivery', 'Project coordination'],
  },
];

export const certifications = [
  {
    name: 'Cvent Event Management',
    track: 'EVENT MANAGEMENT',
    date: 'Nov 02, 2026',
    preview: '/previews/cvent-event-management.webp',
    pdf: '/certificates/cvent-event-management.pdf',
  },
  {
    name: 'Cvent Event Management Advanced',
    track: 'ADVANCED EVENT MANAGEMENT',
    date: 'Nov 02, 2026',
    preview: '/previews/cvent-event-management-advanced.webp',
    pdf: '/certificates/cvent-event-management-advanced.pdf',
  },
  {
    name: 'Cvent Attendee Hub',
    track: 'ATTENDEE HUB',
    date: 'Nov 02, 2026',
    preview: '/previews/cvent-attendee-hub.webp',
    pdf: '/certificates/cvent-attendee-hub.pdf',
  },
];

export const progression = ['Intern', 'Junior Cvent Developer', 'Account Manager', 'Client Success Advisor', 'Team Lead'];
export const clients = ['BCD Travel', 'YPO', 'Abbott', 'CDW'];
export const tools = ['Cvent Event Management', 'Cvent Attendee Hub', 'SpotMe', 'InEvent', 'Event registration', 'Attendee communications', 'Reporting & QA', 'Event operations'];

