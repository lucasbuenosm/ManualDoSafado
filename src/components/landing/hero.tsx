"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background">
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
        
        <Image
            src="/banner.png?v=2"
            alt="Capa do livro 50 Drinks que acendem o desejo e outros manuais"
            width={500}
            height={455}
            className="mt-20 sm:mt-24 mb-8 rounded-lg"
            priority
          />

        <h1 className="text-[1.6875rem] leading-tight font-headline font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          <span className="text-primary" style={{ fontSize: '1.5em' }}>50</span>
          <span className="ml-2 sm:text-5xl">
            Receitas de Drinks +
          </span>
          <br />
          <span className="ml-2 sm:text-5xl">
            <span className="text-primary" style={{ fontSize: '1.5em' }}> 07 </span> Receitas pega macho
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-base sm:text-lg">
          <span className="text-accent">Explicações detalhadas e fáceis de entender:</span><span className="text-muted-foreground"> Cada receita será explicada de forma clara, sem complicações, para que você coloque em prática. Por Apenas <span className="text-green-500 font-bold text-2xl">R$12,90</span></span>
        </p>

        <div className="mt-10 mb-20 animated-border-glow rounded-lg">
          <a href="#cta-section">
            <Button 
              size="lg" 
              className="relative overflow-hidden w-full px-12 py-8 text-xl font-bold bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-primary-foreground rounded-md shadow-[0_5px_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/50 transition-all duration-300 shine-effect"
            >
              EU QUERO AS RECEITAS!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
