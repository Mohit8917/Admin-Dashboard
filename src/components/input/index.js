export function Input(props){
    const {labeltext,type,inpname,place,className}=props
    return(
        <div className="flex flex-col gap-[6px]">
                <label>{labeltext}</label>
                <input type={type} name={inpname} placeholder={place} className={className} {...props} />
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