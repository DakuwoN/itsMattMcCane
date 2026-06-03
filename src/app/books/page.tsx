// TODO: Add better dividers between the books I have read and a search feature

export default function Books() {
    return (
        <main className="px-6 md:px-24 lg:px-80 py-24">

            <h1 className="font-serif text-5xl mb-16">Books</h1>

            {/*Currently reading*/}
            <section className="mb-16">

                {/*Divider content*/}
                <div  className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs tracking-widest uppercase text-muted mb-8">Currently Reading</span>
                    <div className="flex-1 h-px bg-border"></div>
                </div>
                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>



                <article className="py-2">
                    <h3 className="font-serif text-2xl text-text mb-1">The Design of Everyday Things</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Don Norman</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">
                            Summary
                        </summary>
                        <p>
                            I am reading this book to compliment my class FSE100: Introduction to Engineering. This book
                            goes deep into the thinking behind engineering design.
                        </p>
                    </details>
                </article>

            </section>

            {/*Want to read*/}
             <section className="mb-16">

                 {/*Divider content*/}
                 <div  className="flex items-center gap-4 mb-6">
                     <span className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
                         Books I Want to Read
                     </span>
                     <div className="flex-1 h-px bg-border"></div>
                 </div>
                 <div className="flex gap-1 mb-3">
                     <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                     <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                     <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                 </div>

                <article className="py-2">
                    <h3 className="font-serif text-2xl text-text mb-1">Elon Musk</h3>
                    <p className="font-mono text-xs text-muted">by Walter Isaacson</p>
                </article>
             </section>

            {/*Books I've read*/}
            <section>

                {/*Divider content*/}
                <div  className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
                        Books I Have Read (13)
                    </span>
                    <div className="flex-1 h-px bg-border"></div>
                </div>
                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Einstein</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Walter Isaacson</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Walter Isaacson is one of the best biographers. He takes us deep inside the life of Albert
                            Einstein. Many people know about the Theory of Relativity, but few know about the struggles
                            and failures that Einstein endured. Albert Einstein mostly failed throughout his lifetime,
                            as he would tell it, but he never gave up, and when you keep trying, all it takes is once
                            opportunity to make history. Shockingly surprising details are revealed about Einsteins
                            lifestyle, that I was not aware of, great read.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Source Code</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Bill Gates</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Bill Gates goes deep into his childhood and early struggles with elementary school, playing
                            football, going hiking, growing up in Seattle. His parents were a great influence on his
                            success, it is less technical and more about his life, it sheds light on the struggles he
                            endured and overcame. I think people have this general misconception that Bill Gates
                            had everything handed to him, and Source Code will show a different story.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">The Coming Wave</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Mustafa Suleyman</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Interesting book where Mustafa who is the head of Microsoft AI goes into detail about
                            Artificial Intelligence, from ethics, architecture, its beginnings and where we are today.
                            I believe Mustafa has a very optimistic and dreamy mentality towards AI, which in turns,
                            creates opportunity for the impossible. This book taught me to have a strong imagination in
                            order to create possibilities.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Why We Sleep</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Matthew Walker, PhD</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            One of my favorite books, Dr. Walker dives deep into the mysterious question as to why do
                            we sleep? I learned so much insightful reasons on the importance of getting 8 hours of sleep
                            as well as the negative outcomes related to a lack of sleep.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">dopamine nation</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Anna Lembke, MD</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Anna Lembke understands dopamine like no other human I have encountered. She explains how
                            dopamine in our current era is being abused on a daily basis by almost all organizations,
                            including tech companies, hospitals, sports etc. This issue is on going and needs to be
                            addressed, as dopamine should be regulated by our bodies and not controlled. Especially in
                            our youth.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Monster</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Sanyika Shakur aka Kody Scott</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            I was born into a gang riddled environment as a child. Walking to and from school just to
                            get inside my apartment with my older brother and mother was frightening. I read this book
                            to try and understand the gang life, as I never understood it, and always disliked gangs.
                            Kody Scott was a documented gang member from Los Angeles, who goes into his upbringing and
                            how and why he joined the crips. He served lots of jail time and changed his life, it was
                            a great read, and now I understand how gangs work.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>


                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">the Innovators, how a group of hackers, geniuses,
                        and geeks created the digital revolution
                    </h3>
                    <p className="font-mono text-xs text-muted mb-4">by Walter Isaacson</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            One of the greatest computer science books I have ever read. One of my favorite biographers,
                            Walter Isaacson, goes into detail to explain the evolution of computing. Starting back in
                            Europe with Charles Babbage and Ada Lovelace. All the way up to Steve Jobs and Bill Gates. I
                            learned about Alan Turing and how each generation grew from previous generations to what
                            we have today in computing.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Negative Self-Talk & How to Change It</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Shad Helmstetter, PhD</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            I think all people deal with this throughout their life, some more often, the conscious
                            conscious thought of speaking bad about yourself or being pessimistic about a particular
                            situation. This book by Dr. Helmstetter will give you the tools to change that. What we say
                            our brain processes this as truth, it does not know joking. It is important to speak
                            positively about situations in your life, and when things are bad, you can frame it in such
                            a way that is not harming your brain. I recommend this book to everyone!
                        </p>
                    </details>
                </article>


                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Atomic Habits</h3>
                    <p className="font-mono text-xs text-muted mb-4">by James Clear </p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Very popular book during its release. Atomic Habit explains how our habits shape our lives.
                            James goes into detail teaching readers how to create good habits, eliminate the bad ones,
                            staying organized, and writing down your daily routines. Well regarded book, I enjoyed it.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Prepared</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Diane Tavenner</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            I love children, so I had to read this book. There is no real good book on being a parent,
                            as you learn these things through life lessons. Diane gives us a blueprint that can help
                            our children be prepared for the future ahead. I really enjoyed her mindset on how education
                            could be improved in our current school systems.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Can't Hurt Me</h3>
                    <p className="font-mono text-xs text-muted mb-4">by David Goggins</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            The strongest mind and work ethic that I have ever read is this book by David Goggins. A
                            retired Navy Seal alongside other military expeditions. Mr. Goggins tells his story from
                            a rough childhood, all the way to passing the difficult Navy Seals bootcamp. David works
                            so hard and develops a mental discipline that is unmatched. From losing weight, to broken
                            bones, to rejections, to facing racism, nothing has really phased him, and he is still going
                            creating new goals and knocking these goals off the list. One of my greatest inspirations!
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Educated</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Tara Westover</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            Tara Westover, a very misunderstood individual, someone who was not your typical straight A
                            Ivy League student. Her persistence and strength catapulted her to the top in the classroom.
                            It is a very inspirational book for the academic readers. Reading this book will inspire you
                            to overcome anything in the classroom.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">Idea Man</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Paul Allen</p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            One of my favorite Computer Scientist and programmers of all time. Paul Allen, co founder
                            of Microsoft, talks about his story of growing up in Seattle and founding Microsoft. Paul
                            was an avid reader, brilliant mathematician, and just a superb human being. He talks about
                            his differences with Bill Gates, his love for sports, Jimmi Hendrix and music, and AI. Paul
                            was so forward thinking, that he created a chatbot in the 1970's similar to what we use
                            today, it was just not as sophisticated. I really miss Paul Allen and he lead a great life.
                            Thankful for his contributions to all the fields he's helped shape.
                        </p>
                    </details>
                </article>

                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
                    <span className="text-muted text-2xl block mb-3" style={{ color: '#000000' }}>◆</span>
                    <h3 className="font-serif text-2xl text-text mb-1">No Easy Day</h3>
                    <p className="font-mono text-xs text-muted mb-4">by Mark Owen and Kevin Maurer </p>
                    <details className="font-mono text-sm text-muted leading-relaxed cursor-pointer">
                        <summary className="hover:text-text transition-colors duration-200 w-fit">Summary</summary>
                        <p className="font-mono text-sm text-muted leading-relaxed mt-4 max-w-2xl">
                            No Easy Day describes the lead up to the finding and assassination of Osama Bin Laden. The
                            book was really similar to the movies they released for this even. All praises go to the
                            CIA operative who tracked him for over 20 years and after his capture retired. The task was
                            daunting and filled with more failures than success. The Navy Seals operation also did not
                            execute according to plan, but Navy Seals are the best at adapting to the worst of situations
                            and turning that situation into a positive. This book is really deep, good for American
                            history.
                        </p>
                    </details>
                </article>

            </section>




        </main>
    )
}