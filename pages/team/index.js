import { Component } from 'react'
import MainHeading from '../../components/typography/MainHeading'
import TopImage from '../../components/special/TopImage'
import TeamCard from '../../components/main/Team/TeamCard'
import Divider from '../../components/special/Divider'
import Team from '../../data/team.json'
export default class index extends Component {
    render() {
        return (
            <>
                <div className='h-72 relative flex justify-center items-center text-white'>
                    <MainHeading className='relative z-30 mt-16 md:text-8xl text-4xl' subheading="GET TO KNOW THE TEAM">THE TEAM</MainHeading>
                    <TopImage gradient={true} src="http://drive.google.com/uc?export=view&id=1wF9e0TJSCPbCwMbqaZ9Hp9zcIeNONK1z" />
                </div>
                <main className='w-11/12 flex flex-col space-y-12 sm:w-10/12 mx-auto my-8'>
                    <div>
                        <Heading text="FACULTY INCHARGE" />
                        <div className='mx-auto w-fit my-3'>
                            <TeamCard size="xl" {...Team[0]} />
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <Heading text="FACULTY COORDINATORS" />
                        <Groups members={Team[1]} size="lg" />
                        <Divider />
                    </div>
                    <div>
                        <Heading text="CORE TEAM MEMBERS" />
                        <Groups members={Team[2]} size = "lg" />
                        <Divider />
                    </div>
                    <div>
                        <Heading text="EXECUTIVE MEMBERS" />
                        <Groups members={Team[3]} />
                        <Divider />
                    </div>
                </main>
            </>
        )
    }
}

function Heading({ text }) {
    return (
        <p className='text-2xl sm:text-4xl text-center tracking-wide font-medium text-stone-900 mb-8' style={{ wordBreak: 'break-word' }}>{text}</p>
    )
}

function Groups({ members,size }) {
    return (
        <div className='mx-auto mb-4 flex flex-wrap justify-center items-start gap-x-8 gap-y-8'>
            {members.map((elem, ind) => <TeamCard key={ind} {...elem} size={size} />
            )}
        </div>
    )
}
