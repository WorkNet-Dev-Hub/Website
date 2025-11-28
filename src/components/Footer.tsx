import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Security', href: '/security' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Roadmap', href: '/roadmap' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Support', href: '/support' },
        { name: 'Legal', href: '/legal' },
      ],
    },
  ];
  
  return (
    <footer className="bg-surface-light pt-16">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white">
                <span className="text-lg">WN</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Work<span className="text-secondary">NET</span>
              </span>
            </Link>
            <p className="mb-6 text-text-secondary">
              Building the digital highway for modern work infrastructure.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@worknet.com" className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                <span>jaketghill@gmail.com</span>
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-white">
                <Phone className="h-4 w-4" />
                <span>+64 022 307 4818</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Wellington, NZ</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="mb-4 text-base font-semibold">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center border-t border-white/10 py-6 md:flex-row md:justify-between">
          <p className="mb-4 text-center text-sm text-text-secondary md:mb-0">
            &copy; {year} WorkNET. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="rounded-full bg-surface p-2 text-text-secondary transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="rounded-full bg-surface p-2 text-text-secondary transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="rounded-full bg-surface p-2 text-text-secondary transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;