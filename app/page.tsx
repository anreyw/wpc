export default function Main() {
  const linkStyle = "text-sky-800 underline decoration-dotted decoration-2 underline-offset-4 hover:bg-sky-50"
  
  return (
    <main className="grid md:grid-cols-2 gap-8">
      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">About</h2>
	<p> My name is Anrey Wang, and I am a <a href="https://www.counseling.org/mental-health-counseling/what-is-counseling" className={linkStyle}>Licensed Professional Counselor</a>. I provide existential therapy to neurospicy and <a href="https://en.wikipedia.org/wiki/Twice_exceptional" className={linkStyle}>twice-exceptional</a> adults in Oregon, via secure video conferencing.</p>
	<p> I practice with authenticity, discerning attention, and a deep commitment to counseling excellence. I also identify as highly gifted and may be an especially good fit for other gifted individuals.</p>
      </section>
      
      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Fees</h2>
      <p> A typical 60-minute session costs $240. Sessions can also be prorated at $24 per 6 minute increment.</p>    
      <p> I do not take health insurance, do not offer a sliding scale, and do not provide superbills or statements for out-of-network insurance billing. </p>
      </section>

      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Terms</h2>
	<p>Clients are subject to certain <a href="/wpc-privacy.pdf" className={linkStyle}>privacy practices</a> and must give informed consent to the <a href="/wpc-terms.pdf" className={linkStyle}>terms and conditions</a> in order to receive services.</p>
	<p>By law, clients are protected from <a href="https://www.cms.gov/medical-bill-rights" className={linkStyle}>surprise medical bills</a> and have the right to receive a good faith estimate of expected service costs at the time of scheduling and upon request.</p>
      </section>

      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Contact</h2>
	<p><strong>I am not currently accepting new clients.</strong></p>
	<p>If necessary, I can be reached by email at anrey<span className="hidden">I</span>@whole<span className="hidden">love</span>presencecounseling<span className="hidden">spam</span>.com.</p>
	<p>If you are in an immediate crisis, please <em>do not</em> contact me. Instead call or text <a href="tel:988" className={linkStyle}>9-8-8</a> or visit the <a href="https://988lifeline.org/" className={linkStyle}>988 Lifeline website</a>.</p>
      </section>
    </main>
  )
}
