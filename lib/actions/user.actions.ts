"use server"

import { createAdminClient } from "../appwrite"
import { appwriteConfig } from "../appwrite/config"
import { ID, Query } from "node-appwrite"
import { parseStringify } from "../utils"

const getUserByEmail = async(email:string)=>{
    const {databases} = await createAdminClient()
    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("email",[email])]
    )

    if(result.total>0){
        return result.documents[0]
    }
    else{
        return null
    }
}

const handleError=(error:unknown, message:string)=>{
    console.log(error, message)
    throw error
}

const SendEmailOTP=async({email}:{email:string})=>{
    const {account} = await createAdminClient()
    try{
        const session = await account.createEmailToken(ID.unique(),email)
        return session.userId
    }
    catch(error){
        handleError(error, 'failed to send email OTP')
    }
}


export const createAccount = async({fullName, email}:{fullName:string, email:string}) => {
    // users enter fullname and email
    // check if user already exist using the email => we will use this to identify if we stil  need to create a user document or not
    const existingUser = await getUserByEmail(email)
    // sned otp to user's email
    const accountId = await SendEmailOTP({email})

    if(!accountId){
        throw new Error('Failed to send an OTP')
    }
    if(!existingUser){
        const {databases} = await createAdminClient()
        await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                fullName, 
                email, 
                avatar:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
                accountId,
            }
        )
        // this will send a screte key for creating a session.

        // create a new user document if the user is a new user
        // verify otp and authicate to login
        return parseStringify({accountId})
    }
}