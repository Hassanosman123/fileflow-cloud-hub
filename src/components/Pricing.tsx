
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "المجاني",
      price: "0",
      period: "مجاناً",
      description: "مثالي للاستخدام الشخصي البسيط",
      features: [
        "50 جيجابايت مساحة تخزين",
        "رفع الملفات الأساسية",
        "مشاركة عامة للملفات",
        "دعم فني أساسي",
        "تشفير أساسي"
      ],
      popular: false,
      buttonText: "ابدأ مجاناً",
      buttonVariant: "outline" as const
    },
    {
      name: "المميز",
      price: "29",
      period: "شهرياً",
      description: "الأفضل للأفراد والمحترفين",
      features: [
        "500 جيجابايت مساحة تخزين",
        "رفع ملفات بأحجام كبيرة",
        "مشاركة خاصة وآمنة",
        "تنظيم متقدم للملفات",
        "تشفير متقدم 256-bit",
        "دعم فني على مدار الساعة",
        "نسخ احتياطية تلقائية"
      ],
      popular: true,
      buttonText: "اشترك الآن",
      buttonVariant: "default" as const
    },
    {
      name: "للمؤسسات",
      price: "99",
      period: "شهرياً",
      description: "حل شامل للشركات والفرق",
      features: [
        "5 تيرابايت مساحة تخزين",
        "مستخدمين غير محدود",
        "إدارة متقدمة للصلاحيات",
        "تقارير وتحليلات مفصلة",
        "تكامل مع الأنظمة الأخرى",
        "أمان على مستوى المؤسسات",
        "دعم مخصص ومدير حساب"
      ],
      popular: false,
      buttonText: "تواصل معنا",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خطط <span className="gradient-text">الاشتراك</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر الخطة المناسبة لاحتياجاتك مع إمكانية الترقية أو التغيير في أي وقت
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-fileflow-blue shadow-lg scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fileflow-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  الأكثر شعبية
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-fileflow-blue">{plan.price}</span>
                  <span className="text-gray-600 mr-2">ريال</span>
                  <span className="text-gray-500">/ {plan.period}</span>
                </div>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 ml-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.popular ? 'bg-fileflow-blue hover:bg-fileflow-darkBlue text-white' : ''}`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            جميع الخطط تشمل ضمان استرداد الأموال لمدة 30 يوماً
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
