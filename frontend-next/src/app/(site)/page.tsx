import Experience from "@/components/Experience";
import CurratedProjectCards from "@/components/CurratedProjectCards";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="px-8 md:px-48 md:-mt-20 -mt-28">
      <Hero />
      <Experience />
      <CurratedProjectCards />
    </main>
  )
}