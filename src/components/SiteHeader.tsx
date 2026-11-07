import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const destinations = [['/', 'Lobby'], ['/experience', 'Event Hub'], ['/mobile-apps', 'Mobile Apps'], ['/sessions', 'Sessions'], ['/career', 'Career'], ['/credentials', 'Credentials'], ['/contact', 'Contact']];

export function SiteHeader() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 const header = useRef<HTMLElement>(null);
 const { pathname } = useLocation();

 useEffect(() => { setMobileOpen(false); }, [pathname]);

 useEffect(() => {
  if (!mobileOpen) return;
  const onKeyDown = (event: KeyboardEvent) => {
   if (event.key === 'Escape') {
    setMobileOpen(false);
    toggle.current?.focus();
   }
  };
  const onOutsidePointer = (event: PointerEvent) => {
   if (event.target instanceof Node && !header.current?.contains(event.target)) setMobileOpen(false);
  };
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('pointerdown', onOutsidePointer);
  return () => {
   window.removeEventListener('keydown', onKeyDown);
   window.removeEventListener('pointerdown', onOutsidePointer);
  };
 }, [mobileOpen]);

 useEffect(() => {
  const desktop = window.matchMedia('(min-width: 801px)');
  const onViewportChange = (event: MediaQueryListEvent) => {
   if (event.matches) setMobileOpen(false);
  };
  desktop.addEventListener('change', onViewportChange);
  return () => desktop.removeEventListener('change', onViewportChange);
 }, []);

 return <header ref={header} className="app-header">
  <a className="skip-link" href="#main">Skip to content</a>
  <NavLink className="brand" to="/">yeabsira<span>.</span><small>EVENT TECHNOLOGIST</small></NavLink>
  <nav className="desktop-nav" aria-label="Main navigation">
   {destinations.map(([path, label]) => <NavLink end={path === '/'} key={path} to={path}>{label}</NavLink>)}
  </nav>
  <button ref={toggle} className="menu-toggle" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen(open => !open)}>
   {mobileOpen ? 'Close ✕' : 'Menu ☰'}
  </button>
  <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!mobileOpen}>
   {destinations.map(([path, label]) => <NavLink end={path === '/'} key={path} to={path} onClick={() => setMobileOpen(false)}>{label}</NavLink>)}
  </nav>
 </header>;
}
