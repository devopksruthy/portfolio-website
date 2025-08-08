import Projects from "./projects/page";
import Skills from "@/components/skills/skills";
import LandingPage from "@/components/landing-page/landing-page";
import Experience from "@/components/experience/experience";
import Footer from "@/components/shared/footer/footer";
import Faq from "./faq/page";

export default function Home() {
    return (
        <div>
            <LandingPage />
            <Faq />
            <Projects />
            <Skills />
            <Experience />
            <Footer />
        </div>
    );
}
