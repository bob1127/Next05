import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='border flex justify-end border-black w-1/3'>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={35} />
      </div>
    </>
  );
}