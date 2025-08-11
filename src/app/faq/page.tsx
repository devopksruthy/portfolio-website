import Image from "next/image";

export default function Faq() {
   return (
      <div className="bg-white my-16 rounded-lg p-4 shadow-md shadow-cyan-800/50 hover:shadow-xl flex flex-col-2  md:w-[60%] m-auto">
         <div className="w-[40%] m-auto">
            <Image src="/user.webp" alt="Profile image" className="" width={800} height={800} />
      
         </div>
         <div className="w-[60%] p-4">
          
            I began my journey as a Software Engineer in 2019, focusing on frontend and UI development—a role that has since defined my passion and growth in tech.Getting Started Fresh into the industry, I immersed myself in the web ecosystem: building interfaces with HTML, CSS, and progressing into frameworks like Vue.js, React.js, and even AngularJS on a beginner level.
             I rounded out my styling skills with Tailwind CSS, Bootstrap, and custom CSS, building UI features that felt polished and responsive.
            </div>
 
      </div>
   );
}