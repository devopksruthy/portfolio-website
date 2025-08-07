import React, { FC } from 'react';

interface ExperienceProps {

}

const Experience: FC<ExperienceProps> = ({ }) => {
    return (

        <div className='p-10'>
            <h2 className="text-7xl my-8 text-center">
                <span className="text-cyan-800">E</span>xperience
            </h2>
            <h3 className='text-xl font-bold'>Software Engineer : Grapelime Innovations</h3>
            <div className='flex flex-row'>
                <span>Februvary 2019</span> -
                <span>April 2023</span>
            </div>
            <p className='mt-8'>I began my journey as a Software Engineer in 2019, focusing on frontend and UI development—a role that has since defined my passion and growth in tech.Getting Started Fresh into the industry, I immersed myself in the web ecosystem: building interfaces with HTML, CSS, and progressing into frameworks like Vue.js, React.js, and even AngularJS on a beginner level. I rounded out my styling skills with Tailwind CSS, Bootstrap, and custom CSS, building UI features that felt polished and responsive.Embracing the Frontend Path UI development became my specialty. Working on forms, dynamic components, layout systems, and responsive interfaces helped me build a deep appreciation for clean, thoughtful design. At times, it felt overwhelming—learning new frameworks, debugging edge cases—but pushing through those moments sharpened my technical abilities and perseverance, similar to how many developers recount tackling early career challenges. Contrary to popular belief.
            </p>
        </div>
    );
};

export default Experience;