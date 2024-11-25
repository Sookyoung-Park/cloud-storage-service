'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'


const Sidebar = () => {
  const pathname= usePathname()

  return (
    <section className="sidebar gap-4">
      <nav className="sidebar-nav">
        {/* <Link href='/'>
          <Image 
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={161}
            height={52}/>
        </Link> */}
        {navItems.map((item)=>{
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

          return (
            <Link href={item.url} key={item.name}>
              {/* <div className="sidebar-nav-item"> */}
              <div className={cn(`sidebar-nav-item py-8`, {'bg-brand text-white':isActive})}>
                <Image src={item.icon} alt={item.name} width={26} height={26} className="nav-icon"/>
                {/* <p className='h5 max-lg:hidden' >{item.name}</p> */}
                <p className={cn('h5 max-lg:hidden',{'text-white':isActive})} >{item.name}</p>
              </div>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default Sidebar