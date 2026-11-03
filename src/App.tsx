import { Icon } from './components/Icon';
import { SectionHeading } from './components/SectionHeading';
import { SiteHeader } from './components/SiteHeader';
import { Agenda } from './sections/Agenda';
import { Credentials } from './sections/Credentials';
import { clients, metrics, profile, progression, tools } from './content';

function EventPass() {
  // Decorative only. This is not a real ticket, registration, or Cvent product.
  return <div className="pass-wrap" aria-hidden="true">
    <div className="pass-orbit pass-orbit-one"/><div className="pass-orbit pass-orbit-two"/>
    <div className="pass-card">
      <div className="pass-card-top"><span>ALL ACCESS <span className="pass-dot">●</span></span><span>PORTFOLIO / 2026</span></div>
      <div className="pass-symbol"><span/><span/><span/><span/></div>
      <div className="pass-card-middle"><div className="pass-meta">ATTENDEE EXPERIENCE NO. 001</div><h3>Behind every<br/><em>great event.</em></h3><p>THE PEOPLE. THE PLATFORMS.<br/>THE DETAILS THAT MATTER.</p></div>
      <div className="pass-divider"><span/><span/></div>
      <div className="pass-card-bottom"><div><span>YOUR HOST</span><strong>YEABSIRA MESFIN</strong></div><div><span>ACCESS</span><strong>FULL EXPERIENCE <span className="pass-mini-arrow">↗</span></strong></div></div>
    </div>
    <div className="pass-shadow-note"><span className="note-icon">✦</span><span>WELCOME IN<br/><strong>YOU'RE ON THE LIST</strong></span></div>
  </div>;
}

function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-grid-decoration" aria-hidden="true"/>
    <div className="container hero-content">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="mini-spark" aria-hidden="true">✳</span> THE EXPERIENCE <span className="kicker-sep" aria-hidden="true"/> 2026 EDITION</div>
        <h1 id="hero-title">Great events<br/>feel <em>effortless.</em><br/><span>That's the work.</span></h1>
        <p className="hero-subtitle">I'm <strong>{profile.name}</strong>, an event technologist and Cvent specialist turning complex registrations, attendee journeys and event operations into experiences people remember.</p>
        <div className="hero-actions">
          <a href="#agenda" className="button button-lime">Explore the experience <Icon name="arrow" size={18}/></a>
          <a href="#certifications" className="text-link">See my credentials <Icon name="external" size={17}/></a>
        </div>
        <div className="hero-proof"><div className="avatar-monogram" aria-hidden="true">YM</div><div><strong>5+ years in event technology</strong><span>Client delivery · Cvent · Attendee experience</span></div></div>
      </div>
      <EventPass/>
    </div>
    <div className="hero-bottom container"><span><span className="scroll-icon" aria-hidden="true">↓</span> SCROLL TO EXPLORE</span><span>THOUGHTFULLY BUILT. HUMANLY DELIVERED.</span></div>
  </section>;
}

function Impact() {
  return <section className="impact" id="about" aria-label="Career impact"><div className="container impact-grid">
    <div className="impact-intro"><span className="impact-star" aria-hidden="true">✳</span><span>THE NUMBERS<br/>BEHIND THE<br/>EXPERIENCE</span></div>
    {metrics.map(metric => <div className="impact-number" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
  </div></section>;
}

function Career() {
  return <section className="career-section section" id="career" aria-label="Career at MMCY"><div className="container career-layout">
    <div className="career-left">
      <SectionHeading eyebrow="02 / BEHIND THE SCENES" heading={<>The experience<br/>behind the events.</>} description="From building registrations to guiding delivery teams, my career grew by solving the details that make an event run smoothly."/>
      <div className="career-quote"><span aria-hidden="true">“</span><p>Technology should make the event feel simpler, not more complicated.</p></div>
    </div>
    <div className="career-card">
      <div className="career-card-header"><div><span className="career-label">CAREER HIGHLIGHT</span><h3>MMCY</h3><p><time dateTime="2022-02">Feb 2022</time> — <time dateTime="2025-08">Aug 2025</time></p></div><div className="career-asterisk" aria-hidden="true">✳</div></div>
      <div className="career-line"/><p className="career-card-subtitle">One career path. Increasing ownership.</p>
      <div className="progression">{progression.map((role, index) => <div className="progress-item" key={role}><span className="progress-node" aria-hidden="true">{index + 1}</span><span>{role}</span>{index === progression.length - 1 && <span className="latest-label">FINAL ROLE · LED 4</span>}</div>)}</div>
      <div className="client-divider"/>
      <span className="career-label">CLIENT PROGRAMS SUPPORTED THROUGH MMCY</span>
      <div className="client-grid">{clients.map(client => <span key={client}>{client}</span>)}</div>
    </div>
  </div></section>;
}

function Toolkit() {
  return <section className="tool-section" aria-label="Production toolkit"><div className="container tool-layout">
    <div><span className="eyebrow"><span className="eyebrow-line" aria-hidden="true"/>03 / PRODUCTION TOOLKIT</span><h2>The tools behind<br/><em>the magic.</em></h2></div>
    <div className="tool-list">{tools.map((tool, index) => <span className="tool-pill" key={tool}><span className="tool-pill-num" aria-hidden="true">0{(index % 4) + 1}</span>{tool}</span>)}</div>
  </div></section>;
}

function Contact() {
  const emailSubject = encodeURIComponent('Event technology opportunity');
  return <section className="contact-section" id="contact" aria-label="Contact"><div className="container contact-layout">
    <div className="contact-copy">
      <span className="contact-eyebrow"><span className="status-dot" aria-hidden="true"/> THE CONVERSATION CONTINUES</span>
      <h2>Let's make the next<br/><em>event exceptional.</em></h2>
      <p>Hiring for a Cvent, event technology or event operations role? I'd love to connect.</p>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}?subject=${emailSubject}`} className="button button-lime">Start a conversation <Icon name="arrow" size={19}/></a>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </div>
    <div className="contact-art" aria-hidden="true"><span className="contact-ring ring-one"/><span className="contact-ring ring-two"/><div className="contact-asterisk">✳</div></div>
  </div></section>;
}

export default function App() {
  return <>
    <SiteHeader/>
    <main id="main">
      <Hero/>
      <Impact/>
      <Agenda/>
      <Career/>
      <Toolkit/>
      <Credentials/>
      <Contact/>
    </main>
    <footer className="footer"><div className="container footer-layout"><div className="footer-brand">yeabsira<span>.</span> <small>EVENT TECHNOLOGY</small></div><span>Made to feel like an event, because that's what I do.</span><a href={profile.website} target="_blank" rel="noopener noreferrer">Main portfolio <Icon name="external" size={15}/></a></div></footer>
  </>;
}
