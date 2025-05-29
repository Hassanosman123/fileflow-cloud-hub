
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Upload,
  Trash2,
  Camera,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    uploads: true,
    sharing: false,
    security: true
  });

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الإعدادات</h1>
          <p className="text-gray-600 mt-1">إدارة إعدادات حسابك وتفضيلاتك</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 ml-2" />
                  معلومات الملف الشخصي
                </CardTitle>
                <CardDescription>
                  قم بتحديث معلومات ملفك الشخصي هنا
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* صورة الملف الشخصي */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-lg">أم</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 ml-2" />
                      تغيير الصورة
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4 ml-2" />
                      حذف الصورة
                    </Button>
                  </div>
                </div>

                {/* معلومات الملف الشخصي */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" defaultValue="أحمد" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input id="lastName" defaultValue="محمد" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" defaultValue="ahmed@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" defaultValue="+966 50 123 4567" />
                  </div>
                </div>

                <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  <Save className="h-4 w-4 ml-2" />
                  حفظ التغييرات
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 ml-2" />
                  تغيير كلمة المرور
                </CardTitle>
                <CardDescription>
                  قم بتحديث كلمة المرور لحسابك
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                  <div className="relative">
                    <Input 
                      id="currentPassword" 
                      type={showPassword ? "text" : "password"} 
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  تحديث كلمة المرور
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 ml-2" />
                  إعدادات الأمان
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">التحقق بخطوتين</h4>
                    <p className="text-sm text-gray-500">إضافة طبقة حماية إضافية لحسابك</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">تسجيل الدخول التلقائي</h4>
                    <p className="text-sm text-gray-500">البقاء مسجلاً للدخول لمدة 30 يوم</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 ml-2" />
                  إعدادات الإشعارات
                </CardTitle>
                <CardDescription>
                  اختر نوع الإشعارات التي تريد استقبالها
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">إشعارات البريد الإلكتروني</h4>
                    <p className="text-sm text-gray-500">استقبال الإشعارات عبر البريد الإلكتروني</p>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications(prev => ({...prev, email: checked}))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">إشعارات رفع الملفات</h4>
                    <p className="text-sm text-gray-500">إشعار عند اكتمال رفع الملفات</p>
                  </div>
                  <Switch 
                    checked={notifications.uploads}
                    onCheckedChange={(checked) => setNotifications(prev => ({...prev, uploads: checked}))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">إشعارات المشاركة</h4>
                    <p className="text-sm text-gray-500">إشعار عند مشاركة ملف معك</p>
                  </div>
                  <Switch 
                    checked={notifications.sharing}
                    onCheckedChange={(checked) => setNotifications(prev => ({...prev, sharing: checked}))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">إشعارات الأمان</h4>
                    <p className="text-sm text-gray-500">إشعارات تسجيل الدخول والأنشطة المشبوهة</p>
                  </div>
                  <Switch 
                    checked={notifications.security}
                    onCheckedChange={(checked) => setNotifications(prev => ({...prev, security: checked}))}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات الخصوصية</CardTitle>
                <CardDescription>
                  تحكم في خصوصية حسابك وملفاتك
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">الملف الشخصي العام</h4>
                    <p className="text-sm text-gray-500">السماح للآخرين برؤية ملفك الشخصي</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">مشاركة النشاط</h4>
                    <p className="text-sm text-gray-500">عرض نشاطك للمستخدمين الآخرين</p>
                  </div>
                  <Switch />
                </div>
                <Button variant="destructive" className="mt-6">
                  <Trash2 className="h-4 w-4 ml-2" />
                  حذف الحساب نهائياً
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
