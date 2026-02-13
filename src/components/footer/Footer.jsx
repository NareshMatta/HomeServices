import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Home,
  Shield,
  Users,
  Clock,
  ChevronRight,
  Heart,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=100')",
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-slate-900"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Shield size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                CommunityPro
              </h2>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Experience safe and secure living with 24/7 surveillance,
              smart access control, and premium residential comfort.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs">
                <Clock size={12} />
                <span>24/7 Security</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs">
                <Users size={12} />
                <span>248 Residents</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Home size={18} className="text-indigo-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="group flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                  <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                  <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                  <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                  <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Amenities</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
                  <ChevronRight size={16} className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Phone size={18} className="text-indigo-400" />
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin size={16} className="text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300 mb-1">Address</p>
                  <p className="text-sm text-white">123 Green Valley, City</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={16} className="text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300 mb-1">Phone</p>
                  <p className="text-sm text-white">+91 9876543210</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail size={16} className="text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300 mb-1">Email</p>
                  <p className="text-sm text-white">info@gatedcommunity.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 transition-all hover:scale-110 transform"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600 transition-all hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 transition-all hover:scale-110 transform"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-700 transition-all hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-indigo-200 mb-3">Subscribe to our newsletter</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:flex-1 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-indigo-300 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:shadow-lg transition-all text-sm font-medium whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-indigo-300">
            <span>© 2026 CommunityPro. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-indigo-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>

          <div className="flex items-center gap-1 text-indigo-300">
            <span>Made with</span>
            <Heart size={14} className="text-rose-400 fill-rose-400 animate-pulse" />
            <span>by CommunityPro Team</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;