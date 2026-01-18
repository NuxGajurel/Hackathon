'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'patient',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3B4D5E] mb-2">
            Create Your <span className="text-[#48C78E] italic">Account</span>
          </h1>
          <p className="text-[#6A7C8E]">
            Join SaralSewa and start your healthcare journey
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                I am a
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E] bg-white"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#3B4D5E] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#48C78E] text-white rounded-lg font-semibold hover:bg-[#3db07d] transition shadow-sm"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-[#6A7C8E]">or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-[#6A7C8E]">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-[#48C78E] font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Terms and Privacy */}
        <p className="mt-6 text-center text-sm text-[#6A7C8E]">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-[#48C78E] hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-[#48C78E] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
