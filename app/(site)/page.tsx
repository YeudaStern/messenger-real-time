import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div
      className="
        flex 
        h-full 
        flex-col 
        justify-center 
      py-28       
        sm:px-6 
        lg:px-8 
  
      "
    >
      <div className="h-full sm:mx-auto sm:w-full sm:max-w-md mx-4 border border-blue-300 rounded-xl p-4 ">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/logo.png"
          alt="Logo"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            
          "
        >
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  )
}

export default Auth;