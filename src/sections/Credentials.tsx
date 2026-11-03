import { certifications } from '../content';
import { Icon } from '../components/Icon';
import { SectionHeading } from '../components/SectionHeading';

export function Credentials() {
  return <section className="certs-section section" id="certifications" aria-label="Professional certifications">
    <div className="container">
      <div className="certs-heading">
        <SectionHeading eyebrow="04 / CREDENTIALS DESK" heading="Credentials, checked." description="Three Cvent certifications. Open any card to see the original PDF certificate."/>
        <div className="verified-note"><Icon name="check" size={18}/><span>AWARDED NOV 2, 2026</span></div>
      </div>
      <div className="cert-grid">
        {certifications.map((cert, index) => <article className="cert-card" key={cert.name}>
          <div className="cert-image">
            <img src={cert.preview} alt={`Preview of ${cert.name} certificate`} loading="lazy" decoding="async" width="800" height="350"/>
            <span className="cert-index">0{index + 1} / 03</span>
          </div>
          <div className="cert-content">
            <span className="cert-track">{cert.track}</span>
            <h3>{cert.name}</h3>
            <p>Awarded <time dateTime="2026-11-02">{cert.date}</time></p>
            <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="cert-link" aria-label={`View original ${cert.name} certificate PDF (opens in new tab)`}>View certificate <Icon name="external" size={18}/></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
