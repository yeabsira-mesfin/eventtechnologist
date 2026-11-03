import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { metrics } from '../content';
export function PageHeading({number, eyebrow, title, description}: {number:string;eyebrow:string;title:ReactNode;description:string}) {
 return <div className="page-heading"><div><div className="eyebrow">{number} / {eyebrow}</div><h1>{title}</h1><p>{description}</p></div><span className="heading-spark" aria-hidden="true">✳</span></div>;
}
export function Impact() { return <div className="impact-strip" aria-label="Career impact">{metrics.map(m=><div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>; }
export function Destination({to,number,title,description,icon}: {to:string;number:string;title:string;description:string;icon:string}) {
 return <Link className="destination" to={to}><div className="destination-top"><span className="tile-icon" aria-hidden="true">{icon}</span><span>{number} <span aria-hidden="true">↗</span></span></div><h2>{title}</h2><p>{description}</p></Link>;
}
