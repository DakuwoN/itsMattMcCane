import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Project work displayed as cards
// TODO: Add 3D tilt effect to WorkCards using Framer Motion
// TODO: Project Link should open to GitHub and any other click on the card leads to URL
export default function WorkCards() {
    return (
        <section id="work" className="py-24">
            <p className="font-momo text-xs tracking-widest uppercase text-muted mb-8">Selected Work</p>
            <div className="grid grid-cols-3 gap-4">
                <article className="border border-border rounded-xl h-full overflow-hidden flex flex-col hover:-translate-y-4 hover:shadow-lg transition-all duration-300 cursor-pointer">

                    {/*Image*/}
                    <div className="w-full h-60 relative">
                        <Image
                            src="/axasu.jpeg"
                            alt="ASU Apple Club"
                            fill
                            className="object-cover object-center"
                            sizes="(mas-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/*Project title, link and description*/}
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-xl text-text">
                            Apple @ Arizona State University
                        </h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">
                            Website showcasing Computer Science students at ASU that are passionate about Apple technology and culture!
                        </p>
                        <Link
                            href="https://axasu.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono  text-sm text-accent"
                        >
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </article>

                {/*Project title, link and description*/}
                <article className="border border-border rounded-xl h-full overflow-hidden flex flex-col hover:-translate-y-4 hover:shadow-lg transition-all duration-300 cursor-pointer">

                    {/*Image*/}
                    <div className="w-full h-60 relative">
                        <Image
                            src="/project_2.jpeg"
                            alt="Research Assistant Project"
                            fill
                            className="object-cover object-center"
                            sizes="(mas-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/*Project title, link and description*/}
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-xl text-text">
                            Research @ Arizona State University
                        </h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">
                            Research conducted at ASU that I turned into a real life project.
                        </p>
                        <Link
                            href="https://axasu.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono  text-sm text-accent"
                        >
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </article>

                {/*Project title, link and description*/}
                <article className="border border-border rounded-xl h-full overflow-hidden flex flex-col hover:-translate-y-4 hover:shadow-lg transition-all duration-300 cursor-pointer">

                    {/*Image*/}
                    <div className="w-full h-60 relative">
                        <Image
                            src="/project_3.jpeg"
                            alt="ASU Apple Club"
                            fill
                            className="object-cover object-center"
                            sizes="(mas-width: 768px) 100vw, 33vw"
                        />
                    </div>


                    {/*Project title, link and description*/}
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-xl text-text">
                            ML/AI Project
                        </h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">
                            Project based off Apples coreML technology.
                        </p>
                        <Link
                            href="https://axasu.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono  text-sm text-accent"
                        >
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </article>
            </div>
        </section>

    )
}