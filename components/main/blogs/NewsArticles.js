import { Component } from 'react'
import News from '../../../data/newsArticles.json'
import Card from './Card'
export default class NewArticles extends Component {
    render() {
        return (
            <div className='flex items-stretch flex-wrap justify-center gap-x-6 gap-y-6'>
                {News.map(elem=>
                <Card key={elem.link} {...elem} extLink = {true}/>  
                    )}
                
            </div>
        )
    }
}
