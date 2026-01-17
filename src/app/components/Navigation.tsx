import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl text-blue-900">TeamWorks</h2>
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-900 transition-colors">Courses</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-900 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors">Success Stories</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-700 hover:text-blue-900 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-900 text-white px-6 py-2.5 rounded hover:bg-blue-800 transition-colors">
              Enroll Now
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
