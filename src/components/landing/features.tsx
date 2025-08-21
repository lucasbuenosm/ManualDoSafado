"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Martini, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon, title: string, description: string }[] = [
  {
    icon: Martini,
    title: "Drinks afrodisíacos",
    description: "Receitas de drinks passo a passo com um toque afrodisíaco para acender a paixão."
  },
  {
    icon: Flame,
    title: "Receitas de sedução",
    description: "Mensagens certeiras, truques de conquista e segredos para ter qualquer homem aos seus pés."
  },
  {
    icon: Sparkles,
    title: "Simpatias amorosas",
    description: "Descubra rituais simples e poderosos para atrair paixões, fortalecer vinculos e abrir os caminhos do amor."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold text-white sm:text-5xl lg:text-6xl">
            Você <span className="text-accent">receberá</span> um material <span className="text-accent">único</span> totalmente <span className="text-accent">ilustrado</span><br />
            <span className="text-accent">organizado</span> para facilitar a sua compreensão
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não são apenas livros de receitas, são grimórios de sedução
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-accent/20 text-center flex flex-col items-center group hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/30 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-accent group-hover:text-primary transition-colors duration-300 animate-pulse" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4 text-primary-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#cta-section" className="animated-border-glow rounded-lg inline-block">
            <Button
              size="lg"
              className="relative overflow-hidden w-full px-12 py-8 text-xl font-bold bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-primary-foreground rounded-md shadow-[0_5px_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/50 transition-all duration-300 shine-effect"
            >
              EU QUERO TUDO ISSO!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
