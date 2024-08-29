import React from "react";
import { LoginForm } from "@/components/Forms/LoginForm"
import { SignupForm } from "@/components/Forms/SignupForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function LoginPage() {
  return (
    <>
  <div className=" justify-center flex items-center min-h-screen ">  

    <div className="w-[90%] flex flex-col items-center my-1  border rounded-xl  justify-center py-5 md:w-[500px]  ">
        <div className="bg-brand bg-contain bg-center bg-no-repeat w-[113px] h-[104px] mt-2 mb-6"></div>
        <div className="mt-3">
            <h3 className="text-center font-bold text-2xl">Get Started Today</h3>
            <p className=" text-center font-normal text-[16px]">Create an account or login to access exclusive account benefits</p>
        </div>
        <div className=" w-full px-10 py-5">
        <Tabs defaultValue="login">
  <TabsList className="w-full h-[52px] mb-4 rounded-xl grid grid-cols-2 bg-tab ">
    <TabsTrigger value="login" className="py-2 font-normal text-base">Login</TabsTrigger>
    <TabsTrigger value="signup" className="py-2">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><LoginForm/></TabsContent>
  <TabsContent value="signup"><SignupForm/></TabsContent>
</Tabs>

        </div>
    </div>
  
        </div>
        
        </>)
   
}

export default LoginPage