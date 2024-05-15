import Image from 'next/image'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
        {children}
        <div className='auth-asset'>
            <div>
                <Image src='/icons/auth-image.svg' alt='auth image'
                    height={500} width={500}
                    className='rounded-l-xl object-contain' />
            </div>
        </div>
    </main>
  )
}
