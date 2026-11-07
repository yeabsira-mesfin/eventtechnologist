import { Link, NavLink, useParams } from 'react-router-dom';
import { sessions, sessionEvidence } from '../content';
import { PageHeading } from '../components/ExperienceUI';

export function Agenda() {
 const { id } = useParams();
 const session = sessions.find(s => s.id === (id || '01'));
 if (!session) return <div className="page"><h1>Session not found.</h1><Link to="/sessions">View the full program ↗</Link></div>;

 const detail = sessionEvidence[session.id];
 return <div className="page">
  <PageHeading
   number="03"
   eyebrow="THE PROFESSIONAL PROGRAM"
   title={<>The technical work.<br/><em>Behind every experience.</em></>}
   description="Go beyond platform names: explore the decisions, configuration patterns, QA checks and cross-team handoffs behind my event delivery."
  />
  <div className="program-layout">
   <nav className="program-nav" aria-label="Professional sessions">
    <div className="program-label">SELECT A WORKSTREAM <span>{session.id} / 04</span></div>
    {sessions.map(s => <NavLink
      key={s.id} to={`/sessions/${s.id}`}
      className={`program-row ${session.id === s.id ? 'selected' : ''}`}
      aria-current={session.id === s.id ? 'page' : undefined}>
      <span className="program-number">{s.id}</span>
      <div><small>{s.tag}</small><h2>{s.title}</h2></div>
      <span aria-hidden="true">↗</span>
     </NavLink>)}
   </nav>
   <article className="session-detail" key={session.id} aria-labelledby="session-title">
    <div className="detail-top"><span>WORKSTREAM {session.id}</span><span>HANDS-ON DELIVERY</span></div>
    <h2 id="session-title">{session.title}</h2>
    <p className="session-lead">{session.summary}</p>
    <div className="platform-list" aria-label="Platforms and context">
     {detail.platforms.map(p => <span key={p}>{p}</span>)}
    </div>

    <section className="tech-brief" aria-label="Technical delivery approach">
     <div className="tech-brief-intro">
      <span className="brief-label">01 / THE DESIGN DECISION</span>
      <h3>What has to work</h3>
      <p>{detail.objective}</p>
     </div>
     <div className="tech-brief-body">
      <div className="brief-panel">
       <span className="brief-label">02 / IMPLEMENTATION</span>
       <h3>From requirements to launch</h3>
       <ol className="workflow-list">{detail.deliveryFlow.map((step, index) =>
        <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>
      </div>
      <div className="brief-panel qa-panel">
       <span className="brief-label">03 / RISK-BASED QA</span>
       <h3>Failure modes I look for</h3>
       <ul className="risk-list">{detail.riskChecks.map(risk => <li key={risk}>{risk}</li>)}</ul>
      </div>
     </div>
     <div className="collaboration-note">
      <span className="brief-label">04 / CROSS-FUNCTIONAL HANDOFF</span>
      <p>{detail.collaboration}</p>
     </div>
    </section>

    <h3 className="capabilities-title">Hands-on capabilities</h3>
    <ul className="capability-list">{detail.capabilities.map(c => <li key={c}>{c}</li>)}</ul>
    <div className="evidence" aria-label="Evidence and scale">
     <div><strong>{detail.metric}</strong><span>{detail.caption}</span></div>
     <p>{detail.evidence}</p>
    </div>
    <div className="session-chips">{session.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    <p className="experience-disclosure">Delivery patterns are generalized to protect client information. No confidential event configuration or client-specific case study is presented.</p>
    <Link className="text-link" to={session.id === '02' ? '/mobile-apps' : session.id === '04' ? '/career' : '/contact'}>
     {session.id === '02' ? 'Explore the interactive mobile experience' : session.id === '04' ? 'See my career progression' : 'Discuss event technology work'} ↗
    </Link>
   </article>
  </div>
 </div>;
}
