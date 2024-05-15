import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <section>
        <nav>
            <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image src='/icons/logo.svg' alt='logo'
                    width={34} height={34}
                    className='size-[24px] max-xl:size-14' />
                <h1 className='sidebar-logo'>aBank</h1>
            </Link>

            {/* {sidebarLinks} */}
        </nav>
    </section>
  )
}