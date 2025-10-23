// src/app/services/page.tsx
export default function About() {
    return (
        <div className="flex flex-col max-w-full mx-auto py-8 pl-2 " role="main" >
            <h1 className="text-5xl font-bold mb-8">About.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold font-serif"><span className="text-red-600">Bitfire Security</span> partners with organizations to build resilient security programs that actually work. <br/> We bring together cross-domain expertise to develop tailored solutions collaboratively. </h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Modern security consulting follows a predictable pattern: assess, recommend, deploy, repeat. Organizations are left with reports and tools, but rarely the sustainable programs they need.
                        We take a different approach. Bitfire works alongside your team to develop security solutions that fit your organization&apos;s specific context, risk profile, and operational reality. Our teams bring cross-domain mastery across governance, technical security, and risk management to deliver lasting solutions.

                        The result? Security programs that are resilient, maintainable, and built to evolve with emerging threats. We&apos;re not interested in maximizing billable hours or pushing trendy services. We are focused on helping organizations build security capabilities that endure long after our engagement ends.
                    </p>
                </div>
            </div>
        </div>

    )
}