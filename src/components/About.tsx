import React from "react";
import { Heart, Award, Users, BookOpen, Star, Shield } from "lucide-react";
import Perfil from "../assets/Suellen.jpg";
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-lavanda-100 px-4 py-2 rounded-full mb-4">
              <Heart className="text-lavanda-600" size={20} />
              <span className="text-sm font-medium text-lavanda-700">
                Conheça a Adestradora
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
              Suéllen Viegas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialista em adestramento positivo com mais de 8 anos
              transformando a vida de pets e suas famílias
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-lavanda-100 to-mostarda-100 rounded-3xl p-6">
                <img
                  src={Perfil}
                  alt="Suéllen Viegas adestrando um cão"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-lavanda-500 to-mostarda-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Certificada</div>
                    <div className="text-sm text-gray-600">IAABC & CCPDT</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  Formação internacional em comportamento animal e técnicas
                  positivas
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-gray-800">
                  Transformando Vidas com Amor e Ciência
                </h3>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Minha jornada começou há mais de 8 anos, quando descobri que
                    o adestramento positivo não é apenas sobre ensinar comandos,
                    mas sobre{" "}
                    <span className="font-semibold text-lavanda-700">
                      construir uma comunicação genuína
                    </span>{" "}
                    entre pets e suas famílias.
                  </p>

                  <p>
                    Formada em técnicas de modificação comportamental e
                    certificada por organizações internacionais, utilizo métodos
                    baseados em{" "}
                    <span className="font-semibold text-mostarda-700">
                      reforço positivo e respeito mútuo
                    </span>
                    , garantindo que cada sessão seja uma experiência prazerosa
                    para todos.
                  </p>
                </div>
              </div>

              {/* Methodology */}
              <div className="bg-gradient-to-r from-lavanda-50 to-mostarda-50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-gray-800 mb-4">
                  Minha Metodologia
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-lavanda-600 mt-1" size={16} />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-800">
                        Sem Punição
                      </div>
                      <div className="text-gray-600">
                        Métodos livres de estresse
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BookOpen className="text-mostarda-600 mt-1" size={16} />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-800">
                        Base Científica
                      </div>
                      <div className="text-gray-600">Técnicas comprovadas</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="text-lavanda-600 mt-1" size={16} />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-800">
                        Família Toda
                      </div>
                      <div className="text-gray-600">Envolvimento de todos</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="text-mostarda-600 mt-1" size={16} />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-800">
                        Personalizado
                      </div>
                      <div className="text-gray-600">Para cada pet único</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lavanda-600 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">
                    Pets Transformados
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mostarda-600 mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lavanda-600 mb-2">
                    8+
                  </div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
