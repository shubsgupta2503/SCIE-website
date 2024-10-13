import { Component } from 'react'
import CommingSoon from '../../components/special/CommingSoon'
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import Card from "../../components/main/mentor/card"

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="h-[34vh] relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-4 text-3xl sm:text-6xl md:text-7xl">
            Mentors
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="7rem"
            src="https://images.unsplash.com/photo-1645536908932-652fbd998029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwZXJzb24lMjBpY29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-4'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </div>
    )
  }
}
