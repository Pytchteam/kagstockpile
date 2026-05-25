import { Link } from 'react-router-dom';
import { Hammer, Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-auto">
                <img 
                  src="https://static.wixstatic.com/media/3dc9c0_c2ca1b78a0594a72aa3e1898295b57e6~mv2.jpg" 
                  alt="KAG Stockpile Logo" 
                  className="h-full w-auto object-contain brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">KAG STOCKPILE</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 font-black uppercase tracking-widest max-w-xs">
              Systemized material deployment. Serving the Caribbean via Runaway Bay, St. Ann, Jamaica. Precision in every load.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-blue-600" />
              Digital Registry
            </h4>
            <ul className="flex flex-col gap-5 text-[10px] font-black uppercase tracking-widest">
              <li><Link to="/shop" className="hover:text-blue-500 transition-colors">Material Inventory</Link></li>
              <li><Link to="/huge-savings" className="hover:text-blue-500 transition-colors">Huge Savings</Link></li>
              <li><Link to="/delivery-calculator" className="hover:text-blue-500 transition-colors">Logistics Engine</Link></li>
              <li><Link to="/trade-club" className="hover:text-blue-500 transition-colors">Institutional Access</Link></li>
              <li><Link to="/quote-request" className="hover:text-blue-500 transition-colors">Spec Request</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-blue-600" />
              Directives
            </h4>
            <ul className="flex flex-col gap-5 text-[10px] font-black uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Corporate Ethos</Link></li>
              <li><Link to="/delivery" className="hover:text-blue-500 transition-colors">Delivery Protocol</Link></li>
              <li><Link to="/faq" className="hover:text-blue-500 transition-colors">Site Intelligence</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Communications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-blue-600" />
              Operational HQ
            </h4>
            <ul className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-widest">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span className="leading-relaxed">Main Street, Runaway Bay<br />St. Ann, Jamaica</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+1 876-441-2101</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>SITE.DESK@KAGSTOCKPILE.COM</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-20 bg-white/5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
          <p>© {new Date().getFullYear()} KAG STOCKPILE & HARDWARE SUPPLIES LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link to="/terms" className="hover:text-blue-500 transition-colors">Protocols</Link>
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Cloud</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
