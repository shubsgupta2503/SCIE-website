import { Component } from 'react'
import Image from 'next/image'
export default class Slide extends Component {
    render() {
        const {name,pic,link} = this.props
        return (
            <div className='w-44 h-44 sm:w-64 sm:h-64 bg-pri-25 border-2 border-solid border-pri-200 rounded-xl flex justify-center items-center'>
                <div className='w-10/12 h-5/6 flex flex-col justify-center items-center'>
                    <div>
                        <Image className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg ring-4 ring-offset-4 ring-offset-pri-25 ring-pri-300" src={"http://drive.google.com/uc?export=view&id="+pic} alt={name} width = {128} height = {128} />
                    </div>
                    <div className='text-center my-3'>
                        <h3 className=' text-sm sm:text-base py-1 pt-3 font-medium'>{name}</h3>
                        <a className='text-sm sm:text-base text-pri-500' href={link} target="_blank" rel='noreferrer'>Know Now</a>
                    </div>
                </div>
            </div>
        )
    }
}
