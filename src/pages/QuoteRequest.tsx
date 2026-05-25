import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/CartContext';
import { PRODUCTS, PARISHES } from '@/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { FileText, Send, Calendar, MapPin, Phone, User, Construction, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export default function QuoteRequest() {
  const { cart, totalItems } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Quote Request Sent!', {
        description: "Our sales team will contact you within 24 hours.",
      });
    }, 2000);
  };

  const cartProducts = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return { ...product, quantity: item.quantity };
  });

  return (
    <div className="min-h-screen pb-24 bg-white">
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Quote Request</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 italic-none uppercase leading-[0.9]">Get a<br />Quote.</h1>
          <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
            Tell us about your project and what materials you need. Our team will get back to you with a detailed quote and delivery plan.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-slate-100 p-8 sm:p-16 rounded-none">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Your Name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 text-slate-300" size={18} />
                      <Input placeholder="NAME" className="pl-14 h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest placeholder:text-slate-200" required />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 text-slate-300" size={18} />
                      <Input placeholder="+1 876..." className="pl-14 h-14 border-slate-200 rounded-none font-bold placeholder:text-slate-200" required />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">What are you building?</Label>
                    <div className="relative">
                      <Construction className="absolute left-4 top-4 text-slate-300 z-10" size={18} />
                      <Select>
                        <SelectTrigger className="pl-14 h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest">
                          <SelectValue placeholder="Select Project Type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none font-bold uppercase tracking-widest text-[10px]">
                          <SelectItem value="res">Individual Home</SelectItem>
                          <SelectItem value="comm">Business or Commercial</SelectItem>
                          <SelectItem value="ren">Home Renovation</SelectItem>
                          <SelectItem value="cont">Multiple Projects (Contractor)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Parish</Label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-slate-300 z-10" size={18} />
                      <Select>
                        <SelectTrigger className="pl-14 h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest">
                          <SelectValue placeholder="Select Parish" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none font-bold uppercase tracking-widest text-[10px] max-h-[300px]">
                          {PARISHES.map(p => (
                            <SelectItem key={p.parish} value={p.parish?.toLowerCase()}>{p.parish}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Delivery Address or Landmarks</Label>
                  <Textarea placeholder="PLEASE PROVIDE YOUR FULL ADDRESS AND ANY LANDMARKS..." className="min-h-[120px] border-slate-200 rounded-none font-bold uppercase tracking-widest placeholder:text-slate-200 p-6" required />
                </div>

                <div className="space-y-4">
                  <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">When do you need it?</Label>
                  <div className="relative max-w-sm">
                    <Calendar className="absolute left-4 top-4 text-slate-300" size={18} />
                    <Input type="date" className="pl-14 h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Additional Notes</Label>
                  <Textarea placeholder="ANY OTHER DETAILS ABOUT YOUR PROJECT..." className="min-h-[120px] border-slate-200 rounded-none font-bold uppercase tracking-widest placeholder:text-slate-200 p-6" />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.4em] rounded-none shadow-2xl shadow-blue-500/20 transition-all active:scale-[0.99]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "Send Request"}
                  <Send className="ml-4" size={20} strokeWidth={3} />
                </Button>
              </form>
            </Card>
          </div>

          {/* Cart Summary */}
          <div>
            <div className="sticky top-28 space-y-8">
              <Card className="border-slate-100 shadow-2xl rounded-none">
                <CardHeader className="bg-slate-950 text-white rounded-none p-8">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em]">Your Items</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600 text-white border-none rounded-none font-black px-3 py-1 text-[9px]">{totalItems} UNITS</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[500px] overflow-y-auto p-8 space-y-6 bg-slate-50/50">
                    {cartProducts.length > 0 ? (
                      cartProducts.map(item => (
                        <div key={item.id} className="flex gap-6 items-center border-b border-slate-100 pb-6 last:border-0 group">
                          <div className="h-16 w-16 bg-white border border-slate-200 p-1 rounded-none overflow-hidden shrink-0">
                            <img src={item.image} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest truncate mb-1">{item.name}</h4>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.quantity} {item.unit}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-20 text-center">
                        <FileText className="mx-auto text-slate-200 mb-6" size={64} strokeWidth={1} />
                        <p className="text-xs text-slate-400 uppercase font-black tracking-widest italic leading-relaxed mb-6">Your cart is empty.</p>
                        <Button variant="link" className="text-blue-600 font-black uppercase tracking-widest text-[9px] p-0 underline decoration-2 underline-offset-4" render={<Link to="/shop">Go to Shop</Link>} />
                      </div>
                    )}
                  </div>
                  <div className="p-10 bg-slate-950 text-white border-t border-white/5 rounded-none">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Subtotal Est.</span>
                      <span className="text-slate-100 text-3xl font-black tracking-tighter">
                        ${cartProducts.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-6 border border-white/10">
                      <div className="h-1 w-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-relaxed">
                        Please note: Final prices including delivery charges and any discounts will be confirmed in your formal quote.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white p-10 rounded-none border border-slate-100 shadow-xl shadow-slate-200/50 group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={80} className="text-slate-900" />
                </div>
                <h4 className="text-[10px] font-black text-blue-600 mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                  Expert Review
                </h4>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest leading-relaxed">
                  Every quote is reviewed by our experts to ensure you have the right materials and quantities for your project before finalizing the order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
