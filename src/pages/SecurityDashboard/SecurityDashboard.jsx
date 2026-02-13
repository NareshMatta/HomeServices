import { useState } from "react";
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  UserPlus,
  Shield,
  Eye,
  Home,
  TrendingUp,
  Search,
  Bell,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

function SecurityDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    flat: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addVisitor = (e) => {
    e.preventDefault();

    const newVisitor = {
      ...formData,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      status: "Pending",
      id: Date.now(),
    };

    setVisitors([newVisitor, ...visitors]);

    setFormData({
      name: "",
      flat: "",
      purpose: "",
    });
  };

  const approveVisitor = (id) => {
    setVisitors(
      visitors.map((v) =>
        v.id === id ? { ...v, status: "Approved" } : v
      )
    );
  };

  const rejectVisitor = (id) => {
    setVisitors(
      visitors.map((v) =>
        v.id === id ? { ...v, status: "Rejected" } : v
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 text-white shadow-2xl z-40">
        <div className="p-6 border-b border-slate-600/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Shield size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                SecureGate
              </h2>
              <p className="text-slate-400 text-xs">Security Control</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/20">
            <TrendingUp size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 transition-all">
            <Users size={20} />
            <span>All Visitors</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 transition-all">
            <Clock size={20} />
            <span>Entry Logs</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 transition-all">
            <AlertTriangle size={20} />
            <span>Alerts</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 transition-all">
            <Home size={20} />
            <span>Residents</span>
          </a>
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-400/30">
            <p className="text-xs text-slate-300 mb-1">Emergency Contact</p>
            <p className="text-sm font-bold text-white">100 (Police)</p>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500 rounded-lg">
              <Shield size={20} className="text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-slate-700 to-indigo-600 bg-clip-text text-transparent">
              SecureGate
            </h2>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-50 text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-gradient-to-b from-slate-700 to-slate-900 z-40 p-6 overflow-y-auto">
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium">
              <TrendingUp size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10">
              <Users size={20} />
              <span>All Visitors</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10">
              <Clock size={20} />
              <span>Entry Logs</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10">
              <AlertTriangle size={20} />
              <span>Alerts</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10">
              <Home size={20} />
              <span>Residents</span>
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-72 pt-20 lg:pt-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">

        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-slate-200 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Security Dashboard
              </h1>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Monitor and manage visitor access in real-time
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 sm:p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all">
                <Search size={20} />
              </button>
              <button className="relative p-2 sm:p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          
          {/* Card 1 - Total Visitors */}
          <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="text-white" size={24} />
              </div>
              <Eye className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Total Visitors</h3>
            <p className="text-4xl font-bold text-white">{visitors.length}</p>
            <p className="text-white/70 text-xs mt-2">Today's entries</p>
          </div>

          {/* Card 2 - Pending Approvals */}
          <div className="group bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Clock className="text-white" size={24} />
              </div>
              <Eye className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Pending Approvals</h3>
            <p className="text-4xl font-bold text-white">
              {visitors.filter((v) => v.status === "Pending").length}
            </p>
            <p className="text-white/70 text-xs mt-2">Awaiting verification</p>
          </div>

          {/* Card 3 - Today Entries */}
          <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <CheckCircle className="text-white" size={24} />
              </div>
              <Eye className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Approved Today</h3>
            <p className="text-4xl font-bold text-white">
              {visitors.filter((v) => v.status === "Approved").length}
            </p>
            <p className="text-white/70 text-xs mt-2">Successfully verified</p>
          </div>

          {/* Card 4 - Emergency Alerts */}
          <div className="group bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <Eye className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Emergency Alerts</h3>
            <p className="text-4xl font-bold text-white">0</p>
            <p className="text-white/70 text-xs mt-2">All clear</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Visitor Entry Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <UserPlus className="text-white" size={24} />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                Add Visitor Entry
              </h2>
            </div>

            <form onSubmit={addVisitor} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Visitor Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter visitor's full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Flat Number
                </label>
                <input
                  type="text"
                  name="flat"
                  placeholder="e.g., A-502, B-301"
                  value={formData.flat}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Purpose of Visit
                </label>
                <input
                  type="text"
                  name="purpose"
                  placeholder="e.g., Personal visit, Delivery, Maintenance"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold text-base flex items-center justify-center gap-2"
              >
                <UserPlus size={20} />
                Add Visitor Entry
              </button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> All entries require resident approval before granting access.
              </p>
            </div>
          </div>

          {/* Visitor List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <Users className="text-white" size={24} />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Recent Visitors
                </h2>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                View All
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[600px] pr-2" style={{ scrollbarWidth: 'thin' }}>
              {visitors.length === 0 ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-4">
                    <Users className="text-slate-400" size={32} />
                  </div>
                  <p className="text-slate-500 font-medium">No visitors recorded yet</p>
                  <p className="text-slate-400 text-sm mt-1">Add a visitor entry to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {visitors.map((visitor) => (
                    <div
                      key={visitor.id}
                      className="p-5 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-slate-800 text-lg">{visitor.name}</h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                visitor.status === "Approved"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : visitor.status === "Rejected"
                                  ? "bg-rose-100 text-rose-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {visitor.status}
                            </span>
                          </div>
                          
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Home size={14} />
                              <span className="font-medium">Flat {visitor.flat}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Eye size={14} />
                              <span>{visitor.purpose}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Clock size={12} />
                              <span>{visitor.date} at {visitor.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {visitor.status === "Pending" && (
                        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200">
                          <button
                            onClick={() => approveVisitor(visitor.id)}
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2.5 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          >
                            <CheckCircle size={16} />
                            Approve
                          </button>
                          <button
                            onClick={() => rejectVisitor(visitor.id)}
                            className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-4 py-2.5 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          >
                            <X size={16} />
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityDashboard;