import React from 'react'
import {Home, Users, BookOpen, Heart, Clock, CheckCircle, Star, MapPin} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Adestramento Domiciliar",
      subtitle: "Na comodidade do seu lar",
      description: "Sessões personalizadas no ambiente familiar do seu pet, onde os comportamentos reais acontecem.",
      features: [
        "Ambiente familiar e confortável",
        "Atenção 100% personalizada",
        "Trabalho com toda a família",
        "Flexibilidade de horários"
      ],
      duration: "1h30 por sessão",
      price: "A partir de R$ 150",
      popular: true,
      color: "lavanda"
    },
    {
      icon: Users,
      title: "Aulas em Grupo",
      subtitle: "Socialização e diversão",
      description: "Grupos pequenos para socialização controlada e aprendizado coletivo em ambiente seguro.",
      features: [
        "Máximo 4 pets por grupo",
        "Socialização supervisionada",
        "Exercícios de obediência",
        "Preço mais acessível"
      ],
      duration: "1h por sessão",
      price: "A partir de R$ 80",
      popular: false,
      color: "mostarda"
    },
    {
      icon: BookOpen,
      title: "Consultoria Comportamental",
      subtitle: "Problemas específicos",
      description: "Avaliação completa e plano personalizado para problemas comportamentais específicos.",
      features: [
        "Avaliação comportamental completa",
        "Plano de modificação personalizado",
        "Suporte contínuo por WhatsApp",
        "Acompanhamento de progresso"
      ],
      duration: "2h + acompanhamento",
      price: "A partir de R$ 200",
      popular: false,
      color: "lavanda"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-mostarda-100 px-4 py-2 rounded-full mb-4">
              <Star className="text-mostarda-600" size={20} />
              <span className="text-sm font-medium text-mostarda-700">Nossos Serviços</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
              Soluções Personalizadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada pet é único, por isso oferecemos diferentes modalidades de adestramento para atender suas necessidades específicas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isLavanda = service.color === 'lavanda'
              
              return (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    service.popular ? 'ring-2 ring-lavanda-300' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-lavanda-500 to-mostarda-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${
                    isLavanda 
                      ? 'bg-gradient-to-br from-lavanda-100 to-lavanda-200' 
                      : 'bg-gradient-to-br from-mostarda-100 to-mostarda-200'
                  } flex items-center justify-center mb-6`}>
                    <IconComponent 
                      className={isLavanda ? 'text-lavanda-600' : 'text-mostarda-600'} 
                      size={32} 
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-800 mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium ${
                        isLavanda ? 'text-lavanda-600' : 'text-mostarda-600'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle 
                            className={`${
                              isLavanda ? 'text-lavanda-500' : 'text-mostarda-500'
                            } mt-0.5 flex-shrink-0`} 
                            size={16} 
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Duration & Price */}
                    <div className={`bg-gradient-to-r ${
                      isLavanda 
                        ? 'from-lavanda-50 to-lavanda-100' 
                        : 'from-mostarda-50 to-mostarda-100'
                    } rounded-xl p-4 space-y-2`}>
                      <div className="flex items-center space-x-2">
                        <Clock className={isLavanda ? 'text-lavanda-600' : 'text-mostarda-600'} size={16} />
                        <span className="text-sm font-medium text-gray-700">{service.duration}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-800">{service.price}</div>
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={scrollToContact}
                      className={`w-full ${
                        isLavanda 
                          ? 'bg-gradient-to-r from-lavanda-500 to-lavanda-600 hover:from-lavanda-600 hover:to-lavanda-700' 
                          : 'bg-gradient-to-r from-mostarda-500 to-mostarda-600 hover:from-mostarda-600 hover:to-mostarda-700'
                      } text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                    >
                      Agendar Consulta
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-lavanda-50 via-white to-mostarda-50 rounded-3xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="text-lavanda-600" size={24} />
                <h3 className="text-2xl font-display font-bold text-gray-800">
                  Atendimento em Toda a Região
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Atendemos em domicílio em toda a Grande São Paulo. Para aulas em grupo, 
                temos um espaço especialmente preparado em ambiente seguro e controlado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-lavanda-500 to-mostarda-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Solicitar Orçamento
                </button>
                <button className="border-2 border-lavanda-300 text-lavanda-700 px-8 py-3 rounded-full font-semibold hover:bg-lavanda-50 transition-all duration-300">
                  Dúvidas Frequentes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services