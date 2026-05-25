import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/constants';
import ProductCard from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Building Supplies</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 italic-none uppercase">All Materials.</h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-xl font-medium leading-relaxed">
            Explore our range of high-quality construction materials. Everything you need for your project, ready for islandwide delivery.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-72 space-y-12">
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Find Materials</h3>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                <Input 
                  placeholder="Search materials..." 
                  className="pl-12 h-14 rounded-none border-slate-200 focus:border-blue-600 focus:ring-0 transition-all font-bold placeholder:text-slate-300 placeholder:font-bold italic italic-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-1">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-all text-left border-l-4 ${
                    selectedCategory === 'All' 
                    ? 'border-blue-600 bg-slate-50 text-slate-900' 
                    : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'
                  }`}
                >
                  All Products
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-all text-left border-l-4 ${
                      selectedCategory === cat 
                      ? 'border-blue-600 bg-slate-50 text-slate-900' 
                      : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-10 rounded-none border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Truck size={64} className="text-white" />
              </div>
              <h4 className="text-[10px] font-black text-blue-500 mb-4 uppercase tracking-widest underline decoration-2 underline-offset-4">Ordering in Bulk?</h4>
              <p className="text-xs text-white leading-relaxed font-bold">
                Need to order a large quantity for a big project? Contact us for special volume pricing and delivery coordination.
              </p>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-12 pb-6 border-b">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Showing: <span className="text-slate-900 ml-2">{filteredProducts.length} Items</span>
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center">
                <p className="text-lg text-slate-400 italic">No products found matching your search. Try another category.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
