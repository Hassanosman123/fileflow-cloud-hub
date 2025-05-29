
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  TrendingUp, 
  Users, 
  Files, 
  HardDrive,
  Activity
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const Reports = () => {
  const reports = [
    {
      title: 'تقرير المستخدمين الشهري',
      description: 'إحصائيات شاملة عن نشاط المستخدمين',
      lastGenerated: '2024-01-20',
      size: '2.4 MB',
      icon: Users
    },
    {
      title: 'تقرير استخدام التخزين',
      description: 'تفاصيل استهلاك مساحة التخزين',
      lastGenerated: '2024-01-19',
      size: '1.8 MB',
      icon: HardDrive
    },
    {
      title: 'تقرير الملفات والتحميلات',
      description: 'إحصائيات رفع وتحميل الملفات',
      lastGenerated: '2024-01-18',
      size: '3.1 MB',
      icon: Files
    },
    {
      title: 'تقرير الإيرادات',
      description: 'تحليل الاشتراكات والإيرادات',
      lastGenerated: '2024-01-17',
      size: '1.5 MB',
      icon: TrendingUp
    }
  ];

  const quickStats = [
    { label: 'نمو المستخدمين', value: '+12%', trend: 'up' },
    { label: 'استخدام التخزين', value: '68%', trend: 'up' },
    { label: 'معدل التحويل', value: '3.2%', trend: 'down' },
    { label: 'رضا العملاء', value: '94%', trend: 'up' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">التقارير والتحليلات</h1>
          <p className="text-gray-600 mt-1">مراجعة أداء النظام والإحصائيات</p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <TrendingUp className={`h-4 w-4 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* مولد التقارير */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 ml-2" />
              مولد التقارير
            </CardTitle>
            <CardDescription>
              إنشاء تقارير مخصصة حسب الفترة والنوع
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">نوع التقرير</label>
                <select className="w-full p-2 border rounded-md">
                  <option>تقرير المستخدمين</option>
                  <option>تقرير الملفات</option>
                  <option>تقرير الإيرادات</option>
                  <option>تقرير النشاط</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">من تاريخ</label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">إلى تاريخ</label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
              <BarChart3 className="h-4 w-4 ml-2" />
              إنشاء التقرير
            </Button>
          </CardContent>
        </Card>

        {/* التقارير المحفوظة */}
        <Card>
          <CardHeader>
            <CardTitle>التقارير المحفوظة</CardTitle>
            <CardDescription>
              التقارير التي تم إنشاؤها مسبقاً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="h-12 w-12 bg-fileflow-blue/10 rounded-lg flex items-center justify-center">
                      <report.icon className="h-6 w-6 text-fileflow-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-gray-500">{report.description}</p>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs text-gray-400 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 ml-1" />
                          {report.lastGenerated}
                        </span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Button variant="outline" size="sm">
                      عرض
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* رسوم بيانية وهمية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>نمو المستخدمين (آخر 6 أشهر)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Activity className="h-12 w-12 mx-auto mb-2" />
                  <p>رسم بياني لنمو المستخدمين</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>استخدام التخزين (يومي)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <HardDrive className="h-12 w-12 mx-auto mb-2" />
                  <p>رسم بياني لاستخدام التخزين</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;
