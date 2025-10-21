import React, { useState } from 'react';
import { useAuthStore } from "../../zustand/store";
import { User, Mail, Phone, Edit3, Trophy, Calendar } from 'lucide-react';

function Profile() {
  let { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('participated');

  const participatedHackathons = user?.participatedHackathons || [];
  const organizedHackathons = user?.organizedHackathons || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary2/5 to-accent1/10 py-16 px-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary2 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-grotesk">
                {user?.fullName || 'User Name'}
              </h2>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <Mail size={16} /> {user?.email || 'email@example.com'}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Phone size={16} /> {user?.phone || '+91 00000 00000'}
              </p>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 hover:bg-primary/90 transition">
            <Edit3 size={18} /> Edit Profile
          </button>
        </div>

        {/* Tab Section */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setActiveTab('participated')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'participated'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Participated
          </button>
          <button
            onClick={() => setActiveTab('organized')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === 'organized'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Organized
          </button>
        </div>

        {/* Hackathon List Section */}
        <div>
          {activeTab === 'participated' && (
            participatedHackathons.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {participatedHackathons.map((hackathon, idx) => (
                  <div key={idx} className="bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition">
                    <h4 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2">
                      <Trophy size={18} /> {hackathon.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{hackathon.description}</p>
                    <p className="text-gray-500 text-xs flex items-center gap-2">
                      <Calendar size={14} /> {hackathon.date || 'Date not available'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <Trophy size={60} className="text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No hackathons participated yet.</p>
              </div>
            )
          )}

          {activeTab === 'organized' && (
            organizedHackathons.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizedHackathons.map((hackathon, idx) => (
                  <div key={idx} className="bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition">
                    <h4 className="font-semibold text-lg text-secondary mb-2 flex items-center gap-2">
                      <Calendar size={18} /> {hackathon.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">{hackathon.description}</p>
                    <p className="text-gray-500 text-xs flex items-center gap-2">
                      <Calendar size={14} /> {hackathon.date || 'Date not available'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <User size={60} className="text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No hackathons organized yet.</p>
              </div>
            )
          )}
        </div>

        {/* Additional Section - Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent1/10 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-primary">{participatedHackathons.length}</h3>
            <p className="text-gray-600">Hackathons Participated</p>
          </div>
          <div className="bg-gradient-to-br from-secondary2/10 to-accent1/10 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-secondary">{organizedHackathons.length}</h3>
            <p className="text-gray-600">Hackathons Organized</p>
          </div>
          <div className="bg-gradient-to-br from-accent1/10 to-primary/10 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-accent1">{(participatedHackathons.length + organizedHackathons.length) || 0}</h3>
            <p className="text-gray-600">Total Involvements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;