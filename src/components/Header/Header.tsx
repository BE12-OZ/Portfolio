'use client';

import { Link } from 'react-scroll';
import { useCursorStore } from '@/store/cursorStore';
import styles from './Header.module.scss'; // Import the SCSS module

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Journey', to: 'journey' },
  { name: 'Contact', to: 'contact' },
];

export default function Header() {
  const { setCursorType } = useCursorStore();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link 
            to="home"
            smooth={true}
            duration={500}
            className={styles.logo}
            onMouseEnter={() => setCursorType('hovered')}
            onMouseLeave={() => setCursorType('default')}
          >
            MyPortfolio
          </Link>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-64} // 헤더 높이만큼 오프셋
                  className={styles.navItem.navLink}
                  activeClass={styles.navItem.navLink + ' ' + styles.navItem.active} // Apply active class
                  spy={true}
                  onMouseEnter={() => setCursorType('hovered')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
