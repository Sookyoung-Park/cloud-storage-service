"use client"
import React, {useState} from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import { createAccount } from '@/lib/actions/user.actions'
import { signInUser } from '@/lib/actions/user.actions'
import OTPModal from './OTPModal'

type FormType = "sign-in" | "sign-up"

const AuthFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email(),
        fullname: formType === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    })
} 

const AuthForm = ({type}:{type:FormType}) => {
    const [isloading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMesage] = useState("")
    const [accountId, setAccountId ] = useState(null)

    const formSchema = AuthFormSchema(type)

   // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email:"",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit= async(values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)
    setErrorMesage('')
    try{
        const user =
        type === "sign-up"
          ? await createAccount({
              fullName: values.fullname || "",
              email: values.email,
            })
          : await signInUser({ email: values.email });

      setAccountId(user.accountId);
    } 
    catch(error){
        console.log('error!!!', error)
        setErrorMesage("Fail to create an accout. Please try again")
    }
    finally{
        setIsLoading(false)
    }
  }
  return (
    <>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
            <h1 className="form-title">
                {type==="sign-in"? "LogIn" : "Create Account"}
            </h1>
            {type ==="sign-up" && 
                (<FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                    <FormItem>
                        <div className="shad-form-item">
                        <FormLabel className='shad-form-label'>Fullname</FormLabel>
                        <FormControl>
                            <Input 
                                placeholder="Enter your full name" 
                                className='shad-input'
                                {...field}/>
                        </FormControl>
                        </div>
                    <FormMessage className='shad-form-message' />
                    </FormItem>
                    )}
                    />
            )}
            
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <div className="shad-form-item">
                        <FormLabel className='shad-form-label'>Email</FormLabel>
                        <FormControl>
                            <Input 
                                placeholder="Enter your email" 
                                className='shad-input'
                                {...field}/>
                                
                        </FormControl>
                        </div>
                    <FormMessage className='shad-form-message' />
                    </FormItem>
                    )}
                    />

            <Button type="submit" className='form-submit-button' disabled={isloading}>
                {type==="sign-in" ? "Log In" : "Create Account"}
                {isloading && (
                    <Image 
                        src="/assets/icons/loader.svg" 
                        alt="loader"
                        width={24} height={24} 
                        className="ml-2 animate-spin"
                    />
                )}
            </Button>
            {errorMessage && (
                <p className="error-message">{errorMessage}</p>
            )}
            <div className="body-2 flex justify-center">
                <p className='text-dark-300'>
                    {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Link href={type ==="sign-in" ? "/sign-up": "/sign-in"}
                className="ml-1 font-medium text-brand">
                    {type === "sign-in" ? "Sign Up?" : "Sign In"}
                </Link>
            </div>
        </form>
        </Form>
        {/* add OTP verification */}
        {/* user has tried to verify herself/himself => accountId */}
        {accountId && <OTPModal email={form.getValues('email')} accountId={accountId}/>}
    </>
  )
}

export default AuthForm
