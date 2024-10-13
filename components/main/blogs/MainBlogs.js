import { Component } from 'react'
import Card from './Card'
export default class MainBlogs extends Component {
    render() {
        return (
            <div className='flex items-stretch flex-wrap justify-center gap-x-6 gap-y-6'>
                {this.props.blogs.map(elem =>
                    <Card key={elem.id} {...elem} link={`/blogs/${elem.id}`} />
                )}
            </div>
        )
    }
}