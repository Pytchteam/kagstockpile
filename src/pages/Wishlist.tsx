import { useCart } from '@/CartContext';
import { PRODUCTS } from '@/constants';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useCart();
  
  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* HEADER */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Saved Items</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 italic-none uppercase">Your Wishlist.</h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-xl font-medium leading-relaxed">
            Review your saved building materials and add them to your order when you're ready.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {wishlistProducts.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
              >
                {wishlistProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto text-center py-20"
              >
                <div className="bg-slate-50 w-32 h-32 rounded-[2rem] flex items-center justify-center mx-auto mb-10">
                  <Heart size={48} className="text-slate-200" strokeWidth={1} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">Your wishlist is empty.</h2>
                <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                  Start saving items you need for your project by clicking the heart icon on any product.
                </p>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-12 text-[10px] uppercase tracking-widest rounded-none shadow-2xl shadow-blue-500/20"
                  render={<Link to="/shop">Browse Items</Link>}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 p-12 lg:p-20 relative overflow-hidden rounded-none">
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-6">Ready to build?</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Add your saved items to your cart or request a free quote for your entire project list.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black h-20 px-12 text-[10px] uppercase tracking-widest rounded-none w-full"
                render={<Link to="/shop">Continue Shopping</Link>}
              />
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-slate-950 font-black h-20 px-12 text-[10px] uppercase tracking-widest rounded-none w-full"
                render={<Link to="/quote-request">Request Quote</Link>}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
