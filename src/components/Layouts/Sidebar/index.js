"use client";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar(){
    const [pagesOpen,setPagesOpen]=useState(false);
    const [authOpen,setAuthOpen]=useState(false);
    const [compOpen,setCompOpen]=useState(false);
    const [menuLevelOpen,setMenuLevelOpen]=useState(false);
    return(
//         .side-bar{
//   background-color: #202c39;
//   color: white;
//   width: 100%; 
//   min-height: 100vh;
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-top: 20px;
        <div className="min-h-screen w-64 flex flex-shrink-0 ">
            <div className="side-bar min-h-screen mb-10 bg-gray-900">
                <h1 className="text-xl">Logo</h1>
                <div className="flex items-center gap-3 px-4 py-4 rounded-md bg-white/10">
                <Image src="/bell-regular-full.svg" alt="Cant Load Image" width={20} height={20}/>
                <p>Dashboard</p>
                </div>

                <div>
                    <p>LAYOUTS & PAGES</p>
                </div>

            <div>
                <button onClick={()=>setPagesOpen(!pagesOpen)} 
                className="w-full flex items-center justify-between px-3 py-2 text-grey">
                    <div className="flex gap-2 items-center text-gray-300 hover:text-white">
                        <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                        <span>Pages</span>
                    </div>
                    <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                </button>
                {pagesOpen && (
                    <div className="ml-10 mt-2 flex flex-col gap-2 text-gray-300">
                        <p>Profile</p>
                        <p>Settings</p>
                        <p>Billing</p>
                        <p>Pricing</p>
                        <p>404 Error</p>
                    </div>
                )}
            </div>

             <div>
                <button onClick={()=>setAuthOpen(!authOpen)} 
                className="w-full flex items-center justify-between px-3 py-2 text-grey">
                    <div className="flex gap-2 items-center text-gray-300 hover:text-white">
                        <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                        <span>Authentication</span>
                    </div>
                    <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                </button>
                {authOpen && (
                    <div className="ml-10 mt-2 flex flex-col gap-2 text-gray-300">
                        <p>Sign In</p>
                        <p>Sign Up</p>
                        <p>Forget Password</p>
                    </div>
                )}
            </div>

            <button className="flex gap-2">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Layouts</span>
            </button>

            <div>
                <p>UI COMPONENTS</p>
            </div>

             <div>
                <button onClick={()=>setCompOpen(!compOpen)} 
                className="w-full flex items-center justify-between px-3 py-2 text-grey">
                    <div className="flex gap-2 items-center text-gray-300 hover:text-white">
                        <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                        <span>Components</span>
                    </div>
                    <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                </button>
                {compOpen && (
                    <div className="ml-10 mt-2 flex flex-col gap-2 text-gray-300">
                        <p>Profile</p>
                        <p>Settings</p>
                        <p>Billing</p>
                        <p>Pricing</p>
                        <p>404 Error</p>
                    </div>
                )}
            </div>

             <div>
                <button onClick={()=>setMenuLevelOpen(!menuLevelOpen)} 
                className="w-full flex items-center justify-between px-3 py-2 text-grey">
                    <div className="flex gap-2 items-center text-gray-300 hover:text-white">
                        <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                        <span>Menu Level</span>
                    </div>
                    <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                </button>
                {menuLevelOpen && (
                    <div className="ml-10 mt-2 flex flex-col gap-2 text-gray-300">
                        <p>Two Level</p>
                        <p>Three Level</p>
                    </div>
                )}
            </div>

            <div>
                <p>DOCUMENTATION</p>
            </div>

            <button className="flex gap-2">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Docs</span>
            </button>

            <button className="flex gap-2">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Changelog</span>
            </button>

            <button className="flex w-full gap-2 bg-purple-400">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Download</span>
            </button>
        </div>
    </div>
    )
}