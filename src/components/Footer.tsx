import React from 'react'
import {Heart, Phone, Mail, MapPin, Instagram, Facebook, MessageCircleDashed as MessageCircle} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavanda-400 to-mostarda-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Heart className="text-lavanda-600" size={24} fill="currentColor" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Focinho Feliz</h3>
                <p className="text-gray-400">Adestramento Positivo</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transformando a relação entre pets e suas famílias através do adestramento positivo. 
              Mais de 8 anos criando vínculos saudáveis e duradouros com amor, paciência e técnicas cientificamente comprovadas.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold">Links Rápidos</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-gray-400 hover:text-lavanda-400 transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-gray-400 hover:text-lavanda-400 transition-colors duration-300"
              >
                Sobre Suéllen
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-gray-400 hover:text-lavanda-400 transition-colors duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('avaliacoes')}
                className="block text-gray-400 hover:text-lavanda-400 transition-colors duration-300"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-gray-400 hover:text-lavanda-400 transition-colors duration-300"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-lavanda-400" size={18} />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-mostarda-400" size={18} />
                <span className="text-gray-300">suellen@focinhofeliz.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-lavanda-400 mt-1" size={18} />
                <div>
                  <div className="text-gray-300">Grande São Paulo</div>
                  <div className="text-sm text-gray-400">Atendimento domiciliar</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o adestramento positivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-lavanda-500 to-mostarda-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Focinho Feliz Adestramento. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500">
                Desenvolvido com <Heart className="inline w-4 h-4 text-red-400 fill-current" /> para pets felizes
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-lavanda-400 transition-colors duration-300">
                Política de Privacidade
              </button>
              <button className="hover:text-lavanda-400 transition-colors duration-300">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-lavanda-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-mostarda-500/10 rounded-full blur-3xl"></div>
    </footer>
  )
}

export default Footer