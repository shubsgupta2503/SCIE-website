import Image from "next/image";
import { Component } from "react";
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import Card from "../../components/main/blogs/card"


export default class index extends Component {
  render() {
    return (
      <div>
        <div className="h-[98vh] relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-64 text-3xl sm:text-6xl md:text-7xl">
            Our Tie-Ups
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="5rem"
            src="https://images.unsplash.com/photo-1637094410849-96576479b731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 ml-20'>
          <Card heading="Vishlesan I-Hub Foundation " heading2="IIT Patna" src="https://images.indianexpress.com/2022/08/IIT-Patna.jpg"/>
          <Card heading="Technology Innovation Hub - iHub - AWaDH " heading2="IIT Ropar" src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/07/11133801/maxresdefault2.jpg"/>
          <Card heading="Atal Incubation Center " heading2="IIT Delhi" src="https://www.aic-iitd.in/wp-content/uploads/2021/11/First-banner.jpg"/>
        </div>
      </div>
    );
  }
}
