import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PARISHES } from '@/constants';
import { Truck, MapPin, Map, RefreshCcw, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function DeliveryCalculator() {
  const [selectedParish, setSelectedParish] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<typeof PARISHES[0] | null>(null);

  const handleCalculate = () => {
    if (!selectedParish) return;
    setIsCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      const p = PARISHES.find(item => item.parish.toLowerCase() === selectedParish.toLowerCase());
      setResult(p || null);
      setIsCalculating(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Delivery Estimator</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 italic-none uppercase leading-[0.9]">Delivery<br />Costs.</h1>
          <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
            We deliver islandwide from our terminal in Runaway Bay. Use our calculator to check estimated delivery fees and times for your area.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            {/* Control */}
            <Card className="shadow-2xl border-slate-100 p-10 lg:p-16 rounded-none">
              <CardHeader className="p-0 mb-12">
                <CardTitle className="text-3xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tighter">
                  <MapPin className="text-blue-600" />
                  Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Build Site Parish</label>
                  <Select onValueChange={setSelectedParish}>
                    <SelectTrigger className="h-16 text-xs font-black uppercase tracking-widest border-slate-200 rounded-none focus:border-blue-600 ring-0 italic-none">
                      <SelectValue placeholder="CHOOSE YOUR PARISH" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none font-black uppercase tracking-widest text-[10px]">
                      {PARISHES.map(p => (
                        <SelectItem key={p.parish} value={p.parish.toLowerCase()}>{p.parish}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  className="w-full h-20 bg-slate-950 hover:bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-xs transition-all rounded-none group shadow-2xl shadow-blue-500/10"
                  disabled={!selectedParish || isCalculating}
                  onClick={handleCalculate}
                >
                  {isCalculating ? (
                    <RefreshCcw className="animate-spin mr-3" />
                  ) : (
                    <Truck className="mr-3 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                  )}
                  {isCalculating ? "FINDING YOUR RATE..." : "CHECK DELIVERY FEE"}
                </Button>

                <div className="flex items-start gap-4 p-8 bg-slate-50 border-l-4 border-l-blue-600">
                  <Info className="text-blue-600 shrink-0" size={18} />
                  <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
                    PLEASE NOTE: Standard delivery rates are estimated for large loads from our main terminal in Runaway Bay. Some remote areas or difficult terrain may vary in final cost.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Result */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-8"
                  >
                    <Card className="bg-slate-950 text-white shadow-[0_30px_60px_rgba(30,41,59,0.25)] border-none p-12 lg:p-16 overflow-hidden relative rounded-none">
                      <div className="absolute inset-0 bg-grid-white opacity-5"></div>
                      <Map className="absolute top-0 right-0 text-white/5 transform translate-x-1/4 -translate-y-1/4" size={400} />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 text-blue-500 mb-10 pb-6 border-b border-white/10 uppercase tracking-[0.4em] font-black text-[10px]">
                          <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                          Estimate Details
                        </div>
                        <div className="space-y-12">
                          <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase mb-4 tracking-widest">Build Site</p>
                            <p className="text-5xl lg:text-6xl font-black italic-none uppercase tracking-tighter">{result.parish}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-12">
                            <div>
                              <p className="text-[9px] font-black text-slate-500 uppercase mb-4 tracking-widest">Expected Delivery</p>
                              <p className="text-xl font-bold uppercase tracking-tight italic-none">{result.estimatedDays}</p>
                            </div>
                            <div>
                              <p className="text-[9px] font-black text-slate-500 uppercase mb-4 tracking-widest">Delivery Fee</p>
                              <p className="text-4xl font-black tracking-tighter">${result.baseRate.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-16 font-black uppercase tracking-widest text-[10px] rounded-none border-slate-200 hover:bg-slate-50" onClick={() => setResult(null)}>Restart</Button>
                      <Button className="h-16 font-black uppercase tracking-widest text-[10px] rounded-none bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20" render={<Link to="/quote-request">Checkout Now</Link>} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-50/50 border-2 border-dashed border-slate-100"
                  >
                    <div className="bg-white p-12 rounded-none border border-slate-100 shadow-xl mb-10">
                      <Truck className="text-slate-100" size={80} strokeWidth={1} />
                    </div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Select a Parish</h4>
                    <p className="text-slate-300 text-[10px] leading-relaxed uppercase font-black tracking-widest">Choose your parish to see the estimated delivery cost and how long it will take to reach you.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
