
import BackEndShowCase from '@/Components/Portfolio/BackEndShowCase'
import Experience from '@/Components/Portfolio/Experience'
import FrontEndShowCase from '@/Components/Portfolio/FrontEndShowCase'
import Header from '@/Components/Portfolio/Header'
import Hero from '@/Components/Portfolio/Hero'
import SmallDeviceNavigator from '@/Components/Portfolio/SmallDeviceNavigator'
import classNames from 'classnames'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={
        classNames(
            "flex flex-col", 
            "bg-secondary",
        )
      }>
        <Hero/>
        <Experience/>
        <FrontEndShowCase/>
        <BackEndShowCase/>
      </main>
      <SmallDeviceNavigator/>
    </>
  )
}
