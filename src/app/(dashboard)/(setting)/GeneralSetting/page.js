"use client";
import Button from "@/components/button";
import Images from "@/components/image";
import { Input } from "@/components/input/index";
import { useForm } from "react-hook-form";
export default function GeneralSetting() {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  function handleCustomSubmit(data) {
    console.log(data);
  }
  return (
    <div> 
        <div className="flex flex-col p-6 text">
        <p className="font-bold text-2xl">General</p>
        <p>_____________________________________________________________________________________________________________________________________________________________________________________</p>
      </div>
    <div className="flex justify-around">
      <div>
        <p className="font-bold">General Setting</p>
        <p>Profile configuration Settings</p>
      </div>
    <div className="flex flex-col">
    <div className="bg-gray-100 h-[800px] w-[400px] p-8 rounded-xl">
        <p>General Settings</p>
        <div className="flex gap-18">
          <div id="left">
            <p className="text-black-300 font-semibold">Avatar</p> 
          </div>
          <div id="right" className="flex gap-2">
            <Images
              src={"/person.png"}
              alttext={"Avatar"}
              wd={"30"}
              hg={"30"}
              className="border-2 border-black rounded-xl"
            />
            <div className="flex gap-5">
              <Button
                btntext={"Change"}
                className="border-1 rounded-sm p-1"
                />
              <Button
                btntext={"Remove"}
                className="border-1 rounded-sm p-1"
              />
            </div>
          </div>
        </div>
      <form
        className="flex gap-5 flex-col justify-center"
        onSubmit={handleSubmit(handleCustomSubmit)}
      >
        <div>
          <p>Basic Information</p>
          <div>
            <Input
              labeltext="Full-Name :"
              type="text"
              inpname="Username"
              place="Enter Name"
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
              {...register("username", { required: "UserName is Required" })}
              />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div>
            <Input
              labeltext="Email"
              type="email"
              inpname="Email"
              place="Enter address here"
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
              {...register("email", { required: "Email Required" })}
              />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              labeltext="Phone(Optional)"
              type="number"
              inpname="phone"
              place="Enter Phone"
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
            />
          </div>
          <div>
            <Input
              labeltext="Country"
              type="select"
              inpname="Country"
              place="Enter Country  "
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
              />
          </div>
           <div>
            <Input
              labeltext="Address line 1"
              type="text"
              inpname="Address"
              place="Enter address"
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
              {...register("address", { required: "Address Required" })}
              />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div>
            <Input
              labeltext="Zip code"
              type="number"
              inpname="Zip"
              place="Enter Zip code"
              className="w-[300px] border-1 border-black-300 rounded-lg px-2 py-2"
              {...register("Zip", { required: "Code Required" })}
              />
            {errors.Zip && (
              <p className="text-red-500">{errors.Zip.message}</p>
            )}
          </div>
          <div className="pt-5 pl-20">
          <Button type={"submit"} btntext={"Apply Changes"} className="border-2 p-2 bg-indigo-600 text-white rounded-lg"/>
          </div>
        </div>
      </form>
    </div>
    <div className="w-[400px] h-[200px] flex flex-col bg-gray-100 gap-5 p-8">
        <p>Danger Zone</p>
        <div className=" flex flex-col gap-4">
            <p>Delete all the things and after deleting nothing will be recovered</p>
            <Button btntext={"Delete Account"} className="bg-red-500 border-1 text-white rounded-lg p-2"/>
        </div>
    </div>
    </div>
    </div>
  </div>
  );
}
