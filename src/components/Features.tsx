
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield, Share2, FolderTree, Search, Smartphone, Users, ChartBar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: "تخزين سحابي آمن",
      description: "احفظ ملفاتك بأمان في السحابة مع تشفير متقدم وحماية كاملة لبياناتك"
    },
    {
      icon: Shield,
      title: "حماية متطورة",
      description: "تشفير 256-bit وحماية متعددة الطبقات لضمان أمان ملفاتك الشخصية"
    },
    {
      icon: Share2,
      title: "مشاركة سهلة",
      description: "شارك ملفاتك مع الآخرين بروابط آمنة وتحكم كامل في صلاحيات الوصول"
    },
    {
      icon: FolderTree,
      title: "تنظيم ذكي",
      description: "نظم ملفاتك في مجلدات وفئات مختلفة لسهولة الوصول والإدارة"
    },
    {
      icon: Search,
      title: "بحث متقدم",
      description: "ابحث في ملفاتك بسرعة وسهولة مع محرك بحث قوي ودقيق"
    },
    {
      icon: Smartphone,
      title: "متوافق مع الجوال",
      description: "اصل إلى ملفاتك من أي مكان عبر الجوال أو الكمبيوتر بواجهة متجاوبة"
    },
    {
      icon: Users,
      title: "تعاون جماعي",
      description: "اعمل مع فريقك على نفس الملفات مع إمكانيات التعاون المتقدمة"
    },
    {
      icon: ChartBar,
      title: "تحليلات شاملة",
      description: "تابع استخدامك للمساحة والنشاط مع تقارير مفصلة ورسوم بيانية"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مزايا <span className="gradient-text">FileFlow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف الميزات المتطورة التي تجعل من FileFlow الخيار الأمثل لتخزين ومشاركة ملفاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-fileflow-blue">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-fileflow-blue/10 rounded-full flex items-center justify-center group-hover:bg-fileflow-blue/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-fileflow-blue" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
