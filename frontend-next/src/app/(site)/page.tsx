import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Experience from "@/components/Experience";
import ProjectCards from "@/components/ProjectCards";
import { IoCaretDown } from "react-icons/io5";
import CurratedProjectCards from "@/components/CurratedProjectCards";
import Hero from "@/components/Hero";
// import { PortableText } from "@portabletext/react";


export default async function Home() {
  return (
    <main className="px-8 md:px-48 md:-mt-20 -mt-28">
      <Hero />
      <Experience />
      <CurratedProjectCards />
    </main>
  )
}