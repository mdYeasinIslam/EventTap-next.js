"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-12">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg px-6 sm:px-8 md:px-10 py-10 shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">
            Contact Us
          </h1>

          <form className="w-full flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Alex Gold"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="For..."
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Enter your message"
                required
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[#EA1E63] text-white font-semibold rounded py-3 mt-2 hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Google login */}
          <div className="w-full flex flex-col mt-4">
           
          </div>

        
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F3EEE7] rounded-lg p-6 sm:p-10 h-full">
          <div className="text-center md:text-left">
            <h1 className="text-[#EA1E63] font-bold text-2xl mb-4">
              Contact Info
            </h1>
            <div className="text-gray-600 space-y-3 text-sm sm:text-base">
              <p className="font-medium">Email: support@eventtap.com</p>
              <p className="font-medium">Phone: +1 (555) 123-4567</p>
              <p className="font-medium">
                Location: 1234 Example St, City State, 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
