"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Heart, Martini } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { src: "/slide-1.png?v=2", alt: "Página de receita do drink 'Ousadia em Vermelho' com ingredientes e modo de preparo." },
  { src: "/slide-2.png?v=2", alt: "Página de receita do drink 'Sussurro Proibido' com uma taça de coquetel rosa." },
  { src: "/slide-3.png?v=2", alt: "Página de receita do drink 'Poção do Amor' ilustrada com um frasco de poção borbulhante." },
  { src: "/slide-4.png?v=2", alt: "Página de receita do drink 'Néctar dos Deuses' com uma taça elegante e frutas." },
  { src: "/slide-5.png?v=2", alt: "Página de receita do drink 'Fogo da Paixão' com ilustração de chamas e um copo de coquetel." },
  { src: "/slide-6.png?v=2", alt: "Página de receita do drink 'Beijo Ardente' com uma imagem de lábios vermelhos e uma taça." },
  { src: "/slide-7.png?v=2", alt: "Página de receita do drink 'Doce Veneno' com uma maçã e um coquetel misterioso." },
  { src: "/slide-8.png?v=2", alt: "Página de receita do drink 'Tentação em Dose Dupla' com duas taças de coquetel brindando." },
];

const hints = [
  "cocktail recipe",
  "seductive drink",
  "aphrodisiac cocktail",
  "romantic atmosphere",
  "cocktail ingredients",
  "mixing drink",
  "elegant glass",
  "special drink",
];

export function PromiseSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnFocusIn: false })
  );

  return (
    <section id="promise" className="relative py-16 sm:py-24 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 items-center">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-headline font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Veja alguns dos materiais que você vai receber na prática!
            </h2>
          </div>
          <div className="relative h-[540px] flex items-center justify-center">
            <Heart className="absolute z-10 top-10 left-10 h-12 w-12 text-primary/80 animate-bounce" style={{ filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))' }} />
            <Heart className="absolute z-10 bottom-5 right-12 h-16 w-16 text-primary/80 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4s', filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))' }} />
            <Heart className="absolute z-10 top-1/2 right-5 h-10 w-10 text-primary/60 animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.5s' }} />
            
            <Martini className="absolute z-10 bottom-10 left-5 h-10 w-10 text-primary/70 animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3.5s', filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))' }} />
            <Martini className="absolute z-10 top-5 right-20 h-12 w-12 text-primary/60 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s', filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))' }} />

            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-[362px]"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => setTimeout(() => plugin.current.play(), 2000)}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={362}
                        height={543}
                        className="rounded-lg shadow-2xl shadow-black/30 object-cover"
                        data-ai-hint={hints[index % hints.length]}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
