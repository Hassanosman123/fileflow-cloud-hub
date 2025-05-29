
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
  Home, 
  Files, 
  Upload, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'لوحة التحكم', href: '/dashboard', icon: Home },
  { name: 'ملفاتي', href: '/files', icon: Files },
  { name: 'رفع الملفات', href: '/upload', icon: Upload },
  { name: 'الإعدادات', href: '/settings', icon: Settings },
  { name: 'الترقية', href: '/upgrade', icon: CreditCard },
  { name: 'الدعم', href: '/support', icon: HelpCircle },
];

export function UserSidebar() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <Sidebar side="right" className="rtl">
      <SidebarHeader className="border-b bg-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Cloud className="h-8 w-8 text-fileflow-blue" />
            <span className="text-xl font-bold gradient-text">FileFlow</span>
          </div>
          <SidebarTrigger className="lg:hidden" />
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
