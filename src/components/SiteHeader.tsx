import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
export const destinations = [['/', 'Lobby'], ['/experience', 'Event Hub'], ['/mobile-apps', 'Mobile Apps'], ['/sessions', 'Sessions'], ['/career', 'Career'], ['/credentials', 'Credentials'], ['/contact', 'Contact']];
export function SiteHeader() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 const { pathname } = useLocation();
 useEffect(() => { setMobileOpen(false); }, [pathname]);
 useEffect(() => { function close(event: KeyboardEvent) { if (event.key === 'Escape' && mobileOpen) { setMobileOpen(false); toggle.current?.focus(); } } window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [mobileOpen]);
 return <header className="app-header"><a className="skip-link" href="#main">Skip to content</a><NavLink className="brand" to="/">yeabsira<span>.</span><small>EVENT TECHNOLOGIST</small></NavLink><nav className="desktop-nav" aria-label="Main navigation">{destinations.map(([path,label])=><NavLink end={path==='/'} key={path} to={path}>{label}</NavLink>)}</nav><button ref={toggle} className="menu-toggle" aria-label={mobileOpen?'Close navigation':'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?'Close ✕':'Menu ☰'}</button><nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!mobileOpen}>{destinations.map(([path,label])=><NavLink end={path==='/'} key={path} to={path} onClick={()=>setMobileOpen(false)}>{label}</NavLink>)}</nav></header>;
}
