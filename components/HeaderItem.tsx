import type { NextPage } from 'next'
import React from 'react'

type HeaderItemsProps = {
    title: string
    Icon: React.ReactNode 
}

const HeaderItem: NextPage<HeaderItemsProps> = ({ title, Icon}) => {
    return (
        <article className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <h2 className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</h2>
        </article>
    )
}

export default HeaderItem