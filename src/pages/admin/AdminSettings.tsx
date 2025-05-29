
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon, 
  Globe, 
  Database, 
  Mail, 
  Shield,
  Save,
  Upload,
  Trash2
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'FileFlow',
    siteDescription: 'منصة مشاركة الملفات السحابية',
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerification: true
  });

  const [storageSettings, setStorageSettings] = useState({
    defaultQuota: 5,
    maxFileSize: 25,
    allowedTypes: 'pdf,doc,docx,jpg,png,mp4',
    backupEnabled: true,
    compressionEnabled: false
  });

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إعدادات النظام</h1>
          <p className="text-gray-600 mt-1">تكوين الإعدادات العامة للمنصة</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">عام</TabsTrigger>
            <TabsTrigger value="storage">التخزين</TabsTrigger>
            <TabsTrigger value="email">البريد</TabsTrigger>
            <TabsTrigger value="backup">النسخ الاحتياطي</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 ml-2" />
                  الإعدادات العامة
                </CardTitle>
                <CardDescription>
                  إعدادات الموقع الأساسية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">اسم الموقع</Label>
                    <Input 
                      id="siteName" 
                      value={generalSettings.siteName}
                      onChange={(e) => setGeneralSettings(prev => ({...prev, siteName: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteUrl">رابط الموقع</Label>
                    <Input id="siteUrl" defaultValue="https://fileflow.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="siteDescription">وصف الموقع</Label>
                  <Input 
                    id="siteDescription" 
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings(prev => ({...prev, siteDescription: e.target.value}))}
                  />
                </div>

                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">وضع الصيانة</h4>
                      <p className="text-sm text-gray-500">إيقاف الموقع مؤقتاً للصيانة</p>
                    </div>
                    <Switch 
                      checked={generalSettings.maintenanceMode}
                      onCheckedChange={(checked) => setGeneralSettings(prev => ({...prev, maintenanceMode: checked}))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">السماح بالتسجيل</h4>
                      <p className="text-sm text-gray-500">السماح للمستخدمين الجدد بإنشاء حسابات</p>
                    </div>
                    <Switch 
                      checked={generalSettings.registrationEnabled}
                      onCheckedChange={(checked) => setGeneralSettings(prev => ({...prev, registrationEnabled: checked}))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تفعيل البريد الإلكتروني إجباري</h4>
                      <p className="text-sm text-gray-500">إجبار المستخدمين على تفعيل بريدهم الإلكتروني</p>
                    </div>
                    <Switch 
                      checked={generalSettings.emailVerification}
                      onCheckedChange={(checked) => setGeneralSettings(prev => ({...prev, emailVerification: checked}))}
                    />
                  </div>
                </div>

                <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  <Save className="h-4 w-4 ml-2" />
                  حفظ الإعدادات
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 ml-2" />
                  إعدادات التخزين
                </CardTitle>
                <CardDescription>
                  تكوين حدود التخزين وأنواع الملفات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="defaultQuota">الحصة الافتراضية (جيجا)</Label>
                    <Input 
                      id="defaultQuota" 
                      type="number"
                      value={storageSettings.defaultQuota}
                      onChange={(e) => setStorageSettings(prev => ({...prev, defaultQuota: parseInt(e.target.value)}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxFileSize">الحد الأقصى لحجم الملف (ميجا)</Label>
                    <Input 
                      id="maxFileSize" 
                      type="number"
                      value={storageSettings.maxFileSize}
                      onChange={(e) => setStorageSettings(prev => ({...prev, maxFileSize: parseInt(e.target.value)}))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allowedTypes">أنواع الملفات المسموحة</Label>
                  <Input 
                    id="allowedTypes" 
                    value={storageSettings.allowedTypes}
                    onChange={(e) => setStorageSettings(prev => ({...prev, allowedTypes: e.target.value}))}
                    placeholder="pdf,doc,docx,jpg,png,mp4"
                  />
                  <p className="text-xs text-gray-500">أدخل امتدادات الملفات مفصولة بفاصلة</p>
                </div>

                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">النسخ الاحتياطي التلقائي</h4>
                      <p className="text-sm text-gray-500">إنشاء نسخ احتياطية تلقائية للملفات</p>
                    </div>
                    <Switch 
                      checked={storageSettings.backupEnabled}
                      onCheckedChange={(checked) => setStorageSettings(prev => ({...prev, backupEnabled: checked}))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">ضغط الملفات</h4>
                      <p className="text-sm text-gray-500">ضغط الملفات تلقائياً لتوفير المساحة</p>
                    </div>
                    <Switch 
                      checked={storageSettings.compressionEnabled}
                      onCheckedChange={(checked) => setStorageSettings(prev => ({...prev, compressionEnabled: checked}))}
                    />
                  </div>
                </div>

                <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  <Save className="h-4 w-4 ml-2" />
                  حفظ إعدادات التخزين
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 ml-2" />
                  إعدادات البريد الإلكتروني
                </CardTitle>
                <CardDescription>
                  تكوين خادم البريد الإلكتروني
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtpHost">خادم SMTP</Label>
                    <Input id="smtpHost" defaultValue="smtp.gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPort">المنفذ</Label>
                    <Input id="smtpPort" defaultValue="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpUser">اسم المستخدم</Label>
                    <Input id="smtpUser" defaultValue="noreply@fileflow.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtpPassword">كلمة المرور</Label>
                    <Input id="smtpPassword" type="password" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fromEmail">البريد المرسل</Label>
                  <Input id="fromEmail" defaultValue="noreply@fileflow.com" />
                </div>

                <div className="flex space-x-3 rtl:space-x-reverse">
                  <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                    <Save className="h-4 w-4 ml-2" />
                    حفظ الإعدادات
                  </Button>
                  <Button variant="outline">
                    اختبار الإرسال
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 ml-2" />
                  إعدادات النسخ الاحتياطي
                </CardTitle>
                <CardDescription>
                  إدارة النسخ الاحتياطية واستعادة البيانات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="backupFrequency">تكرار النسخ الاحتياطي</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>يومي</option>
                      <option>أسبوعي</option>
                      <option>شهري</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retentionPeriod">فترة الاحتفاظ (أيام)</Label>
                    <Input id="retentionPeriod" type="number" defaultValue="30" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">النسخ الاحتياطية الأخيرة</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">نسخة احتياطية كاملة</p>
                        <p className="text-sm text-gray-500">2024-01-20 03:00 ص</p>
                      </div>
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">نسخة احتياطية تدريجية</p>
                        <p className="text-sm text-gray-500">2024-01-19 03:00 ص</p>
                      </div>
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 rtl:space-x-reverse">
                  <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                    إنشاء نسخة احتياطية الآن
                  </Button>
                  <Button variant="outline">
                    استعادة من نسخة احتياطية
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
