import { useState } from 'react';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/CartContext';
import { ShoppingCart, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const saved = isInWishlist(product.id);
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="group overflow-hidden border-slate-100 transition-all hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border-blue-200 bg-white rounded-none">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center">
            <Badge variant="destructive" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-none">Out of Stock</Badge>
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <Button 
            variant="secondary" 
            size="icon" 
            className={`rounded-none shadow-xl border-none transition-colors ${saved ? 'bg-red-50 text-red-600' : 'bg-white hover:bg-red-600 hover:text-white'}`} 
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
          >
            <Heart size={18} fill={saved ? "currentColor" : "none"} />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-none shadow-xl bg-white hover:bg-blue-600 hover:text-white border-none" 
            render={<Link to={`/product/${product.id}`}><Eye size={18} /></Link>}
          />
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest text-slate-400 border-slate-100 px-2 py-0.5 rounded-none">
            {product.category}
          </Badge>
          {product.inStock && (
            <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest text-blue-500 border-blue-500/20 px-2 py-0.5 rounded-none bg-blue-50/50">
              Ready to Ship
            </Badge>
          )}
        </div>
        <h3 className="text-sm font-black text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mt-3 line-clamp-2 min-h-[32px] leading-relaxed font-medium">
          {product.description}
        </p>
        <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-1 shrink-0">
            <span className="text-lg font-black text-slate-900 tracking-tighter">${product.price.toLocaleString()}</span>
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">/ {product.unit}</span>
          </div>

          {product.inStock && (
            <div className="flex items-center border border-slate-200">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(q => Math.max(1, q - 1));
                }}
                className="w-8 h-8 flex items-center justify-center font-black text-slate-500 hover:bg-slate-50 active:bg-slate-100 transition-colors border-r border-slate-200 select-none text-xs"
              >
                -
              </button>
              <span className="w-8 text-center text-xs font-black text-slate-900 select-none">
                {quantity}
              </span>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(q => q + 1);
                }}
                className="w-8 h-8 flex items-center justify-center font-black text-slate-500 hover:bg-slate-50 active:bg-slate-100 transition-colors border-l border-slate-200 select-none text-xs"
              >
                +
              </button>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button 
          className="w-full h-14 bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] transition-all rounded-none gap-3"
          onClick={() => {
            addToCart(product.id, quantity);
            setQuantity(1);
          }}
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} strokeWidth={2.5} />
          {quantity > 1 ? `Append ${quantity} to Order` : "Append to Order"}
        </Button>
      </CardFooter>
    </Card>
  );
}
