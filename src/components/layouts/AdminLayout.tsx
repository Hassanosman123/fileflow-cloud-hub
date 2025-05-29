
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  LayoutDashboard, 
  Users, 
  Files, 
  Settings, 
  Shield, 
  CreditCard, 
  BarChart3,
  HelpCircle, 
  LogOut, 
  Menu, 
  X,
  User,
  Bell
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'لوحة الإدارة', href: '/admin', icon: LayoutDashboard },
    { name: 'المستخدمين', href: '/admin/users', icon: Users },
    { name: 'الملفات', href: '/admin/files', icon: Files },
    { name: 'التقارير', href: '/admin/reports', icon: BarChart3 },
    { name: 'الأمان', href: '/admin/security', icon: Shield },
    { name: 'الاشتراكات', href: '/admin/subscriptions', icon: CreditCard },
    { name: 'الإعدادات', href: '/admin/settings', icon: Settings },
    { name: 'الدعم', href: '/admin/support', icon: HelpCircle },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b bg-gray-900">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Cloud className="h-8 w-8 text-white" />
            <div>
              <span className="text-xl font-bold text-white">FileFlow</span>
              <span className="block text-xs text-gray-300">لوحة الإدارة</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-fileflow-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="h-5 w-5 ml-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="mb-3 p-3 bg-amber-50 rounded-lg">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-medium text-amber-800">وضع المدير</span>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-5 w-5 ml-3" />
            تسجيل الخروج
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:mr-64">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b">
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
      </div>
    </div>
  );
};

export default AdminLayout;
