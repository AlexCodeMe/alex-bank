import Image from 'next/image'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen w-full font-inter'>
        Sidebar
        <div className='flex size-full flex-col'>
            <div className='root-layout'>
                <Image src='/icons/logo.svg' alt='logo'
                    height={30} width={30} />
                <div>
                    MobileNav
                </div>
            </div>
            {children}
        </div>
    </main>
  )
}
