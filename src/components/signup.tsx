"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { createUser } from "@/utils/users";
import { currentUserEmail } from "@/recoil/state";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function SignupComp() {
  const [currentemail,setcurEmail] = useRecoilState(currentUserEmail)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleClick(){
    const res = await createUser({email:currentemail, password , name})
    if (!res) {
      console.error("Signup failed");
    } else {
      console.log("Signup successful");
      router.push("/home");
    }
  }

  return (
    <div className="flex justify-center align-middle pt-20 ">
      <div className="flex flex-col justify-center align-middle border shadow-2xl p-8 lg:w-96 md:w-80 w-72  gap-8 ">
        <h1 className=" text-4xl font-semibold text-center">Signup</h1>
        <p className=" text-lg font-medium text-center">Please sign up to continue.</p>
        <div className="flex flex-col justify-center align-middle gap-8">
          <div className="flex justify-between">
            <input className=" p-4 border-b w-[45%] rounded-lg" type="text" placeholder="Email" onChange={(e) => setcurEmail(e.target.value)} />
            <input className=" p-4 border-b w-[45%] rounded-lg" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <input className=" p-4 border-b w-80% rounded-lg" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button 
            className=" bg-blue-500 p-4 rounded-lg hover:bg-blue-800" 
            onClick={handleClick}>Submit
          </button>
          
        </div>
        <div className="flex justify-end">
            <button className="px-6 text-blue-800 text-base font-semibold" onClick={()=>router.push("/signin")}>Signin</button>
        </div>
      </div>
    </div>
  );
};