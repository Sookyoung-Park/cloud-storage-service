import React, {useState} from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"  
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const OTPModal = ({email, accountId}: {email:string, accountId: string}) => {
  const [isOpen, setIsOpen] = useState(true)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement>) => {
    // control/block user's mouse events
    e.preventDefault()
    setIsLoading(true)
    try{
        // call api to verify OTP

    }
    catch(error){
        console.log('Failed to verify OTP',error)
    }
    setIsLoading(false)
  }

  const handleResendOTP=async()=>{
    //   handle API to resend OTP
  }

    return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent className='shad-alert-dialog'>
            <AlertDialogHeader className='relative flex justify-center'>
            <AlertDialogTitle className='h2 text-center'>Enter OTP</AlertDialogTitle>
            <Image
                src="/assets/icons/close-dark.svg"
                alt="close"
                width={20}
                height={20}
                onClick={()=> setIsOpen(false)}
                className="otp-close-button"
                />
            <AlertDialogDescription className='body-2 text-dark-300 text-center'>
                We&apos;ve sent a code to <span className='pl-1 text-dark-200'>{email}</span>
            </AlertDialogDescription>
            </AlertDialogHeader>
            {/* input otp */}
            <InputOTP maxLength={6} value={password} onChange={setPassword}>
                <InputOTPGroup className='shad-otp'>
                    <InputOTPSlot index={0} className="shad-otp-slot"/>
                    <InputOTPSlot index={1} className="shad-otp-slot"/>
                    <InputOTPSlot index={2} className="shad-otp-slot"/>
                    <InputOTPSlot index={3} className="shad-otp-slot"/>
                    <InputOTPSlot index={4} className="shad-otp-slot"/>
                    <InputOTPSlot index={5} className="shad-otp-slot"/>
                </InputOTPGroup>
            </InputOTP>
            <AlertDialogFooter>
                <div className="flex w-full flex-col gap-4">
                <AlertDialogAction className='shad-submit-btn h-12' type="button" onClick={handleSubmit}>
                    Submit
                    {isLoading && 
                        <Image
                        src="/assets/icons/loader.svg"
                        width={24}
                        height={24}
                        alt="loader"
                        className='ml-2 animate-spin'
                        />
                    }
                </AlertDialogAction>
                    <div className="body-2 flex justify-center items-center">
                        <p className='text-dark-300'>
                            Didn&apos;t get a code?
                        </p>
                        <Button type="button" variant="link" 
                        className="pl-1 font-medium text-brand">
                            Click to Resend
                        </Button>
                    </div>
                </div>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

  )
}

export default OTPModal