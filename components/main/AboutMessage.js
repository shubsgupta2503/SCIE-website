import Image from 'next/image'
import { Component } from 'react'
import Divider from '../special/Divider'

export default class AboutMessage extends Component {
    render() {
        return (
            <>
                {/* Directors message */}
                <div className='container mx-auto w-11/12 md:w-9/12'>
                    <h2 className='my-6 mb-12 sm:text-4xl text-3xl font-bold ml-2 text-pri-500 uppercase text-center'>{"Director's "}<span className='text-slate-700'>Message</span></h2>
                    <div className='flex flex-col gap-y-4 md:gap-y-0 md:gap-x-4 gap-x-0 md:flex-row items-center'>
                        <div className='sm:min-w-[20rem] ' >
                            <Image alt='NIT Delhi Director' src="http://drive.google.com/uc?export=view&id=1m28pZPWdKQPOG-9da3vOtCAEv5Ttyt1N" width={300} height={300} className="object-cover w-44 h-44 sm:w-72 sm:h-72 rounded-lg sm:mr-6 mx-auto ring-2 ring-pri-500 ring-offset-2" />
                            <br/><p className="text-center"><strong>Prof. (Dr.) Ajay K Sharma</strong></p>
                        </div>
                        <p className='text-base text-center md:text-left md:text-md'>Greetings and a Warm Welcome to all.
                            Start-up Center for Entrepreneurship and Innovation (SCIE), NIT Delhi, is an entity that aims to instigate entrepreneurial spirits among students. We envision creating a domain of individuals with an entrepreneurial drive by providing a peek into the outside world. Each event contemplates a lesson, a motif of concatenating your ideas with your imagination. We help budding entrepreneurs by offering talks and speaking sessions with affluent and inspirational entrepreneurs, pitching events etc. We also test the depth of knowledge of tech biz enthusiasts by conducting enigmatic quizzes.<br />
                            As a team, we hope to broaden the horizon of our influence and be a part of the force that drives the wave of change, entrepreneurship and innovation.<br />
                            Being part of an institute of national importance, we consider sparking innovation, drive and courage in young minds along with guiding them towards the path of perfection our duty. SCIE aims to do that through its activities.<br />
                            Good Luck and Good Wishes!<br />
                            Jai Hind Jai Bharat!!<br />
                            Prof. (Dr.) Ajay K Sharma</p>
                    </div>
                </div>
                <Divider />
                {/* Faculty Coordinator Message */}
                <div className='container mx-auto w-11/12 md:w-9/12 pb-24'>
                    <h2 className='my-16 sm:text-4xl text-3xl font-bold ml-2 text-pri-500 uppercase text-center'>{"Faculty Coordinator's "}<span className='text-slate-700'>Message</span></h2>
                    <div className='flex flex-col gap-y-4 md:gap-y-0 md:flex-row-reverse items-center'>
                        <div className='sm:min-w-[20rem] ' >
                            <Image alt='NIT Delhi Director' src={"http://drive.google.com/uc?export=view&id=18yBZWhBat0s2PmC0TPAxJx3ciI-VWXer"} width={300} height={300} className="object-cover w-44 h-44 sm:w-72 sm:h-72 rounded-lg sm:mr-6 mx-auto ring-2 ring-pri-500 ring-offset-2" />
                            <br/><p className="text-center"><strong>Dr. Anmol Ratna Saxena</strong></p>
                        </div>
                        <p className='text-base md:text-xl md:text-left text-center pr-8 font-light'>
                            As the faculty incharge of the Startup Cell of our college, I am proud to welcome you to our vibrant and dynamic community. We are committed to fostering a culture of entrepreneurship and innovation among our students, and to providing the resources, mentorship, and networking opportunities they need to succeed.<br />
                            Here, we believe that every student has the potential to be a game changer and hence we help everyone turn their ideas into reality.<br/><br/>Good Wishes!<br/>Dr. Anmol Ratna Saxena<br/>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
