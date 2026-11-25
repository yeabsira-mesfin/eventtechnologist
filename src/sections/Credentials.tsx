import { certifications } from '../content';
import { PageHeading } from '../components/ExperienceUI';

export function Credentials(){
  return <div className="page">
    <PageHeading number="05" eyebrow="THE CREDENTIALS DESK" title={<>Expertise, backed up.<br/><em>Credentials, checked.</em></>} description={`${certifications.length} Cvent certifications. Awarded November 2026.`}/>
    <div className="cert-grid">{certifications.map((cert,i)=>{
      const isAccount = cert.dateISO === '2026-11-25';
      const index = `${String(i+1).padStart(2,'0')} / ${String(certifications.length).padStart(2,'0')}`;
      return <article className="cert-card" key={cert.name}>
        <a className="cert-image" href={cert.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Preview original ${cert.name} PDF (opens in new tab)`}><img src={cert.preview} alt={`Preview of ${cert.name} certificate`} loading="lazy" decoding="async" width="800" height="350"/><span className="cert-index">{index}</span></a>
        <div className="cert-content"><span className="cert-track">{cert.track}</span><h2>{cert.name}</h2><p>Awarded <time dateTime={cert.dateISO}>{cert.date}</time></p>
          {isAccount && <p>Valid for two years from the award date.</p>}
          <a className="cert-link" href={cert.pdf} target="_blank" rel="noopener noreferrer" aria-label={`View original ${cert.name} certificate PDF (opens in new tab)`}>View original certificate <span>↗</span></a>
        </div>
      </article>;
    })}</div>
    <p className="credential-note">Certificate name note: the three November 2, 2026 originals display “Yeabsira Mefin.” The November 25 Account Administrator certificate displays my correct name, Yeabsira Mesfin. Certificates are presented as issued, without modification.</p>
  </div>;
}
