import Header from '@/components/header'
import Footer from '@/components/footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { BackgroundBeams } from '@/components/ui/background-beams'

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      
      <div className="relative z-10">
        <Header />
      </div>
      
      <main className="flex-grow container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <Outlet />
      </main>
      
      <Footer className="relative z-10" />

      
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
}

export default AppLayout
