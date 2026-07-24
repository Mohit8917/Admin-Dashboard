import Image from "next/image";

export default function Header(){
    return(
        <header className="header">
            <div className="left-header">
                <Image src="/bars-solid-full.svg" alt="menu" height={20} width={20}/>
                <input type="search" placeholder="Search"/>
            </div>
            <div className="right-header">
                <button className="h-9 w-9 rounded-full bg-slate-300 px-10 flex flex-col justify-center items-center" >
                <Image src="/light-mode.png" alt="menu" height={20} width={20}/>
                </button>
                <button className="h-9 w-9 rounded-full bg-slate-300 px-10 flex flex-col justify-center items-center">
                <Image src="/bell-regular-full.svg" alt="menu" height={20} width={20}/>
                </button>
                <button className="h-9 w-9 rounded-full bg-slate-300 px-10 flex flex-col justify-center items-center">
                <Image src="/wanderercreative-blank-profile-picture-973460.svg" alt="menu" height={20} width={20}/>
                </button>
            </div>
        </header>
    )
}