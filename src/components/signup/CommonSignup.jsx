import { useState } from "react";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  Shield,
  Users,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

function Signup() {
  const [role, setRole] = useState("admin");
  const [formData, setFormData] = useState({
    name: "",
    flatNumber: "",
    societyName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const images = {
    admin:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=100",
    resident:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=100",
    security:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=100",
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      return "Name is required";
    }

    if (!emailPattern.test(formData.email)) {
      return "Please enter a valid email address";
    }

    if (!mobilePattern.test(formData.mobile)) {
      return "Mobile number must be 10 digits and start with 6, 7, 8, or 9";
    }

    if (formData.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (role === "admin" && !formData.societyName.trim()) {
      return "Society Name is required for Admin";
    }

    // Prevent duplicate email
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === formData.email) {
      return "Email already registered";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify({ ...formData, role }));

    setSuccess("Registration Successful! Redirecting to sign in...");
    setIsLoading(false);

    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen pt-20 flex items-center justify-center md:justify-end bg-cover bg-center px-4 relative overflow-hidden"
        style={{ backgroundImage: `url(${images[role]})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/80"></div>

        {/* Sign Up Card */}
        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl p-5 m-4 md:m-6 rounded-2xl shadow-2xl border border-white/20">
          {/* Header with Icon */}
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className={`p-2.5 bg-gradient-to-br ${roleConfig[role].gradient} rounded-xl shadow-lg`}
            >
              {roleConfig[role].icon}
            </div>
            <div>
              <h2 className={`text-xl font-bold bg-gradient-to-r ${roleConfig[role].gradient} bg-clip-text text-transparent`}>
                Create Account
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Role Selection */}
            <div className="relative">
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                className="w-full p-2.5 border-2 border-slate-200 rounded-xl bg-white focus:border-indigo-500 focus:outline-none transition-colors appearance-none cursor-pointer font-medium text-sm"
              >
                <option value="admin">Admin</option>
                <option value="resident">Resident</option>
                <option value="security">Security</option>
              </select>
              <ChevronRight
                size={16}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder={
                role === "admin"
                  ? "Admin Name"
                  : role === "resident"
                  ? "Resident Name"
                  : "Security Guard Name"
              }
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2.5 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />

            {/* Society Name (Admin only) */}
            {role === "admin" && (
              <input
                type="text"
                name="societyName"
                placeholder="Society Name"
                value={formData.societyName}
                onChange={handleChange}
                className="w-full p-2.5 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
                required
              />
            )}

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2.5 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />

            {/* Mobile Input */}
            <div className="flex items-center border-2 border-slate-200 rounded-xl focus-within:border-indigo-500 transition-colors overflow-hidden">
              <span className="px-3 py-2.5 bg-slate-50 text-slate-700 font-semibold border-r-2 border-slate-200 text-sm">
                +91
              </span>
              <input
                type="text"
                name="mobile"
                placeholder="Enter 10 digit mobile number"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setFormData({ ...formData, mobile: value });
                  }
                }}
                className="flex-1 px-3 py-2.5 outline-none bg-white text-sm"
                maxLength={10}
                required
              />
            </div>

            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2.5 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors text-sm"
              required
            />

            {/* Error Message */}
            {error && (
              <p className="text-rose-600 text-xs px-1">{error}</p>
            )}

            {/* Success Message */}
            {success && (
              <p className="text-emerald-600 text-xs px-1">{success}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r ${roleConfig[role].gradient} text-white py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm`}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-3 text-xs text-slate-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;