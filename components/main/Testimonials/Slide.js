import { Component } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import Image from 'next/image'
export default class Slide extends Component {
    render() {
        const { name, work, post, pic, words } = this.props
        return (
            <div className='w-full h-full justify-center p-8 flex flex-col gap-y-4 bg-pri-25 rounded-lg border-2 border-solid border-pri-200 pb-12'>
                <div>
                    <p className='text-sm sm:text-base'><ImQuotesLeft className='inline text-pri-600 text-sm sm:text-2xl mb-2 mx-2 font-medium' />{words}<ImQuotesRight className='inline text-pri-600 text-sm sm:text-2xl mb-2 mx-2' /></p>
                </div>
                <hr className='border border-solid border-pri-200/50' />
                <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row items-center gap-x-6'>
                    <div className='w-20 sm:w-24 h-20 sm:h-24'>
                        <Image className='shadow-xl rounded-full' src={`http://drive.google.com/uc?export=view&id=${pic}`} alt={name} width={100} height={100} />
                    </div>
                    <div className='flex flex-col gap-y-1 text-slate-900 text-center sm:text-left'>
                        <h3 className='text-lg sm:text-2xl font-bold my-0.5 sm:my-1 text-pri-500'>{name}</h3>
                        <span className='text-sm sm:text-base'>{work}</span>
                        <span className='text-sm sm:text-base'>{post}</span>
                    </div>
                </div>
            </div>

        )
    }
}
