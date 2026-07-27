"use client"
import Button from "@/components/button/index";
import { Input } from "@/components/input/index";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function LoginForm(){
    const {handleSubmit,register,formState}=useForm();
    const {errors}=formState;
    function handleCustomSubmit(data){
        console.log(data);
    }
    return(
     <div className="min-h-screen bg-gray-100 flex justify-center items-center flex-col">
    <form className="bg-white h-[480px] w-[450px] rounded-xl shadow-lg flex flex-col justify-start gap-5 items-start p-10 " onSubmit={handleSubmit(handleCustomSubmit)}>
        <div>
        <h2 className="font-bold text-xl">Login form</h2>
        <p className="font-thin">Please enter your user information.</p>
        </div>
    <div>
    <Input labeltext="Email" type="email" inpname="Email" place="Enter address he+re"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("email",{required:"Email Required"})}/>
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div>
    <Input labeltext="password" type="password" inpname="password" place="******"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("password",{required:"Password Required",minLength:{value:8,message:"Password should be of 8 character"},maxLength:{value:16,message:"Password should be of 16 character"}})}/>
    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    <Button btntext="Sign In" className="bg-indigo-600 border-1 w-[350px] h-[40px] rounded-xl text-white"/>
    <div className="flex gap-[50]"> 
    <Link href={"./register"} className="text-blue-600">Create An Account</Link>
    <Link href={"./forget"} className="text-black-500">Forget your password?</Link>
    </div>
    </form>
    </div>
    )
}