
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  HelpCircle, 
  MessageCircle, 
  Search, 
  Filter, 
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Calendar
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const AdminSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const tickets = [
    {
      id: 'SP-2024-001',
      user: 'أحمد محمد',
      email: 'ahmed@example.com',
      subject: 'مشكلة في رفع الملفات',
      priority: 'high',
      status: 'open',
      created: '2024-01-20 14:30',
      lastUpdate: '2024-01-20 15:45',
      category: 'تقني'
    },
    {
      id: 'SP-2024-002',
      user: 'فاطمة أحمد',
      email: 'fatima@example.com',
      subject: 'استفسار عن الترقية',
      priority: 'medium',
      status: 'pending',
      created: '2024-01-20 10:15',
      lastUpdate: '2024-01-20 12:30',
      category: 'فوترة'
    },
    {
      id: 'SP-2024-003',
      user: 'محمد علي',
      email: 'mohammed@example.com',
      subject: 'طلب حذف الحساب',
      priority: 'low',
      status: 'resolved',
      created: '2024-01-19 16:20',
      lastUpdate: '2024-01-20 09:15',
      category: 'عام'
    }
  ];

  const stats = [
    { title: 'التذاكر المفتوحة', value: '23', icon: MessageCircle, color: 'text-blue-600' },
    { title: 'في الانتظار', value: '8', icon: Clock, color: 'text-yellow-600' },
    { title: 'تم الحل', value: '156', icon: CheckCircle, color: 'text-green-600' },
    { title: 'عالية الأولوية', value: '5', icon: AlertCircle, color: 'text-red-600' }
  ];

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    const labels = {
      high: 'عالية',
      medium: 'متوسطة',
      low: 'منخفضة'
    };
    return <Badge className={styles[priority as keyof typeof styles]}>{labels[priority as keyof typeof labels]}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      open: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800'
    };
    const labels = {
      open: 'مفتوح',
      pending: 'في الانتظار',
      resolved: 'تم الحل',
      closed: 'مغلق'
    };
    return <Badge className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الدعم الفني</h1>
          <p className="text-gray-600 mt-1">متابعة تذاكر الدعم وطلبات المساعدة</p>
        </div>

        {/* إحصائيات الدعم */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* فلاتر البحث */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث في التذاكر..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
              <select 
                className="p-2 border rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">جميع الحالات</option>
                <option value="open">مفتوح</option>
                <option value="pending">في الانتظار</option>
                <option value="resolved">تم الحل</option>
                <option value="closed">مغلق</option>
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 ml-2" />
                مرشحات متقدمة
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* قائمة التذاكر */}
        <Card>
          <CardHeader>
            <CardTitle>تذاكر الدعم ({filteredTickets.length})</CardTitle>
            <CardDescription>
              إدارة ومتابعة طلبات الدعم الفني
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                        <h3 className="font-medium text-lg">{ticket.subject}</h3>
                        {getPriorityBadge(ticket.priority)}
                        {getStatusBadge(ticket.status)}
                      </div>
                      
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <User className="h-4 w-4 ml-1" />
                          {ticket.user}
                        </span>
                        <span>{ticket.email}</span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 ml-1" />
                          {ticket.created}
                        </span>
                        <Badge variant="outline">{ticket.category}</Badge>
                      </div>
                      
                      <div className="text-xs text-gray-400">
                        رقم التذكرة: {ticket.id} • آخر تحديث: {ticket.lastUpdate}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Button variant="outline" size="sm">
                        عرض
                      </Button>
                      <Button size="sm" className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                        رد
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* رد سريع */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 ml-2" />
              الردود السريعة
            </CardTitle>
            <CardDescription>
              قوالب الردود المحفوظة للاستخدام السريع
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">شكراً لتواصلك معنا</h4>
                    <p className="text-sm text-gray-600">رد تأكيد استلام التذكرة</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">تم حل المشكلة</h4>
                    <p className="text-sm text-gray-600">إشعار بحل المشكلة</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">نحتاج معلومات إضافية</h4>
                    <p className="text-sm text-gray-600">طلب توضيحات من المستخدم</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">تحويل للقسم التقني</h4>
                    <p className="text-sm text-gray-600">إحالة لفريق متخصص</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">إنشاء رد مخصص</h4>
                <Textarea 
                  placeholder="اكتب ردك هنا..."
                  rows={4}
                  className="mb-3"
                />
                <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
                  إرسال الرد
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminSupport;
