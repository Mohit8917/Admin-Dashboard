import Image from "next/image";

export default function Header(){
    return(
    <header className="flex justify-between items-center w-full bg-white px-5 py-2">
            <div className="left-header m-10 flex gap-10">
                <Image src="/bars-solid-full.svg" alt="menu" height={20} width={20}/>
                <input type="search" placeholder="Search" className="text-gray-800 p-2 border-1 border-gray-200 rounded-lg outline-none"/>
            </div>
            <div className="right-header m-10 flex gap-2">
                {/* <button className="h-9 w-9 rounded-full bg-gray-200 flex flex-col justify-center items-center" >
                <Image src="/angle-down-solid-full.svg" alt="menu" height={20} width={20}/>
                </button> */}
                <button className="h-9 w-9 rounded-full bg-gray-200 flex flex-col justify-center items-center">
                <Image src="/bell-regular-full.svg" alt="menu" height={20} width={20}/>
                </button>
                <button className="h-9 w-9 rounded-full bg-slate-300 flex flex-col justify-center items-center">
                <Image src="/person.png" alt="menu" height={20} width={20}/>
                </button>
            </div>
        </header>
    )
}
