import { Component } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {ImProfile } from 'react-icons/im'
import Image from 'next/image'

export default class TeamCard extends Component {

    render() {
        const { size, pic, name, role, className,linkedin,website } = this.props
        return (
            <div className={`flex flex-col items-center ${className ?? ""}`}>
                <div className='relative groupimg rounded-full'>
                    <div className={`${size == "lg"? "w-32 h-32 sm:w-52 sm:h-52" : size=="xl"?"w-44 h-44 sm:w-64 sm:h-64": "w-28 h-28 sm:w-40 sm:h-40"} overflow-hidden shadow-xl rounded-full m-3 ring-2 ring-pri-600 ring-offset-2 ring-offset-white transition-[box-shadow] duration-300`}>
                        <Image className='transition-[filter] duration-300 group-[img]:group-hover:saturate-150' src={`http://drive.google.com/uc?export=view&id=${pic}`} width={300} height={300} alt={name} />
                    </div>
                </div>
                <h2 className='uppercase font-medium text-center p-1 text-base sm:text-lg tracking-wide text-gray-900'>{name}</h2>
                {role && <h3 className='text-center uppercase text-[0.8rem] sm:text-sm sm:tracking-wider text-gray-800'>{role}</h3>}
                {linkedin && <a href={`http://www.linkedin.com/in/${linkedin}`} target="_blank" rel='noreferrer' className='p-2'>
                            <BsLinkedin className={`${(size =="lg"|| size =="xl") ? "text-2xl sm:text-3xl":"text-xl sm:text-2xl"} text-[#6eb3f7] hover:text-[#0d80f2] transition-colors duration-300`} />
                        </a>}
                {website && <a href={website} target="_blank" rel='noreferrer' className='p-2'>
                            <ImProfile className={`${(size =="lg" || size =="xl")? "text-2xl sm:text-3xl":"text-xl sm:text-2xl"} text-[#6eb3f7] hover:text-[#0d80f2] transition-colors duration-300`} />
                        </a>}
            </div>
        )
    }
}
