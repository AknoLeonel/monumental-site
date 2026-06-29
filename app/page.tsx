'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

// --- COMPONENTE DE ANIMAÇÃO DE TEXTO ---
interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      // O paddingRight garante que as últimas letras não sejam cortadas pelo overflow: hidden
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit", paddingRight: "8px" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function MonumentalHome() {
  const targetRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const services = [
    { 
      num: "01",
      title: 'Painéis de LED & Visual', 
      desc: 'Telas de altíssima resolução com pitch fino e mapping 3D. A identidade visual do seu espetáculo projetada com definição absoluta, sem falhas de pixel.',
    },
    { 
      num: "02",
      title: 'Acústica Line Array', 
      desc: 'Engenharia sonora pura. Garantimos que a última fileira sinta a mesma pressão, clareza e emoção da primeira, sem qualquer distorção.',
    },
    { 
      num: "03",
      title: 'Cenografia & Q30', 
      desc: 'Bases robustas de alumínio e praticáveis montados sob rigorosos padrões de segurança com ART. A espinha dorsal inabalável do seu evento.',
    },
  ];

  return (
    <main className="bg-[#000000] text-zinc-300 selection:bg-[#C5A059] selection:text-black font-sans overflow-hidden">
      
      {/* ================= HEADER INVISÍVEL E ELEGANTE ================= */}
      <header className="fixed w-full top-0 z-50 mix-blend-difference transition-all duration-500 pt-6 px-6 md:px-12 pointer-events-none">
        <div className="max-w-[100rem] mx-auto flex justify-between items-start">
          
          <div className="relative w-40 h-8 md:w-56 md:h-10 pointer-events-auto">
            <Image 
              src="/Monumental.png" 
              alt="Monumental Eventos" 
              fill
              sizes="(max-width: 768px) 160px, 224px"
              className="object-contain object-left"
              priority
            />
          </div>

          <a href="#contato" className="pointer-events-auto group flex items-center gap-3 pb-2 border-b border-white/30 hover:border-white transition-colors duration-300">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Contato VIP
            </span>
            <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* ================= HERO CINEMÁTICO ================= */}
      <section ref={targetRef} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 will-change-transform transform-gpu">
          <Image 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            alt="Palco de evento monumental"
            fill
            sizes="100vw"
            priority
            quality={100}
            className="object-cover opacity-40 md:opacity-30 grayscale contrast-125 mix-blend-luminosity"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        
        <motion.div 
          style={{ opacity: opacityFade, y: textY }} 
          className="relative z-20 w-full max-w-[100rem] mx-auto flex flex-col justify-center h-full mt-12 md:mt-0"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8 w-full">
            
            {/* ================= BLOCO ESQUERDO (TÍTULOS AJUSTADOS) ================= */}
            <div className="flex flex-col w-full lg:w-3/4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] md:text-xs text-[#C5A059] uppercase tracking-[0.3em] font-semibold mb-6 md:mb-8"
              >
                O Padrão Premium em Brasília
              </motion.p>
              
              <div className="font-title font-bold uppercase tracking-tighter text-white flex flex-col w-full">
                {/* Tamanhos da proporção vw reduzidos para caber dentro da div lg:w-3/4 */}
                <AnimatedText 
                  text="A" 
                  className="text-[clamp(1.5rem,3vw,3rem)] text-zinc-400 ml-1 md:ml-2 leading-none mb-1 md:mb-2 pr-2" 
                />
                
                <AnimatedText 
                  text="Engenharia" 
                  className="text-[clamp(2.5rem,6.5vw,7.5rem)] w-full text-white leading-[0.85] pb-1 pr-4" 
                />
                
                <AnimatedText 
                  text="Do" 
                  className="text-[clamp(1.5rem,3vw,3rem)] text-zinc-500 ml-1 md:ml-2 mt-2 md:mt-4 leading-none mb-1 md:mb-2 pr-2" 
                />
                
                <AnimatedText 
                  text="Espetáculo." 
                  className="text-[clamp(2.5rem,6vw,7rem)] text-zinc-400 leading-[0.85] pb-2 pr-4" 
                />
              </div>
            </div>

            {/* ================= BLOCO DIREITO (DESCRIÇÃO) ================= */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/4 flex flex-col lg:items-end lg:text-right mt-8 lg:mt-0 mb-4"
            >
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-6 max-w-sm">
                Estruturas de palco, audiovisual e soluções técnicas de alto calibre para clientes que não admitem margem de erro.
              </p>
              <a href="#acervo" className="group inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-white font-semibold hover:text-[#C5A059] transition-colors">
                <span className="lg:hidden">Explorar Acervo</span>
                <div className="hidden lg:block w-8 h-[1px] bg-white group-hover:bg-[#C5A059] group-hover:w-12 transition-all duration-300" />
                <span className="hidden lg:block">Explorar Acervo</span>
                <div className="lg:hidden w-8 h-[1px] bg-white group-hover:bg-[#C5A059] group-hover:w-12 transition-all duration-300" />
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ================= ESTATÍSTICAS ================= */}
      <section className="bg-black py-20 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
        <div className="max-w-[100rem] mx-auto border-b border-white/5 pb-12 md:pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
            {[
              { num: "10+", label: "Anos de Excelência" },
              { num: "500+", label: "Eventos Entregues" },
              { num: "100%", label: "Engenharia c/ ART" },
              { num: "Zero", label: "Falhas Técnicas" }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex flex-col items-start md:border-l border-white/5 md:pl-8 first:border-0 first:pl-0"
              >
                <span className="text-4xl md:text-6xl font-title font-bold text-white mb-2">{stat.num}</span>
                <span className="text-[9px] md:text-xs text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACERVO ================= */}
      <section id="acervo" className="py-20 md:py-40 bg-black">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          
          <div className="mb-24 md:mb-40 flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-title font-bold text-white uppercase tracking-tighter leading-[1] mb-8">
              Poder de Fogo <br /> <span className="text-zinc-700">Tecnológico.</span>
            </h2>
            <p className="text-sm md:text-lg text-zinc-400 font-light max-w-sm leading-relaxed">
              Trabalhamos com arsenais de ponta, revisados exaustivamente antes de cada montagem. O luxo invisível que garante o espetáculo.
            </p>
          </div>

          <div className="space-y-32 md:space-y-48">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 md:gap-20`}
                >
                  {/* Imagem Editorial (Agora quadrada, menor, com borda e luz dourada) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-md md:w-5/12 aspect-square bg-[#050505] relative group overflow-hidden border border-[#C5A059]/30 shadow-[0_0_30px_-5px_rgba(197,160,89,0.25)] hover:shadow-[0_0_50px_-5px_rgba(197,160,89,0.45)] transition-all duration-700"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <Image 
                      src={`/foto (${index + 1}).jpg`} 
                      alt={service.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Texto Clean */}
                  <div className="w-full md:w-1/2 flex flex-col">
                    <motion.span 
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-6xl md:text-[7rem] font-title font-bold text-[#111] leading-none mb-6 md:mb-10"
                    >
                      {service.num}
                    </motion.span>
                    
                    <AnimatedText text={service.title} className="text-3xl md:text-5xl font-title font-bold text-white mb-6 tracking-tight" />
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-base md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-12"
                    >
                      {service.desc}
                    </motion.p>
                    
                    <motion.a 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      href="#contato" 
                      className="group inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-white font-semibold hover:text-[#C5A059] transition-colors self-start"
                    >
                      Orçar Estrutura <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= O MÉTODO ================= */}
      <section className="py-32 md:py-48 bg-[#030303] px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="md:w-1/2 md:sticky top-40 self-start">
            <p className="text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em] mb-6">A Garantia Monumental</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-bold text-white uppercase tracking-tighter leading-[1]">
              Você Cuida <br/> dos Convidados. <br/> <span className="text-zinc-700">Nós da <br/>Engenharia.</span>
            </h3>
          </div>

          <div className="md:w-1/2 flex flex-col gap-16 md:gap-24 pt-12 md:pt-0">
            {[
              { t: 'Redundância', d: 'Equipamentos de backup on-site. Se algo falhar, o sistema assume em segundos sem que ninguém perceba.' },
              { t: 'Discrição', d: 'Nossa equipe atua como sombras. Uniformizados, discretos e treinados para o mais alto nível corporativo.' },
              { t: 'Pontualidade', d: 'Seu evento pronto e exaustivamente testado horas antes do primeiro convidado chegar no local.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="border-t border-white/10 pt-8"
              >
                <AnimatedText text={item.t} className="text-2xl md:text-4xl font-title font-bold text-white mb-4" />
                <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section id="contato" className="py-32 md:py-64 bg-black px-6 md:px-12 flex flex-col items-center justify-center border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
          
          <div className="flex flex-col items-center text-center font-title font-bold uppercase tracking-tighter leading-[0.9] mb-12 w-full">
            <AnimatedText text="O Próximo" className="text-[clamp(3rem,8vw,6.5rem)] text-white justify-center w-full pb-1" />
            <AnimatedText text="Nível" className="text-[clamp(3rem,8vw,6.5rem)] text-zinc-400 justify-center w-full pb-1" />
            <AnimatedText text="Começa" className="text-[clamp(3rem,8vw,6.5rem)] text-white justify-center w-full pb-1" />
            <AnimatedText text="Aqui." className="text-[clamp(3rem,8vw,6.5rem)] text-[#C5A059] justify-center w-full pb-1" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-xl text-zinc-400 font-light mb-16 max-w-2xl text-center leading-relaxed"
          >
            Nossa agenda é propositalmente limitada. Priorizamos a excelência entregando poucos projetos, mas absolutamente irretocáveis.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            href="https://wa.me/+5561996432194" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 md:px-16 md:py-8 overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 font-title font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
              Falar com a Diretoria
            </span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* ================= FOOTER DE LUXO ================= */}
      <footer className="bg-[#030303] py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-16">
          
          <div className="flex flex-col items-start">
            <div className="relative w-48 h-12 md:w-72 md:h-16 mb-8">
              <Image 
                src="/Monumental.png" 
                alt="Monumental Eventos" 
                fill
                sizes="(max-width: 768px) 192px, 288px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm md:text-base text-zinc-500 max-w-sm leading-relaxed font-light">
              Elevando o padrão de eventos corporativos e cerimoniais de alto luxo em Brasília.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:text-right w-full md:w-auto">
            <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.2em] font-semibold mb-2">Contato Exclusivo</p>
            <a href="mailto:diretoria@monumentaleventos.com.br" className="text-base sm:text-lg md:text-2xl font-light text-white hover:text-[#C5A059] transition-colors break-words">
              diretoria@monumental.com.br
            </a>
            <p className="text-base sm:text-lg md:text-2xl font-light text-zinc-400">
              +55 (61) 99643-2194
            </p>
            <div className="flex gap-6 mt-6 md:justify-end">
              <a href="#" className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors">Instagram</a>
              <a href="#" className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors">WhatsApp</a>
            </div>
          </div>

        </div>
        
        <div className="max-w-[100rem] mx-auto mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Monumental Eventos. Todos os direitos reservados.</p>
          <p>Design & Code by <span className="text-zinc-400 font-bold hover:text-white transition-colors cursor-pointer">AKNOTECH</span></p>
        </div>
      </footer>
    </main>
  );
}