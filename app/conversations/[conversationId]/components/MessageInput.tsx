'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister
} from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  placeholder, 
  id, 
  type, 
  required, 
  register, 
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          font-light
          py-2
          px-4
        
          w-full 
          rounded-full
          focus:outline-none
          bg-secondary/80
          form-input
          sticky-0 
        
          shadow-sm 
          ring-1 
          ring-inset 
          ring-gray-300 
          placeholder:text-gray-400 
          focus:ring-1
          focus:ring-inset 
          focus:ring-sky-600 
          sm:text-sm 
          sm:leading-6

        "
      />
    </div>
   );
}
 
export default MessageInput;