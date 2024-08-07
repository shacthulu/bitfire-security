// src/app/services/page.tsx
export default function About() {
    return (
        <div className="flex flex-col max-w-full mx-auto py-8 pl-2 " >
            <h1 className="text-5xl font-bold mb-8">About.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold font-serif">A CISO founded <span className="text-red-600">Bitfire Security</span> to solve the timeless security program challenges in a novel way. Bitfire leads teams with cross-domain mastery to <span className="text-red-600">develop solutions with organizations</span>, instead of marketing trendy services.</h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Bitfire emerged as a response to the persistent challenges plaguing traditional security programs. Effective security solutions aren&apos;t just implemented for organizations; they&apos;re developed with them. Unlike conventional security firms that often push one-size-fits-all engagements focused on margins, we focus on collaborative, tailored solutions that address the unique needs of each organization we serve. <br/><br/>
                        At the heart of Bitfire Security lies a unique approach that sets us apart in the industry. We assemble teams of experts with cross-domain mastery, capable of tackling complex security challenges from multiple angles. This approach ensures that our clients don&apos;t just receive a security product or service; they gain a partner deeply invested in their success and security posture. At Bitfire, we&apos;re not just protecting systems and data – we&apos;re empowering organizations to build resilient, maintainable, adaptive security programs that evolve with the ever-changing threat landscape.
                    </p>
                </div>
            </div>
        </div>

    )
}