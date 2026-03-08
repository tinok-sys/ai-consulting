"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Twitter, XIcon } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#020617] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Colonne 1 : Logo & Bio */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 italic">
            IA<span className="text-primary italic">CONSULT</span>
          </h2>
          <p className="text-gray-500 max-w-sm">
            Architectes de solutions intelligentes pour entreprises ambitieuses.
            Automatisez aujourd'hui, dominez demain.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="font-bold mb-6 text-white">Navigation</h3>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li>
              <a href="#services" className="hover:text-primary transition">Services</a>
            </li>
            <li>
              <a href="#expertise" className="hover:text-primary transition">Expertise</a>
            </li>
            <li>
              <a href="#quiz" className="hover:text-primary transition">Diagnostic IA</a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact (Corrigée pour l'erreur de div) */}
        <div>
          <h3 className="font-bold mb-6 text-white">Contact</h3>
          <div className="space-y-4 text-gray-500 text-sm">
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 hover:text-primary transition group w-full text-left outline-none"
            >
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail size={16} />
              </div>
              <span>contact@iaconsult.fr</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/5 rounded-lg">
                <MapPin size={16} />
              </div>
              <span>Paris, France</span>
            </div>

            <div className="flex gap-4 pt-4">
              <Linkedin size={20} className="hover:text-primary cursor-pointer transition-colors" />
              <XIcon size={20} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-xs text-gray-600">
        © 2026 IA CONSULT. Tous droits réservés.
      </div>

      {/* Modal de contact */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}