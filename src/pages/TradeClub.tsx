import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Trophy, 
  Handshake, 
  TrendingUp, 
  Truck, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { toast } from 'sonner';

export default function TradeClub() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Application Received!', {
        description: "Our Trade Account rep will contact you within 48 hours for verification.",
      });
    }, 2000);
  };

  const benefits = [
    { icon: <TrendingUp className="text-blue-600" />, title: "Preferential Pricing", desc: "Tiered discounts on bulk material orders and repeat monthly stock." },
    { icon: <Truck className="text-blue-600" />, title: "Priority Logistics", desc: "First-priority slotting for early morning site deliveries across Jamaica." },
    { icon: <Users className="text-blue-600" />, title: "Project Manager", desc: "Dedicated point of contact for complex, multi-phase construction cycles." },
    { icon: <ShieldCheck className="text-blue-600" />, title: "Account Support", desc: "Monthly credit facility options for qualified and verified entities." },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-blue-600 hover:bg-blue-600 mb-8 rounded-none px-4 py-1 text-[9px] font-black tracking-[0.2em]">FOR PROFESSIONALS</Badge>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase italic-none">
              The <span className="text-blue-500 text-glow-blue">KAG</span> <br /> Trade Club.
            </h1>
            <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
              Special rates and priority service for contractors, builders, and developers. Join the club and grow your business with KAG.
            </p>
          </div>
        </div>
        <Trophy className="absolute -bottom-20 -right-20 text-white/5 pointer-events-none" size={600} />
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info */}
          <div className="space-y-16 py-10">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-6">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Member Benefits</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <Card key={i} className="border-slate-100 shadow-2xl shadow-slate-200/50 bg-white p-10 group hover:-translate-y-2 transition-all rounded-none">
                    <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 transition-colors">
                      {b.icon}
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">{b.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{b.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 rounded-none p-12 lg:p-16 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={120} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tighter">How to Join</h3>
              <ul className="space-y-6">
                {[
                   "Active construction or project management business",
                   "Valid business TRN and documentation",
                   "Regular monthly material orders",
                   "Work references from past projects"
                ].map((q, i) => (
                  <li key={i} className="flex gap-4 items-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="sticky top-28">
            <Card className="shadow-2xl border-slate-100 p-10 sm:p-16 overflow-hidden relative rounded-none">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <CardHeader className="p-0 mb-12">
                <CardTitle className="text-4xl font-black tracking-tighter text-slate-900 mb-4 uppercase">Apply to Join</CardTitle>
                <CardDescription className="text-lg font-medium text-slate-500">Start your application for a trade account.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                  <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Your Name</Label>
                  <Input placeholder="AUTHORIZED REPRESENTATIVE" className="h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest placeholder:text-slate-200" required />
                </div>
                <div className="space-y-4">
                  <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Business Name</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-4 text-slate-300" size={20} />
                    <Input placeholder="BUILDING FIRM NAME" className="pl-14 h-14 border-slate-200 rounded-none font-bold uppercase tracking-widest placeholder:text-slate-200" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Phone Number</Label>
                    <Input placeholder="+1 876..." className="h-14 border-slate-200 rounded-none font-bold" required />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Business TRN</Label>
                    <Input placeholder="###-###-###" className="h-14 border-slate-200 rounded-none font-bold" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Target Monthly Volume (JMD)</Label>
                  <Input placeholder="$500,000 +" className="h-14 border-slate-200 rounded-none font-bold" />
                </div>
                <Button 
                  className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.3em] rounded-none transition-all shadow-xl shadow-blue-500/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <Handshake className="ml-4" size={20} />
                </Button>
                <p className="text-[9px] text-center text-slate-400 uppercase font-black tracking-widest leading-relaxed">
                  Please note: Applications are usually processed within 2-3 business days.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
