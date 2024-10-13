import { Component } from 'react'
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import MainBlogs from '../../components/main/blogs/MainBlogs';
import { getPostsData } from '../../lib/BlogApi';
import NewArticles from '../../components/main/blogs/NewsArticles';

export default class index extends Component {
  render() {
    return (
      <div>
        <div className=" h-[30vh] sm:h-[40vh] mb-6 relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-4 text-5xl sm:text-6xl md:text-7xl">
            BLOGS
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="5rem"
            src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

          />
        </div>
        <MainBlogs blogs = {this.props.blogs}/>

        {/* News Article column starts from here... */}
        <div className="h-[20vh] sm:h-[34vh] relative flex justify-center items-center text-white/95 my-4 sm:my-16">
          <MainHeading className="relative z-30 mt-4 text-3xl sm:text-6xl md:text-7xl">
            News Articles
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="2rem"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <NewArticles/>
      </div>
    )
  }
}


export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      blogs:allPostsData
    },
  };
}
