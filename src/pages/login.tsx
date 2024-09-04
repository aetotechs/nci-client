import React from 'react';
import { LoginForm } from '@/components/forms/LoginForm';
import { SignupForm } from '@/components/forms/SignupForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function LoginPage() {
  return (
    <>
      <div className=" justify-center flex items-center min-h-screen ">
        <div className="w-[90vw] flex flex-col items-center my-1  border rounded-xl  justify-center py-5 md:w-[500px]  ">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[113px] h-[90px] mt-2 mb-6"></div>
          <div className="mb-4">
            <h3 className="text-center font-bold text-2xl mb-2">Get Started Today</h3>
            <p className=" text-center font-normal text-sm px-3">
              Create an account or login to access exclusive account benefits
            </p>
          </div>
          <div className=" w-full px-10 py-5">
            <Tabs defaultValue="login">
              <TabsList className=" h-[40px] grid grid-cols-2   mb-4 rounded-xl  bg-tab ">
                <TabsTrigger value="login" className="py-2 font-normal text-base md:w-[200px] ">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="py-2 w- md:w-[200px]">
                  SignUp
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignupForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
