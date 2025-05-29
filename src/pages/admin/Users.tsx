
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users as UsersIcon, 
  Search, 
  Filter, 
  MoreVertical, 
  UserCheck, 
  UserX, 
  Crown,
  Mail,
  Calendar,
  HardDrive,
  Download
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      avatar: '/placeholder.svg',
      plan: 'Premium',
      status: 'active',
      joinDate: '2024-01-15',
      storage: { used: 45.2, total: 100 },
      files: 1248,
      lastActive: 'اليوم'
    },
    {
      id: 2,
      name: 'فاطمة أحمد',
      email: 'fatima@example.com',
      avatar: '/placeholder.svg',
      plan: 'Free',
      status: 'active',
      joinDate: '2024-02-10',
      storage: { used: 3.8, total: 5 },
      files: 89,
      lastActive: 'أمس'
    },
    {
      id: 3,
      name: 'محمد علي',
      email: 'mohammed@example.com',
      avatar: '/placeholder.svg',
      plan: 'Business',
      status: 'suspended',
      joinDate: '2023-12-05',
      storage: { used: 245.6, total: 1000 },
      files: 3456,
      lastActive: '3 أيام'
    },
    {
      id: 4,
      name: 'سارة خالد',
      email: 'sara@example.com',
      avatar: '/placeholder.svg',
      plan: 'Premium',
      status: 'inactive',
      joinDate: '2024-01-20',
      storage: { used: 78.3, total: 100 },
      files: 567,
      lastActive: 'أسبوع'
    }
  ];

  const stats = [
    { title: 'إجمالي المستخدمين', value: '12,458', change: '+12%', icon: UsersIcon },
    { title: 'المستخدمين النشطين', value: '8,234', change: '+8%', icon: UserCheck },
    { title: 'اشتراكات مدفوعة', value: '3,456', change: '+15%', icon: Crown },
    { title: 'مستخدمين جدد اليوم', value: '89', change: '+22%', icon: UserCheck }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800'
    };
    const labels = {
      active: 'نشط',
      inactive: 'غير نشط',
      suspended: 'موقوف'
    };
    return <Badge className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const getPlanBadge = (plan: string) => {
    const styles = {
      Free: 'bg-gray-100 text-gray-800',
      Premium: 'bg-blue-100 text-blue-800',
      Business: 'bg-purple-100 text-purple-800'
    };
    return <Badge className={styles[plan as keyof typeof styles]}>{plan}</Badge>;
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة المستخدمين</h1>
          <p className="text-gray-600 mt-1">مراقبة وإدارة حسابات المستخدمين</p>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change} من الشهر الماضي</p>
                  </div>
                  <div className="h-12 w-12 bg-fileflow-blue/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-fileflow-blue" />
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
                  placeholder="البحث عن مستخدم..."
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
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
                <option value="suspended">موقوف</option>
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 ml-2" />
                مرشحات متقدمة
              </Button>
              <Button>
                <Download className="h-4 w-4 ml-2" />
                تصدير
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* جدول المستخدمين */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة المستخدمين ({filteredUsers.length})</CardTitle>
            <CardDescription>
              إدارة شاملة لحسابات المستخدمين
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-4">المستخدم</th>
                    <th className="text-center p-4">الخطة</th>
                    <th className="text-center p-4">الحالة</th>
                    <th className="text-center p-4">التخزين</th>
                    <th className="text-center p-4">الملفات</th>
                    <th className="text-center p-4">آخر نشاط</th>
                    <th className="text-center p-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-xs text-gray-400">انضم في {user.joinDate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        {getPlanBadge(user.plan)}
                      </td>
                      <td className="text-center p-4">
                        {getStatusBadge(user.status)}
                      </td>
                      <td className="text-center p-4">
                        <div>
                          <span className="text-sm font-medium">
                            {user.storage.used} GB / {user.storage.total} GB
                          </span>
                          <div className="w-20 h-1 bg-gray-200 rounded-full mx-auto mt-1">
                            <div 
                              className="h-full bg-fileflow-blue rounded-full"
                              style={{ width: `${(user.storage.used / user.storage.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <span className="font-medium">{user.files.toLocaleString()}</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-sm text-gray-500">{user.lastActive}</span>
                      </td>
                      <td className="text-center p-4">
                        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
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

export default Users;
