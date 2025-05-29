
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Check, 
  Crown, 
  Zap, 
  Shield, 
  Cloud, 
  Users,
  HardDrive,
  Upload,
  Download,
  Star
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Upgrade = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'الخطة المجانية',
      price: { monthly: 0, yearly: 0 },
      description: 'مثالية للاستخدام الشخصي البسيط',
      features: [
        '5 جيجا مساحة تخزين',
        'رفع ملفات حتى 25 ميجا',
        'مشاركة محدودة',
        'دعم فني أساسي'
      ],
      popular: false,
      current: true
    },
    {
      id: 'premium',
      name: 'البريميوم',
      price: { monthly: 29, yearly: 290 },
      description: 'الأفضل للمستخدمين النشطين',
      features: [
        '100 جيجا مساحة تخزين',
        'رفع ملفات حتى 500 ميجا',
        'مشاركة غير محدودة',
        'نسخ احتياطي تلقائي',
        'دعم فني متقدم',
        'بدون إعلانات'
      ],
      popular: true,
      current: false
    },
    {
      id: 'business',
      name: 'الأعمال',
      price: { monthly: 99, yearly: 990 },
      description: 'للشركات والفرق الكبيرة',
      features: [
        '1 تيرا مساحة تخزين',
        'رفع ملفات حتى 5 جيجا',
        'إدارة الفرق',
        'تشفير متقدم',
        'تحليلات مفصلة',
        'دعم فني على مدار الساعة',
        'API للمطورين'
      ],
      popular: false,
      current: false
    }
  ];

  const currentUsage = {
    storage: 35.2,
    maxStorage: 5,
    files: 1248,
    uploads: 89
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">ترقية حسابك</h1>
          <p className="text-gray-600 mt-2">اختر الخطة المناسبة لاحتياجاتك</p>
        </div>

        {/* الاستخدام الحالي */}
        <Card className="bg-gradient-to-r from-fileflow-blue to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <HardDrive className="h-5 w-5 ml-2" />
              الاستخدام الحالي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{currentUsage.storage} GB</div>
                <p className="text-blue-100">من {currentUsage.maxStorage} GB</p>
                <Progress value={(currentUsage.storage / currentUsage.maxStorage) * 100} className="mt-2 bg-blue-700" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{currentUsage.files}</div>
                <p className="text-blue-100">إجمالي الملفات</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{currentUsage.uploads}</div>
                <p className="text-blue-100">ملفات مرفوعة هذا الشهر</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* تبديل دورة الفوترة */}
        <div className="flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            <Button
              variant={billingCycle === 'monthly' ? 'default' : 'ghost'}
              onClick={() => setBillingCycle('monthly')}
              className="rounded-md"
            >
              شهرياً
            </Button>
            <Button
              variant={billingCycle === 'yearly' ? 'default' : 'ghost'}
              onClick={() => setBillingCycle('yearly')}
              className="rounded-md"
            >
              سنوياً
              <Badge variant="secondary" className="mr-2">توفير 17%</Badge>
            </Button>
          </div>
        </div>

        {/* الخطط */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${plan.popular ? 'border-fileflow-blue shadow-lg scale-105' : ''} ${plan.current ? 'bg-gray-50' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-fileflow-blue text-white">
                    <Star className="h-3 w-3 ml-1" />
                    الأكثر شعبية
                  </Badge>
                </div>
              )}
              
              {plan.current && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary">
                    <Crown className="h-3 w-3 ml-1" />
                    الخطة الحالية
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold text-fileflow-blue">
                  {plan.price[billingCycle] === 0 ? 'مجاني' : `${plan.price[billingCycle]} ر.س`}
                  {plan.price[billingCycle] > 0 && (
                    <span className="text-sm text-gray-500 font-normal">
                      /{billingCycle === 'monthly' ? 'شهر' : 'سنة'}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 ml-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.current ? 'opacity-50 cursor-not-allowed' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  disabled={plan.current}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.current ? 'الخطة الحالية' : plan.id === 'basic' ? 'الرجوع للمجاني' : 'ترقية الآن'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* مقارنة المزايا */}
        <Card>
          <CardHeader>
            <CardTitle>مقارنة شاملة للمزايا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-4">المزايا</th>
                    <th className="text-center p-4">المجاني</th>
                    <th className="text-center p-4">البريميوم</th>
                    <th className="text-center p-4">الأعمال</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">مساحة التخزين</td>
                    <td className="text-center p-4">5 جيجا</td>
                    <td className="text-center p-4">100 جيجا</td>
                    <td className="text-center p-4">1 تيرا</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">حجم الملف الأقصى</td>
                    <td className="text-center p-4">25 ميجا</td>
                    <td className="text-center p-4">500 ميجا</td>
                    <td className="text-center p-4">5 جيجا</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">عدد المستخدمين</td>
                    <td className="text-center p-4">1</td>
                    <td className="text-center p-4">1</td>
                    <td className="text-center p-4">غير محدود</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">النسخ الاحتياطي</td>
                    <td className="text-center p-4">❌</td>
                    <td className="text-center p-4">✅</td>
                    <td className="text-center p-4">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">الدعم الفني</td>
                    <td className="text-center p-4">أساسي</td>
                    <td className="text-center p-4">متقدم</td>
                    <td className="text-center p-4">24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* الأسئلة الشائعة */}
        <Card>
          <CardHeader>
            <CardTitle>الأسئلة الشائعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">هل يمكنني تغيير خطتي في أي وقت؟</h4>
              <p className="text-sm text-gray-600">نعم، يمكنك الترقية أو التراجع في أي وقت. التغييرات ستطبق في الدورة الفوترة التالية.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">ماذا يحدث لملفاتي إذا تراجعت عن الخطة؟</h4>
              <p className="text-sm text-gray-600">ملفاتك ستبقى آمنة، لكن لن تتمكن من رفع ملفات جديدة إذا تجاوزت حد الخطة الجديدة.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">هل هناك ضمان استرداد الأموال؟</h4>
              <p className="text-sm text-gray-600">نعم، نوفر ضمان استرداد الأموال خلال 30 يوم من الاشتراك.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Upgrade;
