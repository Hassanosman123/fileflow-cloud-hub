
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <Cloud className="h-8 w-8 text-fileflow-blue" />
            <span className="text-2xl font-bold gradient-text">FileFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#features" className="text-gray-600 hover:text-fileflow-blue transition-colors">المزايا</a>
            <a href="#pricing" className="text-gray-600 hover:text-fileflow-blue transition-colors">الأسعار</a>
            <a href="#about" className="text-gray-600 hover:text-fileflow-blue transition-colors">من نحن</a>
            <a href="#contact" className="text-gray-600 hover:text-fileflow-blue transition-colors">اتصل بنا</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-fileflow-blue">
                تسجيل الدخول
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-fileflow-blue hover:bg-fileflow-darkBlue text-white">
                إنشاء حساب
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-fileflow-blue">المزايا</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-fileflow-blue">الأسعار</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-fileflow-blue">من نحن</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-fileflow-blue">اتصل بنا</a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">تسجيل الدخول</Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-fileflow-blue hover:bg-fileflow-darkBlue text-white">إنشاء حساب</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
