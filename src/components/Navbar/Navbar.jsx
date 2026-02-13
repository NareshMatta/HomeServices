import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Bell,
  CreditCard,
  Menu,
  X,
  Home,
  Settings,
  ChevronDown,
  LogIn,
  UserPlus,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
                <ShieldCheck size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Community<span className="text-indigo-600">Pro</span>
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">Smart Living Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink icon={<Home size={18} />} label="Home" />
            <NavLink icon={<Users size={18} />} label="Residents" />
            <NavLink icon={<ShieldCheck size={18} />} label="Security" />
            {/* <NavLink icon={<Bell size={18} />} label="Notifications" badge="3" /> */}
            <NavLink icon={<CreditCard size={18} />} label="Maintenance" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/signin"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap"
            >
              <LogIn size={18} className="group-hover:translate-x-0.5 transition-transform" />
              Sign In
            </Link>

            <Link
              to="/signup"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all whitespace-nowrap"
            >
              <UserPlus size={18} />
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 hover:from-indigo-100 hover:to-purple-100 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-indigo-100">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">

            <MobileNavLink
              icon={<Home size={20} />}
              label="Home"
              onClick={() => setIsOpen(false)}
            />

            <MobileNavLink
              icon={<Users size={20} />}
              label="Residents"
              onClick={() => setIsOpen(false)}
            />

            <MobileNavLink
              icon={<ShieldCheck size={20} />}
              label="Security"
              onClick={() => setIsOpen(false)}
            />

            {/* <MobileNavLink
              icon={<Bell size={20} />}
              label="Notifications"
              badge="3"
              onClick={() => setIsOpen(false)}
            /> */}

            <MobileNavLink
              icon={<CreditCard size={20} />}
              label="Maintenance"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Auth Buttons */}
            <div className="pt-6 mt-6 border-t border-indigo-100 flex flex-col gap-3">
              <Link
                to="/signin"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={18} />
                Sign In
              </Link>

              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus size={18} />
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ icon, label, badge }) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 cursor-pointer transition-all">
        {icon}
        <span>{label}</span>
        {badge && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
            {badge}
          </span>
        )}
      </div>
      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
    </div>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ icon, label, badge, onClick }) {
  return (
    <div
      className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 cursor-pointer transition-all group"
      onClick={onClick}
    >
      <div className="p-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg group-hover:from-indigo-100 group-hover:to-purple-100 transition-all">
        {icon}
      </div>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
          {badge}
        </span>
      )}
    </div>
  );
}

export default Navbar;