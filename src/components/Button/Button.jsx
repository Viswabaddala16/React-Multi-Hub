
const Button = ({children,className,type="button",...props}) => {
  return (
    <button 
    type={type} 
    className={`transition-all cursor-pointer active:scale-95 disabled:opacity-50 ${className}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button;