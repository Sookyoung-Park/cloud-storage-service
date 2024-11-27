import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { logoutAccount } from '@/lib/actions/user.actions'


// const Footer = ({user, type}:FooterProps) => {
    const Footer = ({fullname, avatar,email}:{fullname:string, avatar:string, email:string}) => {
    // This expression is not callable.
    const router = useRouter();

    // const handleLogOut = async() => {
    //     const loggedOut = await logoutAccount();

    //     if (loggedOut){
    //         router.push('/sign-in')
    //     }
    // }
    return (
        // <div className='footer'>
            <div className='sidebar-user-info'>
                    <Image
                        src={avatar}
                        alt="log-out"
                        width={54}
                        height={54}
                        className="sidebar-user-avatar"
                    />
                <div className='max-lg:hidden'>
                    <h1 className='h5 capitalize'>
                        {fullname}
                    </h1>
                    <p className='caption'>
                        {email}
                    </p>
                </div>
                
            </div>
           
        // </div>
    )
}

export default Footer