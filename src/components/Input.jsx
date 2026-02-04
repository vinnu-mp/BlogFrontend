import React, { useId } from "react";

const Input = ({
  label,
  type = "text",
  className = "",
  ref, // Pull in the reference
  ...props // Spread operator to capture any additional props
}) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
};

export default Input;

//forwardRef(ref) lets parents control inner DOM elements of child components
//ref is passed from parent to child and attached to input element
//This allows parent components to directly access and manipulate the input element (e.g., focus, value retrieval)
