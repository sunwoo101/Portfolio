import SectionTitle from "../Components/SectionTitle";

const contacts = [
  {
    label: "Email",
    value: "sun.kim101@outlook.com",
    href: "mailto:sun.kim101@outlook.com",
    icon: "fa-solid fa-envelope",
  },
  {
    label: "GitHub",
    value: "github.com/sunwoo101",
    href: "https://github.com/sunwoo101",
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sunwoo101",
    href: "https://linkedin.com/in/sunwoo101",
    icon: "fa-brands fa-linkedin",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-palette-background">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle>Contact</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-palette-secondary text-lg leading-relaxed">
              I'm open to new opportunities, collaborations, or just a chat.
              Feel free to reach out via email or any of the links below.
            </p>
            <p className="text-palette-secondary text-sm mt-4">
              <i className="fa-solid fa-location-dot mr-2 text-palette-accent" />
              Sydney, Australia
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 p-4 rounded-xl border border-palette-border bg-palette-primary hover:border-palette-accent group transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-palette-background border border-palette-border text-palette-secondary group-hover:text-palette-accent group-hover:border-palette-accent transition-colors">
                  <i className={`${icon} text-base`} />
                </div>
                <div>
                  <p className="text-palette-secondary text-xs mb-0.5">{label}</p>
                  <p className="text-palette-text text-sm font-medium group-hover:text-palette-accent transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
