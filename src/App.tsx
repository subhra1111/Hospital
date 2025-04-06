import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Users, Calendar, Pill, FlaskRound as Flask, Receipt, BarChart3, Shield, Menu, X, Bell, Search, UserCircle, AlertCircle } from 'lucide-react';

// Import pages
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Staff from './pages/Staff';
import Inventory from './pages/Inventory';
import Laboratory from './pages/Laboratory';
import Billing from './pages/Billing';
import Reports from './pages/Reports';
import Security from './pages/Security';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/dashboard');
  
  const menuItems: MenuItem[] = [
    { icon: Users, label: 'Patient Management', path: '/patients' },
    { icon: Calendar, label: 'Staff & Doctors', path: '/staff' },
    { icon: Pill, label: 'Inventory & Pharmacy', path: '/inventory' },
    { icon: Flask, label: 'Laboratory', path: '/laboratory' },
    { icon: Receipt, label: 'Billing', path: '/billing' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Shield, label: 'Security', path: '/security' },
  ];

  const handleNavigation = (path: string) => {
    setActivePath(path);
    navigate(path);
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      } lg:w-64 z-50`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => handleNavigation('/dashboard')}>IHMS</h1>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              activePath === item.path ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon size={20} className="mr-3" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const NotificationsPanel = ({ notifications, onClose }: { notifications: Notification[]; onClose: () => void }) => (
  <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Notifications</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={16} />
        </button>
      </div>
    </div>
    <div className="max-h-96 overflow-y-auto">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 border-b last:border-b-0 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
        >
          <div className="flex items-start">
            <AlertCircle className="text-blue-600 mt-1" size={16} />
            <div className="ml-3">
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New Patient Registration',
      message: 'Patient John Doe has completed registration',
      time: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'Lab Results Ready',
      message: 'Blood test results for Patient ID #12345 are ready',
      time: '10 minutes ago',
      read: false,
    },
    {
      id: 3,
      title: 'Appointment Reminder',
      message: 'You have 5 appointments scheduled for today',
      time: '1 hour ago',
      read: true,
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }
  };

  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className={`lg:ml-64 min-h-screen`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center flex-1 px-4">
              <form onSubmit={handleSearch} className="max-w-xl w-full relative">
                <input
                  type="text"
                  placeholder="Search patients, doctors, or records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </form>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="text-gray-500 hover:text-gray-700 relative"
                >
                  <Bell size={24} />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <NotificationsPanel
                    notifications={notifications}
                    onClose={() => setShowNotifications(false)}
                  />
                )}
              </div>
              <button 
                onClick={() => navigate('/security')}
                className="text-gray-500 hover:text-gray-700"
              >
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;