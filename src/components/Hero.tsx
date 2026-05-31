import Link from "next/link";
import { GitBranch, Link2 } from "lucide-react";

// Hero section including about me, contact, job title, location, social links
export default function Hero() {
    return (
        <section className="py-24 flex justify-between items-start">

            {/*Left side content* - About me, contact, job title, location*/}
            <div className="flex flex-col">
                <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">Software Engineer/Architect - Austin, TX</p>
                <h1 className="font-serif text-5xl leading-tight tracking-tight mb-8">
                    Building and <br/>
                    <em className="italic text-muted">learning,</em> <br/>
                    passionately.
                </h1>
                <div className="flex flex-col gap-6 font-mono text-sm leading-loose text-text">
                    <p className="font-mono text-lg leading-relaxed text-text  mb-5">
                            I am currently studying and building my skills @ Arizona State University, pursuing a Bachelors of Science in Software Engineering. My interests lie in Distributed Systems,
                        Infrastructure, Architecture and AI. </p>
                    <p className="font-mono text-lg leading-relaxed text-text mb-10">   I plan to complete a Master's Degree in Computer Science and, in the long term, aim to earn a PhD in Philosophy.
                        Outside of my academic pursuits, I enjoy reading, exercising, watching CS2, meeting new people, and learning new things!
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link href="#work" className="bg-black text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-lg hover:opacity-80 transition-colors duration-200">View My Work</Link>
                    <Link href="mailto:mmccane@asu.edu" className="border border-black font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200">Get In Touch!</Link>
                </div>
            </div>

            {/*Right side content - Social links*/}
            <div className="flex flex-col gap-6 pt-2">
                <Link href="https://github.com/DakuwoN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted">
                    <GitBranch size={28}/>GitHub
                </Link>
                <Link href="https://linkedin.com/in/matthewmccane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-muted">
                    <Link2 size={28}/>LinkedIn
                </Link>
            </div>


        </section>

    )
}