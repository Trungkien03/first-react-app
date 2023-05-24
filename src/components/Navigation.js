import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li>
            <a
              className={activeLink === 'home' ? 'active' : ''}
              href='#home'
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'news' ? 'active' : ''}
              href='#news'
              onClick={() => handleLinkClick('news')}
            >
              News
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'about' ? 'active' : ''}
              href='#about'
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'contact' ? 'active' : ''}
              href='#contact'
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <div style={{ position: 'relative' }}>
          <a
            className='switch-mode'
            href='#'
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none',
            }}
            data-testid='toggle-theme-btn'
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
