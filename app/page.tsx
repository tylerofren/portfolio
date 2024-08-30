export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-start p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:p-4 text-xl">
                    Tyler Ofreneo
                </p>
            </div>

            <div className="flex flex-col justify-start mb-32 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left lg:p-4">
                <a
                    href="mailto:tylerofreneo@gmail.com"
                    className="group text-md font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
                <a
                    href="https://github.com/tylerofreneo"
                    className="group text-md font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/tyler-ofreneo-6541ba2aa/"
                    className="group text-md font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
                <a
                    className="group text-md font-semibold"
                    rel="noopener noreferrer"
                >
                    Resume{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
            </div>
        </main>
    );
}
