export default function Input({type,className,id,name,children,rows,style}) {
    switch (type) {
        case 'input':
            return (
                <input type="text" className={`block w-full px-3 py-2 sm:py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pri-400 focus:outline-none ${(className || "")}`} style={style} id={id} name={name} placeholder={children} />
              )
        case 'textarea':
            return (
                <textarea className={`block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pri-400 focus:outline-none ${className||""}`} style={style} id={id} name={name} rows={rows || 3} placeholder={children} />
            )
        default:
            return <></>
    }
}
