"use client"
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-10">
            <div className="block lg:hidden text-xl w-full ml-auto px-4 -mb-6" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose /> :  <HiMenu />
                }
            </div>
            {/* Navbar Start */}
            <div className="flex gap-10 items-center">

                <div className="hidden lg:block">
                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0023 4.86847C14.0023 4.27515 13.7658 3.70609 13.3447 3.2863L11.7281 1.67969L2.31641 11.0521C1.84958 11.5162 1.47921 12.0673 1.22652 12.674C0.973819 13.2808 0.84375 13.9312 0.84375 14.588C0.84375 15.2448 0.973819 15.8952 1.22652 16.502C1.47921 17.1087 1.84958 17.6598 2.31641 18.1238L3.89702 19.7011C3.69238 18.727 3.73484 17.7175 4.02053 16.7639C4.30622 15.8102 4.82614 14.9425 5.53327 14.2393L13.3447 6.45065C13.7658 6.03086 14.0023 5.4618 14.0023 4.86847ZM13.3424 11.0375C13.7649 11.4609 14.0022 12.0347 14.0022 12.6329C14.0022 13.2312 13.7649 13.805 13.3424 14.2284L9.38858 18.1839C8.8241 18.7451 8.37672 19.4129 8.07241 20.1486C7.76811 20.8842 7.61295 21.673 7.61595 22.4692C7.61692 22.8845 7.65997 23.2986 7.74446 23.7053L6.18599 22.1033C5.23793 21.1533 4.70544 19.8658 4.70544 18.5235C4.70544 17.1811 5.23793 15.8936 6.18599 14.9437L11.7279 9.40254L13.3424 11.0375ZM13.3021 22.7473C13.5238 22.9594 13.7 23.2126 13.8202 23.492C13.9405 23.7714 14.0024 24.0714 14.0024 24.3745C14.0024 24.6776 13.9405 24.9776 13.8202 25.257C13.7 25.5365 13.5238 25.7896 13.3021 26.0017L11.6954 27.5671L10.0621 25.9692C9.16557 25.092 8.63499 23.9208 8.57339 22.6831C8.51179 21.4454 8.92357 20.2295 9.72873 19.2716L13.3021 22.7473Z" fill="white"></path></svg>
                </div>

                <div className={`absolute lg:static bg-Background z-10 rounded-3xl shadow-none lg:shadow-2xl px-20 duration-500 ${open ? 'top-16' : '-top-72'} `}>
                    <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-xs lg:text-sm py-5">
                        <li className="text-gray-400 hover:text-zinc-100 transition-colors duration-200"><Link href="/">Pricing</Link></li>
                        <li className="text-gray-400 hover:text-zinc-100 transition-colors duration-200"><Link href="/">Updates</Link></li>
                        <li className="text-gray-400 hover:text-zinc-100 transition-colors duration-200"><Link href="/">Download</Link></li>
                    </ul>
                </div>
            </div>

            {/* Navbar End */}
            <div className="flex gap-5 text-white items-center">

                <div className="tooltip tooltip-bottom flex items-center" data-tip="Login">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-2d2b0f13-5 gDcOZS"><path d="M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="#868F97"></path>
                        <path d="M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497" class="touch"></path></svg>
                    <button className="btn btn-ghost pl-2 btn-xs lg:btn-sm hover:bg-transparent">Login</button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Start your trail">
                    <button className="btn btn-xs lg:btn-sm bg-transparent rounded-full text-white hover:bg-transparent  shadow-zinc-800 shadow-inner border-zinc-700 bg-white bg-opacity-5"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#868F97" stroke-width="1.5" d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"></path><circle cx="12" cy="12" r="9.25" stroke="#868F97" stroke-width="1.5"></circle></svg> Start your trail</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;