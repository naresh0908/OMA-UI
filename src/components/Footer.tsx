import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#002D72] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <img
              src="/HARTS LOGO.png"
              alt="HARTS Consulting Logo"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              HARTS Consulting partners with organizations to drive measurable
              transformation through data-driven maturity assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/home" className="hover:text-[#008489] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/survey" className="hover:text-[#008489] transition-colors">
                  Take Assessment
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-[#008489] transition-colors">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#008489]" />
                <span>
                  123 Business Avenue, Suite 400
                  <br />
                  London, EC2A 1NT, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#008489]" />
                <span>+44 (0) 20 7946 0958</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#008489]" />
                <span>info@hartsconsulting.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008489] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008489] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-[#008489] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#008489] transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#008489] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} HARTS Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
