
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Files, 
  HardDrive, 
  TrendingUp, 
  Calendar,
  BarChart3,
  UserCheck,
  UserX,
  FileX,
  Settings,
  Shield,
  Crown
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const AdminDashboard = () => {
  const [timeRange] = useState('30d');

  const stats = [
    {
      title: 'إجمالي المستخدمين',
      value: '12,458',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      description: 'المستخدمين المسجلين'
    },
    {
      title: 'الملفات المخزنة',
      value: '1.2M',
      change: '+12.5%',
      changeType: 'positive',
      icon: Files,
      description: 'إجمالي الملفات'
    },
    {
      title: 'المساحة المستخدمة',
      value: '45.8 TB',
      change: '+15.3%',
      changeType: 'positive',
      icon: HardDrive,
      description: 'من إجمالي 100 TB'
    },
    {
      title: 'الإيرادات الشهرية',
      value: '$24,580',
      change: '+6.1%',
      changeType: 'positive',
      icon: TrendingUp,
      description: 'من الاشتراكات'
    }
  ];

  const recentActivity = [
    {
      type: 'user_register',
      message: 'انضم مستخدم جديد: أحمد محمد',
      time: 'منذ 5 دقائق',
      icon: UserCheck,
      color: 'text-green-600 bg-green-50'
    },
    {
      type: 'file_upload',
      message: 'تم رفع 15 ملف جديد',
      time: 'منذ 15 دقيقة',
      icon: Files,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      type: 'user_upgrade',
      message: 'ترقية سارة أحمد إلى الخطة المميزة',
      time: 'منذ 30 دقيقة',
      icon: Crown,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      type: 'file_violation',
      message: 'تم الإبلاغ عن ملف مخالف',
      time: 'منذ ساعة',
      icon: FileX,
      color: 'text-red-600 bg-red-50'
    },
    {
      type: 'user_suspended',
      message: 'تم تعليق حساب مستخدم مخالف',
      time: 'منذ ساعتين',
      icon: UserX,
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  const quickActions = [
    {
      title: 'إدارة المستخدمين',
      description: 'عرض وإدارة حسابات المستخدمين',
      icon: Users,
      href: '/admin/users',
      color: 'bg-blue-500'
    },
    {
      title: 'مراجعة الملفات',
      description: 'مراجعة الملفات المرفوعة حديثاً',
      icon: Files,
      href: '/admin/files',
      color: 'bg-green-500'
    },
    {
      title: 'إعدادات النظام',
      description: 'تحديث إعدادات المنصة العامة',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-purple-500'
    },
    {
      title: 'الأمان والحماية',
      description: 'مراقبة النشاط المشبوه',
      icon: Shield,
      href: '/admin/security',
      color: 'bg-red-500'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        {/* الترحيب */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">لوحة الإدارة</h1>
            <p className="text-gray-600 mt-1">مرحباً بك في لوحة إدارة FileFlow</p>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="outline">
              <Calendar className="h-4 w-4 ml-2" />
              آخر 30 يوم
            </Button>
            <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
              <BarChart3 className="h-4 w-4 ml-2" />
              تقرير مفصل
            </Button>
          </div>
        </div>

        {/* الإحصائيات الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* النشاط الحديث */}
          <Card>
            <CardHeader>
              <CardTitle>النشاط الحديث</CardTitle>
              <CardDescription>آخر الأحداث في المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${activity.color}`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* الإجراءات السريعة */}
          <Card>
            <CardHeader>
              <CardTitle>الإجراءات السريعة</CardTitle>
              <CardDescription>الوصول السريع للمهام الأساسية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`h-10 w-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">{action.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الرسوم البيانية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>نمو المستخدمين</CardTitle>
              <CardDescription>عدد المستخدمين الجدد خلال الأشهر الأخيرة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">رسم بياني للنمو - سيتم إضافته لاحقاً</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>استخدام التخزين</CardTitle>
              <CardDescription>توزيع استخدام المساحة حسب نوع الملف</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">رسم بياني دائري - سيتم إضافته لاحقاً</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
