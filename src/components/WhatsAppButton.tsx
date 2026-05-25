import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a 
      href="https://wa.me/18764412101"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] transition-all cursor-pointer group"
      whileHover={{ y: -5 }}
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-slate-950 text-white px-4 py-2 rounded-none text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl opacity-0 transition-opacity pointer-events-none group-hover:opacity-100 whitespace-nowrap border border-white/10">
        Direct Site Desk
      </span>
    </motion.a>
  );
}
