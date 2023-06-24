import { useTranslation } from 'react-i18next';
import React from 'react'
import {  NavLink } from 'react-router-dom'
import Searchbtn from '../components/Searchbtn';
import MyComponent from '../Localtranslation/MyComponent';
import Theme from './Theme';

const Main = () => {

  const { t } = useTranslation(); 
  const navlinkstyle = ({isActive})=>{
    return{
      textDecoration :isActive ?"none":"none",
      color :isActive ?"red":"blue",
      
    }
  }
  return (
    <div> 
     
    <div className="main" >
       
    <NavLink style={navlinkstyle}  to={'/SignUp'}>{t('navlink.Login')}</NavLink>
    <NavLink style={navlinkstyle} to={'/Temple'}>{t('navlink.temple')}</NavLink>
    <NavLink style={navlinkstyle} to={'/Gods'}>{t('navlink.godstemples')}</NavLink>
    <NavLink style={navlinkstyle} to={'/details'}>{t('navlink.Details')}</NavLink>
    <NavLink style={navlinkstyle} to={'/TopTemple'}>{t('navlink.TopTemple')}</NavLink>
    <Searchbtn/>
    <Theme/>
    <MyComponent/>
    
    </div>  </div>
  )
}

export default Main