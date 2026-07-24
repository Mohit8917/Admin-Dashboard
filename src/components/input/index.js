export function Input(props){
    const {labelText,type,inpName,place,className}=props
    return(
        <div className="flex flex-col gap-[6px]">
                <label>{labelText}</label>
                <input type={type} name={inpName} placeholder={place} className={className}/>
        </div>
    )
}

// export function Form() {
//   return (
//     <div className="p-4">
//       <form className="flex flex-col gap-2">
//         <label >Username or Email</label>
//         {/* Added explicit text-black and bg-white classes */}
//         <input 
//           type="text" 
//           name="username" 
//           placeholder="Enter username"
//           className="text-black bg-white border border-gray-300 rounded px-3 py-2"
//         />
//       </form>
//     </div>
//   )
// }