'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+977 9841234567',
    role: 'Patient',
    address: 'Kathmandu, Nepal',
    dateOfBirth: '1990-01-01',
    bloodGroup: 'O+',
    emergencyContact: '+977 9812345678',
    bio: 'Healthcare enthusiast and active member of SaralSewa community.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const DoctorImage = "/images/lala.jpg";

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3B4D5E] mb-2">
            My <span className="text-[#48C78E] italic">Profile</span>
          </h1>
          <p className="text-[#6A7C8E]">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
              {/* Profile Picture */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#48C78E]">
                  <Image
                    src={DoctorImage}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#48C78E] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#3db07d] transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Name and Role */}
              <h2 className="text-2xl font-bold text-[#3B4D5E] mb-2">{profileData.name}</h2>
              <p className="text-[#48C78E] font-medium mb-4">{profileData.role}</p>

              {/* Bio */}
              <p className="text-sm text-[#6A7C8E] mb-6">{profileData.bio}</p>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-4 py-2 bg-[#48C78E] text-white rounded-lg font-semibold hover:bg-[#3db07d] transition"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={handleSave}
                      className="w-full px-4 py-2 bg-[#48C78E] text-white rounded-lg font-semibold hover:bg-[#3db07d] transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="w-full px-4 py-2 border border-gray-300 text-[#6A7C8E] rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <Link
                  href="/sign-in"
                  className="block w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition text-center"
                >
                  Sign Out
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-bold text-[#3B4D5E] mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#6A7C8E]">Appointments</span>
                  <span className="text-[#3B4D5E] font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6A7C8E]">Consultations</span>
                  <span className="text-[#3B4D5E] font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6A7C8E]">Member Since</span>
                  <span className="text-[#3B4D5E] font-bold">2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-[#3B4D5E] mb-6">Personal Information</h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.address}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={profileData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.dateOfBirth}</p>
                  )}
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Blood Group
                  </label>
                  {isEditing ? (
                    <select
                      name="bloodGroup"
                      value={profileData.bloodGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E] bg-white"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.bloodGroup}</p>
                  )}
                </div>

                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Emergency Contact
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={profileData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E]"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.emergencyContact}</p>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-[#3B4D5E] mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48C78E] focus:border-transparent outline-none transition text-[#3B4D5E] resize-none"
                    />
                  ) : (
                    <p className="text-[#6A7C8E] px-4 py-3">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Link
                href="/doctors"
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition cursor-pointer"
              >
                <h4 className="text-lg font-bold text-[#3B4D5E] mb-2">My Appointments</h4>
                <p className="text-sm text-[#6A7C8E]">View and manage your appointments</p>
              </Link>

              <Link
                href="/services"
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition cursor-pointer"
              >
                <h4 className="text-lg font-bold text-[#3B4D5E] mb-2">My Services</h4>
                <p className="text-sm text-[#6A7C8E]">Access your healthcare services</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
