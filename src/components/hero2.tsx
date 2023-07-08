import React from 'react'
import { mylist } from '@/app/data/list'
import Image from 'next/image'
import ap from '@/pictures/event1.webp'
import { Wraper } from '@/shared/wraper'
export default function Hero2() {
    return (
        <section>
            <Wraper>
                <div className='mt-20'>
                    <div className='text-blue-900 font-bold text-center '>Promotions</div>
                    <div className='font-bold text-5xl text-center'>Our Promotion Events</div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex  gap-x-5 '>
                        <div className='w-1/2'>
                            <div className='bg-slate-300 mt-20 flex justify-between '>
                                <div>
                                    <p className='font-bold mt-20 text-3xl'>
                                        GET UP TO 60%
                                    </p>
                                    <p className='text-xl'>
                                        For the summer season
                                    </p>
                                </div>
                                <Image src={ap} alt='None6' />
                            </div>
                            <div className='bg-black h-1/2'>
                                <div className=' mt-5  text-white text-center '>
                                    <div className='font-bold text-3xl mt-15'>GET 30% Off</div>
                                    <div>USE PROMO CODE</div>
                                    <div>DINEWEEKENDSALE</div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex w-1/2 gap-x-5 mt-20'>
                            {
                                mylist.map((item) => {
                                    return (
                                        <div key={item.id} style={{ backgroundColor: item.color, }}>
                                            <div className='font-normal mt-10'>{item.title}</div>
                                            <div className=' font-normal line-through'>{item.Price1}</div>
                                            <div className='font-normal '>{item.Price2}</div>
                                            <Image src={item.image} alt='ppp' />
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </Wraper>
        </section>
    )
}
