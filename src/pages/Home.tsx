import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '@/constants';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import TrustStrip from '@/components/TrustStrip';
import MotionButton from '@/components/MotionButton';
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  Package, 
  ArrowRight, 
  Construction, 
  Calculator as CalcIcon,
  Zap,
  Star,
  CheckCircle2,
  Trophy,
  Users,
  HardHat,
  Wrench
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col overflow-hidden" ref={containerRef}>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 py-24 sm:py-32 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-55 grayscale saturate-50 scale-105"
          >
            <source src="https://video.wixstatic.com/video/3dc9c0_5f28899b4b804a3aa460adb2ea68c6cd/1080p/mp4/file.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
          <div className="absolute inset-0 bg-grid-white mask-radial-fade"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">Building Jamaica Together</span>
              </div>
              
              <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 italic italic-none">
                BUILT WITH <br />
                <span className="text-blue-500 text-glow-blue">ZERO</span> <br />
                COMPROMISE.
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-12 font-medium">
                Get high-quality hardware and building materials delivered straight to your site. From planning to finishing, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <MotionButton 
                  pulse
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-10 text-xs uppercase tracking-widest rounded-none" 
                  render={<Link to="/quote-request">Request a Free Quote</Link>}
                />
                <MotionButton 
                  size="lg" 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-white/5 h-16 px-10 text-xs uppercase tracking-widest rounded-none backdrop-blur-sm" 
                  render={<Link to="/shop">Shop All Materials</Link>}
                />
              </div>

              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5 pt-8">
                {[
                  { label: "Delivery Success", value: "99.8%" },
                  { label: "Active Sites", value: "450+" },
                  { label: "Stock Items", value: "12k+" },
                  { label: "Trade Partners", value: "1.2k" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-white text-2xl font-black tracking-tighter">{stat.value}</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip items={["Cement & Concrete", "Steel Reinforcement", "Aggregates", "Lumber & Plywood", "Roofing Solutions", "Plumbing & Electrical", "Heavy Machinery Rent"]} />

      {/* 2. SITE DYNAMICS - NEW SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
              <HardHat size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Real Results</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">Built with KAG.</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">See how our quality materials are being used to build homes and businesses across Jamaica.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://video.wixstatic.com/video/3dc9c0_d23a40f620e04d09a90ec49860fd6cdf/480p/mp4/file.mp4",
              "https://video.wixstatic.com/video/3dc9c0_f9583557d75942998932afde0d36b9ad/480p/mp4/file.mp4",
              "https://video.wixstatic.com/video/3dc9c0_08106cf175154f7cadaffe632ae56129/480p/mp4/file.mp4"
            ].map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="aspect-[4/5] bg-slate-100 overflow-hidden relative group"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                >
                  <source src={video} type="video/mp4" />
                </video>
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Site 0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CATEGORY SHORTCUTS */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Construction size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Quality Supplies</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">Expertly Sourced.</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">Top-quality supplies for big projects and home improvements alike. Reliable pricing and stock you can count on.</p>
            </div>
            <Link to="/shop" className="group text-sm font-black flex items-center gap-2 text-blue-600 tracking-widest uppercase">
              Explore Materials <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.slice(0, 6).map((cat, i) => (
              <motion.div
                key={cat}
                whileHover={{ y: -5 }}
              >
                <Link 
                  to={`/categories/${cat.toLowerCase()}`}
                  className="group relative h-48 overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 flex flex-col justify-end hover:border-blue-200 hover:bg-white transition-all hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
                    <Package size={40} strokeWidth={1} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-400 transition-colors">Category 0{i + 1}</span>
                    <span className="relative z-10 font-black text-slate-900 uppercase text-xs tracking-[0.1em]">{cat}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOGISTICS FOCUS SECTION */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-[3rem] shadow-2xl relative bg-white flex items-center justify-center p-12">
                <img 
                  src="https://static.wixstatic.com/media/3dc9c0_c2ca1b78a0594a72aa3e1898295b57e6~mv2.jpg" 
                  alt="KAG Logo" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-10 rounded-[2rem] shadow-2xl hidden xl:block border-[12px] border-slate-50">
                <p className="text-6xl font-black mb-1">24h</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-90 leading-loose text-blue-100">Rapid Delivery <br /> Coverage</p>
              </div>
            </motion.div>
            
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-6">
                <Truck size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Our Delivery Promise</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-10">
                On-Time Delivery. <br />
                Zero Site Idle Time.
              </h2>
              
              <div className="space-y-10">
                {[
                  { icon: <ShieldCheck className="text-blue-600" size={24} />, title: "Quality Guaranteed", desc: "Every item we sell is checked for quality before it leaves our yard, so you build with the best." },
                  { icon: <Clock className="text-blue-600" size={24} />, title: "Scheduled Deliveries", desc: "We work with your schedule to ensure materials arrive exactly when your team is ready for them." },
                  { icon: <Zap className="text-blue-600" size={24} />, title: "Flexible Payments", desc: "We offer competitive pricing and flexible options to keep your project moving forward." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-blue-500/10 group-hover:border-blue-100 transition-all h-20 w-20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed max-w-md font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAG STANDARD - SUCCESS VIDEO SECTION */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-6">
                <Trophy size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">The KAG Standard</span>
              </div>
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-10 uppercase italic-none">
                From Specification <br />
                To Final Slab.
              </h2>
              <p className="text-xl text-slate-500 font-medium mb-10 max-w-lg leading-relaxed">
                Great buildings start with great materials. We make sure every block, bag of cement, and length of steel meets the highest standards.
              </p>
              <div className="bg-white p-10 border-l-8 border-blue-600 shadow-2xl shadow-slate-200">
                <p className="text-2xl font-black text-slate-900 tracking-tighter mb-4 italic leading-tight">"A strong home starts with a strong foundation and the right materials to keep it standing."</p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Our Commitment</span>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-slate-950 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="https://video.wixstatic.com/video/3dc9c0_3168990d4cb04673892e50ae50d1b1a1/480p/mp4/file.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <Badge className="bg-blue-600 text-white rounded-none px-4 py-1.5 text-[9px] font-black tracking-widest border-none">CASE STUDY: ESTATE BUILD</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. INNOVATION: HUGE SAVINGS PACKAGES */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 max-w-2xl">
              <Badge className="bg-blue-600 hover:bg-blue-600 px-4 py-1.5 text-[9px] font-black tracking-[0.2em] mb-8 rounded-none">EASY SAVINGS</Badge>
              <h2 className="text-6xl font-black tracking-tighter mb-8 leading-[0.95]">Huge Savings <br /> Packages.</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Save money and skip the confusion with our pre-packaged material kits. We put together exactly what you need for each stage of your build at a special bulk discount.
              </p>
              <div className="flex gap-6">
                <MotionButton 
                  pulse
                  size="lg" 
                  className="bg-white text-slate-950 hover:bg-slate-100 font-black px-12 h-16 rounded-none uppercase text-xs tracking-widest" 
                  render={<Link to="/huge-savings">See All Big Deals</Link>}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-8 rounded-none flex flex-col justify-between aspect-square">
                <Package size={32} className="text-blue-500 mb-6" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Masonry Pack</h3>
              </div>
              <div className="bg-blue-600 p-8 rounded-none flex flex-col justify-between aspect-square transform translate-y-12">
                <Trophy size={32} className="text-white mb-6" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Steel Rigging</h3>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-none flex flex-col justify-between aspect-square">
                <Users size={32} className="text-blue-500 mb-6" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Foundation Core</h3>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-none flex flex-col justify-between aspect-square transform translate-y-12">
                <HardHat size={32} className="text-blue-500 mb-6" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Roofing System</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY CALCULATOR FEATURE BLOCK */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <div className="bg-blue-600 p-4 rounded-2xl w-fit shadow-xl shadow-blue-500/20 mb-10 mx-auto lg:mx-0">
                <CalcIcon className="text-white" size={32} />
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8 uppercase italic-none">Know Your <br /> Delivery Cost.</h2>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                Easily check transport fees for any parish. Transparent pricing so you can plan your budget with ease.
              </p>
              <MotionButton 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 h-16 rounded-none uppercase text-xs tracking-widest" 
                render={<Link to="/delivery-calculator">Calculate Now</Link>}
              />
            </div>
            
            <div className="flex-1 w-full max-w-lg">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 relative"
              >
                <div className="absolute inset-0 bg-grid-white/5 pointer-events-none" />
                <div className="flex justify-between items-center mb-12 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <Truck className="text-blue-600" size={18} />
                    <span className="font-black text-slate-400 uppercase text-[9px] tracking-widest">Logistics Unit 01</span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="space-y-10">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Origin Node</p>
                      <p className="text-lg font-black text-slate-900">KAG HQ - Runaway Bay</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 text-right">Target Zone</p>
                      <p className="text-lg font-black text-slate-900 text-right">Montego Bay</p>
                    </div>
                  </div>
                  <Separator className="bg-slate-100" />
                  <div className="bg-slate-950 p-8 rounded-2xl flex flex-col gap-2">
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em]">Integrated Shipment Fee</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">$6,500</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">JMD (Estimated)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED A BUILDER SECTION - NEW */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="absolute inset-0 bg-grid-slate-200/50 opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-2 text-blue-600">
                <HardHat size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Expert Assistance</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                Need a <br />
                <span className="text-blue-600">Builder?</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                We’ll connect you with trusted professionals—plumbers, electricians, masons, and more. Get expert help for your project.
              </p>
              <div className="pt-4">
                <MotionButton 
                  pulse
                  size="lg" 
                  className="bg-slate-950 hover:bg-blue-600 text-white font-black h-16 px-10 text-xs uppercase tracking-widest rounded-none" 
                  render={<Link to="/quote-request">Connect with a Builder</Link>}
                />
              </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { 
                  icon: <HardHat className="text-blue-600" size={24} />, 
                  title: "Masons & Builders", 
                  desc: "Experienced concrete, blocklaying, and structural specialists to lay a solid foundation." 
                },
                { 
                  icon: <Wrench className="text-blue-600" size={24} />, 
                  title: "Plumbers", 
                  desc: "Certified piping, drainage, and fixture installation experts to handle all system layouts." 
                },
                { 
                  icon: <Zap className="text-blue-600" size={24} />, 
                  title: "Electricians", 
                  desc: "Licensed electrical contractors for safe wiring, power grids, and fixtures integration." 
                },
                { 
                  icon: <Users className="text-blue-600" size={24} />, 
                  title: "Finishers & Joiners", 
                  desc: "Architectural plasterers, painters, and carpenters to finalize your structural details." 
                },
              ].map((trade, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-slate-50 p-4 rounded-xl w-fit mb-6">
                      {trade.icon}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{trade.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{trade.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. POPULAR PRODUCTS / DEALS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Zap size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">In-Stock Now</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4 uppercase">Our Best Sellers.</h2>
              <p className="text-lg text-slate-500 font-medium tracking-tight">High-quality essentials ready to be delivered to your site today.</p>
            </div>
            <Link to="/shop" className="group text-sm font-black flex items-center gap-2 text-blue-600 tracking-widest uppercase">
              View All Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-40 bg-slate-950 text-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">What Our Customers Say</h2>
            <p className="text-4xl sm:text-5xl font-black tracking-tighter uppercase italic-none">Trusted by Builders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { author: "Ricardo M.", role: "Site Foreman", text: "KAG is reliable. Materials arrive exactly when they say, ensuring our teams stay productive. 100% recommended." },
              { author: "Beverly T.", role: "Home Builder", text: "The quality of the materials is excellent. Dealing with KAG made the stressful building process much easier." },
              { author: "BuildSmart Ja.", role: "Developer", text: "Easy pricing and great customer service. They make getting materials the simplest part of any construction job." },
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col relative"
              >
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#3b82f6" className="text-blue-500" />)}
                </div>
                <p className="text-xl font-medium text-slate-300 leading-relaxed mb-10 flex-grow italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-[10px] tracking-widest leading-none mb-1">{t.author}</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA STRIP */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-64 -right-64 opacity-10 pointer-events-none"
        >
          <Construction size={800} className="text-white" />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-none mb-6 italic-none">READY TO START BUILDING?</h2>
              <p className="text-blue-100 text-xl font-medium max-w-lg leading-relaxed">Get everything you need for your next project. Contact us today for a free expert quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <MotionButton 
                pulse
                size="lg" 
                className="bg-slate-950 text-white hover:bg-slate-900 font-black h-20 px-16 text-xs uppercase tracking-[0.2em] rounded-none shadow-2xl" 
                render={<Link to="/quote-request">Get a Free Quote</Link>}
              />
              <MotionButton 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 h-20 px-10 text-xs uppercase tracking-[0.2em] rounded-none backdrop-blur-sm" 
                render={<a href="https://wa.me/18764412101" target="_blank" rel="noreferrer">Chat on WhatsApp</a>}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
