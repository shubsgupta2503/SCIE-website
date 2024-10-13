export default function Button({children,className,style,silent}) {
  return (
    <button className={`bg-pri-500 hover:bg-pri-400 text-white font-bold border-b-4 border-pri-700 hover:border-pri-500 ${silent?"py-3 px-4 text-base":"py-2 px-3 md:text-base md:py-3 md:px-4 text-sm"}  transition-colors duration-200 ${className || ""}`} style={style}>
      {children}
</button>
  )
}
