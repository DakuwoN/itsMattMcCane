import Hero from "@/components/Hero";
import WorkCards from "@/components/WorkCards";

// Entry point to project
export default function Home() {
    return (
        // FIXME: will need to adjust for responsive design
        <main className="px-80">
            <Hero />
            <WorkCards />
        </main>
    )
}