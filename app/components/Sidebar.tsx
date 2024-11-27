'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Footer from './Footer'


const Sidebar = ({fullName, avatar,email}:{fullName:string, avatar:string, email:string}) => {
  const pathname= usePathname()

  return (
    <aside className="sidebar">
        <Link href='/'>
          {/* logo for larger scren */}
          <Image 
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={161}
            height={52}
            className="hidden h-auto lg:block"/>
            {/* logo for small screen */}
            <Image 
            src="/assets/icons/logo-brand.svg"
            alt="logo"
            width={52}
            height={52}
            className="h-auto lg:hidden"/>
        </Link>

        <nav className='sidebar-nav'>
          <ul className='flex flex-1 flex-col gap-6'>
            {navItems.map((item)=>(
                <Link href={item.url} key = {item.name} className="lg:w-full">
                  <li className={cn(`sidebar-nav-item py-7`, {'bg-brand text-white': pathname===item.url})}>
                    <Image src={item.icon} alt={item.name} width={26} height={26} className={cn(`nav-icon`, {'nav-icon-active': pathname===item.url})}/>
                    <p className={cn('h5 max-lg:hidden',{'text-white':pathname===item.url})} >{item.name}</p>
                  </li>
                </Link>
            ))}
          </ul>
        </nav>

        <div>
          <Image 
            src='/assets/images/files-2.png'
            alt= "image"
            width={174}
            height={174}
            className="max-lg:hidden w-full"
          />
        </div>
      <Footer fullname={fullName} avatar={avatar} email={email}/>
    </aside>
  )
}

export default Sidebar