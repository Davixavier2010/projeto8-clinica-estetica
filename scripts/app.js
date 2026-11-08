// ==========================================================================
// CLÍNICA LUMINA • DERMATOLOGIA & ESTÉTICA AVANÇADA
// Scripts de Alta Interatividade, Handpiece Laser & Concierge
// ==========================================================================

(function() {
  // 1. PROCEDIMENTOS & PROTOCOLOS (Textos Enxutos & Imagens 100% Verificadas)
  const CATEGORIES = [
    { id: 'todos', name: 'Todos os Procedimentos', icon: 'sparkles' },
    { id: 'rejuvenescimento', name: 'Lifting & Colágeno', icon: 'activity' },
    { id: 'injetaveis', name: 'Injetáveis Elegantes', icon: 'syringe' },
    { id: 'laser', name: 'Lasers & Glow', icon: 'zap' },
    { id: 'corporal', name: 'Contorno Corporal', icon: 'heart' }
  ];

  const PROCEDURES = [
    {
      id: 'ultraformer-mpt',
      category: 'rejuvenescimento',
      name: 'Ultraformer MPT',
      subtitle: 'Lifting Facial Sem Cortes',
      badge: 'Tecnologia Ouro',
      time: '50 min',
      downtime: 'Retorno imediato',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Ultrassom micropulsado que retrai as camadas profundas e redefine a mandíbula sem agulhas.',
      fullDesc: 'O Ultraformer MPT atua na camada muscular SMAS promovendo contração tecidual imediata e estímulo contínuo de colágeno por meses.',
      benefits: ['Efeito lifting não invasivo', 'Redução sutil de papada', 'Sem tempo de recuperação'],
      sessions: '1 sessão ao ano'
    },
    {
      id: 'laser-lavieen',
      category: 'laser',
      name: 'Laser Lavieen BB Glow',
      subtitle: 'Porcelana & Luminosidade',
      badge: 'Mais Pedido',
      time: '40 min',
      downtime: '24h (rubor suave)',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Laser fracionado que fecha poros, clareia manchas e entrega viço imediato de pele maquiada.',
      fullDesc: 'Tratamento de precisão que renova a camada superficial da pele, amenizando manchas solares e refinando a textura dérmica.',
      benefits: ['Fechamento visível de poros', 'Clareamento uniforme', 'Brilho acetinado natural'],
      sessions: '3 sessões mensais'
    },
    {
      id: 'botox-preventivo',
      category: 'injetaveis',
      name: 'Botox Anatômico',
      subtitle: 'Expressão Suave & Descansada',
      badge: 'Naturalidade',
      time: '30 min',
      downtime: 'Zero repouso',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Microdoses estratégicas para relaxar marcas de expressão sem congelar o seu sorriso.',
      fullDesc: 'Aplicação milimétrica personalizada respeitando os vetores faciais individuais, garantindo um visual leve e descansado.',
      benefits: ['Prevenção de rugas estáticas', 'Abertura sutil do olhar', 'Zero aspecto paralisado'],
      sessions: 'A cada 4 a 6 meses'
    },
    {
      id: 'bioestimulador-colageno',
      category: 'rejuvenescimento',
      name: 'Bioestimulador de Colágeno',
      subtitle: 'Firmeza e Densidade Dérmica',
      badge: 'Colágeno Puro',
      time: '45 min',
      downtime: 'Retorno imediato',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Estímulo biológico para recuperar a sustentação natural e a espessura jovem da pele.',
      fullDesc: 'Radiesse ou Sculptra aplicados para criar um banco duradouro de colágeno, combatendo a flacidez progressivamente.',
      benefits: ['Aumento de espessura dérmica', 'Firmeza estrutural sem volume', 'Efeito duradouro até 24 meses'],
      sessions: '1 a 2 sessões'
    },
    {
      id: 'harmonizacao-labial',
      category: 'injetaveis',
      name: 'Gloss Lips Hidratação',
      subtitle: 'Contorno Labial Discreto',
      badge: 'Delicadeza',
      time: '35 min',
      downtime: '24h',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Ácido hialurônico leve para restaurar o viço, o contorno do arco e a hidratação dos lábios.',
      fullDesc: 'Técnica de microgotas focada no contorno e hidratação profunda, eliminando linhas labiais sem exageros volumétricos.',
      benefits: ['Desenho suave do arco do cupido', 'Hidratação profunda prolongada', 'Proporção áurea respeitada'],
      sessions: 'Duração de 12 a 15 meses'
    },
    {
      id: 'emsculpt-neo',
      category: 'corporal',
      name: 'Emsculpt Neo Corporal',
      subtitle: 'Tônus Muscular & Firmeza',
      badge: 'Alta Potência',
      time: '30 min',
      downtime: 'Zero repouso',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Combinação de radiofrequência e campo eletromagnético para queima de gordura e ganho de tônus.',
      fullDesc: 'Sessão intensiva de 30 minutos equivalente a milhares de contrações musculares para abdômen, glúteos e pernas.',
      benefits: ['Fortalecimento do tônus', 'Compactação de gordura', 'Procedimento não cirúrgico'],
      sessions: 'Pacote de 4 sessões'
    }
  ];

  let currentCategory = 'todos';

  // 2. SPOTLIGHT MOUSE EFFECT (21st.dev Style)
  function initSpotlightCards() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 3. CATALOG RENDERING & TABS
  function initCatalog() {
    const tabsContainer = document.getElementById('catalog-tabs');
    const grid = document.getElementById('catalog-grid');
    if (!tabsContainer || !grid) return;

    tabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button 
        type="button" 
        data-category="${cat.id}"
        class="tactile-btn category-tab px-5 py-2 rounded-full text-xs font-semibold border border-[#D86885]/20 bg-white text-[#6B5B62] hover:text-[#D86885] hover:border-[#D86885] whitespace-nowrap transition-all flex items-center gap-2 shadow-xs active:scale-[0.96] ${cat.id === currentCategory ? 'active' : ''}">
        <i data-lucide="${cat.icon}" class="w-3.5 h-3.5 text-current"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-tab');
      if (!btn) return;
      currentCategory = btn.dataset.category;
      document.querySelectorAll('.category-tab').forEach(b => {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      renderProcedures();
    });

    renderProcedures();
  }

  function renderProcedures() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    const filtered = PROCEDURES.filter(p => currentCategory === 'todos' || p.category === currentCategory);

    grid.innerHTML = filtered.map(p => `
      <article class="spotlight-card group flex flex-col justify-between bg-white border border-[#D86885]/15" data-id="${p.id}">
        <div>
          <div class="relative h-56 overflow-hidden bg-[#FCE8ED] cursor-pointer" onclick="window.lumina.openModal('${p.id}')">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
            
            <div class="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
              <span class="bg-[#D86885] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                ${p.badge}
              </span>
            </div>

            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
              <span class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#D86885]/20 font-mono text-[#8F2B45] font-semibold text-[11px]">
                <i data-lucide="clock" class="w-3 h-3 text-[#D86885]"></i> ${p.time}
              </span>
              <span class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono text-emerald-700 font-semibold text-[11px]">
                <i data-lucide="check-circle" class="w-3 h-3 text-emerald-500"></i> ${p.downtime}
              </span>
            </div>
          </div>

          <div class="p-5 sm:p-6 space-y-2">
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#D86885] font-semibold block">
              ${p.subtitle}
            </span>
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#23181C] group-hover:text-[#D86885] transition-colors leading-snug cursor-pointer" onclick="window.lumina.openModal('${p.id}')">
              ${p.name}
            </h3>
            <p class="text-xs text-[#6B5B62] leading-relaxed line-clamp-2">
              ${p.shortDesc}
            </p>
          </div>
        </div>

        <div class="p-5 sm:p-6 pt-0 border-t border-[#D86885]/10 flex items-center justify-between gap-3 mt-auto">
          <button 
            type="button" 
            onclick="window.lumina.openModal('${p.id}')"
            class="text-xs text-[#D86885] hover:text-[#8F2B45] font-semibold flex items-center gap-1 transition-colors">
            <span>Detalhes</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>

          <a 
            href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20procedimento%20${encodeURIComponent(p.name)}%20na%20Cl%C3%ADnica%20Lumina." 
            target="_blank" 
            rel="noopener"
            class="tactile-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D86885] hover:bg-[#8F2B45] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-[0.96]">
            <i data-lucide="calendar" class="w-3 h-3"></i>
            <span>Agendar</span>
          </a>
        </div>
      </article>
    `).join('');

    initSpotlightCards();
    if (window.lucide) window.lucide.createIcons();

    if (window.gsap) {
      window.gsap.fromTo(grid.querySelectorAll('.spotlight-card'), 
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }

  // 4. MODAL DETALHADO
  function openModal(procedureId) {
    const p = PROCEDURES.find(item => item.id === procedureId);
    if (!p) return;

    const modal = document.getElementById('protocol-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div class="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FCE8ED]">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
          <span class="absolute top-3 left-3 bg-[#D86885] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            ${p.badge}
          </span>
        </div>

        <div class="md:col-span-7 space-y-4">
          <div>
            <span class="text-xs font-mono text-[#D86885] uppercase tracking-wider font-semibold block">${p.subtitle}</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#23181C] leading-tight">${p.name}</h2>
          </div>

          <p class="text-xs sm:text-sm text-[#6B5B62] leading-relaxed">${p.fullDesc}</p>

          <div class="p-4 rounded-xl bg-[#FFF5F7] border border-[#D86885]/20 space-y-2">
            <h4 class="text-xs font-mono uppercase tracking-wider text-[#8F2B45] font-bold">Diferenciais Clínicos</h4>
            <ul class="space-y-1.5 text-xs text-[#23181C]">
              ${p.benefits.map(b => `<li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#D86885]"></i><span>${b}</span></li>`).join('')}
            </ul>
          </div>

          <div class="flex items-center justify-between text-xs text-[#6B5B62] pt-1">
            <span>Duração: <strong class="text-[#23181C]">${p.time}</strong></span>
            <span>Frequência: <strong class="text-[#23181C]">${p.sessions}</strong></span>
          </div>

          <div class="pt-3 border-t border-[#D86885]/15">
            <a 
              href="https://wa.me/5511999998888?text=Ol%C3%A1!%20Desejo%20agendar%20uma%20consulta%20para%20${encodeURIComponent(p.name)}%20na%20Cl%C3%ADnica%20Lumina." 
              target="_blank" 
              rel="noopener"
              class="btn-shimmer tactile-btn w-full py-3 px-6 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 active:scale-[0.97]">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>Agendar no WhatsApp com a Concierge</span>
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  function closeModal() {
    const modal = document.getElementById('protocol-modal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 5. ACCORDION FAQ
  function initFAQ() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      trigger?.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  // 6. SIMULADOR DE PROTOCOLO (Enxuto & Dinâmico)
  function initProtocolSimulator() {
    const ageSelect = document.getElementById('sim-age');
    const goalSelect = document.getElementById('sim-goal');
    const resultBox = document.getElementById('sim-result-box');
    const planName = document.getElementById('sim-plan-name');
    const planDesc = document.getElementById('sim-plan-desc');
    const planTech = document.getElementById('sim-plan-tech');
    const simWhatsappBtn = document.getElementById('sim-whatsapp-btn');

    function updateSimulation() {
      const age = ageSelect?.value || '25-35';
      const goal = goalSelect?.value || 'prevencao';

      let plan = {
        name: 'Protocolo Glow & Prevenção Facial',
        tech: 'Laser Lavieen + Botox Preventivo',
        desc: 'Renovação imediata da textura e poros com prevenção suave de marcas de expressão.'
      };

      if (goal === 'lifting' || age === '46+') {
        plan = {
          name: 'Protocolo Lifting Tridimensional',
          tech: 'Ultraformer MPT + Bioestimulador Radiesse',
          desc: 'Estímulo de colágeno e ancoragem muscular profunda para redefinir o contorno sem cortes.'
        };
      } else if (goal === 'manchas') {
        plan = {
          name: 'Protocolo Pele de Porcelana',
          tech: 'Laser Lavieen Fracionado + Drug Delivery',
          desc: 'Uniformização profunda de pigmentação dérmica e clareamento homogêneo.'
        };
      } else if (goal === 'contorno') {
        plan = {
          name: 'Protocolo Escultura Corporal',
          tech: 'Emsculpt Neo + Radiofrequência',
          desc: 'Hipertrofia muscular e compactação de gordura localizada com retorno imediato.'
        };
      }

      if (planName) planName.textContent = plan.name;
      if (planTech) planTech.textContent = plan.tech;
      if (planDesc) planDesc.textContent = plan.desc;

      if (simWhatsappBtn) {
        simWhatsappBtn.href = `https://wa.me/5511999998888?text=Ol%C3%A1!%20Fiz%20a%20simula%C3%A7%C3%A3o%20no%20site%20e%20meu%20resultado%20foi%20o%20*${encodeURIComponent(plan.name)}*%20(${encodeURIComponent(plan.tech)}).%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o.`;
      }

      if (resultBox && window.gsap) {
        window.gsap.fromTo(resultBox, { scale: 0.98, opacity: 0.8 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
      }
    }

    ageSelect?.addEventListener('change', updateSimulation);
    goalSelect?.addEventListener('change', updateSimulation);
    updateSimulation();
  }

  // 7. INTERACTIVE MEDICAL UTENSIL ANIMATION (Handpiece Laser & Ultrasonic Wand)
  function initMedicalUtensil() {
    const wand = document.getElementById('interactive-wand');
    const container = document.getElementById('wand-interactive-area');
    const triggerBtn = document.getElementById('wand-pulse-btn');
    const energyDisplay = document.getElementById('wand-energy-val');
    const modeSelects = document.querySelectorAll('.wand-mode-btn');
    const modeNameDisplay = document.getElementById('wand-mode-title');
    const wavelengthDisplay = document.getElementById('wand-wavelength');

    if (!wand || !container) return;

    let currentWandMode = 'ultraformer';
    let energyLevel = 1.8;

    // Mouse tracking sweep for the wand
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      // Tilt and move wand slightly with smooth physics
      const offsetX = (relativeX - 0.5) * 60;
      const rotateDeg = (relativeX - 0.5) * 14;
      wand.style.transform = `translateX(${offsetX}px) rotate(${rotateDeg}deg)`;
    });

    container.addEventListener('mouseleave', () => {
      wand.style.transform = 'translateX(0px) rotate(0deg)';
    });

    // Modes toggle
    modeSelects.forEach(btn => {
      btn.addEventListener('click', () => {
        modeSelects.forEach(b => b.classList.remove('bg-[#D86885]', 'text-white'));
        modeSelects.forEach(b => b.classList.add('bg-white', 'text-[#6B5B62]'));
        btn.classList.add('bg-[#D86885]', 'text-white');
        btn.classList.remove('bg-white', 'text-[#6B5B62]');

        currentWandMode = btn.dataset.mode;
        if (currentWandMode === 'ultraformer') {
          if (modeNameDisplay) modeNameDisplay.textContent = 'Ultrassom Microfocado SMAS 4.5mm';
          if (wavelengthDisplay) wavelengthDisplay.textContent = 'Frequência 7.0 MHz • Profundidade 4.5mm';
          energyLevel = 1.8;
        } else if (currentWandMode === 'lavieen') {
          if (modeNameDisplay) modeNameDisplay.textContent = 'Laser Sub-ablativo Thulium 1927nm';
          if (wavelengthDisplay) wavelengthDisplay.textContent = 'Comprimento 1927nm • Modo Sub-ablative';
          energyLevel = 2.4;
        } else {
          if (modeNameDisplay) modeNameDisplay.textContent = 'Radiofrequência Fracionada Robótica';
          if (wavelengthDisplay) wavelengthDisplay.textContent = 'Microagulhas de Ouro • RF Bipolar 2.0MHz';
          energyLevel = 3.2;
        }
        if (energyDisplay) energyDisplay.textContent = `${energyLevel.toFixed(1)} J/cm²`;
        showToast(`Ponteira calibrada: ${modeNameDisplay ? modeNameDisplay.textContent : ''}`, '⚡');
      });
    });

    // Trigger pulse button with flash effect
    triggerBtn?.addEventListener('click', () => {
      const beam = document.querySelector('.laser-beam');
      const rings = document.querySelectorAll('.pulse-ring');
      
      if (window.gsap) {
        window.gsap.timeline()
          .to(beam, { opacity: 1, scaleY: 1.3, duration: 0.1, backgroundColor: '#FFFFFF', boxShadow: '0 0 35px #D86885' })
          .to(beam, { opacity: 0.8, scaleY: 1, duration: 0.2, backgroundColor: '#D86885' });
        
        rings.forEach(ring => {
          window.gsap.fromTo(ring, { scale: 0.4, opacity: 1 }, { scale: 2.8, opacity: 0, duration: 0.9, ease: 'power2.out' });
        });
      }

      showToast('Disparo calibrado emitido com sucesso na derme.', '✦');
    });
  }

  // 8. TOAST NOTIFICATION
  function showToast(message, icon = '✦') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span class="text-[#D86885]">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // EXPORTAÇÃO
  window.lumina = {
    openModal,
    closeModal,
    showToast
  };

  // START
  function start() {
    initCatalog();
    initSpotlightCards();
    initFAQ();
    initProtocolSimulator();
    initMedicalUtensil();

    document.getElementById('protocol-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'protocol-modal') closeModal();
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
