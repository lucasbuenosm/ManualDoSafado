import { BittenApple } from './icons';

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-4">
          <BittenApple className="w-8 h-8 text-primary" />
          <p className="text-4xl font-signature text-accent">
            “Depois de provar a maçã, não tem mais volta.”
          </p>
          <BittenApple className="w-8 h-8 text-primary" />
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-accent transition-colors">Aviso Legal</a>
        </div>
        <p className="mt-8 text-sm">© {new Date().getFullYear()} Manual do Safado. Todos os direitos reservados.</p>
        <p className="mt-4 text-xs max-w-4xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos.
        </p>
      </div>
    </footer>
  );
}
