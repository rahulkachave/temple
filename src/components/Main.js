import { useTranslation } from 'react-i18next';
import React from 'react'
import { NavLink } from 'react-router-dom'
const Main = () => {

  const { t } = useTranslation(); 
  const navlinkstyle = ({isActive})=>{
    return{
      textDecoration :isActive ?"none":"none",
      color :isActive ?"red":"blue",
      
    }
  }
  return (
    <div className="main">
            
    <NavLink style={navlinkstyle}  to={'Home'}>{t('navlink.home')}</NavLink>
    <NavLink style={navlinkstyle} to={'/Temple'}>{t('navlink.temple')}</NavLink>
    <NavLink style={navlinkstyle} to={'/Gods'}>{t('navlink.godstemples')}</NavLink>
    <NavLink style={navlinkstyle} to={'/details'}>{t('navlink.Details')}</NavLink>
    <NavLink style={navlinkstyle} to={'/students'}>{t('navlink.students')}</NavLink>
    
    </div>
  )
}

export default Main