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
        py-12 
        sm:px-6 
        lg:px-8 
        bg-secondary
      
      "
    >
      <div className="h-full sm:mx-auto sm:w-full sm:max-w-md shadow-none rounded-lg p-4 md:shadow-lg md:shadow-sky-500">
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