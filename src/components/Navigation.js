    import React, { useState } from 'react';
    import { useContext } from 'react';
    import { ThemeContext } from './ThemeContext';
    import { Link } from 'react-router-dom';


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
            <Link
              className={activeLink === 'home' ? 'active' : ''}
              to='/' // Set the "to" prop to the desired route path
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={activeLink === 'news' ? 'active' : ''}
              to='/news' // Set the "to" prop to the desired route path
              onClick={() => handleLinkClick('news')}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className={activeLink === 'about' ? 'active' : ''}
              to='/about' // Set the "to" prop to the desired route path
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={activeLink === 'contact' ? 'active' : ''}
              to='/contact' // Set the "to" prop to the desired route path
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
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
