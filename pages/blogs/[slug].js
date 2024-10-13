import { Component } from 'react'
import { getPost, getPostPaths } from '../../lib/BlogApi';
import TopImage from '../../components/special/TopImage';
import styles from '../../styles/blog/Blogpost.module.css'
import MainHeading from '../../components/typography/MainHeading';

export default class Slug extends Component {
    render() {
        return (
            <div>
                <div className='h-[30vh] relative flex justify-center items-center text-white'>
                    <TopImage src={this.props.frontMatter.thumbnailUrl} />
                    <div className='absolute z-30 right-2 bottom-2 font-semibold text-gray-100/80 ' >{this.props.frontMatter.date}</div>
                </div>
                <div className={styles["markdown-body"] + " mt-8 py-2 px-4 mx-auto w-11/12 md:w-10/12 lg:max-w-4xl lg:w-auto"} dangerouslySetInnerHTML={{__html: this.props.blogText}} />
            </div>
        )
    }
}
export const getStaticPaths = async () => {
    const paths = getPostPaths();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const { frontMatter, blogText } = await getPost(slug);
    return {
        props: {
            frontMatter,
            slug,
            blogText
        }
    }
}
