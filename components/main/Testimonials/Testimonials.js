import OneColorHead from "../../typography/OneColorHead"
import Slide from "./Slide"
import ttmonials from "../../../data/testimonials.json"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { Component } from 'react'

export default class Testimonials extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  next = () => {
    this.setState(state => {
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    });
  };

  prev = () => {
    this.setState(state => {
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    });
  };
  render() {
    const { currentImageIndex } = this.state
    return (
      <div className="my-12">
        <OneColorHead colorInd={[3, 6]} className="my-8 mb-16">TESTIMONIALS</OneColorHead>
        <div className="w-9/12 mx-auto">
          <Carousel
            selectedItem={currentImageIndex}
            interval={3000}
            showThumbs={false}
            infiniteLoop={true}
            swipeable={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            stopOnHover={false}
            transitionTime={700}
          >
            {ttmonials.map(elem => (
              <div key={elem.name} className="flex items-stretch justify-center w-full h-full" >
                <div className="max-w-[600px] h-fit text-center">
                  <Slide {...elem} />
                </div>
              </div>
            ))}
          </Carousel>
          <div className="flex justify-center space-x-4 my-12" >
            <button onClick={this.prev} disabled={currentImageIndex == 0} className="bg-gray-400 hover:bg-gray-500/80 transition-colors disabled:opacity-70 disabled:hover:bg-gray-400 p-3 rounded-full text-xl text-white">
              <BiLeftArrow />
            </button>
            <button onClick={this.next} disabled={currentImageIndex == ttmonials.length - 1} className="bg-gray-400 hover:bg-gray-500/80 transition-colors disabled:opacity-70 disabled:hover:bg-gray-400 p-3 rounded-full text-xl text-white">
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
