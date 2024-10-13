import Image from 'next/image'
import { Component } from 'react'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Contact from '../../components/main/Contact/ContactForm'
export default class index extends Component {
    render() {
        return (
            <div>
                <div className='h-[85vh] relative flex justify-center items-center text-white/95'>
                    <MainHeading className='relative z-30 mt-20 text-3xl sm:text-6xl md:text-7xl'>CONTACT US</MainHeading>
                    <TopImage gradient={true} gradientHeight="7rem" src="http://drive.google.com/uc?export=view&id=1voqwlbeZcmAqBZ9PGM_SBxgt38UPB4Dz" imgStyle={{ filter: "saturate(1)" }} />
                </div>
                <div className='flex gap-x-8 mt-12 my-4 w-11/12 sm:w-9/12 mx-auto'>
                    <div>
                        <iframe className='rounded-tl-none rounded-br-none rounded-lg ring-2 ring-pri-200 ring-offset-2 ring-offset-white' width="500" height="600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7502938351527!2d77.13136727980704!3d28.816514289837784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1674646220049!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className='p-8 flex flex-col text-center justify-center items-center gap-y-2 ring-2 ring-pri-200 rounded-lg bg-pri-25 ring-offset-2 ring-offset-white rounded-tr-none rounded-bl-none'>
                        <div className='w-48 h-48 overflow-hidden rounded-full'>
                            <Image className='w-56 object-cover' src={"http://drive.google.com/uc?export=view&id=18yBZWhBat0s2PmC0TPAxJx3ciI-VWXer"} width={300} height={300} />
                        </div>
                        <div className='text-lg font-semibold text-stone-700'>Dr Anmol Ratna Saxena</div>
                        <div>Faculty Incharge, Startup Centre For Innovation And Entrepreneurship</div>
                        <div className='my-2 text-pri-600 font-semibold'>startup@nitdelhi.ac.in</div>
                        <div className='flex'>

                            <div className='w-1/2 flex gap-y-6 flex-col justify-center items-center'>
                                <BsFillTelephoneFill className='inline text-4xl text-pri-400' />
                                <span>
                                    011-3386-1183
                                </span>
                            </div>
                            <div className='w-1/2 flex gap-y-6 flex-col justify-center items-center'>
                                <MdLocationOn className='inline text-4xl text-pri-400' />
                                <p>
                                    National Institute of Technology
                                    Plot No. FA7,Zone P1,
                                    GT Karnal Road, Delhi-110036
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <Contact/>
            </div>
        )
    }
}
