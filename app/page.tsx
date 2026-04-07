import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const team = [
  {
    name: "David De La Torre",
    role: "President",
    photo: "https://pkt.mit.edu/static/img/headshots/2027/DAD.jpg",
  },
  {
    name: "Alex Li",
    role: "Vice President",
    photo: "https://avatars.githubusercontent.com/u/76791863?s=400&v=4",
  },
  {
    name: "Baxter Barlow",
    role: "Head of Operations",
    photo:
      "https://synthneuro.org/wp-content/uploads/2025/02/barlow_headshot-224x0-c-default.png",
  },
  {
    name: "Yaphet Lemiesa",
    role: "Sponsorship Director",
    photo: "https://pkt.mit.edu/static/img/headshots/2027/YKL.jpg",
  },
];

const tiers = [
  {
    name: "Platinum",
    price: "$15,000",
    color: "#E8E8E8",
    benefits: [
      "Named Challenge Track (you own it)",
      "Opening remarks slot (5 min)",
      "Largest logo placement — all materials",
      "Dedicated table / booth space",
      "Direct resume access to all participants",
      "Social media feature + press mention",
      "4 judge / mentor seats",
    ],
  },
  {
    name: "Gold",
    price: "$10,000",
    color: "#C5A028",
    benefits: [
      "Co-sponsor of a Challenge Track",
      "Logo on all materials (prominent)",
      "Booth / table space",
      "Resume book access",
      "2 judge / mentor seats",
      "Social media mention",
    ],
  },
  {
    name: "Silver",
    price: "$7,500",
    color: "#8A9BB0",
    benefits: [
      "Logo on event materials",
      "Resume book access",
      "1 judge / mentor seat",
      "Social media mention",
    ],
  },
];

const whySponsor = [
  {
    title: "Recruiting Pipeline",
    body: "Direct access to 100 of MIT's most technically ambitious builders — the exact profile you hire for.",
  },
  {
    title: "Brand in the Right Room",
    body: "Your logo in front of the students who will be founding or joining frontier AI companies in the next 3 years.",
  },
  {
    title: "Challenge Track Ownership",
    body: "Platinum sponsors define a challenge track built around your API, infrastructure, or research problem.",
  },
  {
    title: "Mission Alignment",
    body: "CBC is backed by Anthropic. Sponsoring this event aligns your brand with the serious end of AI development.",
  },
  {
    title: "100 MIT Builders",
    body: "Not a general hackathon. Every participant is an MIT student who chose to spend a Saturday building AI products.",
  },
];

const challengeSteps = [
  {
    step: "01",
    title: "Define the Problem",
    body: "You bring a real challenge from your team — an API use case, infra problem, or open-ended research question.",
  },
  {
    step: "02",
    title: "We Recruit for It",
    body: "CBC actively recruits participants with the right skills for your track — ML engineers, systems builders, researchers.",
  },
  {
    step: "03",
    title: "Your Team Judges",
    body: "Your engineers and researchers sit as judges for your track. You evaluate what matters to you.",
  },
  {
    step: "04",
    title: "Real Submissions",
    body: "Teams submit working prototypes — not slides. You walk away with real demos, code, and potential hires.",
  },
  {
    step: "05",
    title: "Post-Event Pipeline",
    body: "CBC shares the full participant resume book. Standout teams can be fast-tracked into your recruiting pipeline.",
  },
];

const timeline = [
  { date: "April 8–10", event: "Sponsor outreach begins" },
  { date: "April 15", event: "Commitment deadline" },
  { date: "April 18", event: "Logos & assets due" },
  { date: "April 23–24", event: "Final event details sent to sponsors" },
  {
    date: "April 26",
    event: "Hackathon — MIT Media Lab, Floor 3",
    highlight: true,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,212,255,0.12)] bg-[rgba(13,27,42,0.85)] backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            className="font-semibold text-sm tracking-wide text-[#F4F4F4]"
          >
            CBC <span className="text-[#00D4FF]">×</span> MIT
          </span>
          <a
            href="mailto:claude@mit.edu"
            className="text-xs font-medium tracking-widest uppercase text-[#00D4FF] hover:text-white transition-colors"
          >
            Become a Sponsor
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,212,255,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF] mb-2">
              April 26, 2026 · MIT Media Lab, Floor 3 · Cambridge, MA
            </p>
            <h1
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              className="font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[#F4F4F4]"
            >
              Claude Builders Club
              <br />
              <span className="text-[#00D4FF]">Hackathon</span>
            </h1>
            <p className="text-xl sm:text-2xl font-light text-[rgba(244,244,244,0.7)] max-w-2xl mx-auto">
              Build at the frontier.
            </p>
            <p className="text-base text-[rgba(244,244,244,0.5)] max-w-xl mx-auto">
              100 MIT students. One day. Real AI problems.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:claude@mit.edu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00D4FF] text-[#0D1B2A] font-semibold text-sm tracking-wide rounded-sm hover:bg-white transition-colors"
                style={{ boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
              >
                Become a Sponsor <span>→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[rgba(0,212,255,0.4)] text-[#F4F4F4] font-medium text-sm tracking-wide rounded-sm hover:border-[#00D4FF] transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #0D1B2A)" }}
          />
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)]"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                About CBC
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl leading-tight"
              >
                We don&apos;t just study AI.
                <br />
                <span className="text-[#00D4FF]">We build it.</span>
              </h2>
              <p className="text-[rgba(244,244,244,0.7)] text-lg leading-relaxed">
                Claude Builders Club is an MIT student organization that provides API
                credits, funding, and mentorship so students can work on frontier AI
                outside the classroom.
              </p>
              <p className="text-[rgba(244,244,244,0.6)] leading-relaxed">
                We exist to give MIT students the resources and community to build real
                AI — not just study it. CBC is officially backed by Anthropic.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Backed by", value: "Anthropic" },
                {
                  label: "Alumni at",
                  value: "OpenAI, Anthropic, DeepMind, and other frontier labs",
                },
                { label: "Event attendees", value: "100 MIT students" },
                { label: "Venue", value: "MIT Media Lab, Floor 3" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.03)] p-4 rounded-sm"
                >
                  <p className="text-xs tracking-widest uppercase text-[#00D4FF] mb-1">
                    {label}
                  </p>
                  <p className="font-medium text-[#F4F4F4]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Track Record ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.02)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                Track Record
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                Proven at Scale
              </h2>
              <p className="text-[rgba(244,244,244,0.6)] max-w-xl mx-auto">
                Our exec team has run MIT&apos;s most recognized technical events. Same
                rigor. Now applied to AI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-[rgba(0,212,255,0.2)] p-8 rounded-sm space-y-4 hover:border-[rgba(0,212,255,0.4)] transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                      className="font-bold text-2xl text-[#F4F4F4]"
                    >
                      HackMIT
                    </h3>
                    <p className="text-[#00D4FF] text-sm mt-1">
                      MIT&apos;s Flagship Hackathon
                    </p>
                  </div>
                  <span className="text-xs tracking-widest uppercase border border-[rgba(0,212,255,0.3)] text-[#00D4FF] px-2 py-1 rounded-sm shrink-0">
                    1,000+ participants
                  </span>
                </div>
                <p className="text-[rgba(244,244,244,0.65)] leading-relaxed">
                  Nationally recognized annual hackathon at MIT. Our exec team has run it
                  from the ground up — operations, sponsorship, logistics, and execution.
                </p>
              </div>

              <div className="border border-[rgba(197,160,40,0.3)] p-8 rounded-sm space-y-4 hover:border-[rgba(197,160,40,0.5)] transition-colors">
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                    className="font-bold text-2xl text-[#F4F4F4]"
                  >
                    MIT PokerBots
                  </h3>
                  <p className="text-[#C5A028] text-sm mt-1">
                    Algorithmic Trading Competition
                  </p>
                </div>
                <p className="text-[rgba(244,244,244,0.65)] leading-relaxed">
                  Backed by the top names in quantitative finance.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Virtu Financial",
                    "Jane Street",
                    "Jump Trading",
                    "Citadel",
                    "DE Shaw",
                    "DRW",
                    "SIG",
                    "Five Rings",
                    "BAM",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 bg-[rgba(197,160,40,0.08)] border border-[rgba(197,160,40,0.2)] text-[#C5A028] rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Sponsor ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                Why Sponsor
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                Five Reasons to Be Here
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whySponsor.map(({ title, body }, i) => (
                <div
                  key={title}
                  className="border border-[rgba(0,212,255,0.12)] p-6 rounded-sm hover:border-[rgba(0,212,255,0.3)] transition-colors group"
                >
                  <p
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                    className="text-5xl font-bold text-[rgba(0,212,255,0.12)] group-hover:text-[rgba(0,212,255,0.2)] transition-colors mb-4 leading-none"
                  >
                    0{i + 1}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                    className="font-semibold text-lg text-[#F4F4F4] mb-2"
                  >
                    {title}
                  </h3>
                  <p className="text-[rgba(244,244,244,0.6)] text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsorship Tiers ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.02)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                Sponsorship Tiers
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                Choose Your Level
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="border p-8 rounded-sm flex flex-col space-y-6"
                  style={{ borderColor: `${tier.color}30` }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                        color: tier.color,
                      }}
                      className="font-bold text-xs tracking-[0.25em] uppercase mb-1"
                    >
                      {tier.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                        color: tier.color,
                      }}
                      className="font-bold text-4xl"
                    >
                      {tier.price}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-[rgba(244,244,244,0.75)]"
                      >
                        <span style={{ color: tier.color }} className="mt-0.5 shrink-0">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:claude@mit.edu"
                    className="block text-center py-3 text-sm font-semibold tracking-wide transition-colors rounded-sm"
                    style={{
                      backgroundColor: `${tier.color}15`,
                      border: `1px solid ${tier.color}40`,
                      color: tier.color,
                    }}
                  >
                    Get in Touch →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenge Track Model ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                The Challenge Track Model
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                You Own the Problem
              </h2>
              <p className="text-[rgba(244,244,244,0.6)] max-w-lg mx-auto">
                Platinum sponsors define a challenge track. Here&apos;s how it works.
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[rgba(0,212,255,0.15)] hidden md:block" />
              <div className="space-y-6">
                {challengeSteps.map(({ step, title, body }) => (
                  <div key={step} className="flex gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 rounded-sm border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.04)] flex items-center justify-center relative z-10">
                      <span
                        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                        className="font-bold text-[#00D4FF] text-lg"
                      >
                        {step}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3
                        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                        className="font-semibold text-lg text-[#F4F4F4] mb-1"
                      >
                        {title}
                      </h3>
                      <p className="text-[rgba(244,244,244,0.6)] leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.02)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                Timeline
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                Key Dates
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {timeline.map(({ date, event, highlight }, i) => (
                <div
                  key={date}
                  className={`flex items-center gap-6 py-5 ${i < timeline.length - 1 ? "border-b border-[rgba(0,212,255,0.1)]" : ""}`}
                >
                  <span
                    className="font-medium text-sm shrink-0 w-32"
                    style={{ color: highlight ? "#00D4FF" : "rgba(244,244,244,0.45)" }}
                  >
                    {date}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: highlight ? "#00D4FF" : "rgba(0,212,255,0.3)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: highlight
                        ? "var(--font-space-grotesk), system-ui, sans-serif"
                        : undefined,
                      color: highlight ? "#00D4FF" : "#F4F4F4",
                    }}
                    className={`font-medium ${highlight ? "text-lg font-semibold" : ""}`}
                  >
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 px-6 border-t border-[rgba(0,212,255,0.2)]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#00D4FF]">
                The Team
              </p>
              <h2
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                className="font-bold text-4xl sm:text-5xl"
              >
                Who You&apos;re Working With
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map(({ name, role, photo }) => (
                <div
                  key={name}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  <div
                    className="relative w-24 h-24 rounded-sm overflow-hidden border border-[rgba(0,212,255,0.2)] group-hover:border-[rgba(0,212,255,0.5)] transition-colors"
                  >
                    <Image
                      src={photo}
                      alt={name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                      className="font-semibold text-[#F4F4F4]"
                    >
                      {name}
                    </p>
                    <p className="text-[#00D4FF] text-sm mt-0.5">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer / Contact ── */}
        <footer className="py-16 px-6 border-t border-[rgba(0,212,255,0.2)] bg-[rgba(0,0,0,0.3)]">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              className="font-bold text-3xl sm:text-4xl text-[#F4F4F4]"
            >
              Ready to sponsor?
            </h2>
            <p className="text-[rgba(244,244,244,0.6)] max-w-md mx-auto">
              Reach out to our sponsorship team. We respond within 24 hours.
            </p>
            <a
              href="mailto:claude@mit.edu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00D4FF] text-[#0D1B2A] font-semibold text-sm tracking-wide rounded-sm hover:bg-white transition-colors"
              style={{ boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
            >
              claude@mit.edu →
            </a>
            <div className="pt-8 border-t border-[rgba(0,212,255,0.1)] text-[rgba(244,244,244,0.35)] text-sm space-y-1">
              <p>
                Claude Builders Club · MIT Media Lab, Floor 3 · Cambridge, MA
              </p>
              <p>April 26, 2026</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
