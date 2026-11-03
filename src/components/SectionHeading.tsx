import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, heading, description, id }: { eyebrow: string; heading: ReactNode; description?: string; id?: string }) {
  return <div className="section-intro">
    <span className="eyebrow"><span className="eyebrow-line" aria-hidden="true"/>{eyebrow}</span>
    <h2 id={id}>{heading}</h2>
    {description && <p>{description}</p>}
  </div>;
}
