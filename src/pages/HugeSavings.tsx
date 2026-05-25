import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/constants';
import { useCart } from '@/CartContext';
import { Package, Plus, CheckCircle2, BadgePercent, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

const PRESET_SAVINGS = [
  {
    id: 'starter-pack',
    name: 'Foundation & Ground Starter Kit',
    description: 'Perfect for breaking ground. Everything you need to clear your site, align boundaries, and pour your initial concrete footings.',
    image: 'https://static.wixstatic.com/media/3dc9c0_ef7870989a9f4aaaa8328184777d2414~mv2.jpg',
    items: [
      { productId: 'b1', quantity: 150 },
      { productId: 'c1', quantity: 20 },
      { productId: 'st1', quantity: 10 },
    ]
  },
  {
    id: 'lumber-jack',
    name: 'Framing & Timber Savings Bundle',
    description: 'A woodworker’s dream deal. Heavy-duty structural lumber and premium plywood perfect for forming molds or building support beams.',
    image: 'https://static.wixstatic.com/media/3dc9c0_d5b88c31b18d459c95a2ef564df2a9ab~mv2.jpg',
    items: [
      { productId: 'b1', quantity: 50 },
      { productId: 'c1', quantity: 10 },
    ]
  },
  {
    id: 'half-pint',
    name: 'Home Extension Companion Pack',
    description: 'Doing a minor home expansion or building a backup structure? Get the perfect amount of block, steel, and cement to finish quick.',
    image: 'https://static.wixstatic.com/media/3dc9c0_b0b9739bac0c43ee94f962601d596ffd~mv2.jpg',
    items: [
      { productId: 'b1', quantity: 300 },
      { productId: 'c1', quantity: 30 },
      { productId: 's1', quantity: 4 },
    ]
  },
  {
    id: 'full-hundred',
    name: 'Complete House Bulk Super Saver',
    description: 'Our ultimate maximum-discount kit. Fully equips primary residential constructions with massive bulk cement, steel, and premium block supply.',
    image: 'https://static.wixstatic.com/media/3dc9c0_fb1ed96c80a745629f37c90845fce76f~mv2.jpg',
    items: [
      { productId: 'b1', quantity: 1000 },
      { productId: 'c1', quantity: 100 },
      { productId: 'st1', quantity: 50 },
    ]
  },
  {
    id: 'deck-yuh-house',
    name: '"Deck-Yuh-House" Concrete Slab Pack',
    description: 'Specifically engineered setup for concrete decking, pouring roof-slabs, or setting up a solid second floor.',
    image: 'https://static.wixstatic.com/media/3dc9c0_eb62b9b2c5454a9c937969e29f0d588b~mv2.jpg',
    items: [
      { productId: 'c1', quantity: 60 },
      { productId: 'st1', quantity: 40 },
      { productId: 'g1', quantity: 8 },
    ]
  }
];

export default function HugeSavings() {
  const { addToCart } = useCart();

  const handleAddBundle = (bundle: typeof PRESET_SAVINGS[0]) => {
    bundle.items.forEach(item => {
      addToCart(item.productId, item.quantity);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white opacity-5"></div>
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            className="h-full w-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
            alt="Hardware background"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">Save Big On Supplies</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
            Huge <br /><span className="text-blue-500">Savings.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium">
            Skip the math and save massive percentages on materials. We’ve pre-packaged your construction essentials into high-discount, stage-by-stage kits. Friendly guidance, zero guesswork.
          </p>
        </div>
      </section>

      {/* THREE STEP CUSTOMER GUIDE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <BookOpen size={18} />
              <span className="text-xs font-black uppercase tracking-widest">Easy Builder's Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-slate-900">How to Choose & Save</h2>
            <p className="text-slate-500 font-medium mt-4">Buying construction materials doesn't have to be confusing. Follow these three simple steps to secure your stock & savings:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Identify Your Project Stage",
                desc: "Are you just breaking ground, pouring a floor slab, framing walls, or building an extension? Match your exact construction phase to one of our packages below."
              },
              {
                step: "02",
                title: "Unlock Instant Bulk Discounts",
                desc: "By combining essential goods like steel, cement blocks, and concrete bags in pre-calculated batches, we eliminate site-waste and drop your unit costs significantly."
              },
              {
                step: "03",
                title: "One-Click Instant Order",
                desc: "Click 'Add Package to Order' to load your virtual stockpile cart instantly. You can review the exact counts inside your cart and adjust them any time before requesting a quote."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-5xl font-black text-blue-200 block mb-6">{item.step}</span>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preset Packages Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PRESET_SAVINGS.map((bundle) => {
            const totalPrice = bundle.items.reduce((sum, item) => {
              const p = PRODUCTS.find(prod => prod.id === item.productId);
              return sum + (p?.price || 0) * item.quantity;
            }, 0);

            return (
              <Card key={bundle.id} className="overflow-hidden border-slate-100 shadow-2xl flex flex-col group rounded-none bg-white">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={bundle.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                    alt={bundle.name}
                  />
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="bg-blue-600 text-white font-black px-4 py-1.5 rounded-none text-[9px] uppercase tracking-widest border-none flex items-center gap-1.5">
                      <BadgePercent size={12} />
                      Save Huge On Bulk
                    </Badge>
                  </div>
                </div>
                <CardHeader className="bg-white p-10 lg:p-12">
                  <span className="text-[9px] font-black uppercase text-blue-600 tracking-widest mb-2 block">Premium Phase Assembly</span>
                  <CardTitle className="text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-4">
                    {bundle.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-slate-500 leading-relaxed normal-case">
                    {bundle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="bg-slate-50/50 p-10 lg:p-12 flex-grow space-y-8 border-y border-slate-100">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Guaranteed Materials Included</p>
                    <Package size={14} className="text-slate-300" />
                  </div>
                  <div className="space-y-5">
                    {bundle.items.map((item, i) => {
                      const p = PRODUCTS.find(prod => prod.id === item.productId);
                      return (
                        <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-600 shrink-0" size={16} />
                            <span className="text-slate-900">{p?.name}</span>
                          </div>
                          <span className="text-slate-500">{item.quantity} {p?.unit}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
                <CardFooter className="bg-white p-10 lg:p-12 flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div className="w-full sm:w-auto">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Bundle Value</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">${totalPrice.toLocaleString()}</p>
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block mt-1.5 flex items-center gap-1">
                      <Sparkles size={10} /> Discount Applied At Checkout
                    </span>
                  </div>
                  <Button 
                    className="w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white font-black h-16 px-10 rounded-none transition-all uppercase tracking-widest text-[10px] gap-4"
                    onClick={() => handleAddBundle(bundle)}
                  >
                    Add Package to Order
                    <Plus size={16} strokeWidth={3} />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-24 bg-slate-950 p-12 lg:p-24 text-white flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white opacity-5"></div>
          <div className="max-w-2xl relative z-10">
            <div className="h-px w-12 bg-blue-600 mb-10" />
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight uppercase">Need a Customized Material List?</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Every house and building project in Jamaica has unique specifications. If our pre-packaged Huge Savings kits don't match your plans perfectly, our expert hardware consultants will build a custom list for your specific blueprints.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto relative z-10">
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 font-black h-16 px-12 rounded-none text-[10px] uppercase tracking-[0.2em] w-full shadow-2xl shadow-blue-500/20" 
              render={<Link to="/quote-request">Get a Free Custom Quote</Link>}
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white hover:text-slate-900 h-16 px-12 rounded-none text-[10px] uppercase tracking-[0.2em] w-full transition-all" 
              render={<a href="https://wa.me/18764412101" target="_blank" rel="noreferrer">Chat with a Specialist</a>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
