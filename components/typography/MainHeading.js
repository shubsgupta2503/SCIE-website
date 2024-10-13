export default function MainHeading({className,children,subheading}) {
  return (
    <div className={`font-bold tracking-widest flex flex-col items-center ${className || ""}`}>
        <span className="relative">
        <span>{children}</span>
        <span className="absolute text-pri-500 top-0.5 left-0.5 sm:top-1 sm:left-1 w-full -z-10">{children}</span>
          </span>
        <span className="text-base sm:text-xl font-medium">{subheading}</span>
    </div>
  )
}
