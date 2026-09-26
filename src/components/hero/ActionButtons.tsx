import { BookOpen, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/shrika-eddula", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shrika-eddula/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ShrikaEddula", label: "Twitter" },
  { icon: BookOpen, href: "https://www.goodreads.com/user/show/136154721-shrika-eddula", label: "Goodreads" },
  { icon: Mail, href: "mailto:eddula.shrika@gmail.com", label: "Email" },
];

export const ActionButtons = () => (
  <div className="flex flex-wrap items-center gap-3 pt-4">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        title={link.label}
        aria-label={link.label}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground/80 shadow-sm transition-[color,background-color,transform] hover:-translate-y-0.5 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <link.icon className="h-5 w-5" />
      </a>
    ))}
  </div>
);
