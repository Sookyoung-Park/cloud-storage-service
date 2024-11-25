import React from 'react'
import MobileNavigation from '../components/MobileNavigation'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex h-screen'>
        <Sidebar/>
        <section className="flex h-full flex-1 flex-col">
            <MobileNavigation/>
            <Header/>
            <div className="main-content">
                {children}
            </div>
        </section>
    </main>
  )
}

export default Layout