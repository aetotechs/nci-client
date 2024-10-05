import { LoginForm } from '@/components/forms/LoginForm';
import { SignupForm } from '@/components/forms/SignupForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function LoginPage() {
  return (
    <>
      <div className=" justify-center flex items-center min-h-screen ">
        <div className="w-[90vw] flex flex-col items-center my-1 bg-white  border border-primary/30 rounded-xl  justify-center py-5 md:w-[500px]  ">
          <div className="bg-brand bg-contain bg-center bg-no-repeat w-[73px] h-[66px] md:w-[109px] md:h-[86px] mt-2 mb-3"></div>
          <div className="mb-4">
            <h3 className="text-center font-bold text-xl md:text-[22px] ">Get Started Today</h3>
            <p className=" md:text-center font-normal leading-4 md:leading-5 text-[13px] md:text-sm px-5 md:px-3 text-muted-foreground">
              Create an account or login to access exclusive account benefits
            </p>
          </div>
          <div className=" w-full px-5 md:px-10 py-2">
            <Tabs defaultValue="login">
              <TabsList className="  flex justify-around p-1   mb-4 rounded-[10px]  bg-[#f5f5f5] ">
                <TabsTrigger
                  value="login"
                  className="py-2 font-normal grow  text-sm md:w-[20vw] data-[state=active]:bg-primary data-[state=active]:rounded-[5px] "
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="py-2  md:w-[20vw] grow text-sm data-[state=active]:bg-primary data-[state=active]:rounded-[5px]"
                >
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
