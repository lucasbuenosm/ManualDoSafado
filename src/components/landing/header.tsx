import { BittenApple } from './icons';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <BittenApple className="w-6 h-6 text-primary" />
          <h1 className="ml-2 text-xl font-headline font-bold text-white">
            Manual do Safado
          </h1>
        </div>
      </div>
    </header>
  );
}
