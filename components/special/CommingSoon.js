import { Component } from 'react'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'

export default class CommingSoon extends Component {
  render() {
    return (
      <>
        <div className='h-screen relative flex justify-center items-center text-white'>
            <MainHeading className='relative z-30 w-11/12 mx-auto text-center mt-20 text-5xl sm:text-7xl md:text-8xl'>COMING SOON</MainHeading>
            <TopImage src="./assets/images/website/nitdelhibuilding.jpeg" />
        </div>
        </>
    )
  }
}