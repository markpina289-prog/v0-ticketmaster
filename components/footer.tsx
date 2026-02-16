import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  "Your Account": ["Sign In", "Register", "My Tickets", "My Events", "Account Settings"],
  Discover: ["Concerts", "Sports", "Arts & Theater", "Family", "Deals & Offers"],
  Help: ["Help Center", "FAQ", "Contact Us", "Purchase Policy", "Accessibility"],
  About: ["About Us", "Careers", "Press", "Partners", "Developers"],
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#02122b]" role="contentinfo">
      <div className="mx-auto max-w-[1400px] px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="hsl(211, 97%, 44%)" />
                <path d="M10 12h12v2H10zM10 16h8v2h-8zM10 20h10v2H10z" fill="white" />
              </svg>
              <span className="text-lg font-bold text-foreground tracking-tight">ticketmaster</span>
            </div>
            <p className="mb-4 text-xs text-muted-foreground leading-relaxed max-w-xs">
              Your trusted source for live event tickets. Verified tickets, secure checkout, and unforgettable experiences.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-3 text-xs font-semibold text-foreground uppercase tracking-wider">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {'2026 Ticketmaster Clone. Built for educational purposes only.'}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
