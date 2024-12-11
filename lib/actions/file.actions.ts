'use server'

import { createAdminClient } from "../appwrite"
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../appwrite/config";
import { constructFileUrl, getFileType, parseStringify } from "../utils";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

interface UploadFileProps{
    file:File,
    ownerId:string,
    accountId:string,
    path:string
}

const handleError=(error:unknown, message:string)=>{
    console.log(error, message)
    throw error
}

export const uploadFile=async({file, ownerId, accountId, path}:UploadFileProps)=>{
    const {storage, databases}=await createAdminClient()

    try{
        // read a file
        const inputFile=InputFile.fromBuffer(file, file.name)

        const bucketFile = await storage.createFile(
            appwriteConfig.bucketId,
            ID.unique(),
            inputFile,
        );

        const fileDocument ={
            type:getFileType(bucketFile.name).type,
            name:bucketFile.name,
            url:constructFileUrl(bucketFile.$id),
            extension:getFileType(bucketFile.name).extension,
            size:bucketFile.sizeOriginal,
            owner: ownerId,
            accountId,
            users:[],
            bucketFileId:bucketFile.$id
        }

        const newFile = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.fileCollectionId,
            ID.unique(),
            fileDocument,
        )
            .catch(async(error:unknown)=>{
                await storage.deleteFile(appwriteConfig.bucketId, bucketFile.$id)
                handleError(error, "Failed to create file document.")
            })
        revalidatePath(path)
        return parseStringify(newFile)
    }
    catch(error){
        handleError(error, "error in uploadFile")
    }
}