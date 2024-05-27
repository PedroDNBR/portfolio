import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="w-[1000px]">
      <Menu />
      <Header />
    </div>
  );
}
