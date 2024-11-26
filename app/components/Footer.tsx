import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { logoutAccount } from '@/lib/actions/user.actions'


// const Footer = ({user, type}:FooterProps) => {
    const Footer = () => {
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
                        src="/assets/images/avatar.png"
                        alt="log-out"
                        width={54}
                        height={54}
                        className="sidebar-user-avatar"
                    />
                <div className='max-lg:hidden'>
                    <h1 className='h5 capitalize'>
                        Soo Park
                    </h1>
                    <p className='caption'>
                        parksk971031@gmail.com
                    </p>
                </div>
                
            </div>
           
        // </div>
    )
}

export default Footer