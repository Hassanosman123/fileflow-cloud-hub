
import { Button } from '@/components/ui/button';
import { Cloud, Upload, Share, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">FileFlow</span>
              <br />
              منصة التخزين السحابي الآمن
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              احفظ، شارك، ونظم ملفاتك بسهولة وأمان. منصة سحابية متطورة توفر لك 
              تجربة تخزين استثنائية مع حماية عالية لبياناتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-fileflow-blue hover:bg-fileflow-darkBlue text-white px-8 py-4 text-lg">
                ابدأ مجاناً
                <Cloud className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-fileflow-blue text-fileflow-blue hover:bg-fileflow-blue hover:text-white px-8 py-4 text-lg">
                شاهد العرض التوضيحي
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-fileflow-blue">50GB</div>
                <div className="text-sm text-gray-600">مساحة مجانية</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fileflow-blue">99.9%</div>
                <div className="text-sm text-gray-600">وقت التشغيل</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-fileflow-blue">256-bit</div>
                <div className="text-sm text-gray-600">تشفير آمن</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 text-fileflow-blue mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">رفع سريع</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <Share className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">مشاركة آمنة</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">حماية عالية</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Cloud className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">تخزين سحابي</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-center text-gray-600 text-sm mb-2">ملفاتك محمية ومنظمة</div>
                <div className="bg-fileflow-blue rounded-full h-2 overflow-hidden">
                  <div className="bg-fileflow-lightBlue h-full w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-fileflow-lightBlue rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
