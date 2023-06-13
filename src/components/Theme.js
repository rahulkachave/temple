import React, { useEffect, useState } from 'react';
import '../css/Theme.css';

const Theme = () => {
  const [theme, setTheme] = useState('light-theme');
  const [buttonClass, setButtonClass] = useState('btns');

  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
      setButtonClass('btns');
    } else {
      setTheme('dark-theme');
      setButtonClass('btns dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button className={buttonClass} onClick={toggleTheme}>
     change theme
      </button>
    </div>
  );
};

export default Theme;
