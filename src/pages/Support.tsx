
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Book
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const faqs = [
    {
      question: 'كيف يمكنني رفع الملفات؟',
      answer: 'يمكنك رفع الملفات بسحبها وإفلاتها في منطقة الرفع، أو بالنقر على زر "اختيار الملفات" وتحديد الملفات من جهازك.'
    },
    {
      question: 'ما هو الحد الأقصى لحجم الملف؟',
      answer: 'يعتمد الحد الأقصى على خطة اشتراكك: 25 ميجا للخطة المجانية، 500 ميجا للبريميوم، و5 جيجا لخطة الأعمال.'
    },
    {
      question: 'كيف يمكنني مشاركة الملفات؟',
      answer: 'انقر على الملف واختر "مشاركة" لإنشاء رابط مشاركة. يمكنك تحديد صلاحيات المشاركة والمدة الزمنية.'
    },
    {
      question: 'هل ملفاتي آمنة؟',
      answer: 'نعم، نستخدم تشفير SSL/TLS لنقل البيانات وتشفير AES-256 لتخزين الملفات. كما نحتفظ بنسخ احتياطية منتظمة.'
    },
    {
      question: 'كيف يمكنني استرداد ملف محذوف؟',
      answer: 'الملفات المحذوفة تبقى في سلة المحذوفات لمدة 30 يوم. يمكنك استردادها من هناك خلال هذه المدة.'
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">مركز الدعم</h1>
          <p className="text-gray-600 mt-1">نحن هنا لمساعدتك في أي وقت</p>
        </div>

        {/* طرق التواصل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">الدردشة المباشرة</h3>
              <p className="text-sm text-gray-500 mb-4">متاح 24/7 للاستفسارات السريعة</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                بدء الدردشة
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-sm text-gray-500 mb-4">support@fileflow.com</p>
              <Button variant="outline" className="w-full">
                إرسال إيميل
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">الهاتف</h3>
              <p className="text-sm text-gray-500 mb-4">+966 11 123 4567</p>
              <Button variant="outline" className="w-full">
                اتصل بنا
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* إنشاء تذكرة دعم */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 ml-2" />
              إنشاء تذكرة دعم
            </CardTitle>
            <CardDescription>
              اوصف مشكلتك بالتفصيل وسنرد عليك في أقرب وقت
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!ticketSubmitted ? (
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع المشكلة</Label>
                    <Input id="subject" placeholder="اختر موضوع واضح ومحدد" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">الأولوية</Label>
                    <select className="w-full p-2 border rounded-md" required>
                      <option value="">اختر الأولوية</option>
                      <option value="low">منخفضة</option>
                      <option value="medium">متوسطة</option>
                      <option value="high">عالية</option>
                      <option value="urgent">عاجلة</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">وصف المشكلة</Label>
                  <Textarea 
                    id="description" 
                    placeholder="اشرح المشكلة بالتفصيل مع ذكر الخطوات التي اتبعتها..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  إرسال التذكرة
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">تم إرسال التذكرة بنجاح</h3>
                <p className="text-gray-600 mb-4">
                  رقم التذكرة: <span className="font-mono font-bold">#SP-2024-001</span>
                </p>
                <p className="text-sm text-gray-500">
                  سنرد عليك خلال 24 ساعة على البريد الإلكتروني المسجل
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* الأسئلة الشائعة */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="h-5 w-5 ml-2" />
              الأسئلة الشائعة
            </CardTitle>
            <CardDescription>
              إجابات على أكثر الأسئلة شيوعاً
            </CardDescription>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="ابحث في الأسئلة الشائعة..." className="pr-10" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full p-4 text-right flex items-center justify-between hover:bg-gray-50"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="p-4 border-t bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* حالة النظام */}
        <Card>
          <CardHeader>
            <CardTitle>حالة النظام</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>خدمة رفع الملفات</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 ml-1" />
                  يعمل بشكل طبيعي
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>خدمة التخزين</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 ml-1" />
                  يعمل بشكل طبيعي
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>خدمة المشاركة</span>
                <Badge className="bg-yellow-100 text-yellow-800">
                  <AlertCircle className="h-3 w-3 ml-1" />
                  بطء في الاستجابة
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>خدمة النسخ الاحتياطي</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 ml-1" />
                  يعمل بشكل طبيعي
                </Badge>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 ml-2" />
                آخر تحديث: منذ 5 دقائق
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Support;
