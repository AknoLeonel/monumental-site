'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ShieldCheck, ArrowRight, Play, CheckCircle2, MousePointer2, Layers, AudioLines, HardHat } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function MonumentalHome() {
  const targetRef = useRef<HTMLElement>(null);
  
  // Captura o scroll da página inteira para a barra de progresso no teto
  const { scrollYProgress } = useScroll();
  
  // Parallax exclusivo do Hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const opacityFade = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const services = [
    { 
      icon: <Layers className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Painéis de LED & Audiovisual', 
      desc: 'Telas de altíssima resolução com pitch fino e mapping 3D. A identidade visual do seu espetáculo em definição absurda.',
    },
    { 
      icon: <AudioLines className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Som Line Array de Alta Fidelidade', 
      desc: 'Garantimos que a última fileira sinta a mesma pressão sonora e clareza da primeira, sem distorções.',
    },
    { 
      icon: <HardHat className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Estruturas Q30 & Cenografia', 
      desc: 'Bases robustas de alumínio e praticáveis montados sob rigorosos padrões de segurança com ART. A espinha dorsal do evento.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'O Escopo',
      desc: 'Mapeamento técnico do local e alinhamento visual.'
    },
    {
      num: '02',
      title: 'O Projeto',
      desc: 'Renderização 3D para aprovação milimétrica antes da execução.'
    },
    {
      num: '03',
      title: 'O Espetáculo',
      desc: 'Montagem silenciosa, redundância testada e zero falhas.'
    }
  ];

  return (
    <main className="bg-[#030303] text-zinc-300 selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* ================= SCROLL PROGRESS BAR (Gatilho Psicológico) ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F9D423] via-[#D4AF37] to-[#AA771C] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ================= HEADER ULTRA-MINIMALISTA ================= */}
      <header className="fixed w-full top-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-500 mt-[3px]">
        <div className="max-w-[90rem] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-title font-bold tracking-[0.2em] text-white">
            MONUMENTAL<span className="text-[#D4AF37]">.</span>
          </div>
          <a href="#contato" className="group flex items-center gap-3 px-5 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer rounded-sm">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#D4AF37] group-hover:text-black uppercase transition-colors">
              Consultoria VIP
            </span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors hidden sm:block" />
          </a>
        </div>
      </header>

      {/* ================= HERO (INALTERADO - JÁ ESTAVA PERFEITO) ================= */}
      <section ref={targetRef} className="relative w-full h-[100svh] min-h-[650px] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 will-change-transform transform-gpu">
          <Image 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            alt="Palco iluminado"
            fill
            priority
            quality={90}
            className="object-cover object-top opacity-[0.25] grayscale mix-blend-luminosity"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-[#030303]/60 to-[#030303] z-10" />
        
        <motion.div style={{ opacity: opacityFade }} className="relative z-20 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[10px] sm:text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-semibold">O Padrão Premium em Brasília</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full font-title font-extrabold uppercase tracking-tighter leading-[0.95] mb-6 flex flex-col items-center justify-center"
          >
            <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] drop-shadow-lg">A Engenharia</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#F9D423] via-[#D4AF37] to-[#AA771C] mt-1 sm:mt-2 pb-2">Do Espetáculo.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed mb-8 px-2"
          >
            Esqueça o amadorismo. Fornecemos estruturas de palco, audiovisual e soluções técnicas de alto calibre para eventos que exigem perfeição absoluta.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md sm:max-w-none justify-center"
          >
            <a href="#contato" className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-title font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-3 rounded-sm">
              Solicitar Projeto <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#acervo" className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-transparent border border-white/20 text-white font-title font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 rounded-sm">
              <Play className="w-4 h-4 fill-current" /> Ver Portfólio
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ACERVO (GRID CENTRALIZADO E COMPACTO) ================= */}
      <section id="acervo" className="py-24 md:py-32 px-6 bg-[#030303] border-t border-white/5">
        <div className="max-w-[90rem] mx-auto">
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]"></span> Nosso Arsenal <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white uppercase tracking-tighter leading-[1]">
              Poder de Fogo <span className="text-zinc-700">Tecnológico.</span>
            </h3>
          </div>

          {/* Grid de 3 Colunas - Ocupa menos espaço vertical e é altamente visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col bg-[#080808] border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-500 overflow-hidden rounded-sm"
              >
                {/* Espaço da Foto */}
                <div className="w-full h-56 md:h-64 bg-[#0a0a0a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-title text-xs tracking-[0.3em] uppercase transition-transform duration-700 group-hover:scale-105">
                    [ Foto {index + 1} Aqui ]
                  </div>
                </div>

                {/* Conteúdo Textual Compacto */}
                <div className="p-8 relative z-20 -mt-8">
                  <div className="w-12 h-12 bg-[#030303] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                    {service.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-title font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= O MÉTODO (VISUAL E DIRETO) ================= */}
      <section id="metodo" className="py-24 md:py-32 px-6 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Efeito de luz de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[90rem] mx-auto text-center relative z-10">
          <h2 className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">A Garantia de Sucesso</h2>
          <h3 className="text-3xl md:text-5xl font-title font-bold text-white uppercase tracking-tighter mb-20 leading-tight">
            Você Cuida dos Convidados.<br/> <span className="text-zinc-600">Nós da Engenharia.</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
            {/* Linha conectora do visual timeline (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[1px] border-t border-dashed border-white/20" />

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Visual Number Node */}
                <div className="w-20 h-20 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center text-2xl font-title font-bold text-[#D4AF37] mb-6 relative z-10 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
                  {step.num}
                </div>
                
                {/* Texto Reduzido e Focado */}
                <h4 className="text-xl md:text-2xl font-title font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ("UNBOXED" E EXPANSIVO) ================= */}
      <section id="contato" className="relative py-32 md:py-48 px-6 overflow-hidden bg-[#030303] border-t border-white/5">
        {/* Fundo Expansivo com Glow Radial - Sem Caixotes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#030303] to-[#030303] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-title font-bold text-white uppercase tracking-tighter mb-8 leading-[1.1]">
            Pronto para um evento <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA771C]">Monumental?</span>
          </h2>
          
          <p className="text-base md:text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
            Nossa agenda para a alta temporada é limitada. Priorizamos a excelência técnica entregando poucos projetos, mas absolutamente irretocáveis.
          </p>
          
          {/* Botão com Pulse Effect para máxima conversão */}
          <div className="relative inline-block w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 animate-pulse rounded-sm"></div>
            <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-6 bg-white text-black font-title font-bold text-sm md:text-base uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all duration-300 rounded-sm">
              Falar com a Diretoria <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs text-zinc-500 font-semibold tracking-widest uppercase">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Orçamento Rápido</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Atendimento VIP</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Sigilo & Descrição</span>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#020202] py-16 md:py-20 border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-title font-bold text-white tracking-[0.2em] mb-4">MONUMENTAL<span className="text-[#D4AF37]">.</span></h4>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Estruturas, iluminação e tranquilidade absoluta. Elevando o padrão de eventos corporativos e sociais em Brasília.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-3">
            <a href="mailto:contato@monumentaleventos.com.br" className="text-base md:text-xl font-light text-zinc-400 hover:text-white transition-colors">
              contato@monumentaleventos.com.br
            </a>
            <p className="text-base md:text-xl font-light text-[#D4AF37]">
              +55 (61) 99999-9999
            </p>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-[10px] text-zinc-600 hover:text-[#D4AF37] uppercase tracking-[0.2em] font-semibold transition-colors">Instagram</a>
              <a href="#" className="text-[10px] text-zinc-600 hover:text-[#D4AF37] uppercase tracking-[0.2em] font-semibold transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[90rem] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] text-zinc-700 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Monumental Eventos.</p>
          <p>Desenvolvido por <span className="text-zinc-500 font-bold">AKNOTECH</span></p>
        </div>
      </footer>
    </main>
  );
}