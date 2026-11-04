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
  { value: '250+', label: 'event builds supported' },
  { value: '5,000+', label: 'attendee records managed' },
  { value: '20–30', label: 'concurrent projects' },
  { value: '2 years', label: 'without a critical incident' },
];

export const sessions = [
  {
    id: '01',
    tag: 'CVENT BUILDS',
    title: 'Cvent Registration Architecture',
    summary: 'Complex registration paths made intuitive, accurate and attendee-ready.',
    detail: 'Cvent Event Management, registration types and paths, admission items, custom questions, conditional visibility, email confirmations and quality assurance.',
    skills: ['Cvent Event Management', 'Registration workflows', 'Conditional logic', 'Communication setup'],
  },
  {
    id: '02',
    tag: 'ATTENDEE EXPERIENCE',
    title: 'Attendee Hub and Mobile Experiences',
    summary: 'Thoughtful digital experiences before, during and after an event.',
    detail: 'Cvent Attendee Hub, attendee communications, audience segmentation, session discovery and mobile event experiences.',
    skills: ['Attendee Hub', 'Audience segments', 'Event apps', 'Engagement'],
  },
  {
    id: '03',
    tag: 'OPERATIONS & DATA',
    title: 'Event Operations, Data Accuracy, and QA',
    summary: 'High-volume records, reporting and troubleshooting handled with care.',
    detail: 'Accurate attendee data management for 5,000+ records, testing, registration support, reporting and issue resolution across parallel events.',
    skills: ['Data accuracy', 'Reporting', 'QA and testing', 'Production support'],
  },
  {
    id: '04',
    tag: 'LEADERSHIP & DELIVERY',
    title: 'Leadership and Enterprise Client Delivery',
    summary: 'Coordinating stakeholders, deadlines, systems and teams.',
    detail: 'Progressed from intern to team lead at MMCY, supported 20–30 projects in parallel, and led a team of four.',
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

export const progression = ['Intern', 'Junior Cvent Developer', 'Cvent Developer', 'Account Manager', 'Client Success Advisor', 'Team Lead'];
export const clients = ['BCD Travel', 'YPO', 'Abbott', 'CDW'];
export const tools = ['Cvent Event Management', 'Cvent Attendee Hub', 'SpotMe', 'InEvent', 'Event registration', 'Attendee communications', 'Reporting & QA', 'Event operations'];


export const sessionEvidence: Record<string, {platforms:string[]; capabilities:string[]; evidence:string; metric:string; caption:string}> = {
 '01': {platforms:['Cvent Event Management'],capabilities:['Registration types, paths and admission items','Custom questions and conditional visibility','Audience segmentation and confirmations','Testing the complete attendee journey'],evidence:'Supported 250+ event builds across my event technology career, with registration workflows and quality assurance at the heart of delivery.',metric:'250+',caption:'event builds supported'},
 '02': {platforms:['Cvent Attendee Hub','Cvent mobile apps','SpotMe','InEvent'],capabilities:['Attendee-facing content and communications','Session discovery and mobile event experiences','Audience segmentation','Content checks and launch readiness'],evidence:'Worked across Cvent Attendee Hub, mobile applications, SpotMe and InEvent. My Cvent Attendee Hub certification was awarded November 2, 2026.',metric:'4',caption:'platform experiences'},
 '03': {platforms:['Cvent Event Management','Reporting & QA'],capabilities:['Attendee data management and record validation','Registration support and troubleshooting','Reporting and operational checks','Quality assurance across parallel event builds'],evidence:'Managed 5,000+ attendee records with zero data loss and maintained 2 years without a critical incident.',metric:'5,000+',caption:'attendee records managed'},
 '04': {platforms:['MMCY client delivery','Cross-platform event programs'],capabilities:['Stakeholder communication and expectations','Prioritization across concurrent projects','Team coordination and delivery oversight','Client support from brief through launch'],evidence:'Progressed from Intern to Team Lead at MMCY, led a team of 4, and supported 20–30 concurrent projects. Client programs included BCD Travel, YPO, Abbott and CDW through MMCY.',metric:'4',caption:'team members led'}
};
export const careerStages = [
 {role:'Intern',chapter:'The foundation',description:'The beginning of my MMCY journey and the first step toward a career in event technology.',focus:'Learning the delivery environment',connection:'Explore the registration expertise I developed across my career.',link:'/sessions/01'},
 {role:'Junior Cvent Developer',chapter:'Closer to the build',description:'My progression moved into Cvent development, the platform at the center of my registration and event technology experience.',focus:'Cvent and attendee journeys',connection:'See my Cvent registration capabilities.',link:'/sessions/01'},
 {role:'Cvent Developer',chapter:'Owning event builds',description:'I advanced from junior development into the Cvent Developer role, building and configuring registration experiences and validating attendee journeys for enterprise event programs.',focus:'Cvent development and delivery',connection:'Explore my Cvent registration work.',link:'/sessions/01'},
 {role:'Account Manager',chapter:'A wider perspective',description:'The next step in my MMCY progression brought my career into account management and client relationships.',focus:'Client relationships',connection:'Explore my client delivery and stakeholder skills.',link:'/sessions/04'},
 {role:'Client Success Advisor',chapter:'The attendee. The client. The outcome.',description:'My MMCY journey continued through client success before progressing into team leadership.',focus:'Client experience',connection:'Explore my event operations and support expertise.',link:'/sessions/03'},
 {role:'Team Lead',chapter:'Bringing it all together',description:'My final role at MMCY. I led a team of 4, combining event technology experience with people and delivery coordination.',focus:'Team leadership and delivery',connection:'Explore my leadership experience.',link:'/sessions/04'},
];
