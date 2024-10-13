import { Component } from 'react'
import Image from 'next/image'
export default class TopImage extends Component {
    render() {
        let {imgStyle} = this.props;
        if (!imgStyle) imgStyle = { };
        return (
            <>
                <div className='bg-black/30 absolute inset-0 z-20'></div>
                <div className='bg-pri-800/50 absolute inset-0 z-10'></div>
                {this.props.gradient && <div className='bg-gradient-to-t from-white via-white/50 to-transparent absolute inset-x-0 bottom-0 z-20' style={{height:this.props.gradientHeight??"5rem"}} ></div>}
                <Image src={this.props.src} fill alt="NIT Delhi, Admin Block" style={{objectFit: 'cover' ,...imgStyle}} />
            </>
        )
    }
}
