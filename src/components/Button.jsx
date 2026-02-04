export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

//Button component to render a customizable button
//children: content inside the button
//type, bgColor, textColor, className: styling props with default values
//className allows additional custom styles

//...props: spread operator to pass any other button attributes (e.g., onClick)
