import React from "react";

const skills = [
    {
        label: 'Html',
        width: '100%'
    },
    {
        label: 'CSS',
        width: '100%'
    }, {
        label: 'Bootstrap',
        width: '100%'
    }, {
        label: 'Tailwind CSS',
        width: '100%'
    }, {
        label: 'Vuejs',
        width: '80%'
    }, {
        label: 'Javascript',
        width: '80%'
    }, {
        label: 'React',
        width: '50%'
    }, {
        label: 'Figma',
        width: '50%'
    },

]

export default function Skills() {
    return (
        <div className="p-10">
            <h2 className="text-7xl my-8 text-center">
                <span className="text-cyan-800">S</span>kills</h2>
            <div className="grid md:grid-cols-4 gap-4 m-auto container">
                {skills.map((skill, index) => (
                    <div key={index+skill.label} className="text-lg my-4">{skill.label}
                        <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                            <div className="bg-white h-2.5 rounded-full dark:bg-cyan-800" style={{ width: skill?.width }}></div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}