import Image from "next/image";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Main from "./Main";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5]" >
      <Header />
      <Main />
      <Footer/>
    </main>
  );
}
