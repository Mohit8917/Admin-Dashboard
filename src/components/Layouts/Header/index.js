import Image from "next/image";

export default function Header(){
    return(
         
// .header{
//   background-color: palevioletred;
//   padding: 15px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 60px;
//   width: 100%;
// }

// }
<header className="flex justify-between items-center w-full bg-pink-500 pt-2 pb-2 pl-5 pr-5">
            <div className="left-header m-10 flex gap-10">
                <Image src="/bars-solid-full.svg" alt="menu" height={20} width={20}/>
                <input type="search" placeholder="Search" className="text-gray p-2 border-1 border-gray-500 rounded-lg outline-none"/>
            </div>
            <div className="right-header m-10 flex gap-10">
                <button className="h-9 w-9 rounded-full bg-slate-300 px-10 flex flex-col justify-center items-center" >
                <Image src="/angle-down-solid-full.svg" alt="menu" height={20} width={20}/>
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
// .left-header,.right-header{
//   margin: 10px;
//   display: flex;
//   gap: 10px;

// }

// .header input{
//   border: 1px solid grey;
//   border-radius: 5px;
//   color: grey;
//   padding: 5px;