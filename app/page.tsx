'use client';

import { motion } from 'framer-motion';

export default function MonumentalHome() {
  const services = [
    { name: 'Som de Alta Fidelidade', desc: 'Sistemas line array e acústica de precisão para imersão total.' },
    { name: 'Iluminação Cênica', desc: 'Projetos luminotécnicos que transformam o ambiente.' },
    { name: 'Painéis de LED', desc: 'Telas de altíssima resolução para impacto visual inesquecível.' },
    { name: 'Estruturas Q30 & Praticáveis', desc: 'Bases robustas, seguras e com acabamento impecável.' },
    { name: 'Geradores de Energia', desc: 'Redundância e segurança para que seu evento nunca pare.' },
    { name: 'Climatização', desc: 'Conforto térmico absoluto para seus convidados.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest text-white">
            MONUMENTAL<span className="text-[#D4AF37]">.</span>
          </div>
          <button className="hidden md:block bg-transparent border border-[#D4AF37] text-[#D4AF37] px-6 py-2 uppercase text-sm tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo opcional aqui - escurecida com overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6"
          >
            Estruturas e Soluções <br/>
            <span className="text-[#D4AF37]">Para Eventos Premium</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto"
          >
            Elevamos o padrão do seu evento em Brasília com tecnologia de ponta, 
            engenharia de precisão e um acabamento que impressiona os convidados mais exigentes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contato" className="bg-[#D4AF37] text-black font-semibold px-8 py-4 text-sm md:text-base uppercase tracking-widest hover:bg-white transition-colors duration-300">
              Falar com um Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION (Grid Mobile-First) */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
              Nosso <span className="text-[#D4AF37]">Acervo</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/5 bg-[#0a0a0a] hover:border-[#D4AF37]/50 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.name}
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold text-white tracking-widest mb-2">MONUMENTAL<span className="text-[#D4AF37]">.</span></h4>
            <p className="text-sm text-zinc-500">Brasília - DF • Excelência em Eventos</p>
          </div>
          <div className="text-zinc-400 text-sm">
            <p>contato@monumentaleventos.com.br</p>
            <p className="mt-1">+55 (61) 99999-9999</p>
          </div>
        </div>
      </footer>
    </div>
  );
}