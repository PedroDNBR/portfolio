import About from "@/components/About";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="w-[1000px]">
      <Menu />
      <Header />

      <main className="flex flex-col gap-16">
        <About />
      </main>
    </div>
  );
}
