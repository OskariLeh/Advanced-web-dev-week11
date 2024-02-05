import React, {Suspense} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    console.log("hei")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" component={RouterLink} to="/" >{t("HOME")}</Button>
          <Button color="inherit" component={RouterLink} to="/about">{t("ABOUT")}</Button>
        
          <Button color="inherit" onClick={() => changeLanguage("fi")} >Fi</Button>
          <Button color="inherit" onClick={() => changeLanguage("en")} >En</Button>
            
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <Header/>
    </Suspense>
  )
}