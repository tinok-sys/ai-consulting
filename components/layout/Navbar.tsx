"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effet de scroll pour rendre la navbar opaque quand on descend
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[50] transition-all duration-300 px-6 py-4 ${
          isScrolled 
            ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-3" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter italic">
            IA<span className="text-primary">CONSULT</span>
          </a>

          {/* Liens centraux (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#quiz" className="hover:text-white transition-colors">Diagnostic</a>
          </div>

          {/* Bouton Contact (Déclencheur Modal) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            Démarrer un projet
          </button>
        </div>
      </nav>

      {/* On insère la Modal ici aussi pour qu'elle soit accessible via cette Navbar */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}