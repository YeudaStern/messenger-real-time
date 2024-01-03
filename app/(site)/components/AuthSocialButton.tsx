import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
      
        px-4 
        py-2 
        bg-gradient-to-r from-sky-500 via-sky-800 to-sky-700  border-0
        shadow 
        shadow-sky-500 
        
        
        hover:bg-gray-50 
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;