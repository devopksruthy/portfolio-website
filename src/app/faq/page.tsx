import Image from "next/image";

export default function Faq() {
   return (
      <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl flex flex-col-2  md:w-xl m-auto">
         <div className="w-[40%] m-auto">
            <Image src="/profile.webp" alt="Profile image" className="w-6" width={800} height={800} />
         </div>
         <div className="w-[60%]">I began my journey as a Software Engineer in 2019, focusing on frontend and UI development—a role that has since defined my passion and growth in tech.Getting Started Fresh into the industry, I immersed myself in the web ecosystem: building interfaces with HTML, CSS, and progressing into frameworks like Vue.js, React.js, and even AngularJS on a beginner level. I rounded out my styling skills with Tailwind CSS, Bootstrap, and custom CSS, building UI features that felt polished and responsive.Embracing the Frontend Path UI development became my specialty. Working on forms, dynamic components, layout systems, and responsive interfaces helped me build a deep appreciation for clean, thoughtful design. At times, it felt overwhelming—learning new frameworks, debugging edge cases—but pushing through those moments sharpened my technical abilities and perseverance, similar to how many developers recount tackling early career challenges. Contrary to popular belief.</div>
 
      </div>
   );
}