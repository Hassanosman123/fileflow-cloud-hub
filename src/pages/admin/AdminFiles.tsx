
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Files as FilesIcon, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  Eye,
  AlertTriangle,
  HardDrive,
  Upload,
  FileText,
  Image,
  Video,
  Archive
} from 'lucide-react';
import AdminLayout from '@/components/layouts/AdminLayout';

const AdminFiles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const files = [
    {
      id: 1,
      name: 'مشروع_العميل_ABC.pdf',
      size: '15.2 MB',
      type: 'document',
      owner: 'أحمد محمد',
      uploadDate: '2024-01-20',
      downloads: 45,
      shares: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'صور_المؤتمر_2024.zip',
      size: '124.7 MB',
      type: 'archive',
      owner: 'فاطمة أحمد',
      uploadDate: '2024-01-19',
      downloads: 8,
      shares: 3,
      status: 'flagged'
    },
    {
      id: 3,
      name: 'فيديو_تدريبي.mp4',
      size: '256.3 MB',
      type: 'video',
      owner: 'محمد علي',
      uploadDate: '2024-01-18',
      downloads: 123,
      shares: 28,
      status: 'active'
    },
    {
      id: 4,
      name: 'تقرير_مالي_Q1.xlsx',
      size: '3.4 MB',
      type: 'document',
      owner: 'سارة خالد',
      uploadDate: '2024-01-17',
      downloads: 67,
      shares: 15,
      status: 'active'
    }
  ];

  const stats = [
    { title: 'إجمالي الملفات', value: '1.2M', change: '+8%', icon: FilesIcon },
    { title: 'التخزين المستخدم', value: '15.6 TB', change: '+12%', icon: HardDrive },
    { title: 'ملفات مرفوعة اليوم', value: '2,456', change: '+15%', icon: Upload },
    { title: 'ملفات مشبوهة', value: '23', change: '-5%', icon: AlertTriangle }
  ];

  const getFileIcon = (type: string) => {
    const icons = {
      document: FileText,
      image: Image,
      video: Video,
      archive: Archive
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      flagged: 'bg-red-100 text-red-800',
      suspended: 'bg-yellow-100 text-yellow-800'
    };
    const labels = {
      active: 'نشط',
      flagged: 'مشبوه',
      suspended: 'موقوف'
    };
    return <Badge className={styles[status as keyof typeof styles]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      document: 'text-blue-600 bg-blue-50',
      image: 'text-green-600 bg-green-50',
      video: 'text-purple-600 bg-purple-50',
      archive: 'text-orange-600 bg-orange-50'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || file.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الملفات</h1>
          <p className="text-gray-600 mt-1">مراقبة ومراجعة جميع الملفات المرفوعة</p>
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

        {/* إحصائيات التخزين */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>استخدام التخزين</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>المستخدم: 15.6 TB</span>
                  <span>المتاح: 34.4 TB</span>
                </div>
                <Progress value={31.2} className="h-3" />
                <div className="text-center text-sm text-gray-500">
                  31.2% من إجمالي 50 TB
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>توزيع أنواع الملفات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 text-blue-600 ml-2" />
                    المستندات
                  </span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Image className="h-4 w-4 text-green-600 ml-2" />
                    الصور
                  </span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Video className="h-4 w-4 text-purple-600 ml-2" />
                    الفيديوهات
                  </span>
                  <span className="font-medium">20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Archive className="h-4 w-4 text-orange-600 ml-2" />
                    الأرشيف
                  </span>
                  <span className="font-medium">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* فلاتر البحث */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث في الملفات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
              <select 
                className="p-2 border rounded-md"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">جميع الأنواع</option>
                <option value="document">المستندات</option>
                <option value="image">الصور</option>
                <option value="video">الفيديوهات</option>
                <option value="archive">الأرشيف</option>
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

        {/* جدول الملفات */}
        <Card>
          <CardHeader>
            <CardTitle>الملفات المرفوعة ({filteredFiles.length})</CardTitle>
            <CardDescription>
              مراجعة وإدارة جميع الملفات في النظام
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right p-4">الملف</th>
                    <th className="text-center p-4">المالك</th>
                    <th className="text-center p-4">الحجم</th>
                    <th className="text-center p-4">النوع</th>
                    <th className="text-center p-4">تاريخ الرفع</th>
                    <th className="text-center p-4">التحميلات</th>
                    <th className="text-center p-4">الحالة</th>
                    <th className="text-center p-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <tr key={file.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${getTypeColor(file.type)}`}>
                              <FileIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{file.name}</p>
                              <p className="text-xs text-gray-500">{file.shares} مشاركة</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-sm">{file.owner}</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-sm font-mono">{file.size}</span>
                        </td>
                        <td className="text-center p-4">
                          <Badge variant="outline">{file.type}</Badge>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-sm text-gray-500">{file.uploadDate}</span>
                        </td>
                        <td className="text-center p-4">
                          <span className="text-sm font-medium">{file.downloads}</span>
                        </td>
                        <td className="text-center p-4">
                          {getStatusBadge(file.status)}
                        </td>
                        <td className="text-center p-4">
                          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminFiles;
