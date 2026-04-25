const jobs = [
  {
    company: "Sensata Technologies",
    role: "Growth & Product Marketing",
    period: "Sep 2024 – Present",
    location: "Boston, MA",
    summary:
      "GTM, positioning, and pricing for new sensing products across NA and EU - shaping list-price architecture, regional discounting, and margin programs alongside launch plans.",
  },
  {
    company: "Sensata Technologies",
    role: "Product Marketing Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Attleboro, MA",
    summary:
      "Pricing analysis, competitive teardowns, and willingness-to-pay research for new sensing lines - feeding the pricing model and launch decks.",
  },
  {
    company: "Plug Power",
    role: "Digital Marketing Manager",
    period: "Oct 2022 – Jul 2023",
    location: "Latham, NY",
    summary:
      "Owned MarTech and attribution at Plug - closed-loop tracking from ad spend to SQL, enabling sharper unit-economics and CPL/CPA analysis on hydrogen product lines.",
  },
  {
    company: "Pixis",
    role: "Customer Success & Growth Manager - AI Platform",
    period: "Jul 2021 – Sep 2022",
    location: "Bangalore, India",
    summary:
      "Managed $1.4M media budgets across global D2C clients on an AI adtech platform - budget pacing, ROAS targeting, and pricing/packaging conversations with each account.",
  },
  {
    company: "GenY Medium",
    role: "Senior Digital Marketing Analyst",
    period: "Jan 2020 – Jun 2021",
    location: "Hyderabad, India",
    summary:
      "Owned analytics and feed strategy for D2C clients - Merchant Center / catalog rebuilds plus database audits that improved data accessibility 30%.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Experience
      </h2>

      <ol className="mt-10 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" aria-hidden />

        {jobs.map((j, idx) => (
          <li key={`${j.company}-${idx}`} className="relative pl-10 pb-10 last:pb-0">
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-zinc-100 bg-zinc-950" />
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {j.period} · {j.location}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-100">
              {j.role}
            </h3>
            <p className="text-sm text-zinc-400">{j.company}</p>
            <p className="mt-3 text-[15px] text-zinc-300 leading-relaxed max-w-3xl">
              {j.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
