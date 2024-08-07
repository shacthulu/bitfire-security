// src/app/services/page.tsx
export default function Services() {
    return (
        <div className="flex flex-col max-w-full mx-auto py-8 pl-2" style={ { scrollbarGutter: 'stable both-edges' } }>
            <h1 className="text-5xl font-bold mb-8">Services.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Compliance and Risk Management</h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Navigate the complex landscape of cybersecurity compliance with confidence. Our expert team delivers
                        comprehensive assessments tailored to your industry&apos;s regulatory requirements, including PCI DSS, HIPAA,
                        GDPR, and more. We don&apos;t just identify gaps. We provide actionable strategies to mitigate risks and
                        strengthen your overall security posture. With robust metrics, reporting, and dashboards, you&apos;ll stay ahead
                        of evolving regulations and threats, turning compliance from a challenge into a competitive advantage.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold ">Strategy and Consulting</h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Elevate your cybersecurity strategy with Bitfire&apos;s seasoned executive advisors. We bring boardroom-level
                        insights to your security initiatives, aligning them with your business objectives for maximum impact. Our
                        consultants have built, led, and transformed security programs across various industries, including multiple
                        Fortune 100 companies. From developing robust security programs to creating clear, actionable roadmaps, we
                        empower your organization to make informed decisions that drive long-term security and business success.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Advanced Security Solutions</h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Transform your security vision into reality with Bitfire&apos;s expert engineering and technical services. We
                        specialize in designing and implementing cutting-edge security solutions tailored to your unique
                        environment. Whether it&apos;s secure-by-design implementations, custom automation, or complex integrations, our
                        team ensures seamless deployment and optimization. We excel in transforming your existing technologies,
                        skillsets, and processes. Our services include DevSecOps practices, advanced technology systems, custom
                        integrations, architecture, and bespoke security solution development. We provide innovative answers to your
                        most challenging security problems.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Operational Support and Training</h2>
                </div>
                <div className="space-y-4 mb-10 text-slate-700">
                    <p>
                        Supercharge your program&apos;s ability to deliver with Bitfire&apos;s flexible support and resourcing solutions. We offer a range of services to enhance your team&apos;s capabilities, including talent aggregation and filtering from regional staffing firms, as well as retainers and fractional talent. Our talent acquisition and screening services help you build a robust internal security team, while our multi-disciplinary &quot;Tiger Teams&quot; tackle complex security projects with precision, delivering unmatched value. With Bitfire, you gain a trusted partner committed to elevating your security program to world-class standards.
                    </p>
                </div>
            </div>
        </div>

    )
}