
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Upload, 
  Folder, 
  File, 
  Image, 
  Video, 
  FileText,
  Download,
  Share,
  Trash2,
  MoreVertical,
  Eye,
  Edit
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Files = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const folders = [
    { name: 'المستندات', count: 24, icon: Folder },
    { name: 'الصور', count: 156, icon: Folder },
    { name: 'الفيديوهات', count: 12, icon: Folder },
    { name: 'المشاريع', count: 8, icon: Folder },
  ];

  const files = [
    { 
      name: 'تقرير_المشروع.pdf', 
      size: '2.4 MB', 
      date: '2024-01-15', 
      type: 'pdf',
      icon: FileText,
      thumbnail: null
    },
    { 
      name: 'صورة_الشعار.png', 
      size: '1.8 MB', 
      date: '2024-01-14', 
      type: 'image',
      icon: Image,
      thumbnail: '/placeholder.svg'
    },
    { 
      name: 'عرض_تقديمي.pptx', 
      size: '15.2 MB', 
      date: '2024-01-13', 
      type: 'presentation',
      icon: FileText,
      thumbnail: null
    },
    { 
      name: 'فيديو_شرح.mp4', 
      size: '125 MB', 
      date: '2024-01-12', 
      type: 'video',
      icon: Video,
      thumbnail: null
    },
    { 
      name: 'جدول_البيانات.xlsx', 
      size: '856 KB', 
      date: '2024-01-11', 
      type: 'spreadsheet',
      icon: FileText,
      thumbnail: null
    },
    { 
      name: 'ملاحظات_الاجتماع.docx', 
      size: '1.2 MB', 
      date: '2024-01-10', 
      type: 'document',
      icon: FileText,
      thumbnail: null
    },
  ];

  const getFileTypeColor = (type: string) => {
    const colors = {
      pdf: 'text-red-600 bg-red-50',
      image: 'text-green-600 bg-green-50',
      video: 'text-purple-600 bg-purple-50',
      document: 'text-blue-600 bg-blue-50',
      spreadsheet: 'text-orange-600 bg-orange-50',
      presentation: 'text-indigo-600 bg-indigo-50',
    };
    return colors[type as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  const renderGridView = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* المجلدات */}
      {folders.map((folder, index) => (
        <Card key={`folder-${index}`} className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="h-16 w-16 mx-auto mb-3 bg-fileflow-blue/10 rounded-lg flex items-center justify-center">
              <Folder className="h-8 w-8 text-fileflow-blue" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm truncate">{folder.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{folder.count} ملف</p>
          </CardContent>
        </Card>
      ))}

      {/* الملفات */}
      {files.map((file, index) => (
        <Card key={`file-${index}`} className="cursor-pointer hover:shadow-md transition-shadow group">
          <CardContent className="p-4 text-center relative">
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreVertical className="h-3 w-3" />
              </Button>
            </div>
            
            <div className={`h-16 w-16 mx-auto mb-3 rounded-lg flex items-center justify-center ${getFileTypeColor(file.type)}`}>
              {file.thumbnail ? (
                <img src={file.thumbnail} alt={file.name} className="h-full w-full object-cover rounded-lg" />
              ) : (
                <file.icon className="h-8 w-8" />
              )}
            </div>
            <h3 className="font-medium text-gray-900 text-sm truncate">{file.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{file.size}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-12 gap-4 p-4 border-b font-medium text-gray-700 text-sm">
        <div className="col-span-6">الاسم</div>
        <div className="col-span-2">الحجم</div>
        <div className="col-span-2">التاريخ</div>
        <div className="col-span-2">الإجراءات</div>
      </div>

      {/* المجلدات */}
      {folders.map((folder, index) => (
        <div key={`folder-${index}`} className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 items-center">
          <div className="col-span-6 flex items-center space-x-3 rtl:space-x-reverse">
            <Folder className="h-5 w-5 text-fileflow-blue" />
            <span className="font-medium">{folder.name}</span>
          </div>
          <div className="col-span-2 text-sm text-gray-500">-</div>
          <div className="col-span-2 text-sm text-gray-500">-</div>
          <div className="col-span-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}

      {/* الملفات */}
      {files.map((file, index) => (
        <div key={`file-${index}`} className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 items-center">
          <div className="col-span-6 flex items-center space-x-3 rtl:space-x-reverse">
            <div className={`h-8 w-8 rounded flex items-center justify-center ${getFileTypeColor(file.type)}`}>
              <file.icon className="h-4 w-4" />
            </div>
            <span className="font-medium">{file.name}</span>
          </div>
          <div className="col-span-2 text-sm text-gray-500">{file.size}</div>
          <div className="col-span-2 text-sm text-gray-500">{file.date}</div>
          <div className="col-span-2 flex items-center space-x-1 rtl:space-x-reverse">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        {/* العنوان والإجراءات */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">ملفاتي</h1>
            <p className="text-gray-600 mt-1">إدارة وتنظيم ملفاتك</p>
          </div>
          <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
            <Upload className="h-4 w-4 ml-2" />
            رفع ملف جديد
          </Button>
        </div>

        {/* شريط البحث والفلاتر */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="البحث في الملفات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 ml-2" />
            فلتر
          </Button>
          <div className="flex items-center border rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-l-none border-0"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-r-none border-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* المحتوى */}
        <div className="min-h-96">
          {viewMode === 'grid' ? renderGridView() : renderListView()}
        </div>

        {/* منطقة الرفع */}
        <Card className="border-2 border-dashed border-gray-300 hover:border-fileflow-blue transition-colors">
          <CardContent className="p-12 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">اسحب الملفات هنا للرفع</h3>
            <p className="text-gray-500 mb-4">أو انقر لاختيار الملفات من جهازك</p>
            <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
              اختيار الملفات
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Files;
