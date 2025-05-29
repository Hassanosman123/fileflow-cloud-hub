
import { Cloud, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Cloud className="h-8 w-8 text-fileflow-blue" />
              <span className="text-2xl font-bold">FileFlow</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              منصة التخزين السحابي الآمن التي توفر لك أفضل تجربة لحفظ ومشاركة ملفاتك
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">المزايا</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">الأسعار</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">حالة الخدمة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-fileflow-blue" />
                <span className="text-gray-400">support@fileflow.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-fileflow-blue" />
                <span className="text-gray-400">+966 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-fileflow-blue" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 FileFlow. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
