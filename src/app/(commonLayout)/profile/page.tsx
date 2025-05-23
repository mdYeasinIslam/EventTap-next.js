import React from 'react';

const page = () => {
    return (
        <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full border-4 border-blue-500"
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Profile"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">Frontend Developer</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Edit Profile
                </button>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
                <p className="text-gray-600">
                    Passionate developer with experience in building modern web applications using React and Tailwind CSS.
                </p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
                <ul className="text-gray-600">
                    <li>Email: johndoe@example.com</li>
                    <li>Location: New York, USA</li>
                </ul>
            </div>
        </div>
    );
};

export default page;