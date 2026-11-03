import { useState } from 'react';
import { sessions } from '../content';
import { Icon } from '../components/Icon';
import { SectionHeading } from '../components/SectionHeading';

export function Agenda() {
  const [activeSession, setActiveSession] = useState<string | null>('01');
  return <section className="agenda section" id="agenda" aria-labelledby="agenda-title">
    <div className="container">
      <div className="agenda-header">
        <SectionHeading id="agenda-title" eyebrow="01 / THE PROGRAM" heading="The run of show." description="Every great event starts with a plan. Explore the areas I know best, one session at a time."/>
        <span className="section-corner">CURATED FOR RECRUITERS<br/>AND HIRING TEAMS <span aria-hidden="true">↘</span></span>
      </div>
      <div className="agenda-layout">
        <aside className="agenda-sidebar" aria-label="Agenda overview">
          <div className="agenda-side-title">YOUR EVENT AGENDA</div><div className="agenda-vertical-line" aria-hidden="true"/>
          <p>Four areas of expertise.<br/>One seamless experience.</p><span className="agenda-numbers">01 — 04</span>
        </aside>
        <div className="session-list">
          {sessions.map(session => {
            const expanded = activeSession === session.id;
            return <article className={`session ${expanded ? 'session-active' : ''}`} key={session.id}>
              <h3><button type="button" className="session-toggle" id={`button-${session.id}`} aria-controls={`panel-${session.id}`} aria-expanded={expanded} onClick={() => setActiveSession(expanded ? null : session.id)}>
                <span className="session-number">{session.id}</span>
                <span className="session-body"><span className="session-tag">{session.tag}</span><span className="session-name">{session.title}</span><span className="session-summary">{session.summary}</span></span>
                <span className="session-icon"><Icon name={expanded ? 'minus' : 'plus'} size={22}/></span>
              </button></h3>
              <div className="session-panel" role="region" id={`panel-${session.id}`} aria-labelledby={`button-${session.id}`} hidden={!expanded}>
                <p>{session.detail}</p>
                <div className="session-chips">{session.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>
            </article>;
          })}
        </div>
      </div>
    </div>
  </section>;
}
