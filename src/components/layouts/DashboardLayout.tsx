import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { UserSidebar } from '@/components/sidebars/UserSidebar';
import { Button } from '@/components/ui/button';
import { 
  Bell,
  User,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import NotificationDropdown from '@/components/NotificationDropdown';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full rtl">
      <SidebarProvider>
        <UserSidebar />
        <SidebarInset>
          {/* Top header */}
          <header className="bg-white shadow-sm border-b sticky top-0 z-10">
            <div className="flex items-center justify-between h-16 px-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <NotificationDropdown />
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">أحمد محمد</p>
                    <p className="text-xs text-gray-500">ahmed@example.com</p>
                  </div>
                  <div className="h-8 w-8 bg-fileflow-blue rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="p-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
