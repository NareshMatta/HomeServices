import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  Mail,
  Lock,
  Shield,
  Users,
  ShieldCheck,
  Eye,
  EyeOff,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

function Signin() {
  const [role, setRole] = useState("admin");
  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const images = {
    admin: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=100",
    ],
    resident: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1572120360610-d971b9b78825?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1920&q=100",
    ],
    security: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1597006207863-6a4d6c1bce62?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=100",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df5b?auto=format&fit=crop&w=1920&q=100",
    ],
  };

  const roleConfig = {
    admin: {
      icon: <Shield size={24} />,
      gradient: "from-indigo-600 to-purple-600",
      color: "indigo",
    },
    resident: {
      icon: <Users size={24} />,
      gradient: "from-emerald-500 to-teal-600",
      color: "emerald",
    },
    security: {
      icon: <ShieldCheck size={24} />,
      gradient: "from-slate-700 to-slate-900",
      color: "slate",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images[role].length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [role]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No registered user found. Please sign up first.");
      setIsLoading(false);
      return;
    }

    if (
      savedUser.email !== email ||
      savedUser.password !== password ||
      savedUser.role !== role
    ) {
      setError("Invalid credentials. Please check your details.");
      setIsLoading(false);
      return;
    }

    // Navigate to dashboard based on role
    if (role === "admin") navigate("/admin-dashboard");
    if (role === "resident") navigate("/resident-dashboard");
    if (role === "security") navigate("/security-dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center md:justify-end overflow-hidden pt-20">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {images[role].map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/80"></div>

        {/* Sign In Card */}
        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl p-6 m-4 md:m-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Header with Icon */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`p-3 bg-gradient-to-br ${roleConfig[role].gradient} rounded-xl shadow-lg`}
            >
              {roleConfig[role].icon}
            </div>
            <div>
              <h2 className={`text-2xl font-bold bg-gradient-to-r ${roleConfig[role].gradient} bg-clip-text text-transparent`}>
                {role.charAt(0).toUpperCase() + role.slice(1)} Sign In
              </h2>
              <p className="text-slate-600 text-xs">
                Welcome back!
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Role Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Select Role
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    setCurrentImage(0);
                    setError("");
                  }}
                  className="w-full p-3 border-2 border-slate-200 rounded-xl bg-white focus:border-indigo-500 focus:outline-none transition-colors appearance-none cursor-pointer font-medium text-sm"
                >
                  <option value="admin">Admin</option>
                  <option value="resident">Resident</option>
                  <option value="security">Security</option>
                </select>
                <ChevronRight
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-lg">
                <AlertCircle size={16} className="text-rose-500 flex-shrink-0" />
                <p className="text-rose-700 text-xs">{error}</p>
              </div>
            )}

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className={`text-xs font-semibold text-${roleConfig[role].color}-600 hover:text-${roleConfig[role].color}-700 transition-colors`}
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r ${roleConfig[role].gradient} text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-4 text-xs text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className={`font-semibold text-${roleConfig[role].color}-600 hover:text-${roleConfig[role].color}-700 transition-colors`}
            >
              Sign Up
            </Link>
          </p>

          {/* Image Indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {images[role].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentImage
                    ? `w-6 bg-gradient-to-r ${roleConfig[role].gradient}`
                    : "w-1 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;