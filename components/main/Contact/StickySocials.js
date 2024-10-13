import  { Component } from 'react'
import Socials from './Socials'
import {AiFillCaretRight,AiFillCaretLeft} from 'react-icons/ai'

export default class StickySocials extends Component {
    state = {
        menu:true
    }
    toggleMenu = ()=>{
        this.setState(state=>({menu:!state.menu}))
    }
    render() {
        return (
            <div className='fixed rounded-tr-xl rounded-br-xl left-0 pl-1 py-2 pr-1 bottom-4 z-30 w-fit bg-pri-200/50 border border-solid border-pri-400/40 backdrop-blur-md transition-transform shadow-inner shadow-black/20' style={{transform :this.state.menu ?"translateX(0)" :"translateX(-3.3rem)"}}>
                <span className='absolute flex justify-center items-center left-full top-8 sm:top-12 cursor-pointer p-[.08rem] sm:p-0.5 py-2 sm:py-4 bg-pri-200/50 backdrop-blur-md text-slate-700/80 shadow-inner shadow-black/20 rounded-tr-xl rounded-br-xl text-sm sm:text-base' onClick={this.toggleMenu}>
                    {this.state.menu?<AiFillCaretLeft />:
                    <AiFillCaretRight />}
                </span>
                <Socials />
            </div>
        )
    }
}
