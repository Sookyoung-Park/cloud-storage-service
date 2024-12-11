"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator";
import { navItems } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import FileUploader from './FileUploader'
import { Button } from '@/components/ui/button'

const MobileNavigation = ({$id:ownerId, accountId, fullName, avatar,email}:{$id:string, accountId:string, fullName:string, avatar:string, email:string}) => {
  const [open, setOpen] = useState(false)
  const pathname=usePathname()

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={112}
        height={40} 
        className="h-auto"
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
          src="/assets/icons/menu.svg"
          alt="menu-icon"
          width={24}
          height={24}
        />
        </SheetTrigger>
        <SheetContent className='shad-sheet h-screen px-3'>
          {/* <SheetHeader className='mobile-header'> */}
            <SheetTitle>
              <div className="header-user">
                <Image 
                  src={avatar}
                  alt="avatar"
                  width={24}
                  height={24}
                  className="header-user-avatar"
                  />
                <div className="sm:hidden lg:block">
                  <p className="subtitle-2 capitalize">
                    {fullName}
                  </p>
                  <p className="caption">
                    {email}
                  </p>
                </div>
              </div>
               {/* seperator */}
               <Separator className="mb-4 bg-light-200/20" />
            </SheetTitle>

            <nav className="mobile-nav">
              <ul className='mobile-nav-list'>
                {navItems.map((item)=>(
                    <Link href={item.url} key = {item.name} className="lg:w-full">
                      <li className={cn(`mobile-nav-item py-7`, {'bg-brand text-white': pathname===item.url})}>
                        <Image src={item.icon} alt={item.name} width={26} height={26} className={cn(`nav-icon`, {'nav-icon-active': pathname===item.url})}/>
                        <p className={cn('h5',{'text-white':pathname===item.url})} >{item.name}</p>
                      </li>
                    </Link>
                ))}
              </ul>
            </nav>
            <Separator className="my-5 bg-light-200/20" />

            <div className="flex flex-col justify-between gap-5 pb-5">
              <FileUploader ownerId={ownerId} accountId={accountId}/>
              <Button type="submit" className='mobile-sign-out-button'>
                <Image 
                  src="/assets/icons/logout.svg"
                  alt="logout-logo"
                  width={24}
                  height={24}
                  />
                  <p>Log Out</p>
              </Button>
            </div>

        </SheetContent>
      </Sheet>

    </header>
  )
}

export default MobileNavigation