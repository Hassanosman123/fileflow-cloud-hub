
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  MoreVertical,
  Edit,
  Trash2
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const Subscriptions = () => {
  const plans = [
    {
      id: 1,
      name: 'المجاني',
      price: 0,
      subscribers: 8456,
      revenue: 0,
      growth: '+12%',
      features: ['5 جيجا تخزين', 'دعم أساسي'],
      status: 'active'
    },
    {
      id: 2,
      name: 'البريميوم',
      price: 29,
      subscribers: 3243,
      revenue: 94047,
      growth: '+18%',
      features: ['100 جيجا تخزين', 'نسخ احتياطي', 'دعم متقدم'],
      status: 'active'
    },
    {
      id: 3,
      name: 'الأعمال',
      price: 99,
      subscribers: 567,
      revenue: 56133,
      growth: '+25%',
      features: ['1 تيرا تخزين', 'إدارة فرق', 'API'],
      status: 'active'
    }
  ];

  const recentSubscriptions = [
    {
      user: 'أحمد محمد',
      plan: 'Premium',
      date: '2024-01-20',
      amount: 29,
      status: 'active',
      email: 'ahmed@example.com'
    },
    {
      user: 'فاطمة أحمد',
      plan: 'Business',
      date: '2024-01-19',
      amount: 99,
      status: 'active',
      email: 'fatima@example.com'
    },
    {
      user: 'محمد علي',
      plan: 'Premium',
      date: '2024-01-18',
      amount: 29,
      status: 'cancelled',
      email: 'mohammed@example.com'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      expired: 'bg-yellow-100 text-yellow-800'
    };
    const labels = {
      active: 'نشط',
      cancelled: 'ملغي',
      expired: 'منتهي'
    };
    return <Badge className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const totalRevenue = plans.reduce((sum, plan) => sum + plan.revenue, 0);
  const totalSubscribers = plans.reduce((sum, plan) => sum + plan.subscribers, 0);

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الاشتراكات</h1>
          <p className="text-gray-600 mt-1">مراقبة الخطط والإيرادات</p>
        </div>

        {/* إحصائيات الإيرادات */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي الإيرادات</p>
                  <p className="text-2xl font-bold text-gray-900">{totalRevenue.toLocaleString()} ر.س</p>
                  <p className="text-xs text-green-600">+15% من الشهر الماضي</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">المشتركين المدفوعين</p>
                  <p className="text-2xl font-bold text-gray-900">{(totalSubscribers - plans[0].subscribers).toLocaleString()}</p>
                  <p className="text-xs text-green-600">+20% من الشهر الماضي</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">متوسط الإيراد لكل مستخدم</p>
                  <p className="text-2xl font-bold text-gray-900">39 ر.س</p>
                  <p className="text-xs text-green-600">+8% من الشهر الماضي</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">معدل التحويل</p>
                  <p className="text-2xl font-bold text-gray-900">3.2%</p>
                  <p className="text-xs text-red-600">-0.5% من الشهر الماضي</p>
                </div>
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الخطط المتاحة */}
        <Card>
          <CardHeader>
            <CardTitle>الخطط المتاحة</CardTitle>
            <CardDescription>
              إدارة وتعديل خطط الاشتراك
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.id} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-2xl font-bold text-fileflow-blue">
                      {plan.price === 0 ? 'مجاني' : `${plan.price} ر.س/شهر`}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>المشتركين</span>
                          <span className="font-medium">{plan.subscribers.toLocaleString()}</span>
                        </div>
                        <Progress 
                          value={(plan.subscribers / totalSubscribers) * 100} 
                          className="h-2" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">الإيراد الشهري</span>
                          <span className="font-medium">{plan.revenue.toLocaleString()} ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">النمو</span>
                          <span className="text-green-600 font-medium">{plan.growth}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-sm text-gray-600 mb-2">المزايا:</p>
                        <ul className="text-xs space-y-1">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="text-gray-500">• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-2 rtl:space-x-reverse pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-3 w-3 ml-1" />
                          تعديل
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* الاشتراكات الحديثة */}
        <Card>
          <CardHeader>
            <CardTitle>الاشتراكات الحديثة</CardTitle>
            <CardDescription>
              آخر الاشتراكات والإلغاءات
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-4">المستخدم</th>
                    <th className="text-center p-4">الخطة</th>
                    <th className="text-center p-4">التاريخ</th>
                    <th className="text-center p-4">المبلغ</th>
                    <th className="text-center p-4">الحالة</th>
                    <th className="text-center p-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSubscriptions.map((subscription, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{subscription.user}</p>
                          <p className="text-sm text-gray-500">{subscription.email}</p>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <Badge variant="outline">{subscription.plan}</Badge>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-sm">{subscription.date}</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="font-medium">{subscription.amount} ر.س</span>
                      </td>
                      <td className="text-center p-4">
                        {getStatusBadge(subscription.status)}
                      </td>
                      <td className="text-center p-4">
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
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

export default Subscriptions;
