import React, { Component } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
export default class Card extends Component {
  cutHeading(heading) {
    if (typeof heading === 'string') {
      if (heading.length > 150) {
        return heading.slice(0, 147) + "...";
      }
      else {
        return heading;
      }
    }
    return ""
  }
  render() {
    return (
      <div>
        <div className="w-11/12 mx-auto sm:w-96 h-full outline-2 outline-slate-200 bg-white border border-gray-200 rounded-t-lg hover:shadow-md hover:scale-[0.99] transition-transform pb-3 text-center">
          <div className='groupimg w-full h-32 sm:h-56 rounded-t-lg relative mb-4 overflow-hidden'>
            <Image fill className="object-cover group-[img]:hover:scale-105 transition-transform duration-300" src={this.props.thumbnailUrl} alt={this.props.title} />
          </div>
          <div className="flex gap-y-2 flex-col">
            {this.props.extLink ?
            <a href={this.props.link || "#"} target="_blank" rel='noreferrer' className='hover:underline w-fit mx-auto text-lg sm:text-xl font-semibold sm:font-bold text-gray-700/90 sm:text-gray-700 sm:tracking-wide'>
              <h5 className='px-2'>{this.props.title}</h5>
              </a>
              : <Link href={this.props.link || "#"} className='hover:underline w-fit mx-auto text-lg sm:text-xl font-semibold sm:font-bold text-gray-700/90 sm:text-gray-700 sm:tracking-wide'>
                <h5 className='px-2'>{this.props.title}</h5>
              </Link>}
            <p className="text-xs sm:text-sm text-gray-700 px-4">{this.props.subheading && (this.cutHeading(this.props.subheading))}</p>
            {this.props.extLink ?
              <a href={this.props.link || "#"} target="_blank" rel='noreferrer' className="inline-flex items-center gap-x-1 px-3 py-2 w-fit mx-auto text-xs sm:text-sm font-medium text-center text-white bg-pri-600 my-2 transition-colors duration-200 rounded-sm hover:bg-pri-400 focus:ring-4 focus:outline-none focus:ring-pri-300">
                <span>
                  Read More
                </span>
                <BsArrowRight />
              </a> :
              <Link href={this.props.link || "#"} className="inline-flex items-center gap-x-1 px-3 py-2 w-fit mx-auto text-xs sm:text-sm font-medium text-center text-white bg-pri-600 my-2 transition-colors duration-200 rounded-sm hover:bg-pri-400 focus:ring-4 focus:outline-none focus:ring-pri-300">
                <span>
                  Read More
                </span>
                <BsArrowRight />
              </Link>
            }

          </div>
        </div>
      </div>
    )
  }
}
