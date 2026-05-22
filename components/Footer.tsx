'use client';

import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'UMRAH', href: '#umrah' },
    { name: 'TOURS', href: '#tours' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--gold)] border-opacity-30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo */}
          <div>
            <div className="text-[var(--gold)] font-['Cinzel'] text-xl tracking-wider mb-2">
              AL-INFOTECH
            </div>
            <div className="text-[var(--muted)] text-sm">
              Tours and Travels
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--cream)] font-['Cinzel'] text-[11px] tracking-widest hover:text-[var(--gold)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-right">
            <p className="text-[var(--muted)] text-sm italic">
              Trusted by 500+ families across
              <br />
              AP & Telangana
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] text-center">
          <p className="text-[var(--muted)] text-sm">
            © 2025 Al-Infotech Tours and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
