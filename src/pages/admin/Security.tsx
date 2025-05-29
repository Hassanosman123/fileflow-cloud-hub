
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  Eye, 
  Activity,
  UserX,
  Key,
  Wifi
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const Security = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: true,
    loginNotifications: true,
    sessionTimeout: true,
    ipRestriction: false,
    passwordPolicy: true,
    encryptionEnabled: true
  });

  const securityAlerts = [
    {
      type: 'high',
      title: 'محاولة دخول مشبوهة',
      description: 'محاولة دخول من عنوان IP غير معروف',
      time: 'منذ 15 دقيقة',
      location: 'روسيا'
    },
    {
      type: 'medium',
      title: 'تحميل ملف كبير',
      description: 'تم تحميل ملف بحجم 500 ميجا من حساب جديد',
      time: 'منذ ساعة',
      location: 'السعودية'
    },
    {
      type: 'low',
      title: 'تغيير كلمة مرور',
      description: 'قام مستخدم بتغيير كلمة المرور',
      time: 'منذ 3 ساعات',
      location: 'الإمارات'
    }
  ];

  const activesSessions = [
    {
      user: 'أحمد محمد',
      ip: '192.168.1.100',
      location: 'الرياض، السعودية',
      device: 'Windows 11 - Chrome',
      lastActivity: 'نشط الآن',
      suspicious: false
    },
    {
      user: 'فاطمة أحمد',
      ip: '10.0.0.45',
      location: 'دبي، الإمارات',
      device: 'iPhone - Safari',
      lastActivity: 'منذ 5 دقائق',
      suspicious: false
    },
    {
      user: 'محمد علي',
      ip: '203.45.67.89',
      location: 'موسكو، روسيا',
      device: 'Linux - Firefox',
      lastActivity: 'منذ 2 دقائق',
      suspicious: true
    }
  ];

  const getAlertColor = (type: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[type as keyof typeof colors];
  };

  const getAlertIcon = (type: string) => {
    if (type === 'high') return AlertTriangle;
    if (type === 'medium') return Eye;
    return Activity;
  };

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">الأمان والحماية</h1>
          <p className="text-gray-600 mt-1">مراقبة وإدارة أمان النظام</p>
        </div>

        {/* نظرة عامة على الأمان */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800">مستوى الأمان</h3>
              <p className="text-2xl font-bold text-green-600">عالي</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold">تنبيهات أمنية</h3>
              <p className="text-2xl font-bold text-red-600">3</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <UserX className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold">حسابات محظورة</h3>
              <p className="text-2xl font-bold text-yellow-600">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold">جلسات نشطة</h3>
              <p className="text-2xl font-bold text-blue-600">156</p>
            </CardContent>
          </Card>
        </div>

        {/* إعدادات الأمان */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 ml-2" />
              إعدادات الأمان
            </CardTitle>
            <CardDescription>
              تكوين سياسات الأمان العامة للنظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">التحقق بخطوتين إجباري</h4>
                <p className="text-sm text-gray-500">إجبار جميع المستخدمين على تفعيل التحقق بخطوتين</p>
              </div>
              <Switch 
                checked={securitySettings.twoFactor}
                onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, twoFactor: checked}))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">إشعارات تسجيل الدخول</h4>
                <p className="text-sm text-gray-500">إرسال إشعار عند كل محاولة تسجيل دخول</p>
              </div>
              <Switch 
                checked={securitySettings.loginNotifications}
                onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, loginNotifications: checked}))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">انتهاء الجلسة التلقائي</h4>
                <p className="text-sm text-gray-500">إنهاء الجلسة تلقائياً بعد فترة عدم نشاط</p>
              </div>
              <Switch 
                checked={securitySettings.sessionTimeout}
                onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, sessionTimeout: checked}))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">قيود العناوين IP</h4>
                <p className="text-sm text-gray-500">السماح بالدخول من عناوين IP محددة فقط</p>
              </div>
              <Switch 
                checked={securitySettings.ipRestriction}
                onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, ipRestriction: checked}))}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">سياسة كلمات المرور القوية</h4>
                <p className="text-sm text-gray-500">إجبار المستخدمين على استخدام كلمات مرور قوية</p>
              </div>
              <Switch 
                checked={securitySettings.passwordPolicy}
                onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, passwordPolicy: checked}))}
              />
            </div>
          </CardContent>
        </Card>

        {/* التنبيهات الأمنية */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 ml-2" />
              التنبيهات الأمنية الحديثة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityAlerts.map((alert, index) => {
                const AlertIcon = getAlertIcon(alert.type);
                return (
                  <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 rtl:space-x-reverse">
                        <AlertIcon className="h-5 w-5 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{alert.title}</h4>
                          <p className="text-sm mt-1">{alert.description}</p>
                          <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs mt-2">
                            <span>{alert.time}</span>
                            <span>{alert.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        التحقق
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* الجلسات النشطة */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wifi className="h-5 w-5 ml-2" />
              الجلسات النشطة المشبوهة
            </CardTitle>
            <CardDescription>
              مراقبة الجلسات النشطة والأنشطة المشبوهة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-3">المستخدم</th>
                    <th className="text-center p-3">عنوان IP</th>
                    <th className="text-center p-3">الموقع</th>
                    <th className="text-center p-3">الجهاز</th>
                    <th className="text-center p-3">آخر نشاط</th>
                    <th className="text-center p-3">الحالة</th>
                    <th className="text-center p-3">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {activesSessions.map((session, index) => (
                    <tr key={index} className={`border-b ${session.suspicious ? 'bg-red-50' : ''}`}>
                      <td className="p-3">
                        <span className="font-medium">{session.user}</span>
                      </td>
                      <td className="text-center p-3">
                        <span className="font-mono text-sm">{session.ip}</span>
                      </td>
                      <td className="text-center p-3">
                        <span className="text-sm">{session.location}</span>
                      </td>
                      <td className="text-center p-3">
                        <span className="text-sm">{session.device}</span>
                      </td>
                      <td className="text-center p-3">
                        <span className="text-sm">{session.lastActivity}</span>
                      </td>
                      <td className="text-center p-3">
                        {session.suspicious ? (
                          <Badge className="bg-red-100 text-red-800">مشبوه</Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-800">آمن</Badge>
                        )}
                      </td>
                      <td className="text-center p-3">
                        {session.suspicious && (
                          <Button variant="outline" size="sm" className="text-red-600">
                            إنهاء الجلسة
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Security;
