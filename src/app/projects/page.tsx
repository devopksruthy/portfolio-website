import Card from "@/components/shared/card/card";
import { title } from "process";

export default function Projects() {
    const projects = [
        {
            id: '1',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        },
        {
            id:'2',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        },
         {
            id: '3',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        },
         {
            id: '4',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        },
         {
            id: '5',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        },
         {
            id: '6',
            title: 'News Raavan',
            description: 'News listing and transcript creating site.',
            button: {
                label: 'Know more',
                link: '/contact-us'
            },
            image: '/growrk.png'
        }
    ]
    return (
        <div>
            <h3 className="text-7xl text-center my-8"><span className="text-cyan-800">P</span>rojects</h3>
            <div className="mt-10 mt-sm-2 p-4 flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {
                        projects.map((project,index)=> (
                            <Card key={index+title} id={project.id} title={project.title} description={project.description} image={project.image} button={project.button} />
                        )
                        )
                    }
                </div>

            </div>
        </div>
    )
}