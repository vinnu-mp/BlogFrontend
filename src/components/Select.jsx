import React, { useId } from "react";

const Select = ({ options, label, className = "", ref, ...props }) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium text-gray-800">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((optn) => (
          <option key={optn} value={optn}>
            {optn}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
