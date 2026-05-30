
export default function Resume() {
    return (
        <>
            <main className="px-80 py-24">
                <h1 className="font-serif text-4xl mb-4">Matthew McCane</h1>
                <p className="font-mono text-sm mb-8 text-muted">
                    Download or view my resume here!
                </p>
                <iframe
                    src="/Matthew_McCane_Resume_2026.pdf"
                    className="w-full h-screen rounded-xl border border-border"
                    // sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation-by-user-activation"
                />
            </main>
        </>
    )
}