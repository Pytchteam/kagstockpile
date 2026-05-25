import { motion } from 'motion/react';
import { ShieldCheck, Truck, Users, Target, MapPin, ExternalLink, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: 'Project Sites Served', value: '500+' },
    { label: 'Tons of Material', value: '25,000+' },
    { label: 'Parishes Reached', value: '14' },
    { label: 'Delivery Uptime', value: '99.9%' },
  ];

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-blue-600" />
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase">The KAG Story</span>
            </div>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase italic-none">
              Foundations <br />
              <span className="text-blue-500 text-glow-blue">For Progress.</span>
            </h1>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
              Based in Runaway Bay, St. Ann, KAG Stockpile is Jamaica's premier supplier of high-yield building materials and site logistics.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-blue-600 py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-white text-4xl font-black tracking-tighter mb-1">{stat.value}</p>
                <p className="text-blue-100 text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 CORE BLOCKS */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Block 1: Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-10 rounded-none border-l-4 border-blue-600">
                <Target className="text-blue-600 mb-6" size={32} />
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">Our Site Vision</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  We started with a simple realization: Jamaica's builders needed more than just a hardware store—they needed a reliable logistics partner. Our vision is to eliminate project delays by ensuring that high-grade materials are always in stock and ready to deploy.
                </p>
              </div>
            </motion.div>

            {/* Block 2: Quality */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-10 rounded-none border-l-4 border-slate-900">
                <ShieldCheck className="text-slate-900 mb-6" size={32} />
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">Strict Standards</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Every length of steel, bag of cement, and cubic yard of aggregate is vetted for structural integrity. At KAG, we don't just sell materials; we provide the peace of mind that your build is structurally sound and compliant with the highest building codes.
                </p>
              </div>
            </motion.div>

            {/* Block 3: Logistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-10 rounded-none border-l-4 border-slate-900">
                <Truck className="text-slate-900 mb-6" size={32} />
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">Islandwide Reach</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  From our strategic terminal in Runaway Bay, we've developed an optimized delivery grid that reaches all 14 parishes. Our fleet is equipped to handle everything from residential home extensions to commercial industrial complexes.
                </p>
              </div>
            </motion.div>

            {/* Block 4: Community */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-50 p-10 rounded-none border-l-4 border-blue-600">
                <Users className="text-blue-600 mb-6" size={32} />
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-6">Community Driven</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  KAG is built on relationships. We are proud to serve the people of St. Ann and contribute to Jamaica's rapid growth. We believe that by providing the tools to build better homes, we are building a stronger future for our entire island.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-8">Visit Our <br /> <span className="text-blue-600">Terminal.</span></h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
                  Our main terminal is located in Runaway Bay, St. Ann. Stop by to see our full inventory and speak with a procurement expert.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={14} className="text-blue-600" />
                    Operational Hub
                  </p>
                  <p className="text-slate-900 font-black uppercase text-sm leading-relaxed">
                    Main Road, Runaway Bay<br />
                    St. Ann, Jamaica
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-blue-600" />
                    Site Hours
                  </p>
                  <p className="text-slate-900 font-black uppercase text-sm leading-relaxed">
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Sat: 9:00 AM - 3:00 PM
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={14} className="text-blue-600" />
                    Direct Line
                  </p>
                  <p className="text-slate-900 font-black uppercase text-sm leading-relaxed">
                    +1 (876) 441-2101
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={14} className="text-blue-600" />
                    Electronic Mail
                  </p>
                  <p className="text-slate-900 font-black uppercase text-sm leading-relaxed">
                    sales@kagstockpile.com
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black h-16 px-10 rounded-none uppercase text-xs tracking-widest w-full sm:w-auto"
                  render={
                    <a href="https://www.google.com/maps/place/KAG+STOCKPILE+%26+HARDWARE+SUPPLIES/@18.4616851,-77.3367193,17z" target="_blank" rel="noreferrer">
                      Open in Google Maps
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  }
                />
              </div>
            </div>

            {/* Map Preview */}
            <div className="h-full min-h-[400px] border-[12px] border-white shadow-2xl relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8926941198533!2d-77.3367193!3d18.4616851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda53f7c86e3d07%3A0x5d70350a973bec8!2sKAG%20STOCKPILE%20%26%20HARDWARE%20SUPPLIES!5e0!3m2!1sen!2sjm!4v1715050000000!5m2!1sen!2sjm"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950 px-4 py-2 text-white">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest">KAG Terminal Feed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-blue-600 p-12 lg:p-24 relative overflow-hidden text-center rounded-none shadow-[0_40px_80px_rgba(37,99,235,0.3)]">
          <div className="absolute inset-0 bg-grid-white opacity-10" />
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase mb-10 italic-none relative z-10">Start Your Build Today.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button 
              size="lg"
              className="bg-slate-950 text-white hover:bg-slate-900 font-black h-20 px-12 text-[10px] uppercase tracking-[0.3em] rounded-none shadow-2xl"
              render={<Link to="/shop">Shop Materials</Link>}
            />
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 font-black h-20 px-12 text-[10px] uppercase tracking-[0.3em] rounded-none"
              render={<Link to="/quote-request">Get a Free Quote</Link>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
