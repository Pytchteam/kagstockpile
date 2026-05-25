import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, X, Hammer, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/CartContext';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Separator } from '@/components/ui/separator';

export default function Navbar() {
  const { totalItems, wishlist } = useCart();
  const location = useLocation();
  const wishlistCount = wishlist.length;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Huge Savings', href: '/huge-savings' },
    { name: 'Trade Club', href: '/trade-club' },
    { name: 'Quote', href: '/quote-request' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="h-14 w-auto overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/3dc9c0_c2ca1b78a0594a72aa3e1898295b57e6~mv2.jpg" 
                alt="KAG Stockpile Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">KAG <span className="text-blue-600">STOCKPILE</span></span>
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 flex items-center gap-1">
                <div className="h-px w-2 bg-slate-300" />
                Hardware Supplies Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-blue-600 relative group ${
                  location.pathname === link.href ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-4 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-slate-400 hover:text-blue-600 hover:bg-blue-50"
              render={
                <a href="tel:+18764412101">
                  <Phone size={20} />
                </a>
              }
            />

            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="group relative text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full">
                <Heart size={20} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
                <AnimatePresence>
                  {wishlistCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Badge className="bg-red-500 hover:bg-red-500 h-4 min-w-[16px] flex items-center justify-center p-0.5 text-[8px] border-2 border-white">
                        {wishlistCount}
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 rounded-full h-10 px-5 group">
                <ShoppingCart size={18} className="mr-2 group-hover:text-blue-600 transition-colors" />
                <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">Cart</span>
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Badge className="bg-blue-600 hover:bg-blue-600 h-5 min-w-[20px] flex items-center justify-center p-1 text-[10px] shadow-md border-2 border-white">
                        {totalItems}
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </Link>

            <Button 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[11px] h-10 px-6 rounded-full shadow-lg shadow-blue-500/20"
              render={<Link to="/quote-request">Request Quote</Link>}
            />

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger 
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden text-slate-900 hover:bg-slate-100 rounded-xl">
                    <Menu size={28} />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-[300px] border-l-blue-100">
                <div className="flex flex-col gap-10 mt-12">
                  <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="h-10 w-auto">
                      <img 
                        src="https://static.wixstatic.com/media/3dc9c0_c2ca1b78a0594a72aa3e1898295b57e6~mv2.jpg" 
                        alt="KAG Logo" 
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <span className="text-xl font-black tracking-tighter">KAG STOCKPILE</span>
                  </Link>
                  <div className="flex flex-col gap-6">
                    <Link 
                      to="/wishlist"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-bold uppercase tracking-wider flex items-center justify-between ${
                        location.pathname === '/wishlist' ? 'text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      Wishlist
                      {wishlistCount > 0 && (
                        <Badge className="bg-red-500 rounded-full">{wishlistCount}</Badge>
                      )}
                    </Link>
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-bold uppercase tracking-wider ${
                          location.pathname === link.href ? 'text-blue-600' : 'text-slate-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <Separator className="bg-slate-100" />
                  <div className="flex flex-col gap-4">
                    <Button 
                      className="w-full bg-blue-600 h-14 font-bold uppercase tracking-widest"
                      render={<Link to="/quote-request" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>}
                    />
                    <Button 
                      variant="outline" 
                      className="w-full h-14 border-slate-200"
                      render={
                        <a href="https://wa.me/18764412101" target="_blank" rel="noreferrer">
                          <MessageSquare className="mr-2 text-blue-600" size={20} />
                          WhatsApp Support
                        </a>
                      }
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
