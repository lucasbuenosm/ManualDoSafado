"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "O drink ‘Desejo Ardente’ me fez sentir poderosa, segura e irresistível. Foi como vestir uma nova pele só minha.",
    author: "Juliana R."
  },
  {
    quote: "Eu e minhas amigas usamos o guia no nosso encontro. Virou um ritual nosso… rimos, dançamos e saímos de lá com uma energia surreal!",
    author: "Fernanda M."
  },
  {
    quote: "Sempre fui tímida, mas depois do ritual percebi o quanto posso seduzir apenas sendo eu mesma. Foi libertador.",
    author: "Sofia L."
  }
];

export function Testimonials() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-headline font-bold text-white sm:text-5xl lg:text-6xl">
            Experiências dos <span className="text-neon-red">Safados</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não acredite apenas na nossa palavra. Ouça aqueles que já libertaram seu Safado(a) interior.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="text-lg text-primary-foreground italic">"{testimonial.quote}"</p>
                <p className="mt-4 text-right font-bold text-accent">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-headline font-bold text-white sm:text-4xl">
            Deixe seu Relato
          </h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Compartilhe sua experiência e ajude outros a se libertarem também.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Seu nome"
                className="bg-card/50 border-primary/20 focus:ring-accent text-base py-6 disabled:opacity-50"
                aria-label="Seu nome"
                disabled={isSubmitted}
              />
            </div>
            <div>
              <Textarea
                placeholder="Seu comentário..."
                className="bg-card/50 border-primary/20 focus:ring-accent min-h-[120px] text-base disabled:opacity-50"
                aria-label="Seu comentário"
                disabled={isSubmitted}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className={
                isSubmitted
                  ? "w-full font-bold bg-green-800 hover:bg-green-900 text-white py-6 text-lg cursor-not-allowed"
                  : "w-full font-bold bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              }
              disabled={isSubmitted}
            >
              {isSubmitted ? "Relato Enviado" : "Enviar Relato"}
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
