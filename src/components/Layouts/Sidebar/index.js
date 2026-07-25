"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar(){
    const [pagesOpen,setPagesOpen]=useState(false);
    const [authOpen,setAuthOpen]=useState(false);
    const [compOpen,setCompOpen]=useState(false);
    const [menuLevelOpen,setMenuLevelOpen]=useState(false);
    return(
        
//   background-color: #202c39;

        <div className="min-h-screen w-64 flex flex-shrink-0">
            <div className="w-full flex-1 bg-gray-800 text-white pl-5 pr-5 pt-5">
                <h1 className="text-2xl pb-8">Logo</h1>

                <div className="flex items-center gap-3 pb-5 text-slate-400 hover:text-white">
                <Image src="/bell-regular-full.svg" alt="Cant Load Image" width={20} height={20}/>
                <p>Dashboard</p>
                </div>

                <div className="text-slate-500 pb-4">
                    <p>LAYOUTS & PAGES</p>
                </div>

            <div>
                <button onClick={()=>setPagesOpen(!pagesOpen)} 
                className="w-full flex items-center justify-between py-2 text-grey-400 ">
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
                className="w-full flex items-center justify-between py-2 text-grey">
                    <div className="flex gap-2 items-center text-gray-300 hover:text-white">
                        <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                        <span>Authentication</span>
                    </div>
                    <Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/>
                </button>
                {authOpen && (
                    <div className="ml-10 mt-2 flex flex-col gap-2 text-gray-300">
                        <p><Link href={"./login"}>Sign In</Link></p>
                        <p><Link href={"./register"}>Sign up</Link></p>
                        <p><Link href={"./forget"}>Forget Password</Link></p>
                    </div>
                )}
            </div>

            <div className="py-2">
            <button className="flex items-center gap-2">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Layouts</span>
            </button>
            </div>

            <div className="py-4 text-slate-500">
                <p>UI COMPONENTS</p>
            </div>

             <div>
                <button onClick={()=>setCompOpen(!compOpen)} 
                className="w-full flex items-center justify-between py-2 text-grey">
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
                className="w-full flex items-center justify-between py-2 text-grey">
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

            <div className="py-5 text-slate-500">
                <p>DOCUMENTATION</p>
            </div>

            <button className="flex gap-2 items-center text-slate-400 hover:text-white">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Docs</span>
            </button>

            <button className="flex gap-2 py-3 items-center text-slate-400 hover:text-white">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Changelog</span>
            </button>

            <button className="flex w-full p-2 bg-indigo-600 items-center">
                <span><Image src="/angle-down-solid-full.svg" alt="Cant Load Image" width={20} height={20}/></span>
                <span>Download</span>
            </button>
        </div>
    </div>
    )
}