
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { 
  Upload as UploadIcon, 
  X, 
  FileText, 
  Image, 
  Video, 
  File, 
  CheckCircle,
  AlertCircle,
  Cloud
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setSelectedFiles(e.dataTransfer.files);
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')) return Image;
    if (['mp4', 'avi', 'mov', 'wmv'].includes(extension || '')) return Video;
    if (['pdf', 'doc', 'docx', 'txt'].includes(extension || '')) return FileText;
    return File;
  };

  const simulateUpload = () => {
    if (!selectedFiles) return;
    
    setUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          const fileNames = Array.from(selectedFiles).map(file => file.name);
          setUploadedFiles(prev => [...prev, ...fileNames]);
          setSelectedFiles(null);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeFile = (index: number) => {
    if (!selectedFiles) return;
    const dt = new DataTransfer();
    Array.from(selectedFiles).forEach((file, i) => {
      if (i !== index) dt.items.add(file);
    });
    setSelectedFiles(dt.files);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 rtl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">رفع الملفات</h1>
          <p className="text-gray-600 mt-1">ارفع ملفاتك إلى السحابة بسهولة</p>
        </div>

        {/* منطقة رفع الملفات */}
        <Card className="border-2 border-dashed border-gray-300 hover:border-fileflow-blue transition-colors">
          <CardContent 
            className="p-12 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <UploadIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">اسحب الملفات هنا للرفع</h3>
            <p className="text-gray-500 mb-4">أو انقر لاختيار الملفات من جهازك</p>
            <p className="text-sm text-gray-400 mb-4">الحد الأقصى: 100 ميجا لكل ملف</p>
            <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue">
              اختيار الملفات
            </Button>
            <Input
              id="fileInput"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
          </CardContent>
        </Card>

        {/* الملفات المحددة */}
        {selectedFiles && selectedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>الملفات المحددة ({selectedFiles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Array.from(selectedFiles).map((file, index) => {
                  const FileIcon = getFileIcon(file.name);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <FileIcon className="h-8 w-8 text-fileflow-blue" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} ميجا</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
              
              {uploading && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">جاري الرفع...</span>
                    <span className="text-sm text-gray-500">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
              
              <div className="mt-4 flex space-x-3 rtl:space-x-reverse">
                <Button 
                  onClick={simulateUpload}
                  disabled={uploading}
                  className="bg-fileflow-blue hover:bg-fileflow-darkBlue"
                >
                  <Cloud className="h-4 w-4 ml-2" />
                  رفع الملفات
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedFiles(null)}
                  disabled={uploading}
                >
                  إلغاء
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* الملفات المرفوعة */}
        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                تم رفع الملفات بنجاح
              </CardTitle>
              <CardDescription>
                تم رفع {uploadedFiles.length} ملف بنجاح
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {uploadedFiles.map((fileName, index) => (
                  <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{fileName}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* معلومات إضافية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-1">المستندات</h3>
              <p className="text-sm text-gray-500">PDF, DOC, TXT</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Image className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-1">الصور</h3>
              <p className="text-sm text-gray-500">JPG, PNG, GIF</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Video className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-medium text-gray-900 mb-1">الفيديوهات</h3>
              <p className="text-sm text-gray-500">MP4, AVI, MOV</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
