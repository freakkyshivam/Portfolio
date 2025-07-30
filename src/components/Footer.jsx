import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Shivam Chaudhary</h3>
            <p className="text-slate-300 mb-4">
              reative Frontend Developer focused on building clean, responsive, and intuitive user interfaces that enhance user experience and performance..
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/freakkyshivam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-chaudhary-289400357?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://x.com/freakkyshivam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

                  <a
                href="https://www.instagram.com/freakkyshivam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                 <Instagram className="w-5 h-5"/>
              </a>

            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#project" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">© {currentYear} Shivam Chaudhary. All rights reserved.</p>
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;