import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Search from './Search'

const Header = () => {
  return (
    <header className='header'>
        
        <div className="header-wrapper">
            <div className="search">
                <Search/>
            </div>
            
            <div className='flex flex-1 gap-5 '>
                <Button className='uploader-button'>
                    <Image
                        src="/assets/icons/upload.svg"
                        alt="upload"
                        width={20}
                        height={20}
                    />
                    <p className='text-white subtitle-2'>Upload</p>
                </Button>
                <Button className='sign-out-button'>
                    <Image
                    src="/assets/icons/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}/>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Header