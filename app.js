/**
 * BORN // FUTURE — SPATIAL 3D WEB EXPERIENCE ENGINE
 * Inspired by Avant-Garde Luxury Editorial Design & Interactive Three.js WebGL
 * Author: Jayraj S.V (jaysid97)
 */

// Project Dimensional Database
const DIMENSIONS_DATA = [
  {
    id: 'lexipulse-ai',
    number: '01',
    chapter: 'CHAPTER I // NEURAL INTELLIGENCE',
    title: 'LexiPulse AI',
    tagline: 'Real-time Neural NLP & Language Platform',
    synopsis: 'Next-generation AI-powered language intelligence platform. Engineered for sub-millisecond semantic parsing, sentiment extraction, and automated contextual summarization across multi-lingual corpora.',
    poster: './assets/posters/lexipulse.jpg',
    color: '#00f2fe',
    theme: 'neural',
    tags: ['JavaScript', 'AI/NLP', 'Transformers', 'GitHub Pages'],
    liveUrl: 'https://jaysid97.github.io/lexipulse-ai/',
    githubUrl: 'https://github.com/jaysid97/lexipulse-ai',
    episodes: [
      { num: '01', title: 'Real-time NLP Pipeline', desc: 'Sub-millisecond tokenization and vector embeddings engine.', duration: '14 mins' },
      { num: '02', title: 'Semantic Grammar Analysis', desc: 'Context-aware semantic tree parsing with visual telemetry.', duration: '18 mins' },
      { num: '03', title: 'Edge Deployment & Zero-Lag UI', desc: 'Pure client-side inference optimizations for GitHub Pages.', duration: '22 mins' }
    ]
  },
  {
    id: 'voice-bharat',
    number: '02',
    chapter: 'CHAPTER II // ACOUSTIC REVOLUTION',
    title: 'Voice Challenges: Bharat',
    tagline: 'Conversational Voice SDKs for Next Billion',
    synopsis: 'An intensive 10-day voice challenge series architected for Indian developers. Empowers engineers to build conversational voice agents, dialect-aware interfaces, and multilingual audio speech recognition pipelines.',
    poster: './assets/posters/voice_bharat.jpg',
    color: '#ff9933',
    theme: 'audio',
    tags: ['TypeScript', 'Voice SDK', 'Speech-to-Text', 'Acoustic AI'],
    liveUrl: 'https://github.com/jaysid97/Ten-day-of-voice-challenges-bharat-edition',
    githubUrl: 'https://github.com/jaysid97/Ten-day-of-voice-challenges-bharat-edition',
    episodes: [
      { num: '01', title: 'Acoustic Model Foundations', desc: 'Capturing regional nuances and multilingual phonetics.', duration: '15 mins' },
      { num: '02', title: 'Low-Latency Conversational Loop', desc: 'Streaming audio chunks over WebSocket with bi-directional audio.', duration: '20 mins' },
      { num: '03', title: 'Bharat Dialect Optimization', desc: 'Tuning language models for mixed Indian English & vernacular speech.', duration: '25 mins' }
    ]
  },
  {
    id: 'carbon-tracker',
    number: '03',
    chapter: 'CHAPTER III // PLANETARY TELEMETRY',
    title: 'Carbon Footprint Tracker',
    tagline: 'Data-Driven Eco Sustainability Protocol',
    synopsis: 'A high-impact sustainability web application designed to compute, visualize, and systematically reduce personal and organizational carbon footprints with real-time planetary telemetry and actionable offsets.',
    poster: './assets/posters/carbon_tracker.jpg',
    color: '#00df89',
    theme: 'eco',
    tags: ['JavaScript', 'Green Tech', 'Data Visualizer', 'Eco Metrics'],
    liveUrl: 'https://jaysid97.github.io/carbon-footprint-tracker/',
    githubUrl: 'https://github.com/jaysid97/carbon-footprint-tracker',
    episodes: [
      { num: '01', title: 'Emission Telemetry Calculation', desc: 'Mathematical modeling of Scope 1, 2, and 3 personal emissions.', duration: '16 mins' },
      { num: '02', title: 'Predictive Reduction Engine', desc: 'Simulating energy habits and lifestyle carbon impact.', duration: '21 mins' },
      { num: '03', title: 'Interactive Planetary Charts', desc: 'Dynamic SVG and canvas telemetry rendering real-time impact.', duration: '19 mins' }
    ]
  },
  {
    id: 'entropy-zero',
    number: '04',
    chapter: 'CHAPTER IV // ZERO ENTROPY ARCHITECTURE',
    title: 'Entropy Zero',
    tagline: 'Deterministic High-Velocity State Systems',
    synopsis: 'Zero-entropy structured data management system — a clean-slate philosophical approach to orchestrating, validating, and mutating high-velocity state streams with deterministic mathematical guarantees.',
    poster: './assets/posters/entropy_zero.jpg',
    color: '#9d4edd',
    theme: 'matrix',
    tags: ['JavaScript', 'System Architecture', 'State Engine'],
    liveUrl: 'https://github.com/jaysid97/entropy-zero',
    githubUrl: 'https://github.com/jaysid97/entropy-zero',
    episodes: [
      { num: '01', title: 'Deterministic State Trees', desc: 'Eliminating non-deterministic race conditions at scale.', duration: '24 mins' },
      { num: '02', title: 'Zero Mutation Overhead', desc: 'Memory-efficient structural sharing data structures.', duration: '28 mins' },
      { num: '03', title: 'Stress Testing Under High Load', desc: 'Benchmarking millions of concurrent state transitions.', duration: '31 mins' }
    ]
  },
  {
    id: 'stadium-concierge',
    number: '05',
    chapter: 'CHAPTER V // ARENA CONCIERGE AI',
    title: 'Stadium Concierge Assistant',
    tagline: 'Autonomous AI Navigation for Major Arenas',
    synopsis: 'An intelligent AI concierge assistant for major arena and sports experiences. Directs fans through gates, delivers real-time venue navigation, concession orders, and handles thousands of fan inquiries.',
    poster: './assets/posters/stadium_concierge.jpg',
    color: '#00f2fe',
    theme: 'arena',
    tags: ['Python', 'FastAPI', 'Event AI', 'Conversational Assistant'],
    liveUrl: 'https://github.com/jaysid97/stadium-concierge-assistant',
    githubUrl: 'https://github.com/jaysid97/stadium-concierge-assistant',
    episodes: [
      { num: '01', title: 'Spatial Navigation & Map Routing', desc: 'Indoor geospatial guidance for multi-tiered sports stadiums.', duration: '17 mins' },
      { num: '02', title: 'Concession Surge Load Management', desc: 'Predicting queue wait times and load-balancing orders.', duration: '23 mins' }
    ]
  }
];

class AvantGardeExperience {
  constructor() {
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isDown: false };
    this.scroll = { current: 0, target: 0, ease: 0.08 };
    this.activeDimension = 0;
    this.activeModal = null;

    // Web Audio Engine
    this.audioCtx = null;
    this.masterGain = null;
    this.isAudioActive = false;
    this.chordNodes = [];

    // Theater state
    this.isPlaying = false;
    this.progress = 0;
    this.playbackTimer = null;

    this.init();
  }

  init() {
    this.initMagneticCursor();
    this.initThreeScene();
    this.initScrollEngine();
    this.initAudioEngine();
    this.initInteractions();
    this.renderCards();
    this.animate();
  }

  /* --------------------------------------------------------------------------
     1. THREE.JS 3D WEBGL CENTERPIECE ARTIFACT
  -------------------------------------------------------------------------- */
  initThreeScene() {
    const container = document.getElementById('webgl-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 7;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    container.appendChild(this.renderer.domElement);

    // Create The Iridescent Quantum Artifact Core
    this.createArtifactCore();

    // Create Quantum Particle Starfield
    this.createQuantumStarfield();

    // Cinematic Lights
    this.ambientLight = new THREE.AmbientLight(0x0f111a, 1.5);
    this.scene.add(this.ambientLight);

    this.pointLightCyan = new THREE.PointLight(0x00f2fe, 3, 20);
    this.pointLightCyan.position.set(4, 3, 4);
    this.scene.add(this.pointLightCyan);

    this.pointLightPurple = new THREE.PointLight(0x9d4edd, 3.5, 20);
    this.pointLightPurple.position.set(-4, -2, 3);
    this.scene.add(this.pointLightPurple);

    this.pointLightMouse = new THREE.PointLight(0xffffff, 2, 10);
    this.pointLightMouse.position.set(0, 0, 5);
    this.scene.add(this.pointLightMouse);

    // Drag tracking on canvas
    this.dragStart = { x: 0, y: 0 };
    this.rotationVel = { x: 0, y: 0 };

    container.addEventListener('pointerdown', (e) => {
      this.mouse.isDown = true;
      this.dragStart.x = e.clientX;
      this.dragStart.y = e.clientY;
    });

    window.addEventListener('pointerup', () => {
      this.mouse.isDown = false;
    });

    window.addEventListener('pointermove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (this.mouse.isDown && this.coreGroup) {
        const dx = e.clientX - this.dragStart.x;
        const dy = e.clientY - this.dragStart.y;
        this.coreGroup.rotation.y += dx * 0.005;
        this.coreGroup.rotation.x += dy * 0.005;
        this.dragStart.x = e.clientX;
        this.dragStart.y = e.clientY;
      }
    });

    // Double click to trigger shockwave
    container.addEventListener('dblclick', () => {
      this.triggerCoreShockwave();
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  createArtifactCore() {
    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    // Geometry 1: Metallic Iridescent Inner Core (Torus Knot)
    const innerGeo = new THREE.TorusKnotGeometry(1.3, 0.42, 160, 32, 2, 3);
    this.innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x07090e,
      emissive: 0x1a0b2e,
      roughness: 0.12,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      transmission: 0.2,
      ior: 1.6
    });
    this.innerMesh = new THREE.Mesh(innerGeo, this.innerMat);
    this.coreGroup.add(this.innerMesh);

    // Geometry 2: Outer Holographic Lattice Cage (Icosahedron Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(2.35, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    this.outerMesh = new THREE.Mesh(outerGeo, wireMat);
    this.coreGroup.add(this.outerMesh);

    // Geometry 3: Radiant Floating Gyro Rings
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      transparent: true,
      opacity: 0.35
    });
    this.ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    this.ringMesh2 = new THREE.Mesh(ringGeo, ringMat);
    this.ringMesh2.rotation.x = Math.PI / 2;
    this.coreGroup.add(this.ringMesh1);
    this.coreGroup.add(this.ringMesh2);
  }

  createQuantumStarfield() {
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const purpleColor = new THREE.Color(0x9d4edd);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 35;

      const mixed = Math.random() > 0.5 ? cyanColor : purpleColor;
      colors[i] = mixed.r;
      colors[i + 1] = mixed.g;
      colors[i + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  triggerCoreShockwave() {
    if (!this.coreGroup) return;
    this.playAudioSfx('boom');
    this.showToast('Quantum Resonance Triggered ⚡');

    const originalScale = this.coreGroup.scale.x;
    let progress = 0;

    const pulseInterval = setInterval(() => {
      progress += 0.08;
      const s = originalScale + Math.sin(progress * Math.PI) * 0.45;
      this.coreGroup.scale.set(s, s, s);

      if (progress >= 1) {
        clearInterval(pulseInterval);
        this.coreGroup.scale.set(originalScale, originalScale, originalScale);
      }
    }, 20);
  }

  /* --------------------------------------------------------------------------
     2. MAGNETIC CURSOR & KINETIC RING
  -------------------------------------------------------------------------- */
  initMagneticCursor() {
    this.cursorDot = document.getElementById('cursor-dot');
    this.cursorRing = document.getElementById('cursor-ring');
    if (!this.cursorDot || !this.cursorRing) return;

    this.cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('pointermove', (e) => {
      this.cursorPos.x = e.clientX;
      this.cursorPos.y = e.clientY;
    });

    // Hover magnet on clickable items
    const updateInteractiveElements = () => {
      document.querySelectorAll('a, button, .avant-card, .scroll-indicator-wrap, .constellation-item, .split-word').forEach(el => {
        el.onmouseenter = () => {
          document.body.classList.add('cursor-hover');
          this.playAudioSfx('tick');
        };
        el.onmouseleave = () => {
          document.body.classList.remove('cursor-hover');
        };
      });
    };

    updateInteractiveElements();
    this.updateInteractive = updateInteractiveElements;
  }

  /* --------------------------------------------------------------------------
     3. SCROLL PROGRESSION & 3D CAMERA MORPHING
  -------------------------------------------------------------------------- */
  initScrollEngine() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollY / (docHeight || 1)));

      // Navbar scroll glass
      const header = document.getElementById('editorial-header');
      if (header) {
        if (scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }

      // Parallax text split
      const wordLeft = document.getElementById('split-word-left');
      const wordRight = document.getElementById('split-word-right');
      if (wordLeft && wordRight && scrollY < window.innerHeight) {
        const offset = scrollY * 0.45;
        wordLeft.style.transform = `translateX(-${offset}px)`;
        wordRight.style.transform = `translateX(${offset}px)`;
      }

      // Transform 3D artifact based on scroll progress
      if (this.coreGroup) {
        // Shift position: center -> right -> left -> center
        const phase = progress * Math.PI * 4;
        this.coreGroup.position.x = Math.sin(phase) * 1.8;
        this.coreGroup.position.y = -progress * 2 + Math.cos(phase) * 0.6;
        this.coreGroup.scale.setScalar(1 + Math.sin(progress * Math.PI) * 0.35);

        // Shift color and glow
        if (progress < 0.25) {
          this.innerMat.emissive.setHex(0x1a0b2e); // Violet
          this.pointLightCyan.color.setHex(0x00f2fe);
        } else if (progress < 0.5) {
          this.innerMat.emissive.setHex(0x003344); // Cyan
          this.pointLightCyan.color.setHex(0x00df89); // Emerald
        } else if (progress < 0.75) {
          this.innerMat.emissive.setHex(0x2a1500); // Amber
          this.pointLightCyan.color.setHex(0xff9933);
        } else {
          this.innerMat.emissive.setHex(0x1a0033); // Cosmic
          this.pointLightCyan.color.setHex(0x00f2fe);
        }
      }

      // Dynamic Audio Synth Pitch Shift on Scroll
      if (this.isAudioActive && this.chordNodes.length > 0) {
        const baseFreq = 65.41 * (1 + progress * 0.4);
        this.chordNodes[0].frequency.setTargetAtTime(baseFreq, this.audioCtx.currentTime, 0.2);
      }
    });

    // Smooth scroll down button click
    const scrollBtn = document.getElementById('scroll-down-action');
    if (scrollBtn) {
      scrollBtn.onclick = (e) => {
        e.preventDefault();
        const target = document.getElementById('chapters-container');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          this.playAudioSfx('whoosh');
        }
      };
    }
  }

  /* --------------------------------------------------------------------------
     4. RENDER DIMENSION PROJECT CARDS
  -------------------------------------------------------------------------- */
  renderCards() {
    const grid = document.getElementById('editorial-cards-grid');
    if (!grid) return;

    grid.innerHTML = DIMENSIONS_DATA.map((item, idx) => `
      <article class="avant-card" data-id="${item.id}">
        <div>
          <div class="card-top-bar">
            <span class="card-num-stamp">${item.number} // ${item.theme.toUpperCase()}</span>
            <span class="card-status-pill">Production Ready</span>
          </div>
          <div class="card-hero-poster">
            <img src="${item.poster}" alt="${item.title}" loading="lazy" />
            <div class="card-play-hover-overlay">
              <div class="play-circle-glow">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <h3 class="card-title-main">${item.title}</h3>
          <div class="card-tagline-sub">${item.tagline}</div>
          <p class="card-desc-body">${item.synopsis}</p>
        </div>

        <div>
          <div class="card-footer-tech">
            ${item.tags.map(t => `<span class="tech-tag-editorial">${t}</span>`).join('')}
          </div>
          <div class="card-cta-row">
            <a href="${item.liveUrl}" target="_blank" rel="noopener" class="btn-card-launch" onclick="event.stopPropagation()">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              Explore Live
            </a>
            <a href="${item.githubUrl}" target="_blank" rel="noopener" class="btn-card-code" title="View GitHub Code" onclick="event.stopPropagation()">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Bind card clicks to open theater modal
    grid.querySelectorAll('.avant-card').forEach(card => {
      card.onclick = () => {
        const id = card.dataset.id;
        this.openCinemaModal(id);
      };
    });

    if (this.updateInteractive) this.updateInteractive();
  }

  /* --------------------------------------------------------------------------
     5. CINEMA THEATER MODAL ENGINE
  -------------------------------------------------------------------------- */
  openCinemaModal(id) {
    const item = DIMENSIONS_DATA.find(d => d.id === id) || DIMENSIONS_DATA[0];
    this.activeModal = item;

    const overlay = document.getElementById('cinema-modal-overlay');
    const title = document.getElementById('modal-project-title');
    const meta = document.getElementById('modal-meta-pills');
    const synopsis = document.getElementById('modal-synopsis-text');
    const launchBtn = document.getElementById('modal-launch-live');
    const gitBtn = document.getElementById('modal-github');
    const episodesList = document.getElementById('episodes-list');

    title.textContent = item.title;
    synopsis.textContent = item.synopsis;

    meta.innerHTML = `
      <span class="meta-pill">${item.chapter}</span>
      <span class="meta-pill">4K ULTRA HD</span>
      <span class="meta-pill">DOLBY CODEC</span>
    `;

    launchBtn.href = item.liveUrl;
    gitBtn.href = item.githubUrl;

    if (episodesList && item.episodes) {
      episodesList.innerHTML = item.episodes.map(ep => `
        <div class="episode-item" data-title="${ep.title}">
          <div style="display:flex;align-items:center;gap:1.5rem;">
            <div class="episode-num">${ep.num}</div>
            <div>
              <div class="episode-title">${ep.title}</div>
              <div class="episode-desc">${ep.desc}</div>
            </div>
          </div>
          <div class="episode-duration">${ep.duration}</div>
        </div>
      `).join('');

      episodesList.querySelectorAll('.episode-item').forEach(ep => {
        ep.onclick = () => {
          this.showToast(`Streaming Feature: ${ep.dataset.title}`);
          this.progress = 0;
          this.startPlayback();
        };
      });
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start theater screen playback
    this.progress = 0;
    this.startPlayback();
    this.playAudioSfx('boom');
  }

  closeCinemaModal() {
    const overlay = document.getElementById('cinema-modal-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.pausePlayback();
    this.activeModal = null;
  }

  startPlayback() {
    this.isPlaying = true;
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.innerHTML = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    }
    if (this.playbackTimer) clearInterval(this.playbackTimer);
    this.playbackTimer = setInterval(() => {
      this.progress += 0.5;
      if (this.progress >= 100) this.progress = 0;
      this.updatePlayerProgress();
    }, 100);
  }

  pausePlayback() {
    this.isPlaying = false;
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.innerHTML = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    }
    if (this.playbackTimer) clearInterval(this.playbackTimer);
  }

  updatePlayerProgress() {
    const fill = document.getElementById('progress-fill-bar');
    const timeDisplay = document.getElementById('time-display');
    if (fill) fill.style.width = `${this.progress}%`;

    if (timeDisplay) {
      const curSec = Math.floor((this.progress / 100) * 180);
      const m = Math.floor(curSec / 60);
      const s = curSec % 60;
      timeDisplay.textContent = `0${m}:${s < 10 ? '0' : ''}${s} / 03:00`;
    }
  }

  /* --------------------------------------------------------------------------
     6. WEB AUDIO AMBIENT SYNTHESIZER ENGINE
  -------------------------------------------------------------------------- */
  initAudioEngine() {
    const audioBtn = document.getElementById('sound-toggle-btn');
    if (!audioBtn) return;

    audioBtn.onclick = () => this.toggleAudio();
  }

  toggleAudio() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!this.audioCtx) {
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const btn = document.getElementById('sound-toggle-btn');
    if (this.isAudioActive) {
      if (this.masterGain) {
        this.masterGain.gain.linearRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.6);
      }
      this.isAudioActive = false;
      btn.classList.remove('active');
      btn.querySelector('.sound-state-label').textContent = 'SOUND // OFF';
      this.showToast('Atmospheric Sound Muted');
    } else {
      this.startAmbientDrone();
      this.isAudioActive = true;
      btn.classList.add('active');
      btn.querySelector('.sound-state-label').textContent = 'SOUND // ON';
      this.showToast('Binaural Atmosphere Activated 🎧');
    }
  }

  startAmbientDrone() {
    if (!this.audioCtx) return;

    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.14, this.audioCtx.currentTime + 1.5);
    this.masterGain.connect(this.audioCtx.destination);

    // Warm deep binaural chord (C2, G2, D#3, A#3)
    const freqs = [65.41, 98.00, 155.56, 233.08];
    this.chordNodes = [];

    freqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.chordNodes.push(osc);
    });
  }

  playAudioSfx(type) {
    if (!this.audioCtx || !this.isAudioActive) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'tick') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.05);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'whoosh') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.25);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.26);
      } else if (type === 'boom') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.7);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.start(now);
        osc.stop(now + 0.72);
      }
    } catch (e) {}
  }

  /* --------------------------------------------------------------------------
     7. UI INTERACTIONS & EVENT HANDLERS
  -------------------------------------------------------------------------- */
  initInteractions() {
    // Modal Close
    const closeBtn = document.getElementById('modal-close-btn');
    const overlay = document.getElementById('cinema-modal-overlay');
    if (closeBtn) closeBtn.onclick = () => this.closeCinemaModal();
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) this.closeCinemaModal();
      };
    }

    // Theater Quick Button
    const theaterQuick = document.getElementById('btn-theater-quick');
    if (theaterQuick) {
      theaterQuick.onclick = () => this.openCinemaModal('lexipulse-ai');
    }

    // Player controls
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.onclick = () => {
        if (this.isPlaying) this.pausePlayback();
        else this.startPlayback();
      };
    }

    const track = document.getElementById('progress-track-wrapper');
    if (track) {
      track.onclick = (e) => {
        const rect = track.getBoundingClientRect();
        this.progress = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        this.updatePlayerProgress();
      };
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeCinemaModal();
      else if (e.code === 'Space' && this.activeModal) {
        e.preventDefault();
        if (this.isPlaying) this.pausePlayback();
        else this.startPlayback();
      } else if (e.key === 'm' || e.key === 'M') {
        this.toggleAudio();
      }
    });
  }

  showToast(msg) {
    const toast = document.getElementById('cinema-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2800);
  }

  /* --------------------------------------------------------------------------
     8. MAIN ANIMATION LOOP (60FPS)
  -------------------------------------------------------------------------- */
  animate() {
    requestAnimationFrame(() => this.animate());

    // Lerp Magnetic Cursor
    if (this.cursorDot && this.cursorRing) {
      this.ringPos.x += (this.cursorPos.x - this.ringPos.x) * 0.15;
      this.ringPos.y += (this.cursorPos.y - this.ringPos.y) * 0.15;

      this.cursorDot.style.transform = `translate3d(${this.cursorPos.x}px, ${this.cursorPos.y}px, 0) translate(-50%, -50%)`;
      this.cursorRing.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0) translate(-50%, -50%)`;
    }

    // Animate 3D Artifact
    if (this.coreGroup) {
      // Lerp mouse tilt
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

      if (!this.mouse.isDown) {
        this.coreGroup.rotation.y += 0.006;
        this.coreGroup.rotation.x = this.mouse.y * 0.35;
        this.coreGroup.rotation.z = this.mouse.x * 0.2;
      }

      if (this.outerMesh) {
        this.outerMesh.rotation.y -= 0.003;
        this.outerMesh.rotation.x += 0.002;
      }

      if (this.ringMesh1 && this.ringMesh2) {
        this.ringMesh1.rotation.z += 0.008;
        this.ringMesh2.rotation.y += 0.006;
      }
    }

    // Animate Particles
    if (this.particles) {
      this.particles.rotation.y += 0.0006;
      this.particles.rotation.x += 0.0003;
    }

    // Light tracking mouse
    if (this.pointLightMouse) {
      this.pointLightMouse.position.x = this.mouse.x * 5;
      this.pointLightMouse.position.y = this.mouse.y * 5;
    }

    // Render 3D WebGL Scene
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

// Launch on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.avantGardeApp = new AvantGardeExperience();
});
