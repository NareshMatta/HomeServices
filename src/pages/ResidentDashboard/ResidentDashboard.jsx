import React, { useState } from "react";
import {
  Home,
  FileText,
  Users,
  Bell,
  User,
  CreditCard,
  AlertCircle,
  Menu,
  X,
  ChevronRight,
  Clock,
  CheckCircle,
  Calendar,
  TrendingUp,
} from "lucide-react";

function ResidentDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-2xl z-40">
        <div className="p-6 border-b border-indigo-500/30">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            My Community
          </h2>
          <p className="text-indigo-200 text-xs mt-1">Resident Portal</p>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" active />
          <SidebarItem icon={<CreditCard size={20} />} label="Maintenance" />
          <SidebarItem icon={<Users size={20} />} label="Visitors" />
          <SidebarItem icon={<AlertCircle size={20} />} label="Complaints" />
          <SidebarItem icon={<Bell size={20} />} label="Notifications" />
          <SidebarItem icon={<User size={20} />} label="Profile" />
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-xs text-indigo-200 mb-1">Quick Support</p>
            <p className="text-sm font-medium text-white">+91 98765 43210</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Community
          </h2>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-indigo-50 text-indigo-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-gradient-to-b from-indigo-600 to-purple-700 z-40 p-6 overflow-y-auto">
          <nav className="space-y-2">
            <SidebarItem icon={<Home size={20} />} label="Dashboard" active mobile />
            <SidebarItem icon={<CreditCard size={20} />} label="Maintenance" mobile />
            <SidebarItem icon={<Users size={20} />} label="Visitors" mobile />
            <SidebarItem icon={<AlertCircle size={20} />} label="Complaints" mobile />
            <SidebarItem icon={<Bell size={20} />} label="Notifications" mobile />
            <SidebarItem icon={<User size={20} />} label="Profile" mobile />
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-72 pt-20 lg:pt-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">

        {/* Top Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6 lg:p-8 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome Back 👋
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium">
                  Flat B-301
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 text-sm">Tower B</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button className="relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 hover:shadow-lg transition-all">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          
          {/* Card 1 - Pending Bills */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-medium mb-2">Pending Bills</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">₹4,200</h3>
                  <p className="text-white/70 text-xs mt-2">Due on June 20th</p>
                </div>
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <CreditCard className="text-white" size={24} />
                </div>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all text-sm font-medium">
                Pay Now
              </button>
            </div>
          </div>

          {/* Card 2 - Visitors Today */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-medium mb-2">Visitors Today</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">2</h3>
                  <p className="text-white/70 text-xs mt-2">1 pending approval</p>
                </div>
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all text-sm font-medium">
                View Visitors
              </button>
            </div>
          </div>

          {/* Card 3 - Entry Pass */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-white/80 text-sm font-medium mb-2">Entry Pass</p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">Active</h3>
                  <p className="text-white/70 text-xs mt-2">Valid till Dec 2026</p>
                </div>
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <CheckCircle className="text-white" size={24} />
                </div>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all text-sm font-medium">
                View Pass
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Recent Activity - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                Recent Activity
              </h2>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                View All
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <ActivityItem
                icon={<CreditCard className="text-rose-500" size={20} />}
                title="Maintenance Bill Generated"
                description="June bill ₹4,200 due on 20th"
                time="2 days ago"
                bgColor="from-rose-50 to-pink-50"
                borderColor="border-rose-100"
              />
              <ActivityItem
                icon={<CheckCircle className="text-emerald-500" size={20} />}
                title="Visitor Approved"
                description="Lisa Wang approved for 4 PM"
                time="Yesterday"
                bgColor="from-emerald-50 to-teal-50"
                borderColor="border-emerald-100"
              />
              <ActivityItem
                icon={<Calendar className="text-indigo-500" size={20} />}
                title="Entry Pass Renewed"
                description="Valid for 6 months"
                time="1 week ago"
                bgColor="from-indigo-50 to-purple-50"
                borderColor="border-indigo-100"
              />
              <ActivityItem
                icon={<AlertCircle className="text-amber-500" size={20} />}
                title="Complaint Resolved"
                description="Water supply issue fixed"
                time="2 weeks ago"
                bgColor="from-amber-50 to-yellow-50"
                borderColor="border-amber-100"
              />
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <QuickActionButton 
                  icon={<CreditCard size={18} />}
                  label="Pay Bills"
                  color="from-rose-500 to-pink-600"
                />
                <QuickActionButton 
                  icon={<Users size={18} />}
                  label="Add Visitor"
                  color="from-emerald-500 to-teal-600"
                />
                <QuickActionButton 
                  icon={<AlertCircle size={18} />}
                  label="Raise Complaint"
                  color="from-amber-500 to-orange-600"
                />
                <QuickActionButton 
                  icon={<FileText size={18} />}
                  label="View Documents"
                  color="from-indigo-500 to-purple-600"
                />
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-white" size={20} />
                <h3 className="text-lg font-bold">Upcoming Events</h3>
              </div>
              
              <div className="space-y-3">
                <EventItem 
                  title="Community Meet"
                  date="Feb 18, 2026"
                  time="6:00 PM"
                />
                <EventItem 
                  title="Holi Celebration"
                  date="Mar 14, 2026"
                  time="10:00 AM"
                />
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-all text-sm font-medium">
                View Calendar
              </button>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-slate-100 to-indigo-100 rounded-2xl shadow-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Need Help?</h3>
              <p className="text-slate-600 text-sm mb-4">Contact support for any assistance</p>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active, mobile }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active 
          ? "bg-white/10 backdrop-blur-sm text-white font-medium" 
          : "text-indigo-100 hover:bg-white/10"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* Activity Item */
function ActivityItem({ icon, title, description, time, bgColor, borderColor }) {
  return (
    <div className={`p-4 bg-gradient-to-r ${bgColor} rounded-xl border ${borderColor} hover:shadow-md transition-all`}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-800 mb-1">{title}</h4>
          <p className="text-sm text-slate-600 mb-2">{description}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock size={12} />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Quick Action Button */
function QuickActionButton({ icon, label, color }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${color} text-white rounded-xl hover:shadow-lg transition-all font-medium text-sm`}>
      {icon}
      <span>{label}</span>
      <ChevronRight size={16} className="ml-auto" />
    </button>
  );
}

/* Event Item */
function EventItem({ title, date, time }) {
  return (
    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
      <h4 className="font-semibold text-white text-sm">{title}</h4>
      <p className="text-indigo-100 text-xs mt-1">{date} • {time}</p>
    </div>
  );
}

export default ResidentDashboard;