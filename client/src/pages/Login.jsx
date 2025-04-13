// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/Features/Api/authApi";
// import { Loader2 } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import OnlineImg from "../assets/OnlineLearn.avif";
// const Login = () => {
//   //state variable for login and signup
//   const [signupInput, setSignUpInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginInput, setLoginInput] = useState({ email: "", password: "" });

//   //useRegisterUserMutation And useLoginUserMutation
//   const [
//     registerUser,
//     {
//       data: registerData,
//       error: registerError,
//       isLoading: registerLoading,
//       isSuccess: registerSuccess,
//     },
//   ] = useRegisterUserMutation();

//   const [
//     loginUser,
//     {
//       data: loginData,
//       error: loginError,
//       isLoading: loginLoading,
//       isSuccess: loginSuccess,
//     },
//   ] = useLoginUserMutation();
//   const navigate =useNavigate();
//   //function for changeInputHandler
//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;

//     //if type is signup then signupInput else loginInput
//     if (type === "signup") {
//       setSignUpInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   //function for submitHandler
//   const submitHandler = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     console.log("Submitting:", inputData);  // ✅ Log request payload

//     const action = type === "signup" ? registerUser : loginUser;
//     try {
//         const response = await action(inputData);
//         console.log("API Response:", response);  // ✅ Log response from API
//     } catch (error) {
//         console.log("API Error:", error);  // ✅ Log error details
//     }
// };


//   // display toast
//   useEffect(() => {
//     if (registerSuccess && registerData) {
//         toast.success(registerData.message || "SignUp Successfully");
//     }
//     if (registerError) {
//         toast.error(registerError?.data?.message || "SignUp Failed"); 
//     }
//     if (loginSuccess && loginData) {
//         toast.success(loginData.message || "Login Successfully");
//         // navigate to the home pages
//         navigate("/");
//     }
//     if (loginError) {
//         toast.error(loginError?.data?.message || "Login Failed"); 
//     }
// }, [loginLoading, registerLoading, loginData, registerData, loginError, registerError]);

//   return (
//     <div className="flex items-center justify-center mt-5 min-h-screen bg-cover bg-center"
//     style={{ backgroundImage: `url(${OnlineImg})` }}>
//       <Tabs defaultValue="Login" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="Signup">Signup</TabsTrigger>
//           <TabsTrigger value="Login">Login</TabsTrigger>
//         </TabsList>
//         <TabsContent value="Signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup</CardTitle>
//               <CardDescription>
//                 Create a New Account And Click Signup When You're Done.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={signupInput.name}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Enter Your Name"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={signupInput.email}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Enter Your Email"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={signupInput.password}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Enter Your Password"
//                   required={true}
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button disabled={registerLoading}
//                onClick={() => submitHandler("signup")}>
//                 {registerLoading ? (
//                     <>
//                     <Loader2 className="animate-spin"/> Please Wait
//                     </>
//                 ) : "Signup"}
//                </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="Login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>
//                 Login Your Password Here.After Signup,You'll Be Logged In.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={loginInput.email}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Enter Your Email"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={loginInput.password}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Enter Your Password"
//                   required={true}
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button disabled={loginLoading}
//                onClick={() => submitHandler("login")}>
//                 {loginLoading ? ( <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
//                 </>
//                 ) : "Login"}
                
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Login;


// new code
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/Features/Api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignUpInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerLoading,
      isSuccess: registerSuccess,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginLoading,
      isSuccess: loginSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const submitHandler = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    try {
      const response = await action(inputData);
      console.log("API Response:", response);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    if (registerSuccess && registerData) {
      toast.success(registerData.message || "SignUp Successfully");
    }
    if (registerError) {
      toast.error(registerError?.data?.message || "SignUp Failed");
    }
    if (loginSuccess && loginData) {
      toast.success(loginData.message || "Login Successfully");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError?.data?.message || "Login Failed");
    }
  }, [loginLoading, registerLoading, loginData, registerData, loginError, registerError]);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center px-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Auth Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-xl p-6 w-full max-w-md animate-fade-in-down">
        <Tabs defaultValue="Login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-md">
            <TabsTrigger value="Signup" className="py-2 text-lg font-semibold text-black hover:bg-white/10 transition">
              Signup
            </TabsTrigger>
            <TabsTrigger value="Login" className="py-2 text-lg font-semibold text-black hover:bg-white/10 transition">
              Login
            </TabsTrigger>
          </TabsList>

          {/* Signup Form */}
          <TabsContent value="Signup" className="mt-4">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Create Account</CardTitle>
                <CardDescription className="text-white/80">Fill your details to sign up</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="John Doe"
                    className="rounded-lg bg-white/70 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={signupInput.email}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="john@example.com"
                    className="rounded-lg bg-white/70 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="••••••••"
                    className="rounded-lg bg-white/70 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                  disabled={registerLoading}
                  onClick={() => submitHandler("signup")}
                >
                  {registerLoading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" /> Please Wait
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Login Form */}
          <TabsContent value="Login" className="mt-4">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
                <CardDescription className="text-white/80">Welcome back! Please enter your details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={loginInput.email}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder="john@example.com"
                    className="rounded-lg bg-white/70 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder="••••••••"
                    className="rounded-lg bg-white/70 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                  disabled={loginLoading}
                  onClick={() => submitHandler("login")}
                >
                  {loginLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;


