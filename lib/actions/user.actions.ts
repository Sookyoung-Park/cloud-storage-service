"use server"

import { createAdminClient } from "../appwrite"
import { appwriteConfig } from "../appwrite/config"
import { Query } from "node-appwrite"

const getUserByEmail = async({email}:{email:string})=>{
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

export const createAccount = async({fullName, email}:{fullName:string, email:string}) => {
    // users enter fullname and email
    // check if user already exist using the email => we will use this to identify if we stil  need to create a user document or not
    const existingUser = await getUserByEmail(email)
    // sned otp to user's email
    // this will send a screte key for creating a session.
    // create a new user document if the user is a new user
    // verify otp and authicate to login
}