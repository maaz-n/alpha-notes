    import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
    
    const DashboardLayout = ({children}: {children: React.ReactNode}) => {
      return (
        <SidebarProvider>
      <AppSidebar />
      <main className='flex-1'>
        {children}
      </main>
    </SidebarProvider>
      )
    }
    
    export default DashboardLayout