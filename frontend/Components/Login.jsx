"use client"
import React, { useState , useContext } from 'react'
import Link from 'next/link'
import * as emailValidator from "email-validator";
import { useRouter } from 'next/navigation'
import { authContext } from './Context'
import { LoginUser } from './LocalApi';

const Login = () => {
    const context = useContext(authContext);
    const [errorIncoming, setErrorIncoming] = useState();
    const router = new useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await LoginUser({
                email: e.target.Email.value,
                password: e.target.password.value
            });
            console.log(data);
            setErrorIncoming(null);
            authContext.setIsUserLoggedin(true);
            router.push("/pages");
        } catch (error) {
            setErrorIncoming(error.message);
        }
    }
    return (
        <div className='Login flex w-100% h-[100vh]'>
            <div className='image relative w-[50%]'>
                <img src="/himalayas.jpg" alt="" className='absolute h-full w-full object-cover' />
            </div>
            <div className='p-7 w-[50%] flex items-center justify-center'>
                {errorIncoming && <div class="bg-red-100 flex justify-between mb-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span class="block sm:inline"><strong class="font-bold">Holy smokes!</strong> {errorIncoming}</span>
                    <span class="px-4 py-3" onClick={() => setErrorIncoming(null)}>
                        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>}
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={() => { handleSubmit }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email" name="identifier">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='Email' id="Email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password" name="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <Link href="/Accounts/Register"><div className='mt-5 text-center text-sm underline underline-offset-1'>Create a new account.</div></Link>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login