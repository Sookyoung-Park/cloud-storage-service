'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Footer from './Footer'


const Sidebar = () => {
  const pathname= usePathname()

  return (
    <section className="sidebar gap-4">
      <nav className="sidebar-nav">
        <Link href='/'>
          <Image 
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={161}
            height={52}
            className="mb-10"/>
        </Link>
        {navItems.map((item)=>{
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

          return (
            <Link href={item.url} key={item.name}>
              <div className={cn(`sidebar-nav-item py-7`, {'bg-brand text-white':isActive})}>
                <Image src={item.icon} alt={item.name} width={26} height={26} className={cn(`nav-icon`, {'nav-icon-active':isActive})}/>
                  <p className={cn('h5 max-lg:hidden',{'text-white':isActive})} >{item.name}</p>
              </div>
            </Link>
          )
        })}
        <div>
          <Image 
            src='/assets/images/files-2.png'
            alt= "image"
            width={174}
            height={174}
            className="max-lg:hidden mt-10"
          />
        </div>
      </nav>
      <Footer/>
    </section>
  )
}

export default Sidebar