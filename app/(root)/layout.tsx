import { Clerk } from '@clerk/nextjs/server'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/component/shared/topbar'
import LeftSideBar from '@/component/shared/leftsidebar'
import RightSideBar from '@/component/shared/rightsidebar'
import Bottombar from '@/component/shared/bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'threads',
  description: 'build by kartik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
      <body className={inter.className}  suppressHydrationWarning={true}>
      <Topbar/>
      <main className='flex flex-row'>
        <LeftSideBar/>
        <section className="main-container">
          <div className='w-full max-w-4xl'>
          {children}
          </div>
        </section>
        <RightSideBar/>
      </main>
      <Bottombar/>
      </body>
    </html>
    </ClerkProvider>
  )
}
