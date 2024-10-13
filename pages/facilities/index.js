import React, { Component } from 'react'
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import Card from "../../components/main/blogs/card"


export class facilities extends Component {
  render() {
    return (
      <div>
        <div className="h-[98vh] relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-64 text-3xl sm:text-6xl md:text-7xl">
            Facilities
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="7rem"
            src="./assets/images/website/tieuppage.jpg"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-3 ml-20'>
          <Card heading="Auditorium" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
          <Card heading="Open Air Theature" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
          <Card heading="Facility 3" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
          <Card heading="Facility 4" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
          <Card heading="Facility 5" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
          <Card heading="Facility 6" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" button="More Details"/>
        </div>
      </div>
    )
  }
}

export default facilities