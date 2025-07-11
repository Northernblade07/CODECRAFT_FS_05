"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2Icon } from 'lucide-react'
import toast from 'react-hot-toast'
import { toggleFollow } from '@/actions/user.action'

const FollowButton = ({userId}:{userId:string}) => {
    const [isLoading , setIsLoading ] = useState(false)

    const handleFollow=async()=>{
setIsLoading(true);
try {
   const result = await toggleFollow(userId);
   console.log(result)
   if (result?.success) {
       toast.success("user followe successfully")
   }
} catch (error) {
    console.error("failed to follow the specific user ")
    toast.error("failed to follow")
}
    }
  return (
    <Button size={'sm'}
    variant={'secondary'}
    onClick={handleFollow}
    disabled={isLoading}
    className='w-20'
    >
        {
            isLoading? <Loader2Icon className='size-4 animate-spin'/> : "Follow"
        }
    </Button>
  )
}

export default FollowButton