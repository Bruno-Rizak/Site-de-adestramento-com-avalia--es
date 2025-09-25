import React, { useState } from "react";
import { Menu, X, Heart, Star, Phone } from "lucide-react";
import Logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavanda-300 to-mostarda-400 p-1">
              <img
                src={Logo}
                alt="Focinho Feliz Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-800">
                Focinho Feliz
              </h1>
              <p className="text-xs text-gray-600">Adestramento Positivo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-lavanda-600 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-lavanda-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-lavanda-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("avaliacoes")}
              className="text-gray-700 hover:text-lavanda-600 transition-colors font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-lavanda-400 to-mostarda-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-lavanda-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-lavanda-600 transition-colors font-medium py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-gray-700 hover:text-lavanda-600 transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-gray-700 hover:text-lavanda-600 transition-colors font-medium py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("avaliacoes")}
                className="text-left text-gray-700 hover:text-lavanda-600 transition-colors font-medium py-2"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left bg-gradient-to-r from-lavanda-400 to-mostarda-400 text-white px-6 py-3 rounded-full font-medium mt-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
