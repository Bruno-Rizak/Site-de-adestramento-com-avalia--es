import React from "react";
import { Star, Quote, ThumbsUp, Heart } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Silva",
      rating: 5,
      date: "Há 2 meses",
      text: "A Suéllen é incrível! Minha Luna era muito ansiosa e destruía tudo em casa. Em apenas 3 sessões, já vimos uma mudança enorme. O trabalho é feito com muito amor e paciência. Super recomendo!",
      pet: "Luna - Golden Retriever",
    },
    {
      name: "Carlos Santos",
      rating: 5,
      date: "Há 1 mês",
      text: "Profissional excepcional! O Max estava com problemas de agressividade com outros cães. A Suéllen trabalhou não só com ele, mas com toda nossa família. Hoje ele é um cão completamente diferente!",
      pet: "Max - Pastor Alemão",
    },
    {
      name: "Ana Paula Costa",
      rating: 5,
      date: "Há 3 semanas",
      text: "Melhor investimento que fizemos! A Bella aprendeu comandos básicos super rápido e nossa relação melhorou muito. A Suéllen tem um dom especial com os animais. Muito obrigada!",
      pet: "Bella - Labrador Mix",
    },
    {
      name: "Roberto Oliveira",
      rating: 5,
      date: "Há 1 semana",
      text: "Excelente profissional! O Thor tinha muita energia e não obedecia nenhum comando. Após o adestramento, ele se tornou um cão equilibrado e obediente. Recomendo de olhos fechados!",
      pet: "Thor - Husky Siberiano",
    },
    {
      name: "Juliana Ferreira",
      rating: 5,
      date: "Há 2 semanas",
      text: "A Suéllen salvou nossa família! A Mel estava com sérios problemas de ansiedade de separação. Com técnicas positivas e muito carinho, ela nos ensinou como ajudar nossa pet. Gratidão eterna!",
      pet: "Mel - Shih Tzu",
    },
    {
      name: "Pedro Almeida",
      rating: 5,
      date: "Há 1 mês",
      text: "Profissional fantástica! O Duke era muito teimoso e não socializava bem. A Suéllen trabalhou com paciência e dedicação. Hoje ele é um cão sociável e obediente. Muito satisfeito!",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
              <Star className="text-yellow-600" size={20} fill="currentColor" />
              <span className="text-sm font-medium text-yellow-700">
                Avaliações Google
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Mais de 100 avaliações no Google com nota média de 4.9 estrelas
            </p>

            {/* Google Rating Summary */}
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-lavanda-50 to-mostarda-50 px-8 py-4 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800">4.9</div>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600">Google Reviews</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lavanda-600">100+</div>
                <div className="text-sm text-gray-600 mt-2">Avaliações</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-mostarda-600">98%</div>
                <div className="text-sm text-gray-600 mt-2">Recomendações</div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="flex items-start justify-between mb-4">
                  <Quote className="text-lavanda-300" size={24} />
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Pet Info */}
                {review.pet && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Heart
                      className="text-mostarda-500"
                      size={16}
                      fill="currentColor"
                    />
                    <span className="text-sm text-mostarda-700 font-medium">
                      {review.pet}
                    </span>
                  </div>
                )}

                {/* Reviewer Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {review.name}
                      </div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-lavanda-100 to-mostarda-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Link */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-lavanda-50 to-mostarda-50 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
                Veja Todas as Avaliações
              </h3>
              <p className="text-gray-600 mb-6">
                Confira mais depoimentos reais de clientes satisfeitos no nosso
                perfil do Google
              </p>
              <a
                href="https://www.google.com/search?sca_esv=2dfd597b30ca6995&hl=pt-BR&authuser=0&sxsrf=AE3TifP5AAfsEBDHy1OgcIb5qL-XHy3F8Q%3A1755022862803&kgmid=%2Fg%2F11xs9cwst2&q=Focinho%20Feliz%20Adestramento%20-%20Su%C3%A9llen%20Viegas%20-%20Adestradora%20Positiva&shndl=30&shem=lcuae%2Csdl1pl%2Cuaasie&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=5c262764d34174c2#lrd=0x7f1de471e49afb9:0x9479b21dee17fb18,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Ver no Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
