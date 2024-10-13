import { Component } from 'react'
import EventTypes from '../../components/main/Events/EventTypes'
import Divider from '../../components/special/Divider'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'

export default class index extends Component {
  render() {
    return (
      <>
        <div className='h-60 relative flex justify-center items-center text-white'>
            <MainHeading className='relative z-30 mt-20 sm:text-7xl text-6xl'>EVENTS</MainHeading>
            <TopImage gradient = {true} src="http://drive.google.com/uc?export=view&id=1UGupOsEIZ_oqRv6L7b8lZucoO_78cP39" />
        </div>
           <EventTypes/>
           <Divider/>
        </>
    )
  }
}
