import  { Component } from 'react'
import {GiClapperboard} from 'react-icons/gi'
import {BiBus} from 'react-icons/bi'
import {HiChatAlt2} from 'react-icons/hi'
import  {FaLightbulb,FaMountain} from 'react-icons/fa'
import  {RxRocket} from 'react-icons/rx'
import OutlineButton from '../../utils/OulineButton'
import Link from 'next/link'
export default class EventTypes extends Component {
    events = [
        {"name":"E-gnite",icon:<FaMountain/>,"desc":"E-gnite is the flagship event organized annually by Startup Centre for Innovation and Entrepreneurship (SCIE). It is an entrepreneurial event comprising exciting quizzes, pitching competitions, workshops, interactive sessions, and talk shows along with various cultural and musical shows."},
        {"name":"B-Plan",icon:<FaLightbulb/>,"desc":"To open and develop the new dimensions of critical and analytical thinking skills of future entrepreneurs, SCIE conducts Ideathons at regular intervals to motivate the young minds to always explore business solutions to any problems and to create a startup-related environment in the campus."},
        // {"name":"Startup Expo",icon:<RxRocket/>,"desc":"Initiative of SCIE for entrepreneurs to stand on this platform & showcase the environment their problem solving business"},
        {"name":"Quizzes",icon:<HiChatAlt2/>,"desc":"We offer a unique and exciting way to motivate, inspire, encourage and reward children. The main objective will be to develop in students the ability to think beyond academics, build business-related mindsets and test their knowledge about the latest happenings in the startup world."},
        {"name":"Movie Screenings",icon:<GiClapperboard/>,"desc":"SCIE organises movie nights where we screen films featuring enterpreneurial themes related to innovation, startups and enterpreneurship.This will allow students to learn and explore different aspects of entrepreneurship and innovation in an engaging and entertaining way"},
        {"name":"Excursions",icon:<BiBus/>,"desc":"Explore new destinations and create unforgettable memories with Startup Centre For Innovation and Entrepreneurship (SCIE). Experience local culture, breathtaking landscapes, and unique opportunities for adventure and relaxation"}
    ]
  render() {
    return (
        <div className='max-w-7xl my-6 w-11/12 sm:w-9/12 mx-auto flex justify-center flex-wrap'>
        {this.events.map((elem,ind)=><div key={ind} className="max-w-sm flex items-stretch p-4">
            <div className="flex flex-col space-y-4 items-center justify-center border-2 border-solid border-gray-200 rounded p-4 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-3">
                <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center bg-pri-500 text-white text-2xl sm:text-4xl rounded-lg my-2'>{elem.icon}</div>
                <div className='text-2xl font-bold text-slate-600'>{elem.name}</div>
                <div className='text-center'>{elem.desc}</div>
                {/* <OutlineButton silent={true} className="rounded-xl" style={{fontSize:".8rem",paddingLeft:".5rem",paddingTop:".4rem",paddingRight:".5rem",paddingBottom:".4rem"}}><Link href="/commingsoon">Read More</Link></OutlineButton> */}
            </div>
            
        </div>)}
    </div>
    )
  }
}
