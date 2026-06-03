import Hero from "@/components/Hero";
import WorkCards from "@/components/WorkCards";

// Entry point to project
export default function Home() {
    return (

        <main className="px-6 md:px-24 lg:px-80">
            <Hero />
            <WorkCards />
        </main>
    )
}