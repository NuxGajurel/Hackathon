'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    role: '',
    phone: '+977 9841234567',
    address: 'Kathmandu, Nepal',
    dateOfBirth: '1990-01-01',
    bloodGroup: 'O+',
    bio: 'Healthcare enthusiast and active member of SaralSewa community.',
  });

  const [profileImage, setProfileImage] = useState('/images/lala.jpg');
  const [certificate, setCertificate] = useState<File | null>(null);

  useEffect(() => {
    setMounted(true);
    if (user) {
      setProfileData(prev => ({
        ...prev,
        name: user.name,
        email: user.email,
        role: user.role || 'Patient'
      }));
      // Added: Use Google picture if available
      if (user.picture) {
        setProfileImage(user.picture);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Simulating save
    console.log('Profile saved:', profileData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCertificateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificate(e.target.files[0]);
    }
  };

  if (!mounted) return null;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Please Sign In</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">You need to be logged in to view your profile.</p>
          <Link href="/sign-in" className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">Sign In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              My <span className="text-green-600 italic">Profile</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Manage your account information and preferences
            </p>
          </div>
          <p className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold self-start md:self-auto capitalize">
            {profileData.role}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 text-center">
              {/* Profile Picture */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-inner group relative">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                  <label className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
              </div>

              {/* Name and Role */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{profileData.name}</h2>
              <p className="text-green-600 dark:text-green-400 font-medium mb-4 flex items-center justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {profileData.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed italic">&quot;{profileData.bio}&quot;</p>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
                  >
                    {t('profile.editProfile')}
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={handleSave}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md"
                    >
                      {t('profile.saveChanges')}
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                      {t('profile.cancel')}
                    </button>
                  </div>
                )}

                <button
                  onClick={logout}
                  className="w-full px-4 py-2 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Doctor Verification Section */}
            {profileData.role?.toLowerCase() === 'doctor' && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{t('profile.uploadCertificate')}</h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Verification Required</p>
                  </div>
                </div>

                <div className="mt-4">
                  {certificate ? (
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-slate-600">
                      <div className="flex items-center space-x-2 overflow-hidden">
                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700 dark:text-slate-300 truncate font-medium">{certificate.name}</span>
                      </div>
                      <button onClick={() => setCertificate(null)} className="text-red-500 hover:text-red-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 dark:border-slate-600 rounded-xl cursor-pointer hover:bg-blue-100/50 dark:hover:bg-slate-800/50 transition-all group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Click to upload doc</p>
                      </div>
                      <input type="file" className="hidden" onChange={handleCertificateUpload} accept=".pdf,.png,.jpg" />
                    </label>
                  )}
                  <p className="mt-3 text-[10px] text-slate-400 italic">Only PDF or Images (max 5MB)</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Personal Information</h3>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  {isEditing ? (
                    <input type="text" name="name" value={profileData.name} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1 underline decoration-green-500/30 underline-offset-8">{profileData.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                  {isEditing ? (
                    <input type="email" name="email" value={profileData.email} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1">{profileData.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                  {isEditing ? (
                    <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1">{profileData.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Address</label>
                  {isEditing ? (
                    <input type="text" name="address" value={profileData.address} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1">{profileData.address}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Date of Birth</label>
                  {isEditing ? (
                    <input type="date" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1">{profileData.dateOfBirth}</p>
                  )}
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Blood Group</label>
                  {isEditing ? (
                    <select name="bloodGroup" value={profileData.bloodGroup} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white">
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
                    <p className="text-slate-800 dark:text-white font-medium px-1">{profileData.bloodGroup}</p>
                  )}
                </div>

                {/* Bio */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bio</label>
                  {isEditing ? (
                    <textarea name="bio" value={profileData.bio} onChange={handleChange} rows={3} className="w-full bg-slate-50 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition text-slate-900 dark:text-white resize-none" />
                  ) : (
                    <p className="text-slate-800 dark:text-white font-medium px-1 leading-relaxed">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Appointments', count: '12', icon: (
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Prescriptions', count: '5', icon: (
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Lab Reports', count: '3', icon: (
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    {item.icon}
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{item.count}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
