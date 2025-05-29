import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/login-logo.png'; 
const page = () => {
    return (
        <section>
            <div className='container mx-auto flex items-center justify-center h-screen gap-10 px-4 md:px-0'>
                <div className="flex-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-10 py-12 w-full ">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">Login</h1>
                    <form className="w-full flex flex-col gap-4 max-w-md">
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-end w-full">
                            <a href="#" className="text-blue-600 text-sm hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#EA1E63] text-white font-semibold rounded-md py-2 mt-2 hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                <div className=' flex-1/2 w-full  bg-[#F3EEE7] h-full'>
                    <div className='flex flex-col items-center gap-5'>

                        <figure className='flex items-center justify-center'>

                            <Image
                                src={logo}
                                alt="Login Illustration"
                                width={500}
                                height={500}
                                className="w-20 h-20 object-cover rounded-lg shadow-md"
                            />
                        </figure>
                        <h1 className='text-7xl font-laila font-semibold' >Event Tap</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page; 