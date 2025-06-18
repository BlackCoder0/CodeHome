import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  FolderKanban,
  Heart,
  User,
  Mail,
  Handshake
} from "lucide-react";

const navLinks = [
  { label: "项目", href: "#projects", icon: FolderKanban },
  { label: "爱好", href: "#hobbies", icon: Heart },
  { label: "关于", href: "#about", icon: User },
  { label: "联系", href: "#contact", icon: Mail },
  { label: "友链", href: "#friends", icon: Handshake }
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC<{ show: boolean }> = ({ show }) => (
  <div
    className={`fixed top-1/2 left-11 -translate-y-1/2 z-[100] transition-opacity duration-500 ${
      show ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-3">
      <Dock className="flex flex-col gap-6 bg-transparent border-none p-0 h-auto w-auto">
        {navLinks.map(link => {
          const Icon = link.icon;
          return (
            <DockIcon key={link.href} className="bg-transparent group">
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Icon className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform" />
                <span
                  className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none select-none"
                  style={{ transitionProperty: 'opacity, transform' }}
                >
                  {link.label}
                </span>
              </a>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  </div>
);

export default Navbar;