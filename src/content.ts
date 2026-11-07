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
    tag: 'REGISTRATION ENGINEERING',
    title: 'Cvent Registration Architecture & Logic',
    summary: 'Turning complex attendee requirements into clear, testable registration journeys.',
    detail: 'Designing registration types and paths, admission items, custom questions, conditional visibility, audience-specific messaging and end-to-end QA.',
    skills: ['Cvent Flex & Event Management', 'Registration paths', 'Conditional logic', 'Journey QA'],
  },
  {
    id: '02',
    tag: 'DIGITAL ATTENDEE EXPERIENCE',
    title: 'Attendee Hub, Mobile Apps & Engagement',
    summary: 'Connecting agenda discovery, content, communications and launch readiness across event platforms.',
    detail: 'Cvent Attendee Hub, mobile event applications, SpotMe, InEvent, audience segmentation and content verification.',
    skills: ['Attendee Hub', 'Mobile experience delivery', 'Audience segmentation', 'Content QA'],
  },
  {
    id: '03',
    tag: 'DATA INTEGRITY & OPERATIONS',
    title: 'Attendee Data, Hotel Handoffs & Release QA',
    summary: 'Protecting record accuracy while connecting registration data to operational decisions.',
    detail: 'Attendee record validation, reporting, exception handling, coordination with event planners on hotel-related requirements, and release checks.',
    skills: ['Data reconciliation', 'Reporting & QA', 'Planner collaboration', 'Production support'],
  },
  {
    id: '04',
    tag: 'ENTERPRISE PROGRAM DELIVERY',
    title: 'Technical Delivery, Escalations & Team Leadership',
    summary: 'Keeping enterprise event programs dependable across many clients, priorities and deadlines.',
    detail: 'Prioritization, stakeholder clarification, quality reviews, incident prevention and leadership across high-volume delivery.',
    skills: ['Technical discovery', 'Risk-based prioritization', 'Client delivery', 'Team leadership'],
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


export const sessionEvidence: Record<string, {
  platforms: string[];
  capabilities: string[];
  evidence: string;
  metric: string;
  caption: string;
  objective: string;
  deliveryFlow: string[];
  riskChecks: string[];
  collaboration: string;
}> = {
  '01': {
    platforms: ['Cvent Event Management', 'Cvent Flex'],
    capabilities: [
      'Translate guest segments into registration types, paths and admission items',
      'Design custom questions and conditional visibility for the right audience',
      'Connect confirmation content and attendee communications to each registration journey',
      'Test both the intended path and exception scenarios before launch',
    ],
    objective: 'Make the configuration match real event policies, not just look good on a registration page.',
    deliveryFlow: [
      'Map who can register, which admission options apply, and what each audience needs to see.',
      'Configure registration types, paths, questions and conditional logic in Cvent.',
      'Review page content and communications against the rules agreed with planners.',
      'Walk complete sample registrations through submission, confirmation and reporting checks.',
    ],
    riskChecks: [
      'Wrong audience sees an admission option or question',
      'Required information becomes hidden by conditional rules',
      'Confirmation content does not match the selected path',
    ],
    collaboration: 'Partner with event planners to clarify eligibility, guest categories, policies and exceptions before implementation.',
    evidence: 'Supported 250+ event builds across my event technology career, applying hands-on registration configuration and quality assurance.',
    metric: '250+',
    caption: 'event builds supported',
  },
  '02': {
    platforms: ['Cvent Attendee Hub', 'Cvent mobile apps', 'SpotMe', 'InEvent'],
    capabilities: [
      'Organize attendee content, agendas, sessions and event communications',
      'Tailor information to audience segments and the stage of the attendee journey',
      'Validate session discovery, navigation, links and content consistency',
      'Support launch readiness and resolve attendee-facing issues',
    ],
    objective: 'Make the attendee experience usable and consistent as program information changes.',
    deliveryFlow: [
      'Confirm the event information architecture: content, sessions, audiences and communications.',
      'Configure and review available app or Hub features for the specific event.',
      'Check navigation and session details from the attendee perspective.',
      'Coordinate content corrections and run final launch-readiness checks.',
    ],
    riskChecks: [
      'Outdated session, speaker or logistical information',
      'Audience-specific information visible to the wrong group',
      'Broken navigation or mismatched content between channels',
    ],
    collaboration: 'Work with program owners to align changing agendas, content approvals and attendee communications.',
    evidence: 'Worked across Cvent Attendee Hub, mobile applications, SpotMe and InEvent; earned the Cvent Attendee Hub certification on November 2, 2026.',
    metric: '4',
    caption: 'event platforms experienced',
  },
  '03': {
    platforms: ['Cvent Event Management', 'Attendee reporting', 'Event planner handoffs'],
    capabilities: [
      'Validate registration records and the completeness of critical attendee fields',
      'Support operational reports, exception handling and accurate data handoffs',
      'Coordinate hotel-related registration requirements with event planners without presenting room sourcing as my responsibility',
      'Troubleshoot registration issues while protecting data integrity',
    ],
    objective: 'Ensure attendee data remains reliable when planners need it for real operational decisions.',
    deliveryFlow: [
      'Agree on the data fields and reporting requirements with the planning team.',
      'Check registration data for missing, inconsistent or duplicate information.',
      'Clarify hotel-related and other logistical requirements with planners before any data handoff.',
      'Verify report outputs and track exceptions through resolution.',
    ],
    riskChecks: [
      'Duplicate, missing or inconsistent attendee records',
      'Hotel-related information captured without a clear operational owner',
      'A report or export that does not match registration status',
    ],
    collaboration: 'Worked with event planners on hotel-related requirements and attendee coordination. The hotel sourcing and booking decisions remained with the relevant planning teams.',
    evidence: 'Managed 5,000+ attendee records with zero data loss and maintained two years without a critical incident.',
    metric: '5,000+',
    caption: 'attendee records managed',
  },
  '04': {
    platforms: ['MMCY enterprise delivery', 'Cvent', 'SpotMe', 'InEvent'],
    capabilities: [
      'Convert stakeholder requests into clear configurations, scope and acceptance checks',
      'Prioritize technical work and escalate risks across a high-volume pipeline',
      'Review quality and coordinate handoffs among builders, account teams and planners',
      'Guide a four-person team while maintaining direct technical context',
    ],
    objective: 'Scale reliable delivery without losing the technical detail that makes individual event builds successful.',
    deliveryFlow: [
      'Clarify business requirements and identify dependencies or ambiguous requests.',
      'Sequence competing deliverables against launch dates and operational risk.',
      'Coordinate reviews, QA feedback, escalation and stakeholder updates.',
      'Close issues with documented decisions and readiness checks.',
    ],
    riskChecks: [
      'Late scope changes with untested downstream impacts',
      'Unclear ownership of a critical attendee-facing issue',
      'Parallel deadlines causing skipped review or rushed handoffs',
    ],
    collaboration: 'Supported BCD Travel, YPO, Abbott and CDW programs through MMCY, while progressing from intern to team lead.',
    evidence: 'Led a team of 4 and supported 20–30 concurrent projects. Enterprise clients were supported through MMCY, not direct employers.',
    metric: '20–30',
    caption: 'concurrent projects',
  },
};

export const careerStages = [
  {
    role: 'Intern',
    chapter: 'Understanding the full delivery lifecycle',
    description: 'Built an operational foundation in event technology by learning how event requirements become platform configurations, how teams review those configurations, and why attendee-facing accuracy matters.',
    focus: 'Requirements, validation and event delivery fundamentals',
    connection: 'See how that discipline developed into structured registration QA.',
    link: '/sessions/01',
  },
  {
    role: 'Junior Cvent Developer',
    chapter: 'From configuration tasks to attendee logic',
    description: 'Moved into hands-on Cvent development, connecting registration questions, attendee pathways and communications to the requirements provided by event planners. Learned to test how a choice in one part of a registration impacts the next.',
    focus: 'Cvent registration paths and conditional visibility',
    connection: 'Explore the registration architecture and validation approach.',
    link: '/sessions/01',
  },
  {
    role: 'Cvent Developer',
    chapter: 'Building experiences with real operational consequences',
    description: 'Advanced into a distinct Cvent Developer role, building registration experiences for enterprise event programs. Focused on registration types, admission items, attendee data capture and quality checks so complex rules translated into usable journeys.',
    focus: 'Registration architecture, content accuracy and end-to-end QA',
    connection: 'Explore the technical work behind my Cvent builds.',
    link: '/sessions/01',
  },
  {
    role: 'Account Manager',
    chapter: 'Connecting client requirements to the build',
    description: 'Expanded from implementation into stakeholder ownership, translating priorities, timelines and evolving event needs into actionable work for delivery teams while remaining close to the underlying event technology.',
    focus: 'Technical scoping, expectation setting and delivery coordination',
    connection: 'See how I approach multi-project enterprise delivery.',
    link: '/sessions/04',
  },
  {
    role: 'Client Success Advisor',
    chapter: 'Operational readiness beyond launch',
    description: 'Worked across client communication, issue triage and event execution needs. Supported planner handoffs, attendee data accuracy, reporting and the resolution of registration and experience issues that affect real participants.',
    focus: 'Incident prevention, attendee data and planner collaboration',
    connection: 'Explore the operational QA and data controls.',
    link: '/sessions/03',
  },
  {
    role: 'Team Lead',
    chapter: 'Technical judgment at portfolio scale',
    description: 'Led a team of 4 while coordinating 20–30 concurrent projects. Balanced build quality, stakeholder expectations and delivery risk across multiple enterprise programs, using technical familiarity to prioritize reviews, handoffs and escalations.',
    focus: 'Quality ownership, prioritization and four-person team leadership',
    connection: 'Explore how I coordinate enterprise event delivery.',
    link: '/sessions/04',
  },
];
