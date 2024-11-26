import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Search from './Search'
import FileUploader from './FileUploader'

const Header = () => {
  return (
    <header className='header'>
            <Search/>
        <div className="header-wrapper">
            <FileUploader/>
            {/* <Button className='uploader-button' type="submit">
                <Image
                    src="/assets/icons/upload.svg"
                    alt="upload"
                    width={24}
                    height={24}
                    className="w-6"
                />
                <p className='text-white subtitle-2'>Upload</p>
            </Button> */}
            <form>
                <Button className='sign-out-button'>
                    <Image
                    src="/assets/icons/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}/>
                </Button>
            </form>
        </div>
    </header>
  )
}

export default Header