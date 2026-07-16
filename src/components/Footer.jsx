import { Link } from "react-router-dom";
import logo from "@/assets/shield-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* University Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Bridgeview University"
                className="h-16 w-auto"
              />

              <div>
                <h2 className="text-2xl font-bold font-serif">
                  Bridgeview
                </h2>
                <p className="uppercase tracking-[0.3em] text-xs text-amber-400">
                  University
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-7">
              Bridgeview University is committed to academic excellence,
              innovation, and leadership, preparing students to make a lasting
              impact in their communities and across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/programs" className="hover:text-amber-400 transition">
                  Academic Programs
                </Link>
              </li>

              <li>
                <Link to="/admissions" className="hover:text-amber-400 transition">
                  Admissions
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-400">
              Contact Us
            </h3>

            <div className="space-y-4 text-slate-300">
              <p> 100 University Avenue, Nairobi, Kenya</p>
              <p> +254 700 123 456</p>
              <p> admissions@bridgeview.ac.ke</p>
              <p> Mon – Fri | 8:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-400">
              Begin Your Journey
            </h3>

            <p className="text-slate-300 leading-7 mb-6">
              Take the first step toward an exceptional education. Apply today
              and become part of a community dedicated to excellence,
              innovation, and success.
            </p>

            <Link to="/StudyLevel">
              <button className="bg-amber-500 hover:bg-amber-600 text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg transition">
                Apply Now
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Bridgeview University. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-amber-400 transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-amber-400 transition">
              Terms of Use
            </Link>

            <Link to="/accessibility" className="hover:text-amber-400 transition">
              Accessibility
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;