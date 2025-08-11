import Projects from "./projects/page";
import Skills from "@/components/skills/skills";
import LandingPage from "@/components/landing-page/landing-page";
import Experience from "@/components/experience/experience";
import Faq from "./faq/page";
// import Navbar from "@/components/shared/navbar/navbar";

export default function Home() {
    return (
        <div>
             {/* <Navbar /> */}
            <LandingPage />
            <Faq />
            <Projects />
            <Skills />
            <Experience />

        </div>
    );
}
