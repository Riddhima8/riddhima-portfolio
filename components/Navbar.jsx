import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const observerRef = useRef(null);

  useEffect(() => {
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };
    observerRef.current = new IntersectionObserver(handler, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <nav className="section flex items-center justify-start py-3">
        <div className="flex items-center gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={clsx(
                'px-3 py-2 rounded-md text-sm transition-colors',
                active === s.id ? 'text-accent' : 'text-white/80 hover:text-white'
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}


