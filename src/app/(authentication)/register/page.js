"use client";
import Button from "@/components/button/index";
import { Input } from "@/components/input/index";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {register,handleSubmit,formState}=useForm();
  const {errors}=formState;
  function handleCustomSubmit(data){
    console.log(data);
  }
  return (
    <div className="w-full min-h-screen bg-red-100 flex justify-center items-center flex-col">
    <form onSubmit={handleSubmit(handleCustomSubmit)} className="bg-white h-[700px] w-[450px] rounded-xl shadow-lg flex flex-col justify-start gap-5 items-start p-10 ">
        <div>
        <h2 className="font-bold">Registration form</h2>
        <p className="font-thin">Please enter your user information.</p>
        </div>
    <div>
    <Input labelText="Username or Email" type="text" inpName="Username" place="Enter Name" className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("username",{required:"UserName is Required"})}/>
    { errors.username && <p className="text-red-500">{errors.username.message}</p>}
    </div>
    <div>
    <Input labelText="Email" type="email" inpName="Email" place="Enter address here"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("email",{required:"Email Required"})}/>
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div>
    <Input labelText="password" type="password" inpName="password" place="******"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("password",{required:"Password Required",minLength:{value:8,message:"Password should be of 8 character"},maxLength:{value:16,message:"Password should be of 16 character"}})}/>
    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    <div>
    <Input labelText="Confirm Password" type="password" inpName="Confirm" place="******"  className="w-[350px] border-1 border-black-300 rounded-lg px-4 py-2" {...register("Confirmpassword",{required:"Password Required",minLength:{value:8,message:"Password should be of 8 character"},maxLength:{value:16,message:"Password should be of 16 character"}})}/>
    {errors.Confirmpassword && <p className="text-red-500">{errors.Confirmpassword.message}</p>}
    </div>
    <div>
    <Button btnText="Create Account" className="bg-blue-400 border-1 w-[350px] h-[40px] rounded-xl text-white"/>
    </div>
    <div className="flex gap-[50]"> 
    <Link href={"./login"} className="text-blue-600">Already User?Login</Link>
    <Link href={"./forget"} className="text-black-500">Forget your password?</Link>
    </div>
    </form>
    </div>
  )
}
