export default function Main() {
  const linkStyle =
    "text-sky-800 underline decoration-dotted decoration-2 underline-offset-4 hover:bg-sky-50";

  return (
    <main className="grid md:grid-cols-2 gap-8">
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p>
          {" "}
          My name is Anrey Wang, and I am a{" "}
          <a
            href="https://www.counseling.org/mental-health-counseling/what-is-counseling"
            className={linkStyle}
          >
            Licensed Professional Counselor
          </a>
          . I provide one-on-one existential therapy to adults in Oregon, via
          secure video conferencing.
        </p>
        <p>
          {" "}
          I practice with authenticity, discerning attention, and a deep
          commitment to counseling excellence.
        </p>
        <p>
          I also identify as intellectually gifted and may be a good fit for
          individuals who are: unusually bright, highly sensitive,
          neurodivergent/neurospicy, or{" "}
          <a
            href="https://en.wikipedia.org/wiki/Twice_exceptional"
            className={linkStyle}
          >
            twice-exceptional
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Fees</h2>
        <p>
          I charge for the actual amount of time spent in a session together,
          rounded up to the nearest 6-minute increment. 6 minutes costs $24, and
          so a 60-minute session, for example, costs $240. I do not take health
          insurance and do not provide superbills or statements for
          out-of-network insurance billing.
        </p>
        <p>
          For a limited number of clients on my caseload, I offer a “pay what
          you can afford” reduced fee option.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Terms</h2>
        <p>
          Clients are subject to certain{" "}
          <a href="/wpc-privacy.pdf" className={linkStyle}>
            privacy practices
          </a>{" "}
          and must give informed consent to the{" "}
          <a href="/wpc-terms.pdf" className={linkStyle}>
            terms and conditions
          </a>{" "}
          in order to receive services.
        </p>
        <p>
          By law, clients are protected from{" "}
          <a
            href="https://www.cms.gov/medical-bill-rights"
            className={linkStyle}
          >
            surprise medical bills
          </a>{" "}
          and have the right to receive a good faith estimate of expected
          service costs at the time of scheduling and upon request.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          If you believe my services could be helpful and we might be a good
          fit, please contact me to schedule a free initial consultation.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:anrey@wholepresencecounseling.com"
            className={linkStyle}
          >
            anrey@wholepresencecounseling.com
          </a>{" "}
          <br />
          <strong>Phone:</strong>{" "}
          <a href="tel:+18402008567" className={linkStyle}>
            (840) 200-9567
          </a>
        </p>
        <p>
          If you are in an immediate crisis, please <em>do not</em> contact me.
          Instead call or text{" "}
          <a href="tel:988" className={linkStyle}>
            9-8-8
          </a>{" "}
          or visit the{" "}
          <a href="https://988lifeline.org/" className={linkStyle}>
            988 Lifeline website
          </a>
          .
        </p>
      </section>
    </main>
  );
}
