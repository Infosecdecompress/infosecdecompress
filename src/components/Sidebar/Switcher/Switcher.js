import React from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  let isDarkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
  window.localStorage.setItem('darkMode', isDarkModeOn);
  const bodyEl = document.getElementsByTagName('body')[0];

  function TurnDarkMode() {
    isDarkModeOn ? bodyEl.classList.remove('dark') : bodyEl.classList.add('dark');
    isDarkModeOn = !isDarkModeOn;
    window.localStorage.setItem('darkMode', isDarkModeOn);
  }

  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>Night mode</span>
      <label className={styles['switch']}>
        {isDarkModeOn
          ? <input id='DarkModeSwitcher' type='checkbox' checked />
          : <input id='DarkModeSwitcher' type='checkbox' />}
        <span className={`${styles['slider']}`} onClick={TurnDarkMode}/>
      </label>
    </div>
  );
};

export default Switcher;
