# ACTIVE - Psy Trance SPA (active-spa.md)

## 1. Visão Geral
Construir um Single Page Application (SPA) para o projeto ACTIVE (Psy Trance/Off-Beat).
Stack: React.js (Vite), Tailwind CSS, Framer Motion.
Foco em Mobile-First, animações fluidas e tema Dark/Cyber-Futurista agressivo (`#000000` & `#FFD700`).

## 2. Decisões Estratégicas (Gate Cleared)
- **Animações (Liquid Metal/Glitch):** O estilo cinético agressivo (Framer Motion + CSS) será mantido mesmo em Mobile para sustentar a identidade de Metal Líquido Cyberpunk. 
- **Player de Áudio:** Simplificado para apenas 1 player (SoundCloud). Elimina colisões e otimiza a conversão de cliques para a plataforma oficial.
- **Integração de Vídeo:** O arquivo MP4 adicional enviado será usado para amplificar o efeito Kinetic (provavelmente mascarado ou alocado no Hero / About layer).

## 3. Fases de Execução (Modo Edit/Orchestrator)

### [✔️] Fase 1: Setup da Fundação
- Inicialização do React.js via Vite.
- Instalação de TailwindCSS (v3), Framer Motion, e iconografia (Lucide).
- Organização dos assets originais HR nas pastas `/public`.

### [ ] Fase 2: Typography & Design Tokens
- Configuração de `tailwind.config.js` (`colors.active, fonts`).
- Implementação de classes core CSS (Glitch Effects, Marquee, CRT borders) em `index.css`.

### [ ] Fase 3: Componentes Fundacionais (Header & Hero)
- Nav bar fixa blur-glass com as bordas Liquid Metal.
- Hero massivo com vídeos/imagens reprocessados (grayscale/high contrast) no DOM e textão `ACTIVE` com parallax.
- O Botão "OUÇA AGORA" com efeito de Glitch em hover.

### [ ] Fase 4: Seções de Conteúdo e UX
- Secção Sobre (Assimetria 90/10 brutalista).
- Componente de Player Integrado do SoundCloud + Grid Glitch Placeholder para os singles.
- Agenda Hibrida iluminada ao hover.
- Footer e UX final (Cursor customizado if applicable).
