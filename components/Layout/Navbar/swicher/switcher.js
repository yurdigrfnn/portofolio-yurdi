import {useState} from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Swithcer(){
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide,setDarkSide] = useState( colorTheme === 'light' ? true : false)


  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
            <DarkModeSwitch
                checked= {darkSide}
                onChange = {toggleDarkMode}
                size = {24}
            />
  );
}