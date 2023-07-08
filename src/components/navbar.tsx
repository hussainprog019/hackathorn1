import { Wraper } from '@/shared/wraper'
import Image from 'next/image'
import logo from "@/pictures/Logo.webp"
import { ShoppingCart} from 'lucide-react'

export default function Navbar() {
    return (
        <section>
            <Wraper>
                <div className='flex justify-between px-5 py-5'>
                    <div>
                    <Image src= {logo} alt='none' />
                    </div>
                    <div >
                        <ul className='flex gap-x-5 font-semibold'>
                        <li>Male</li>
                        <li>Female</li>
                        <li>Kids</li>
                        <li>All Categories</li>
                        </ul>
                        </div>
                    <div>
                      <ShoppingCart/>
                    </div>
                </div>

            </Wraper>
        </section>
    )
}


