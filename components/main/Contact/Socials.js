import React, { Component } from 'react'
import SocialLinks from '../../../data/contacts.json'
import Image from 'next/image'
export default class Socials extends Component {
    socials = [
        {
            icon:<Image alt="scie facebook" src="assets/images/website/facebook.svg" width={30} height={30} />, link: SocialLinks['facebook'].link
        },
        { icon: <Image alt="scie instagram" src="assets/images/website/instagram.svg" width={30} height={30} />, link: SocialLinks['instagram'].link },
        { icon: <Image alt="scie linkedin" src="assets/images/website/linkedin.svg" width={30} height={30} />, link: SocialLinks['linkedin'].link },
        // { icon: <Image alt="scie youtube" src="assets/images/website/youtube.svg" width={30} height={30} />, link: SocialLinks['youtube'].link },
    ]
    render() {
        return (
            <ul className={`flex ${this.props.row?"":"flex-col space-y-2"} ${this.props.className??""}`}>
                {this.socials.map((elem, ind) => <li key={ind} className="hover:scale-90 transition-transform rounded-full p-1 sm:p-1.5">
                    <a href={elem.link} target="_blank" rel='noreferrer'>{elem.icon}</a>
                </li>)}
            </ul>
        )
    }
}


