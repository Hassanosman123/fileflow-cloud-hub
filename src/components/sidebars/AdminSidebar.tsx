
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
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
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

export function AdminSidebar() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <Sidebar side="right" className="rtl">
      <SidebarHeader className="border-b bg-gray-900">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Cloud className="h-8 w-8 text-white" />
            <div>
              <span className="text-xl font-bold text-white">FileFlow</span>
              <span className="block text-xs text-gray-300">لوحة الإدارة</span>
            </div>
          </div>
          <SidebarTrigger className="lg:hidden text-white hover:bg-gray-800" />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.href)}
                    className="w-full justify-start h-11 px-3 rounded-lg transition-all duration-200"
                  >
                    <Link 
                      to={item.href}
                      className={`flex items-center space-x-3 rtl:space-x-reverse ${
                        isActive(item.href)
                          ? 'bg-fileflow-blue text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-fileflow-blue'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t bg-white p-4">
        <div className="mb-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Shield className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-medium text-amber-800">وضع المدير</span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 h-11 rounded-lg"
        >
          <LogOut className="h-5 w-5 ml-3" />
          تسجيل الخروج
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
