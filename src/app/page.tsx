"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, BarChart3, ShieldCheck, Search, Lightbulb } from "lucide-react";
import MaturityQuiz from "@/components/MaturityQuiz"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center px-6 pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl text-center mb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase border border-primary/30 rounded-full bg-primary/10">
            L'IA au service de votre performance
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Libérez votre plein <br />
            <span className="text-primary italic">potentiel</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Nous transformons vos processus complexes en systèmes automatisés intelligents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-primary hover:scale-105 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Audit IA Gratuit <ArrowRight size={20} />
            </a>
            <a href="#services" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition text-center">
              Nos Services
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- QUIZ SECTION --- */}
      <section id="quiz" className="w-full max-w-2xl mb-40 relative">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 italic">Est-ce pour vous ?</h2>
            <p className="text-gray-500">Évaluez votre maturité numérique en 4 questions.</p>
        </div>
        <MaturityQuiz />
        <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl -z-10" />
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Solutions IA</h2>
          <p className="text-gray-400">Des outils concrets pour des résultats mesurables.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Agents Conversationnels" 
            desc="Support client 24/7 capable de résoudre 80% des tickets sans intervention humaine."
            icon={<Bot size={32} />}
          />
          <ServiceCard 
            title="Automatisation de Workflows" 
            desc="Connectez vos outils (CRM, Slack, Mail) pour supprimer les tâches répétitives."
            icon={<Zap size={32} />}
          />
          <ServiceCard 
            title="Analyse de Données IA" 
            desc="Transformez vos données brutes en tableaux de bord prédictifs clairs."
            icon={<BarChart3 size={32} />}
          />
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="expertise" className="py-24 w-full max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8 italic">Notre Expertise</h2>
            <div className="space-y-6">
              <ExpertiseItem 
                icon={<Search className="text-primary" />} 
                title="Audit Opérationnel" 
                desc="Identification des tâches à forte valeur ajoutée automatisables." 
              />
              <ExpertiseItem 
                icon={<Lightbulb className="text-primary" />} 
                title="Stratégie IA" 
                desc="Choix des meilleurs modèles (LLM) adaptés à votre métier." 
              />
              <ExpertiseItem 
                icon={<ShieldCheck className="text-primary" />} 
                title="Sécurité & RGPD" 
                desc="Garantie de la confidentialité et de la souveraineté de vos données." 
              />
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-primary/20 to-transparent p-12 rounded-3xl border border-white/10 relative">
            <div className="absolute top-4 right-6 text-primary/20 font-black text-9xl">"</div>
            <p className="text-2xl font-light leading-relaxed relative z-10">
              "L'IA n'est pas une option, c'est le moteur de la rentabilité de demain. Notre mission est de vous rendre autonome."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SOUS-COMPOSANTS ---

function ServiceCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all group">
      <div className="mb-6 text-primary group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ExpertiseItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}