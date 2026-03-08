"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';

const questions = [
  { q: "Utilisez-vous l'IA pour vos emails ou rapports ?", pts: 25 },
  { q: "Vos données clients sont-elles centralisées (CRM) ?", pts: 25 },
  { q: "Avez-vous des processus automatisés (Zapier/Make) ?", pts: 25 },
  { q: "Vos équipes sont-elles formées aux outils d'IA ?", pts: 25 },
];

export default function MaturityQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleAnswer = (isYes: boolean) => {
    if (isYes) setScore(score + questions[step].pts);
    if (step < questions.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulation d'envoi (On ajoutera l'API plus tard)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div key="q" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <span className="text-primary font-mono text-xs tracking-widest uppercase">Analyse en cours...</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-8">{questions[step].q}</h3>
            <div className="flex gap-4">
              <button onClick={() => handleAnswer(true)} className="flex-1 bg-primary hover:bg-blue-600 py-4 rounded-xl font-bold transition-all active:scale-95">Oui</button>
              <button onClick={() => handleAnswer(false)} className="flex-1 bg-white/5 hover:bg-white/10 py-4 rounded-xl font-bold border border-white/10">Non</button>
            </div>
          </motion.div>
        ) : !isSent ? (
          <motion.div key="res" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="text-5xl font-black text-primary mb-2">{score}%</div>
            <p className="text-gray-400 mb-8 font-medium">Potentiel d'automatisation détecté</p>
            
            <form onSubmit={handleContact} className="space-y-4">
              <input 
                type="email" 
                required
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-primary transition-colors text-center"
              />
              <button 
                disabled={isSending}
                className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
              >
                {isSending ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Recevoir mon audit gratuit</>}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="thanks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={50} />
            <h3 className="text-2xl font-bold mb-2">C'est envoyé !</h3>
            <p className="text-gray-400">On analyse vos réponses. Vous recevrez votre plan d'action d'ici 24h.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}