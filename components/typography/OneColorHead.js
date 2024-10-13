import  { Component } from 'react'
import { isArray } from '../../functions/typecheck'

export default class OneColorHead extends Component {
  constructor(props) {
    super(props)
    const colorInd = this.props.colorInd
    if (isArray(colorInd)) {
      this.checkColor = (ind)=>{
          return colorInd.includes(ind)
      }
    }
    else{
      this.checkColor = (ind)=>{
        return colorInd==ind
    }
    }
  }
  render() {
    const {children,className} = this.props
    return (
      <h2 className={className + ' text-gray-900 text-3xl md:text-[2.5rem] font-extrabold text-center'}>
        {
          children.split('').map((elem,ind)=><span key={ind} className={"px-[0.15rem] md:px-1 "+(this.checkColor(ind)?'text-pri-500':'')}>{elem}</span>)
        }
      </h2>
    )
  }
}

