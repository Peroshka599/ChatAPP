"use client"
import React, { useContext, useState } from 'react'
import { RegisterUser } from './LocalApi'
import { useRouter } from 'next/navigation'
import { authContext } from './Context'

const Register = () => {
    const context = useContext(authContext);
    const [errorIncoming, setErrorIncoming] = useState();
    const router = new useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await RegisterUser({
                username: e.target.username.value,
                email: e.target.Email.value,
                password: e.target.password.value
            });
            setErrorIncoming(null);
            authContext.setIsUserLoggedin(true);
            router.push("/pages");
        } catch (error) {
            setErrorIncoming(error.message);
        }
    }
    return (
        <div className='Register flex w-100% h-[100vh]'>
            <div className='image relative w-[50%]'>
                <img src="/headless.jpg" alt="" className='absolute h-full w-full object-cover' />
            </div>
            <div className='p-7 w-[50%] flex items-center justify-center'>
                <div class="w-full max-w-xs">
                    {errorIncoming && <div class="bg-red-100 flex justify-between mb-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span class="block sm:inline"><strong class="font-bold">Holy smokes!</strong> {errorIncoming}</span>
                        <span class="px-4 py-3" onClick={() => setErrorIncoming(null)}>
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>}
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" id="username" type="username" placeholder="username" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="Email" type="email" placeholder="Email" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register