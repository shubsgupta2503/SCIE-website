import { Component } from 'react'
import OneColorHead from '../../typography/OneColorHead'
import Slider from './Slider'

export default class Gallery extends Component {
    
    render() {
        return (
            <div id="gallery" className='pt-24 sm:pt-28'>
                <OneColorHead className="mb-24 sm:mb-32 tracking-widest text-4xl sm:text-base" colorInd={[2, 3]}>GALLERY</OneColorHead>
                <Slider />
            </div>
        )
    }
}
