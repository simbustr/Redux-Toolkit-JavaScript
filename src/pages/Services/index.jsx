import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, setTheme } from '../../slices/themeSlice'

const Servicespage = () => {


    const dispatch = useDispatch()
    const theme = useSelector((state)=>state.themeInfo)
   
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
      };
    
      const handleSetTheme = (newTheme) => {
        dispatch(setTheme(newTheme));
      };


  return (
    <div>
        Servicespage

        <button onClick={handleToggleTheme}>Toggle Theme</button>
      <button onClick={() => handleSetTheme('light')}>Set Light Theme</button>
      <button onClick={() => handleSetTheme('dark')}>Set Dark Theme</button>
      <p>Current Theme: {theme}</p>


    </div>
  )
}

export default Servicespage
