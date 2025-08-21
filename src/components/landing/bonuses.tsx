"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/components/analytics/facebook-pixel";

const includedItems = [
  {
    title: "50 Receitas de Drinks Afrodisíacos",
    description: "Cocktails passo a passo para acender a paixão.",
  },
  {
    title: "7 Receitas Pega Macho",
    description: "Truques de conquista para ter qualquer homem aos seus pés.",
  },
  {
    title: "Simpatias Amorosas Poderosas",
    description: "Rituais simples para atrair e fortalecer o amor.",
  },
  {
    title: "Receitas de Sedução",
    description: "Mensagens certeiras, truques de conquista e segredos para ter qualquer homem aos seus pés.",
  },
  {
    title: "A Lista de Compras da Sedução",
    description: "Ingredientes baratos e poderosos para seus rituais.",
  },
  {
    title: "Guia de Atmosfera",
    description: "Crie o ambiente perfeito para a sedução."
  },
];

export function Bonuses() {
  return (
    <section id="bonuses" className="py-20 sm:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="text-xl font-bold py-3 px-8 bg-green-500 text-primary-foreground mb-4">
                O QUE VOCÊ VAI RECEBER
            </Badge>
          <h2 className="text-3xl font-headline font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Um Arsenal Completo Feito para Mulheres
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tudo o que você precisa, organizado em um só lugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                <Image
                    src="/banner2.png"
                    alt="Capa do Manual do Safado"
                    width={432}
                    height={394}
                    className="rounded-lg mt-8"
                />
            </div>
            <div>
                <Card className="bg-background backdrop-blur-sm border-primary/20 shadow-lg w-full">
                    <CardHeader>
                        <Badge className="bg-green-500 text-primary-foreground font-bold text-base py-2 px-4 w-fit-content">
                            MANUAL COMPLETO
                        </Badge>
                        <CardTitle className="text-3xl font-headline text-primary-foreground pt-2">
                            O Manual Proibido do Safado
                        </CardTitle>
                        <CardDescription className="text-primary-foreground/80">
                            Torne-se irresistível com o nosso guia completo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {includedItems.map((item, index) => (
                                <li key={index} className="flex items-start pb-2 border-b border-border/50 last:border-b-0">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-md text-primary-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                         <p className="text-center mt-6 font-bold text-green-500 animate-pulse">E muito mais...</p>
                    </CardContent>
                </Card>
                <div id="cta-section" className="mt-8 text-center bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-lg">De <span className="line-through text-red-500">R$197,00</span> por:</p>
                  <p className="text-6xl font-bold text-green-600 my-2">R$ 12,90</p>
                  <p className="text-gray-600">ou 3x de R$4,30 no cartão</p>
                  <div className="mt-4 bg-green-100 border border-green-200 text-green-800 font-semibold p-3 rounded-md inline-flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Você economiza R$184,10
                  </div>
                  <a href="#cta-section" onClick={trackInitiateCheckout}>
                    <Button
                      size="lg"
                      className="w-full mt-6 py-8 text-xl font-bold bg-gradient-to-b from-green-500 to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      QUERO O MANUAL COMPLETO!
                    </Button>
                  </a>
                  <p className="mt-4 text-sm font-bold text-gray-700">APROVEITE AGORA: <span className="font-normal">Você não vai encontrar esse preço depois!</span></p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
