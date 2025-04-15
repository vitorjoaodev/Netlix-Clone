import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#141414] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-[#E50914] font-bold text-3xl">
              <Link href="/">NETFLIX</Link>
            </div>
            <p className="text-gray-400 mt-2 text-sm">© 2025 Netflix, Inc.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-gray-300 font-semibold mb-3">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white">Sobre Nós</Link></li>
                <li><Link href="/jobs" className="text-gray-400 hover:text-white">Empregos</Link></li>
                <li><Link href="/investors" className="text-gray-400 hover:text-white">Para Investidores</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold mb-3">Suporte</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Central de Ajuda</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Entre em Contato</Link></li>
                <li><Link href="/devices" className="text-gray-400 hover:text-white">Dispositivos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacidade</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Termos de Uso</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white">Preferências de Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-300 font-semibold mb-3">Siga-nos</h3>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
