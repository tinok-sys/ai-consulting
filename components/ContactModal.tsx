"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setTimeout(onClose, 2000); // Ferme auto après 2s
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay sombre */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Fenêtre de formulaire */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-[#0f172a] border border-white/10 p-8 rounded-3xl z-[101] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold italic">Lancez votre <span className="text-primary">Projet IA</span></h2>
                <p className="text-gray-400 text-sm">Laissez-nous vos coordonnées, nous vous rappelons sous 24h.</p>
                
                <div className="space-y-4">
                  <input required type="text" placeholder="Nom complet" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors" />
                  <input required type="email" placeholder="Email professionnel" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors" />
                  <textarea required rows={4} placeholder="Parlez-nous de votre besoin d'automatisation..." className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <button 
                  disabled={isSending}
                  className="w-full bg-primary hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                >
                  {isSending ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Envoyer la demande</>}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-gray-400">Nos experts IA vous recontacteront très vite.</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}