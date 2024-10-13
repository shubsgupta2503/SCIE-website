import { Component } from 'react'
import OneColorHead from '../../typography/OneColorHead'
import Button from '../../utils/Button'
import { MdAlternateEmail, MdLocationPin } from 'react-icons/md'
import {  AiOutlineShareAlt } from 'react-icons/ai'
import Input from '../../utils/Input'
import Image from 'next/image'
import SocialLinks from '../../special/SocialLinks'
export default class ContactForm extends Component {
    render() {
        return (
            <div className='pt-12' id='contact'>
                <OneColorHead colorInd={[3,6]} className="mb-12 mt-8">CONTACT US</OneColorHead>
                <div className="container my-8 px-6 mx-auto">
                    <section className="mb-32 text-gray-900">
                        <div className="relative overflow-hidden h-[35rem] rounded-xl -z-20" >
                            <Image src="http://drive.google.com/uc?export=view&id=1W10LQ4gTocoWcN9g9YwVC6K3X2uYl_6g" alt='NIT Delhi Campus' fill className='object-cover' style={{ filter: "brightness(0.7)" }} />
                            <div className='bg-pri-500/20 absolute inset-0' ></div>
                            <div className='bg-black/20 absolute inset-0' ></div>
                        </div>
                        <div className="container text-gray-800 px-1 md:px-12">
                            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ marginTop: '-33rem', background: 'hsla(0, 0%, 100%, 0.9)', backdropFilter: 'blur(30px)' }}>
                                <div className="flex flex-wrap">
                                    <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                        <form action="mailto:scie@nitdelhi.ac.in" method="post">
                                            <div className="mb-6">
                                                <Input type='input' name="name" className="rounded sm:rounded-md">Name</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='input' name="email" className="rounded sm:rounded-md">Email</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='input' name="phone" className="rounded sm:rounded-md">Phone</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='textarea' name="message" className="rounded sm:rounded-md">Message</Input>
                                            </div>
                                            <Button className='tracking-widest w-full'>SUBMIT</Button>
                                        </form>
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                                        <div className='flex flex-wrap'>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full px-3 lg:px-6">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-pri-500 text-3xl text-white rounded-md shadow-md hidden sm:flex sm:w-16 sm:h-16 items-center justify-center">
                                                            <MdLocationPin />
                                                        </div>
                                                    </div>
                                                    <div className="grow sm:ml-6">
                                                        <p className="font-bold mb-1">
                                                            Address
                                                        </p>
                                                        <p className="text-gray-600">
                                                            National Institute of Technology Delhi,<br /> Plot No. FA7,Zone P1, GT Karnal Road,<br /> Delhi, 110036
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full px-3 lg:px-6">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-pri-500 text-3xl text-white rounded-md shadow-md w-14 h-14 sm:w-16 sm:h-16 hidden sm:flex items-center justify-center">
                                                            <MdAlternateEmail />
                                                        </div>
                                                    </div>
                                                    <div className="grow sm:ml-6">
                                                        <p className="font-bold mb-1">
                                                            Email
                                                        </p>
                                                        <p className="text-gray-600 hover:text-slate-600 hover:translate-x-1 transition-[transform,color] duration-200 cursor-pointer">
                                                            scie@nitdelhi.ac.in
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-12 grow-0 shrink-0 basis-auto w-full px-3 lg:px-6">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-pri-500 text-3xl text-white rounded-md shadow-md w-14 h-14 sm:w-16 sm:h-16 hidden sm:flex items-center justify-center">
                                                            <AiOutlineShareAlt />
                                                        </div>
                                                    </div>
                                                    <div className="grow sm:ml-6">
                                                        <p className="font-bold mb-3">
                                                            Follow us !
                                                        </p>
                                                        <div className="text-gray-500">
                                                            <div>
                                                                <ul className='flex space-x-5'>
                                                                    <SocialLinks/>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}
