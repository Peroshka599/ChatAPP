"use client"
import React, { useState, useContext } from 'react'
import { BsCart } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import { FaUserAlt } from "react-icons/Fa"
import Link from 'next/link'
import { authContext } from './Context'

const Headers = () => {
    const context = useContext(authContext);
    const [displayLoginSection, setDisplayLoginSection] = useState(false);
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white cursor-pointer">Home</a>
                    <a className="mr-5 hover:text-white cursor-pointer">About</a>
                    <a className="mr-5 hover:text-white cursor-pointer">Contact Us</a>
                    <a className="mr-5 hover:text-white cursor-pointer">Docs</a>
                </nav>
                <div className='flex items-center gap-3'>
                    <button className="cursor-pointer inline-flex items-center border-0 py-1 px-3">
                        <BsCart size={20} />
                    </button>
                    {!context.isUserLoggedin && <div className='login cursor-pointer relative'
                        onMouseEnter={() => { setDisplayLoginSection(!displayLoginSection) }}
                        onMouseLeave={() => { setDisplayLoginSection(!displayLoginSection) }}
                    >
                        <BiLogIn size={25} />
                        {displayLoginSection && <div className='login-section flex flex-col gap-3 px-3 absolute bg-gray-900 rounded-sm'>
                            <Link href="/Accounts/Login"><div className='pb-2 hover:opacity-70'>Login</div></Link>
                            <Link href="/Accounts/Register"><div className='pb-2 hover:opacity-70'>Register</div></Link>
                        </div>}
                    </div>}
                    {context.isUserLoggedin && <FaUserAlt size={18} className='cursor-pointer'/>}
                </div>

            </div>
        </header>
    )
}

export default Headers