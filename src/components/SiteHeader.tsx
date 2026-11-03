import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

const navigation = [
  { id: 'about', label: 'The experience' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'career', label: 'Career' },
  { id: 'certifications', label: 'Credentials' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    const onWideViewport = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    const query = window.matchMedia('(min-width: 801px)');
    document.addEventListener('keydown', onKeyDown);
    query.addEventListener('change', onWideViewport);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      query.removeEventListener('change', onWideViewport);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="announcement"><span className="status-dot" aria-hidden="true"/> THIS IS NOT ANOTHER RESUME. IT'S AN EVENT EXPERIENCE. <span className="announcement-suffix">YOUR INVITATION STARTS HERE <span aria-hidden="true">↗</span></span></div>
    <header className="site-header">
      <div className="container nav-layout">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Yeabsira Mesfin, back to top">
          <span className="brand-icon" aria-hidden="true"><span/><span/><span/><span/></span>
          <span className="brand-name">yeabsira<span className="brand-dot">.</span><small>EVENT TECHNOLOGY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(link => <a href={`#${link.id}`} key={link.id}>{link.label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let's connect <Icon name="arrow" size={17}/></a>
        <button ref={menuButton} type="button" className="mobile-menu-button" onClick={() => setMobileOpen(open => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}>
          <Icon name={mobileOpen ? 'close' : 'menu'} size={23}/>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" hidden={!mobileOpen} aria-label="Mobile navigation">
        {navigation.map(link => <a href={`#${link.id}`} onClick={closeMenu} key={link.id}>{link.label}</a>)}
        <a href="#contact" onClick={closeMenu}>Let's connect</a>
      </nav>
    </header>
  </>;
}
