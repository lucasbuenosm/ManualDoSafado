"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como vou receber o acesso?",
    answer:
      "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar o material completo em nossa plataforma exclusiva.",
  },
  {
    question: "O acesso é vitalício?",
    answer:
      "Sim! Uma vez adquirido, o acesso ao Manual Proibido do Safado e todos os bônus é seu para sempre. Você poderá consultar o material quantas vezes quiser, a qualquer hora e em qualquer lugar.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos as principais formas de pagamento: cartão de crédito em até 3x, PIX e boleto bancário. Pagamentos com cartão e PIX têm liberação imediata.",
  },
  {
    question: "O site é seguro?",
    answer:
      "Totalmente seguro. Utilizamos a maior e mais segura plataforma de pagamentos do Brasil, com criptografia de ponta a ponta para garantir a proteção dos seus dados.",
  },
  {
    question: "Vou ter resultados?",
    answer:
      "Os resultados dependem da sua dedicação em aplicar os ensinamentos. O manual oferece ferramentas poderosas e testadas, mas o sucesso da sua jornada de sedução está em suas mãos. Se você se comprometer, os resultados serão surpreendentes.",
  },
];

export function Pricing() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tire suas últimas dúvidas antes de transformar sua vida amorosa.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg mb-4 shadow-sm px-6">
                <AccordionTrigger className="text-lg font-bold text-gray-800 text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 text-center">
          <a href="#cta-section">
            <Button
              size="lg"
              className="relative overflow-hidden px-12 py-8 text-xl font-bold bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-primary-foreground rounded-md shadow-[0_5px_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/50 transition-all duration-300 shine-effect"
            >
              RECEBER MANUAL COMPLETO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
