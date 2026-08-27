/**
 * The Figma file leaves "experience" as an empty placeholder box — this is
 * a reasonable structural stand-in (a simple timeline list) until real
 * roles/dates are supplied.
 */
const roles = [
  { title: "Role title", org: "Company / org", dates: "TBD" },
  { title: "Role title", org: "Company / org", dates: "TBD" },
  { title: "Role title", org: "Company / org", dates: "TBD" },
];

export function Experience() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="font-serif italic text-3xl text-ink sm:text-4xl">experience</h2>
      <ul className="mt-10 divide-y divide-line rounded-lg border border-line">
        {roles.map((role, index) => (
          <li key={index} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-sans text-lg font-medium text-ink">{role.title}</p>
              <p className="font-sans text-sm text-blue">{role.org}</p>
            </div>
            <p className="font-sans text-sm text-ink/80">{role.dates}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
