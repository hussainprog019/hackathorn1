import Image from 'next/image'
import React from 'react'
import HsecI from '@/pictures/header.webp'
import a from '@/pictures/Featured1.webp'
import b from '@/pictures/Featured2.webp'
import c from '@/pictures/Featured3.webp'
import d from '@/pictures/Featured4.webp'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { Wraper } from '@/shared/wraper'

export default function Herosection() {
    return (
        <section>
        <Wraper>
            <div className=' flex justify-center'>
        
                    <div className='mt-40 px-6'>
                    <div className='bg-blue-300 font-semibold w-20
                '>
                        Sale 70%
                    </div>

                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-normal lg:text-5xl w-1/2">
                            An Industrial Take on Streetwear
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 w-1/2">
                            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                        </p>
                        <div className='mt-10'>
                        <Button>
                            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
                        </Button>
                        </div>
                    <div className='flex justify gap-5 mt-10'>
                        <Image src={a} alt='None3'/>
                        <Image src={b} alt='None4'/>
                        <Image src={c} alt='None5'/>
                        <Image src={d} alt='None6'/>
                    </div>
                        </div>
                <div className='w-1/2 mt-[70px]'>
                    <div className='bg-orange-200  h-[600px] w-[600px] rounded-full mr-5'>
                    <Image src={HsecI} alt='none2' className=' w-[650px] h-[650px] absolute top-[90px]' />
                    </div>
                </div>
            </div>
        </Wraper >
        </section>
    )
}
