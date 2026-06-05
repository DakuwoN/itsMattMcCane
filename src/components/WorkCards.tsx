'use client'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const xPct = (e.clientX - rect.left) / rect.width - 0.5
        const yPct = (e.clientY - rect.top) / rect.height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="border border-border rounded-xl overflow-hidden flex flex-col cursor-pointer"
        >
            {children}
        </motion.div>
    )
}

export default function WorkCards() {
    return (
        <section id="work" className="py-24">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">Selected Work</p>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                <TiltCard>
                    <Link href="https://axasu.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-60 relative">
                            <Image src="/axasu.jpeg" alt="Apple x ASU" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
                        </div>
                    </Link>
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-lg xl:text-xl text-text">Apple @ Arizona State University</h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">Website showcasing Computer Science students at ASU that are passionate about Apple technology and culture!</p>
                        <Link href="https://github.com/DakuwoN/asu-apple-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-accent">
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </TiltCard>

                <TiltCard>
                    <Link href="https://www.asu.edu/research" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-60 relative">
                            <Image src="/project_2.jpeg" alt="Research Assistant Project" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
                        </div>
                    </Link>
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-xl text-text">Research @ Arizona State University</h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">Research conducted at ASU that I turned into a real life project.</p>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-accent">
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </TiltCard>

                <TiltCard>
                    <Link href="https://developer.apple.com/machine-learning/" target="_blank" rel="noopener noreferrer">
                        <div className="w-full h-60 relative">
                            <Image src="/project_3.jpeg" alt="ML/AI Project" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
                        </div>
                    </Link>
                    <div className="flex flex-col gap-3 px-8 py-6">
                        <h2 className="font-serif text-xl text-text">ML/AI Project</h2>
                        <p className="font-mono text-xs leading-relaxed text-muted flex-1">Project based off Apples coreML technology.</p>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-accent">
                            Project Link <ExternalLink size={14} />
                        </Link>
                    </div>
                </TiltCard>

            </div>
        </section>
    )
}