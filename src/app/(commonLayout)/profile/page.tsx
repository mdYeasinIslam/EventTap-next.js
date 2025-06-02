"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF4F1] flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <Image
              src="/featureImg.png"
              alt="Profile"
              fill
              className="rounded-full border-2 border-[#E60076] object-cover"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-500">Frontend Developer</p>
          <button
            className="mt-4 px-6 py-2 bg-[#E60076] text-white rounded hover:bg-[#e60076] transition"
            onClick={() => setIsOpen(true)}
          >
            Edit Profile
          </button>
        </div>

        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Profile Information
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 max-w-md">
            <div className="font-medium">Full Name :</div>
            <div>Alex Johnson</div>

            <div className="font-medium">Email :</div>
            <div>alex@example.com</div>

            <div className="font-medium">Birth Date :</div>
            <div>1990-01-01</div>

            <div className="font-medium">Sex :</div>
            <div>Male</div>

            <div className="font-medium">Language :</div>
            <div>English</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF4F1] w-full max-w-md lg:max-w-2xl rounded-xl p-6 sm:p-8 shadow-lg "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-700  mb-4"
            >
              ← Back
            </button>
            <h2 className="text-2xl text-center font-bold text-[#35140D] mb-6">
              Update Profile
            </h2>

            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/featureImg.png"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-white shadow"
              />
              <div className="absolute bottom-0 right-0 bg-pink-600 text-white p-1 rounded-full cursor-pointer hover:bg-pink-700">
                ✏️
              </div>
            </div>

            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Sex
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Male / Female / Other"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Language
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="English"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
