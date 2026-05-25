import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import QuoteRequest from './pages/QuoteRequest';
import DeliveryCalculator from './pages/DeliveryCalculator';
import HugeSavings from './pages/HugeSavings';
import TradeClub from './pages/TradeClub';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import { CartProvider } from './CartContext';

// Simple placeholders for less critical pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto py-24 text-center">
    <h1 className="text-4xl font-black mb-4 tracking-tighter">{title}</h1>
    <p className="text-slate-500 mb-8 max-w-sm mx-auto">This page is currently being updated with the latest material inventory and project data.</p>
    <Button className="bg-orange-600" render={<Link to="/">Back to Home</Link>} />
  </div>
);

import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="categories/:slug" element={<Shop />} />
            <Route path="product/:slug" element={<Placeholder title="Product Details" />} />
            <Route path="huge-savings" element={<HugeSavings />} />
            <Route path="delivery-calculator" element={<DeliveryCalculator />} />
            <Route path="trade-club" element={<TradeClub />} />
            <Route path="quote-request" element={<QuoteRequest />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about" element={<About />} />
            <Route path="delivery" element={<Placeholder title="Delivery Information" />} />
            <Route path="faq" element={<Placeholder title="Frequently Asked Questions" />} />
            <Route path="contact" element={<Placeholder title="Contact Us" />} />
            <Route path="terms" element={<Placeholder title="Terms of Service" />} />
            <Route path="privacy" element={<Placeholder title="Privacy Policy" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);
