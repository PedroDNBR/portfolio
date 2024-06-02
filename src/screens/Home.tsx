import { FC, memo } from "react";
import About from "@/components/Sections/About";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Skills from "@/components/Sections/Skills";
import Projects from "@/components/Sections/Projects";
import WorkXP from "@/components/Sections/WorkXP";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <div className="max-w-[950px] my-8 md:my-12 px-4 mx-auto">
      <Menu />
      <Header />

      <main className="flex flex-col gap-16">
        <About />
        <Skills />
        <Projects />
        <WorkXP />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default memo(Home);
