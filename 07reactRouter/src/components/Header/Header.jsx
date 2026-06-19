import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo -> "/" */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23c2410c' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3ELogo%3C/text%3E%3C/svg%3E"
                            className="mr-3 h-12 rounded-lg"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link to="/login" className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2">
                            Log in
                        </Link>

                        <Link to="/get-started" className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 mr-2">
                            Get started
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col lg:flex-row lg:space-x-8">

                            {/* "/" */}
                            <li>
                                <NavLink to="/" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    Home
                                </NavLink>
                            </li>

                            {/* "/about" */}
                            <li>
                                <NavLink to="/about" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    About
                                </NavLink>
                            </li>

                            {/* "/contact" */}
                            <li>
                                <NavLink to="/contact" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    Contact
                                </NavLink>
                            </li>

                            {/* "/github" */}
                            <li>
                                <NavLink to="/github" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    Github
                                </NavLink>
                            </li>

                            {/* extra routes (optional) */}
                            <li>
                                <NavLink to="/login" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    Login Page
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/get-started" className={({ isActive }) =>
                                    isActive ? "text-orange-700" : "text-gray-700"
                                }>
                                    Get Started
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}