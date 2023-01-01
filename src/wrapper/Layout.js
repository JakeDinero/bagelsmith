import React from "react";
import logo from '../assets/logo.png'
import {Link, Outlet} from "react-router-dom"


export function Layout() {
    
    return(
        <div>
            <header>
                <nav className=" navbar navbar-expand-lg shadow-md py-8 bg-white fixed flex items-center w-full justify-between">
                    <div className="container flex flex-row justify-between items-center mx-auto">
                        <a href="http://localhost:3000" className="flex items-center">
                            <img src={logo} className=" ml-4 mr-3 h-14" alt="Bagelsmith Logo" />
                            <span className="self-center text-xl font-semibold font-serif whitespace-nowrap dark:text-black">BAGELSMITH</span>
                        </a>
                        <div className="flex md:order-2">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={() => window.open('https://eat.9fold.me/index.html#/62')}>Order Online</button>
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Order Online</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="flex flex-row hidden w-full md:block md:w-auto mr-32 ">
                            <ul className="flex flex-row">
                                {/* <li className="block py-2 pr-4 pl-3 font-serif text-lg text-black rounded md:bg-transparent md: text-black md:p-0 dark:text-white"> */}
                                <li className="px-4 hover:underline">
                                <Link to="/about">About</Link>
                                </li>
                                <li className="px-4 hover:underline">
                                <Link to="/contact">Contact</Link>
                                </li>
                                <li className="px-4 hover:underline">
                                <Link to="/gallery">Gallery</Link>
                                </li>
                                <li className="px-4 hover:underline">
                                <Link to="/locations">Locations</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        


            {/* <div className="relative bottom-0 left-0 bg-black">
                <column className="text-white absolute top-0 right-0 pr-6">
                    <h3>About Us</h3>
                    <Link to="/about"></Link>
                    <Link to="/gallery"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                </column>
                <column >
                    <h1>Contact Us</h1>
    
                
                </column>
            </div> */}




            
        {/* <footer className="flex flex-col fixed bottom-0 left-0 right-0 bg-black text-white">
            <div className="">
                <column className="text-white absolute top-0 right-0 pr-6">
                    <h3>About Us</h3>
                    <Link to="/about"></Link>
                    <Link to="/gallery"></Link>
                    <Link to="#"></Link>
                    <Link to="#"></Link>
                </column>
                <column >
                    <h1>Contact Us</h1>
    
                
                </column>
            </div>
            <br></br>

        </footer> */}

        <Outlet/>
    </div>









    )
}