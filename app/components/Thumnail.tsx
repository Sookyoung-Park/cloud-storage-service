import React from 'react'
import Image from 'next/image'
import { cn, getFileIcon } from '@/lib/utils'

interface Props{
    type:string
    extension:string
    url?:string
    imageClassName?:string
    className?:string
}

const Thumnail = ({type, extension, url="",imageClassName, className}:Props) => {
  const isImage = type==="image" && extension !== 'svg'

  return (
    <figure className={cn('thumnail', className)}>
        <Image src={isImage?url:getFileIcon(extension,type)} alt="thumnail"
        width={100} height={100} 
        className={cn("size-8 object-contain", imageClassName, isImage&&'thumnail-image')}/>
    </figure>
  )
}

export default Thumnail