import About from "@/components/Sections/About";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <div className="w-[1000px] my-12">
      <Menu />
      <Header />

      <main className="flex flex-col gap-16">
        <About />
        <Skills />
      </main>
    </div>
  );
}
