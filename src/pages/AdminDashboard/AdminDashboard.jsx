import { useState } from "react";
import { Menu, X, Bell, Search, Users, CreditCard, Eye, TrendingUp, ChevronDown } from "lucide-react";

function AdminDashboard() {
  const [residents] = useState(248);
  const [pendingPayments] = useState(42500);
  const [visitors] = useState(18);
  const [revenue] = useState("2.8L");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [visitorRequests, setVisitorRequests] = useState([
    { id: 1, name: "David Miller", flat: "A-502", status: "Pending", time: "10:30 AM" },
    { id: 2, name: "Lisa Wang", flat: "B-301", status: "Pending", time: "11:15 AM" },
    { id: 3, name: "James Chen", flat: "C-205", status: "Approved", time: "09:45 AM" },
  ]);

  const approveVisitor = (id) => {
    setVisitorRequests(
      visitorRequests.map((v) =>
        v.id === id ? { ...v, status: "Approved" } : v
      )
    );
  };

  const rejectVisitor = (id) => {
    setVisitorRequests(
      visitorRequests.map((v) =>
        v.id === id ? { ...v, status: "Rejected" } : v
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-2xl z-40">
        <div className="p-6 border-b border-indigo-500/30">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            CommunityPro
          </h2>
          <p className="text-indigo-200 text-xs mt-1">Admin Portal</p>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/20">
            <TrendingUp size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10 transition-all">
            <Users size={20} />
            <span>Residents</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10 transition-all">
            <CreditCard size={20} />
            <span>Maintenance</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10 transition-all">
            <Eye size={20} />
            <span>Visitors</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10 transition-all">
            <Bell size={20} />
            <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10 transition-all">
            <Search size={20} />
            <span>Settings</span>
          </a>
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <button className="w-full px-4 py-3 rounded-xl bg-red-500/20 text-red-200 hover:bg-red-500/30 transition-all font-medium">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CommunityPro
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
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium">
              <TrendingUp size={20} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10">
              <Users size={20} />
              <span>Residents</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10">
              <CreditCard size={20} />
              <span>Maintenance</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10">
              <Eye size={20} />
              <span>Visitors</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10">
              <Bell size={20} />
              <span>Notifications</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/10">
              <Search size={20} />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-72 pt-20 lg:pt-0 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">

        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-indigo-100 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Welcome back! Here's today's overview.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 sm:p-3 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all">
                <Bell size={20} />
              </button>
              <button className="p-2 sm:p-3 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-all">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          
          {/* Card 1 - Residents */}
          <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="text-white" size={24} />
              </div>
              <ChevronDown className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Total Residents</h3>
            <p className="text-4xl font-bold text-white">{residents}</p>
            <p className="text-white/70 text-xs mt-2">↑ 12% from last month</p>
          </div>

          {/* Card 2 - Pending Payments */}
          <div className="group bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <CreditCard className="text-white" size={24} />
              </div>
              <ChevronDown className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Pending Payments</h3>
            <p className="text-4xl font-bold text-white">₹{pendingPayments.toLocaleString()}</p>
            <p className="text-white/70 text-xs mt-2">23 pending invoices</p>
          </div>

          {/* Card 3 - Visitors */}
          <div className="group bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Eye className="text-white" size={24} />
              </div>
              <ChevronDown className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Visitors Today</h3>
            <p className="text-4xl font-bold text-white">{visitors}</p>
            <p className="text-white/70 text-xs mt-2">2 pending approvals</p>
          </div>

          {/* Card 4 - Revenue */}
          <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <TrendingUp className="text-white" size={24} />
              </div>
              <ChevronDown className="text-white/60 group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-white/80 text-sm font-medium mb-1">Monthly Revenue</h3>
            <p className="text-4xl font-bold text-white">₹{revenue}</p>
            <p className="text-white/70 text-xs mt-2">↑ 8% from last month</p>
          </div>
        </div>

        {/* Visitor Approvals */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6 lg:p-8 mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
              Visitor Approvals
            </h2>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all text-sm font-medium w-full sm:w-auto">
              View All Requests
            </button>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden space-y-4">
            {visitorRequests.map((visitor) => (
              <div key={visitor.id} className="bg-gradient-to-br from-slate-50 to-indigo-50 p-4 rounded-xl border border-indigo-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-800">{visitor.name}</h3>
                    <p className="text-sm text-slate-600">Flat {visitor.flat}</p>
                    <p className="text-xs text-slate-500 mt-1">{visitor.time}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                {visitor.status === "Pending" && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => approveVisitor(visitor.id)}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg transition-all font-medium text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectVisitor(visitor.id)}
                      className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all font-medium text-sm"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-indigo-100">
                  <th className="text-left p-4 text-slate-600 font-semibold">Visitor Name</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Flat</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Time</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Status</th>
                  <th className="text-left p-4 text-slate-600 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visitorRequests.map((visitor) => (
                  <tr key={visitor.id} className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all">
                    <td className="p-4 font-medium text-slate-800">{visitor.name}</td>
                    <td className="p-4 text-slate-600">{visitor.flat}</td>
                    <td className="p-4 text-slate-600 text-sm">{visitor.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                          visitor.status === "Approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : visitor.status === "Rejected"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {visitor.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {visitor.status === "Pending" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveVisitor(visitor.id)}
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectVisitor(visitor.id)}
                            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-5 py-2 rounded-lg transition-all font-medium text-sm shadow-md hover:shadow-lg"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6">
            Recent Notifications
          </h2>

          <div className="space-y-3">
            <div className="p-4 lg:p-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-500 rounded-lg">
                  <CreditCard className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 font-medium">₹4,200 received from B-301</p>
                  <p className="text-slate-500 text-xs mt-1">2 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <Eye className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 font-medium">Visitor approved for A-502</p>
                  <p className="text-slate-500 text-xs mt-1">4 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-500 rounded-lg">
                  <Bell className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 font-medium">15 residents have overdue payments</p>
                  <p className="text-slate-500 text-xs mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;