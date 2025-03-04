export default function Main() {  
  return (
    <main className="grid md:grid-cols-2 gap-8">
      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">About</h2>
	<p> My name is Anrey Wang, and I am a Licensed Professional Counselor. I provide existential therapy for adult individuals in Oregon, via secure video conferencing.</p>
	<p> I practice with authenticity, discerning attention, and a deep commitment to counseling excellence. I also identify as intellectually gifted and may be a good fit for other intellectually gifted individuals. </p>
      </section>
      
      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Fees</h2>
      <p> A typical 60-minute session costs $240. Sessions can also be prorated at $24 per 6 minute increment.</p>    
      <p> I do not take health insurance, do not offer a sliding scale, and do not provide superbills or statements for out-of-network insurance billing. </p>
      </section>

      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Terms</h2>
	<p> By law, clients have a right to a good faith estimate of expected costs at scheduling and upon request.</p>
	<p>Clients are also subject to certain <a href="#" target="_blank">privacy practices</a>.</p>
	<p>See here for my professional disclosure and complete terms and conditions.</p>
      </section>

      <section className="flex flex-col gap-4">
	<h2 className="text-xl font-semibold">Contact</h2>
	<p><strong>I am not currently accepting new clients.</strong></p>
	<p>If necessary, I can be reached by email at anrey<span className="hidden">I</span>@whole<span className="hidden">love</span>presencecounseling<span className="hidden">spam</span>.com.</p>
	<p>If you are in a crisis, please <em>do not</em> contact me. Instead call or text <a href="tel:988">9-8-8</a> or visit the <a href="https://988lifeline.org/"target="_blank">988 Lifeline website</a>.</p>
      </section>



    </main>
  )
}
