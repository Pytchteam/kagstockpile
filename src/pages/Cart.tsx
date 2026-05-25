import { useCart } from '@/CartContext';
import { PRODUCTS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems } = useCart();

  const cartItems = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return { ...product, quantity: item.quantity };
  }).filter(item => item.id);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center container py-24 text-center">
        <div className="bg-slate-50 p-12 rounded-full mb-8">
          <ShoppingBag size={80} className="text-slate-200" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Your cart is empty.</h2>
        <p className="text-slate-500 mb-10 max-w-sm">Looks like you haven't added any build materials to your inventory yet.</p>
        <Button size="lg" className="bg-orange-600 h-14 px-10 rounded-full font-bold" render={<Link to="/shop">Start Shopping</Link>} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Your Order Summary</h1>
          <p className="text-slate-500 text-sm mt-2">Manage your material inventory before requesting a quote.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-6 flex gap-6 items-center">
                      <div className="h-24 w-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                        <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-slate-900 truncate">{item.name}</h4>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-slate-400 hover:text-red-500"
                            onClick={() => removeFromCart(item.id!)}
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 bg-slate-50 border p-1 rounded-lg">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 hover:bg-white"
                              onClick={() => updateQuantity(item.id!, item.quantity - 1)}
                            >
                              <Minus size={14} />
                            </Button>
                            <span className="font-bold text-sm w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 hover:bg-white"
                              onClick={() => updateQuantity(item.id!, item.quantity + 1)}
                            >
                              <Plus size={14} />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest leading-none mb-1">Total</p>
                            <p className="text-xl font-black text-slate-900 tracking-tight">${((item.price || 0) * (item.quantity || 0)).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            <Button variant="ghost" className="text-orange-600 font-bold flex items-center gap-2 px-0 hover:bg-transparent" render={<Link to="/shop"><ShoppingBag size={18} />Continue Shopping</Link>} />
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-28 space-y-6">
              <Card className="border-none shadow-2xl p-8 bg-white">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Checkout Highlights</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>Inventory Subtotal</span>
                      <span className="text-slate-900">${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[10px] italic">
                      <span>*Transport, Delivery & Taxes</span>
                      <span>Calc at Quote</span>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-black uppercase tracking-widest text-slate-900">Est. Total</span>
                      <span className="text-4xl font-black text-orange-600 tracking-tighter">${subtotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full h-16 bg-slate-900 hover:bg-orange-600 text-white font-black text-xl rounded-2xl group transition-all" 
                    render={
                      <Link to="/quote-request">
                        Proceed to Quote
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    }
                  />
                </CardContent>
              </Card>

              <div className="space-y-4">
                 <div className="flex gap-4 p-4 bg-white border rounded-2xl">
                    <Truck className="text-slate-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">Site Delivery</h5>
                      <p className="text-[10px] text-slate-500 leading-normal">Coordinated project logistics with site foremen across Jamaica.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 p-4 bg-white border rounded-2xl">
                    <Mail className="text-slate-400 shrink-0" size={24} />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">Invoice Copies</h5>
                      <p className="text-[10px] text-slate-500 leading-normal">Official VAT invoices generated for project accounting.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
