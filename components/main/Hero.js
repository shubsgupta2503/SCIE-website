import Image from 'next/image'
import { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Countdown from '../special/Countdown'

import TopImage from '../special/TopImage'

export default class Hero extends Component {

  render() {
    return (
      <div className='relative w-full h-screen bg-pri-100 md:h-[105vh] flex flex-col gap-y-6 md:gap-y-6 justify-center items-center overflow-hidden'>
        <div className='w-full h-full absolute bg-red-500'>
          {/* social icons from here */}
          <TopImage src="http://drive.google.com/uc?export=view&id=1DXVy73_ILFZkaYfathGXjrvWhYA__B-a" />
        </div>
        <h2 className='pt-28 text-white text-2xl sm:text-3xl md:text-[2.5rem] md:leading-[3.5rem] font-extrabold text-center relative z-20'>Startup Centre For Innovation And Entrepreneurship<br /> NIT DELHI</h2>
        <h3 className='text-white text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-center relative z-20'>We are{" "}
          <span className='text-pri-300'>
            <Typewriter
              words={['Diversifiers', 'Organisers', 'Venturous']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <section className='z-30 flex flex-col items-center'>
          <Image className='rounded-md ring-2 ring-white' src={"http://drive.google.com/uc?export=view&id=1mpRdcQ9Cx5qkoISoRba6MwzMgjp9lvVZ"} alt={"Beats NIT Delhi Event"} width={280} height={280} />
          {/* countdown
          <span>
            <Countdown
            endDate = {new Date(2023,1,9)}
            />
          </span> */}
        </section>

      </div>
    )
  }
}
