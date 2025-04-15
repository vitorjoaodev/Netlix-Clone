import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Bell, ChevronDown, Menu, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [currentPath] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setLocation('/login');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 md:h-9 mr-8">
            <Link href="/">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" 
                alt="Netflix" 
                className="h-full"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <div className={currentPath === '/' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/">Início</Link>
            </div>
            <div className={currentPath === '/series' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/series">Séries</Link>
            </div>
            <div className={currentPath === '/filmes' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/filmes">Filmes</Link>
            </div>
            <div className={currentPath === '/novidades' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/novidades">Bombando</Link>
            </div>
            <div className={currentPath === '/minha-lista' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/minha-lista">Minha lista</Link>
            </div>
            <div className={currentPath === '/idiomas' ? "text-white font-semibold" : "text-gray-300 hover:text-white transition"}>
              <Link href="/idiomas">Navegar por idiomas</Link>
            </div>
          </nav>
        </div>
        
        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Títulos, pessoas, gêneros"
              className="bg-black bg-opacity-70 text-white text-sm px-8 py-1 border border-gray-600 focus:border-white rounded-sm focus:outline-none w-48 transition-all duration-300 focus:w-64"
            />
          </div>
          
          <div className="hidden md:block ml-4">
            <Link href="/kids" className="text-sm font-medium text-gray-300 hover:text-white">
              Infantil
            </Link>
          </div>
          
          <Button variant="ghost" size="icon" className="hidden md:flex relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 rounded-full text-[10px] bg-[#E50914]">3</Badge>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 p-1 hover:bg-transparent">
                <Avatar className="w-7 h-7 rounded-sm">
                  <AvatarImage src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" />
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black bg-opacity-90 border border-gray-800 py-2 mt-2">
              <div className="px-3 py-2 border-b border-gray-700 mb-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Avatar className="w-8 h-8 rounded-sm">
                    <AvatarImage src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" />
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <span className="text-white">Usuário 1</span>
                </div>
                
                <div className="grid grid-cols-3 gap-1 mb-1">
                  <Avatar className="w-full aspect-square rounded-sm">
                    <AvatarImage src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcYsue6X7Z9nPdBd5bTdCYTLTQsmeKfvLeOTbuKtuE55erpkswDhjP-kUqolXu4k8AcRNtQYEMT2zEBG9HfwMEKdNAU4Tr0.png?r=2c6" />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-full aspect-square rounded-sm">
                    <AvatarImage src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFYxDQl35hxVBLZdtCopLsD8vqR8Fj4-BNfXpz1FHKjGRgw5hOXA1.png?r=b97" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center w-full aspect-square bg-neutral-600 rounded-sm text-white hover:bg-neutral-700 cursor-pointer">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
                
                <Button className="w-full text-sm mt-2 bg-transparent hover:bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white">
                  Gerenciar perfis
                </Button>
              </div>
              
              <DropdownMenuItem className="hover:bg-gray-800 py-1 px-3 text-sm" asChild>
                <Link href="/conta">
                  Conta
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800 py-1 px-3 text-sm" asChild>
                <Link href="/ajuda">
                  Central de Ajuda
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="hover:bg-gray-800 py-1 px-3 text-sm" onClick={handleLogout}>
                Sair da Netflix
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 pb-4 px-4">
          <div className="border-b border-gray-800 py-3 flex items-center gap-3">
            <Avatar className="w-8 h-8 rounded">
              <AvatarImage src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-white font-medium">Usuário 1</p>
              <p className="text-gray-400 text-sm">Mudar perfil</p>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-3 pt-3">
            <div className="text-white py-2 flex items-center">
              <Link href="/" className="flex items-center w-full">
                <Bell className="h-5 w-5 mr-3" /> Notificações
              </Link>
            </div>
            <div className="text-white py-2 flex items-center">
              <Link href="/minha-lista" className="flex items-center w-full">
                <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2v10h10v10H2V2z"></path>
                </svg>
                Minha lista
              </Link>
            </div>
            <div className="text-white py-2">
              <Link href="/">Início</Link>
            </div>
            <div className="text-gray-400 hover:text-white py-2">
              <Link href="/series">Séries</Link>
            </div>
            <div className="text-gray-400 hover:text-white py-2">
              <Link href="/filmes">Filmes</Link>
            </div>
            <div className="text-gray-400 hover:text-white py-2">
              <Link href="/novidades">Bombando</Link>
            </div>
            <div className="text-gray-400 hover:text-white py-2">
              <Link href="/idiomas">Navegar por idiomas</Link>
            </div>
            <div className="relative pt-2">
              <input 
                type="text" 
                placeholder="Buscar" 
                className="bg-gray-800 text-white w-full py-2 px-3 rounded"
              />
              <Search className="absolute right-3 top-4 text-gray-400 h-4 w-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
