import React from 'react'
import {Heart, Star, Award, Phone} from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-lavanda-50 via-white to-mostarda-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lavanda-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mostarda-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Award className="text-lavanda-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Adestradora Certificada</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gray-800">Transforme a</span>
                <br />
                <span className="bg-gradient-to-r from-lavanda-600 to-mostarda-600 bg-clip-text text-transparent">
                  Relação
                </span>
                <br />
                <span className="text-gray-800">com seu Pet</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Adestramento positivo que fortalece o vínculo entre você e seu companheiro de quatro patas. 
                <span className="font-semibold text-lavanda-700"> Resultados comprovados</span> com amor e paciência.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-lavanda-600">500+</div>
                <div className="text-sm text-gray-600">Pets Treinados</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-3xl font-bold text-mostarda-600">
                  <Star className="mr-1" size={24} fill="currentColor" />
                  4.9
                </div>
                <div className="text-sm text-gray-600">Avaliação Google</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lavanda-600">8+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-lavanda-500 to-mostarda-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Phone size={20} />
                  <span>Agendar Consulta</span>
                </span>
              </button>
              
              <button className="group border-2 border-lavanda-300 text-lavanda-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-lavanda-50 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <Heart size={20} />
                  <span>Saiba Mais</span>
                </span>
              </button>
            </div>
          </div>

          {/* Image/Logo */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-lavanda-200 to-mostarda-200 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Suéllen Viegas com pets"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="text-lavanda-500" size={24} fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Star className="text-mostarda-500" size={24} fill="currentColor" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-lavanda-300/20 to-mostarda-300/20 rounded-3xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero