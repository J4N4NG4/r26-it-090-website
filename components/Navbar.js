"use client";
// Top navigation bar. "use client" is needed because the mobile menu
// opens and closes (that needs state in the browser).
import { useEffect, useState } from "react";
import { navLinks, project } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__badge">{project.groupId}</span>
        </a>
        <button className="navbar__toggle" aria-label="Open menu" aria-expanded={open}
          onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
