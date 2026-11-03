import type { ReactNode } from 'react';

type IconName = 'arrow' | 'down' | 'plus' | 'minus' | 'external' | 'mail' | 'menu' | 'close' | 'check' | 'spark';

const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
  down: <><path d="M12 4v16"/><path d="m5 13 7 7 7-7"/></>,
  plus: <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  minus: <path d="M5 12h14"/>,
  external: <><path d="M13 5h6v6"/><path d="m19 5-9 9"/><path d="M19 13v6H5V5h6"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
  close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
  check: <><path d="m5 12 5 5 9-10"/></>,
  spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="M19 17v4"/><path d="M17 19h4"/></>,
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
