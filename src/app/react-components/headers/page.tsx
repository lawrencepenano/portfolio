'use client'
import WelcomeOverlay from '@/Components/react-components/WelcomeOverlay'
import HeaderContainer from '@/Components/react-components/headerComponents/HeaderContainer'
import HeaderFour from '@/Components/react-components/headerComponents/HeaderFour'
import HeaderOne from '@/Components/react-components/headerComponents/HeaderOne'
import HeaderThree from '@/Components/react-components/headerComponents/HeaderThree'
import HeaderTwo from '@/Components/react-components/headerComponents/HederTwo'
import React from 'react'

const Headers = () => {
  return (
    <>
        <HeaderContainer title='Centered with bottom border'>
            <HeaderOne/> 
        </HeaderContainer>

        <HeaderContainer title='Links on left with bottom border'>
            <HeaderTwo/> 
        </HeaderContainer>

        <HeaderContainer title='With full-width flyouts'>
            <HeaderThree/> 
        </HeaderContainer>

        <HeaderContainer title='Simple branded with stacked links'>
            <HeaderFour/> 
        </HeaderContainer>
    </>
  )
}

export default Headers