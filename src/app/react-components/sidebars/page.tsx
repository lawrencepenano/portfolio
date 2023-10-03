'use client'
import SideBarTwo from '@/Components/react-components/sidebarsComponents/SideBarTwo'
import SideBarOne from '@/Components/react-components/sidebarsComponents/SideBardOne'
import SidebarContainer from '@/Components/react-components/sidebarsComponents/SidebarContainer'
import React from 'react'

const SideBars = () => {
  return (
    <>
        <SidebarContainer title={"Simple with icons and badges"}>
            <SideBarOne/>
        </SidebarContainer>

        <SidebarContainer title={"With icons and expandable sections"}>
            <SideBarTwo/>
        </SidebarContainer>
      
    </>
  )
}

export default SideBars