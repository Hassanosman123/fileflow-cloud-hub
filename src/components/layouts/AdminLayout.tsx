
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/sidebars/AdminSidebar';
import { Button } from '@/components/ui/button';
import { 
  Bell,
  User,
  Menu
} from 'lucide-react';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full rtl">
      <SidebarProvider>
        <AdminSidebar />
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
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    5
                  </span>
                </Button>
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">محمد الإداري</p>
                    <p className="text-xs text-gray-500">admin@fileflow.com</p>
                  </div>
                  <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
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

export default AdminLayout;
