import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircleDashed as MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petAge: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xzzjzewr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          petName: "",
          petAge: "",
          service: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setFormStatus("error");
    }
  };

  const whatsappNumber = "555182029342";
  const whatsappMessage =
    "Olá, vim pelo site Focinho Feliz! Gostaria de agendar uma consulta gratuita.";

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-lavanda-100 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="text-lavanda-600" size={20} />
              <span className="text-sm font-medium text-lavanda-700">
                Vamos Conversar
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar a vida do seu pet? Agende uma consulta
              gratuita e descubra como podemos ajudar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
                  Agende sua Consulta Gratuita
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato em até 24
                  horas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                      placeholder="Como você se chama?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Pet *
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                      placeholder="Como se chama seu pet?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idade do Pet
                    </label>
                    <input
                      type="text"
                      name="petAge"
                      value={formData.petAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                      placeholder="Ex: 2 anos, 6 meses"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="domiciliar">Adestramento Domiciliar</option>
                    <option value="grupo">Aulas em Grupo</option>
                    <option value="consultoria">
                      Consultoria Comportamental
                    </option>
                    <option value="nao-sei">Não sei ainda</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conte-nos sobre seu pet
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lavanda-500 focus:border-transparent transition-all duration-300"
                    placeholder="Quais comportamentos gostaria de trabalhar? Seu pet tem alguma particularidade?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-lavanda-500 to-mostarda-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>
                    {formStatus === "sending"
                      ? "Enviando..."
                      : "Enviar Mensagem"}
                  </span>
                </button>

                {formStatus === "success" && (
                  <p className="text-center text-green-600 font-semibold mt-4">
                    Mensagem enviada com sucesso! Em breve entraremos em
                    contato.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-center text-red-600 font-semibold mt-4">
                    Erro ao enviar mensagem. Por favor, tente novamente.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-6">
                  Outras Formas de Contato
                </h3>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800">
                      WhatsApp
                    </h4>
                    <p className="text-sm text-gray-600">
                      Resposta mais rápida
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Tire suas dúvidas ou agende diretamente pelo WhatsApp.
                  Respondo rapidamente!
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavanda-100 rounded-full flex items-center justify-center">
                    <Phone className="text-lavanda-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800 mb-1">
                      Telefone
                    </h4>
                    <p className="text-gray-600">(51) 99223-6980</p>
                    <p className="text-sm text-gray-500">
                      Seg a Sex: 8h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mostarda-100 rounded-full flex items-center justify-center">
                    <Mail className="text-mostarda-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800 mb-1">
                      E-mail
                    </h4>
                    <p className="text-gray-600">suellen@focinhofeliz.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavanda-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-lavanda-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800 mb-1">
                      Atendimento
                    </h4>
                    <p className="text-gray-600">Grande São Paulo</p>
                    <p className="text-sm text-gray-500">
                      Domicílio e espaço próprio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mostarda-100 rounded-full flex items-center justify-center">
                    <Clock className="text-mostarda-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-800 mb-1">
                      Horários
                    </h4>
                    <p className="text-gray-600">Segunda a Sábado</p>
                    <p className="text-sm text-gray-500">
                      8h às 18h (flexível)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-lavanda-50 to-mostarda-50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-gray-800 mb-4">
                  Siga nas Redes Sociais
                </h4>
                <p className="text-gray-600 mb-4">
                  Acompanhe dicas, transformações e novidades sobre adestramento
                  positivo
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
