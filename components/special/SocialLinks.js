import Socials from '../../data/contacts.json'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
const socials = [
    { icon: <BsFacebook />, link: Socials['facebook'].link },
    { icon: <AiFillInstagram />, link: Socials['instagram'].link },
    { icon: <AiFillLinkedin />, link: Socials['linkedin'].link }
]
export default function SocialLinks() {

    return (
        <>
            {socials.map((elem, ind) => <li key={ind} className="hover:scale-105 transition-[transform,color] text-[1.875em] leading-[2.25em] text-pri-400 hover:text-pri-600 ring-2 ring-pri-200 hover:ring-pri-300 rounded-full p-[0.2em] sm:p-[0.3em]">
                <a href={elem.link} target="_blank" rel='noreferrer'>{elem.icon}</a>
            </li>)}
        </>
    )
}
