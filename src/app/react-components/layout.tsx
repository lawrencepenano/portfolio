'use client'
import classNames from 'classnames'
import React from 'react'
import Header from '@/Components/react-components/Header';
import WelcomeOverlay from '@/Components/react-components/WelcomeOverlay';
import SmallDeviceNavigator from '@/Components/Portfolio/SmallDeviceNavigator';

const layout =  ({children} : {children: React.ReactNode}) => {
  return (
    <div className={
        classNames(
        "flex flex-col relative bg-secondary",
        )
    }>
        <Header/>
        {/* Copmponents */}
        {children}
        {/* Welcome Page and disclaimer */}
        <WelcomeOverlay/>
        <SmallDeviceNavigator/>
    </div>
  )
}

export default layout