"use client"
import Button from "@/components/button/index";
import { Input } from "@/components/input/index";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function ForgetForm(){
    const {register,handleSubmit,formState}=useForm();
    const {errors}=formState;
    function handleCustomSubmit(data){
        console.log(data)
    }
    return(
     <div className="min-h-screen bg-red-100 flex justify-center items-center flex-col w-full">
    <form className="bg-white h-[400px] w-[450px] rounded-xl shadow-lg flex flex-col justify-start gap-5 items-start p-10 " onSubmit={handleSubmit(handleCustomSubmit)}>
        <div>
        <h2 className="font-bold">Forget Password</h2>
        <p className="font-thin">Don't worry, we'll send you an email to reset your password.</p>
        </div>
    <div>
    <Input labeltext="Email" type="email" inpname="Email" place="Enter address here"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("email",{required:"Email Required"})}/>
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div> 
    <Button btntext="Reset  Password" className="bg-blue-400 border-1 w-[350px] h-[40px] rounded-xl text-white"/>
    <div className="flex gap-[50] "> 
    <Link href={"./login"} className="text-black-300">Don't have an account? <p className="text-blue-400">Sign In</p></Link>
    </div>
    </form>
    </div>
    )
}