import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shrika-eddula", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/YOUR_LINKEDIN", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/YOUR_TWITTER", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/YOUR_INSTAGRAM", label: "Instagram" },
    { icon: Mail, href: "mailto:YOUR_EMAIL@example.com", label: "Email" }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/projects"
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/#writing"
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Writing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};