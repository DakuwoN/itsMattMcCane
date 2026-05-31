// TODO: Add amount of books read and brainstorm a search feature

export default function Books() {
    return (
        <main className="px-80 py-24">

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
                        Books I Have Read
                    </span>
                    <div className="flex-1 h-px bg-border"></div>
                </div>
                <div className="flex gap-1 mb-3">
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                    <span className="w-1 h-1 rounded-full bg-muted mt-1"></span>
                </div>

                <article className="py-2">
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

            </section>




        </main>
    )
}