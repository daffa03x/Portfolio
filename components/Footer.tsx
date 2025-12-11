import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
    { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Daffa Permana
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital experiences with passion and code.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
                &copy; {currentYear} My Portfolio. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
