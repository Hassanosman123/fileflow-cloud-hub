
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Files, 
  Upload, 
  Download, 
  Share, 
  HardDrive, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Dashboard = () => {
  const [storageUsed] = useState(35.2); // GB
  const [storageTotal] = useState(50); // GB
  const storagePercentage = (storageUsed / storageTotal) * 100;

  const stats = [
    {
      title: 'إجمالي الملفات',
      value: '1,248',
      icon: Files,
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'مرات التحميل',
      value: '3,429',
      icon: Download,
      change: '+18%',
      changeType: 'positive'
    },
    {
      title: 'الملفات المشاركة',
      value: '156',
      icon: Share,
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'الرفع هذا الشهر',
      value: '89',
      icon: Upload,
      change: '-3%',
      changeType: 'negative'
    }
  ];

  const recentFiles = [
    { name: 'تقرير_المشروع.pdf', size: '2.4 MB', date: 'اليوم', type: 'pdf' },
    { name: 'صورة_الشعار.png', size: '1.8 MB', date: 'أمس', type: 'image' },
    { name: 'عرض_تقديمي.pptx', size: '15.2 MB', date: '3 أيام', type: 'presentation' },
    { name: 'جدول_البيانات.xlsx', size: '856 KB', date: '5 أيام', type: 'spreadsheet' },
    { name: 'فيديو_شرح.mp4', size: '125 MB', date: 'أسبوع', type: 'video' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        {/* ترحيب */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">مرحباً بك في لوحة التحكم</h1>
            <p className="text-gray-600 mt-1">إليك نظرة سريعة على نشاطك</p>
          </div>
          <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
            <Upload className="h-4 w-4 ml-2" />
            رفع ملف جديد
          </Button>
        </div>

        {/* مساحة التخزين */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HardDrive className="h-5 w-5 ml-2" />
              مساحة التخزين
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">المستخدم</span>
                <span className="text-sm font-medium">{storageUsed} GB من {storageTotal} GB</span>
              </div>
              <Progress value={storagePercentage} className="h-2" />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>متبقي: {(storageTotal - storageUsed).toFixed(1)} GB</span>
                <span>{storagePercentage.toFixed(1)}% مستخدم</span>
              </div>
              {storagePercentage > 80 && (
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-amber-600 bg-amber-50 p-2 rounded-lg">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm">مساحة التخزين تقترب من النفاد. فكر في الترقية!</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-fileflow-blue/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-fileflow-blue" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className={`h-4 w-4 ml-1 ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 mr-2">من الشهر الماضي</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* آخر الملفات */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 ml-2" />
              آخر الملفات المضافة
            </CardTitle>
            <CardDescription>
              الملفات التي تم رفعها مؤخراً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="h-10 w-10 bg-fileflow-blue/10 rounded-lg flex items-center justify-center">
                      <Files className="h-5 w-5 text-fileflow-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm text-gray-500">{file.date}</span>
                    <Button variant="ghost" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" className="w-full">
                عرض جميع الملفات
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* إشعارات */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 ml-2" />
              الإشعارات الحديثة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-blue-50 rounded-lg">
                <Cloud className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">تم رفع الملف بنجاح</p>
                  <p className="text-xs text-blue-700">تم رفع "تقرير_المشروع.pdf" بنجاح قبل ساعة</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-green-50 rounded-lg">
                <Share className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">تمت مشاركة ملف</p>
                  <p className="text-xs text-green-700">شارك أحمد معك ملف "خطة_العمل.docx" قبل 3 ساعات</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
