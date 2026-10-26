/**
 * JAYFLIX / JAYSID CINEMA - Core Streaming Engine & Interactive Video Controller
 * Author: Jayraj S.V (jaysid97)
 */

// Production Data Model (Jayraj S.V Developer Projects Catalog)
const MOVIES_DATABASE = [
  {
    id: 'lexipulse-ai',
    title: 'LexiPulse AI',
    subtitle: 'The Future. Reimagined.',
    category: 'AI / NLP Platform',
    badge: 'ORIGINAL',
    matchScore: '99% Match',
    maturity: 'Dev 13+',
    year: '2026',
    duration: 'Production Ready',
    quality: '4K Ultra HD',
    poster: './assets/posters/lexipulse.jpg',
    synopsis: 'Next-generation AI-powered language intelligence platform. Engineered for ultra-fast, real-time natural language processing, semantic understanding, sentiment analysis, and intelligent automated summarization across multi-lingual corpora.',
    tags: ['JavaScript', 'AI/NLP', 'Transformers', 'GitHub Pages'],
    githubUrl: 'https://github.com/jaysid97/lexipulse-ai',
    liveUrl: 'https://jaysid97.github.io/lexipulse-ai/',
    color: '#00f2fe',
    theme: 'neural',
    episodes: [
      { num: '01', title: 'Real-time NLP Pipeline', desc: 'Sub-millisecond tokenization and vector embeddings engine.', duration: '14 mins' },
      { num: '02', title: 'Semantic Grammar Analysis', desc: 'Context-aware semantic tree parsing with visual telemetry.', duration: '18 mins' },
      { num: '03', title: 'Edge Deployment & Zero-Lag UI', desc: 'Pure client-side inference optimizations for GitHub Pages.', duration: '22 mins' }
    ]
  },
  {
    id: 'voice-bharat',
    title: 'Voice Challenges: Bharat Edition',
    subtitle: 'The Sound of the Next Billion',
    category: 'Voice-First AI',
    badge: 'TRENDING #1',
    matchScore: '98% Match',
    maturity: 'All Devs',
    year: '2025-2026',
    duration: '10 Episodes Series',
    quality: 'Dolby Atmos',
    poster: './assets/posters/voice_bharat.jpg',
    synopsis: 'A groundbreaking 10-day intensive voice challenge series architected for Indian developers. Empowers engineers to build conversational voice agents, dialect-aware interfaces, and multilingual audio speech recognition pipelines.',
    tags: ['TypeScript', 'Voice SDK', 'Speech-to-Text', 'Acoustic AI'],
    githubUrl: 'https://github.com/jaysid97/Ten-day-of-voice-challenges-bharat-edition',
    liveUrl: 'https://github.com/jaysid97/Ten-day-of-voice-challenges-bharat-edition',
    color: '#ff9933',
    theme: 'audio',
    episodes: [
      { num: '01', title: 'Acoustic Model Foundations', desc: 'Capturing regional nuances and multilingual phonetics.', duration: '15 mins' },
      { num: '02', title: 'Low-Latency Conversational Loop', desc: 'Streaming audio chunks over WebSocket with bi-directional audio.', duration: '20 mins' },
      { num: '03', title: 'Bharat Dialect Optimization', desc: 'Tuning language models for mixed Indian English & vernacular speech.', duration: '25 mins' }
    ]
  },
  {
    id: 'carbon-tracker',
    title: 'Carbon Footprint Tracker',
    subtitle: 'The Green Protocol',
    category: 'Green Tech & Eco Analytics',
    badge: 'CRITIC CHOICE',
    matchScore: '97% Match',
    maturity: 'Eco 100%',
    year: '2025-2026',
    duration: 'Global Edition',
    quality: 'HDR10+',
    poster: './assets/posters/carbon_tracker.jpg',
    synopsis: 'A high-impact sustainability web application designed to compute, visualize, and systematically reduce personal and organizational carbon footprints. Features interactive telemetry, emission breakdowns, and actionable offsets.',
    tags: ['JavaScript', 'Green Tech', 'Data Visualizer', 'Eco Metrics'],
    githubUrl: 'https://github.com/jaysid97/carbon-footprint-tracker',
    liveUrl: 'https://jaysid97.github.io/carbon-footprint-tracker/',
    color: '#00df89',
    theme: 'eco',
    episodes: [
      { num: '01', title: 'Emission Telemetry Calculation', desc: 'Mathematical modeling of Scope 1, 2, and 3 personal emissions.', duration: '16 mins' },
      { num: '02', title: 'Predictive Reduction Engine', desc: 'Simulating energy habits and lifestyle carbon impact.', duration: '21 mins' },
      { num: '03', title: 'Interactive Planetary Charts', desc: 'Dynamic SVG and canvas telemetry rendering real-time impact.', duration: '19 mins' }
    ]
  },
  {
    id: 'entropy-zero',
    title: 'Entropy Zero',
    subtitle: 'In The Abyss of The Final State',
    category: 'Systems Architecture',
    badge: 'BLOCKBUSTER',
    matchScore: '96% Match',
    maturity: 'Dev 18+',
    year: '2025',
    duration: 'High Throughput',
    quality: 'IMAX 70MM',
    poster: './assets/posters/entropy_zero.jpg',
    synopsis: 'Zero-entropy structured data management system — a clean-slate philosophical approach to orchestrating, validating, and mutating high-velocity state streams with deterministic mathematical guarantees.',
    tags: ['JavaScript', 'System Architecture', 'State Engine'],
    githubUrl: 'https://github.com/jaysid97/entropy-zero',
    liveUrl: 'https://github.com/jaysid97/entropy-zero',
    color: '#00f2fe',
    theme: 'matrix',
    episodes: [
      { num: '01', title: 'Deterministic State Trees', desc: 'Eliminating non-deterministic race conditions at scale.', duration: '24 mins' },
      { num: '02', title: 'Zero Mutation Overhead', desc: 'Memory-efficient structural sharing data structures.', duration: '28 mins' },
      { num: '03', title: 'Stress Testing Under High Load', desc: 'Benchmarking millions of concurrent state transitions.', duration: '31 mins' }
    ]
  },
  {
    id: 'stadium-concierge',
    title: 'Stadium Concierge Assistant',
    subtitle: 'Your Guide to The Game',
    category: 'Autonomous AI Concierge',
    badge: 'NEW RELEASE',
    matchScore: '99% Match',
    maturity: 'All Arenas',
    year: '2026',
    duration: 'Real-time Event AI',
    quality: '4K Ultra HD',
    poster: './assets/posters/stadium_concierge.jpg',
    synopsis: 'An intelligent AI concierge assistant for major arena and sports experiences. Directs fans through gates, delivers real-time venue navigation, concession orders, and handles thousands of fan inquiries with zero friction.',
    tags: ['Python', 'FastAPI', 'Event AI', 'Conversational Assistant'],
    githubUrl: 'https://github.com/jaysid97/stadium-concierge-assistant',
    liveUrl: 'https://github.com/jaysid97/stadium-concierge-assistant',
    color: '#a78bfa',
    theme: 'arena',
    episodes: [
      { num: '01', title: 'Spatial Navigation & Map Routing', desc: 'Indoor geospatial guidance for multi-tiered sports stadiums.', duration: '17 mins' },
      { num: '02', title: 'Concession Surge Load Management', desc: 'Predicting queue wait times and load-balancing orders.', duration: '23 mins' },
      { num: '03', title: 'Autonomous RAG Query Agent', desc: 'Vector search indexing stadium FAQs, schedules, and live alerts.', duration: '26 mins' }
    ]
  },
  {
    id: 'civic-nexus',
    title: 'Civic Nexus',
    subtitle: 'Connecting People & Governance',
    category: 'Civic Tech & Public Platform',
    badge: 'ORIGINAL',
    matchScore: '95% Match',
    maturity: 'All Citizens',
    year: '2025',
    duration: 'Full Stack',
    quality: 'HD 1080p',
    poster: './assets/posters/entropy_zero.jpg',
    synopsis: 'A community engagement platform engineered to bridge the divide between local citizens and public governance. Facilitates municipal issue tracking, civic petitions, transparent local spending visualizers, and neighborhood forums.',
    tags: ['Python', 'Django/FastAPI', 'Civic Tech', 'PostgreSQL'],
    githubUrl: 'https://github.com/jaysid97/civic-nexus',
    liveUrl: 'https://github.com/jaysid97/civic-nexus',
    color: '#34d399',
    theme: 'matrix',
    episodes: [
      { num: '01', title: 'Citizen Grievance Routing', desc: 'Automated municipal ticket triage and sentiment categorization.', duration: '15 mins' },
      { num: '02', title: 'Transparent Public Ledger', desc: 'Displaying municipal project progress and budget allocation.', duration: '20 mins' }
    ]
  }
];

// Tech Stack "Production Crew" Database
const TECH_CREW = [
  { name: 'Python', role: 'Lead Backend & Deep Learning', icon: '🐍', tag: 'Core Director' },
  { name: 'JavaScript & TypeScript', role: 'Full-Stack & Frontend Architecture', icon: '⚡', tag: 'Visual Maestro' },
  { name: 'Go', role: 'High-Concurrency Microservices', icon: '🚀', tag: 'Speed Demon' },
  { name: 'FastAPI & Node.js', role: 'RESTful & Event APIs', icon: '🌐', tag: 'Network Lead' },
  { name: 'React', role: 'Interactive Component Systems', icon: '⚛️', tag: 'UI Virtuoso' },
  { name: 'Docker & AWS', role: 'Containerization & Cloud Infrastructure', icon: '☁️', tag: 'Studio Rigging' },
  { name: 'PostgreSQL & Redis', role: 'Distributed State & Persistence', icon: '🗄️', tag: 'Vault Keeper' }
];

/* ==========================================================================
   STREAMING STATE & AUDIO SYNTHESIS ENGINE
   ========================================================================== */

class JayFlixApp {
  constructor() {
    this.movies = MOVIES_DATABASE;
    this.currentHeroIndex = 0;
    this.heroTimer = null;
    this.watchlist = JSON.parse(localStorage.getItem('jayflix_watchlist') || '[]');
    this.likes = JSON.parse(localStorage.getItem('jayflix_likes') || '{}');
    this.activeModalMovie = null;

    // Audio Engine
    this.audioCtx = null;
    this.ambientGain = null;
    this.isAudioPlaying = false;

    // Canvas Video Engine
    this.heroCanvas = document.getElementById('hero-canvas');
    this.modalCanvas = document.getElementById('modal-theater-canvas');
    this.heroCtx = this.heroCanvas ? this.heroCanvas.getContext('2d') : null;
    this.modalCtx = this.modalCanvas ? this.modalCanvas.getContext('2d') : null;
    this.animFrameId = null;
    this.canvasFrame = 0;

    // Player state
    this.isPlaying = false;
    this.playbackProgress = 0;
    this.playbackTimer = null;

    this.init();
  }

  init() {
    this.setupNavbarScroll();
    this.renderHero(0);
    this.renderShelves();
    this.setupEventListeners();
    this.setupHeroCarousel();
    this.setupCanvasVisualizer();
    this.setupSearch();
  }

  /* --------------------------------------------------------------------------
     NAVBAR & SCROLL BEHAVIOR
  -------------------------------------------------------------------------- */
  setupNavbarScroll() {
    const navbar = document.getElementById('cinema-navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* --------------------------------------------------------------------------
     HERO BANNER CONTROLLER
  -------------------------------------------------------------------------- */
  renderHero(index) {
    this.currentHeroIndex = index;
    const movie = this.movies[index];
    if (!movie) return;

    const heroTitle = document.getElementById('hero-title');
    const heroTagline = document.getElementById('hero-tagline');
    const heroSynopsis = document.getElementById('hero-synopsis');
    const heroTags = document.getElementById('hero-tags');
    const heroPoster = document.getElementById('hero-poster-img');
    const heroPlayBtn = document.getElementById('hero-play-btn');
    const heroInfoBtn = document.getElementById('hero-info-btn');
    const heroWatchlistBtn = document.getElementById('hero-watchlist-btn');

    heroTitle.textContent = movie.title;
    heroTagline.textContent = movie.subtitle;
    heroSynopsis.textContent = movie.synopsis;

    // Update tags
    heroTags.innerHTML = movie.tags
      .map(tag => `<span class="tech-pill">${tag}</span>`)
      .join('');

    // Smooth poster transition
    if (heroPoster) {
      heroPoster.style.opacity = '0';
      setTimeout(() => {
        heroPoster.src = movie.poster;
        heroPoster.style.opacity = '1';
      }, 250);
    }

    // Set buttons
    heroPlayBtn.onclick = () => this.openCinemaModal(movie.id);
    heroInfoBtn.onclick = () => this.openCinemaModal(movie.id);

    // Watchlist state
    const inWatchlist = this.watchlist.includes(movie.id);
    heroWatchlistBtn.innerHTML = inWatchlist
      ? `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
      : `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`;
    heroWatchlistBtn.onclick = () => this.toggleWatchlist(movie.id);

    // Update thumb selectors
    document.querySelectorAll('.hero-thumb-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  setupHeroCarousel() {
    const selectorsWrap = document.getElementById('hero-selectors');
    if (!selectorsWrap) return;

    selectorsWrap.innerHTML = this.movies.slice(0, 4).map((m, idx) => `
      <div class="hero-thumb-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <span>0${idx + 1}</span>
        <strong>${m.title}</strong>
      </div>
    `).join('');

    selectorsWrap.querySelectorAll('.hero-thumb-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.renderHero(idx);
        this.resetHeroTimer();
      });
    });

    this.resetHeroTimer();
  }

  resetHeroTimer() {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.heroTimer = setInterval(() => {
      const nextIdx = (this.currentHeroIndex + 1) % Math.min(4, this.movies.length);
      this.renderHero(nextIdx);
    }, 9000);
  }

  /* --------------------------------------------------------------------------
     SHELVES RENDERING (NETFLIX CATEGORIES)
  -------------------------------------------------------------------------- */
  renderShelves() {
    // 1. Trending Blockbusters
    const trendingSlider = document.getElementById('shelf-trending-slider');
    if (trendingSlider) {
      trendingSlider.innerHTML = this.movies.map(m => this.createMovieCardHTML(m)).join('');
    }

    // 2. High Performance & AI Systems
    const aiSlider = document.getElementById('shelf-ai-slider');
    if (aiSlider) {
      const aiMovies = this.movies.filter(m => m.tags.some(t => t.includes('AI') || t.includes('System') || t.includes('Voice')));
      aiSlider.innerHTML = aiMovies.map(m => this.createMovieCardHTML(m)).join('');
    }

    // 3. Green & Civic Originals
    const impactSlider = document.getElementById('shelf-impact-slider');
    if (impactSlider) {
      const impactMovies = this.movies.filter(m => m.category.includes('Green') || m.category.includes('Civic') || m.category.includes('Autonomous'));
      impactSlider.innerHTML = impactMovies.map(m => this.createMovieCardHTML(m)).join('');
    }

    // 4. My List / Watchlist
    this.renderWatchlistShelf();

    // 5. Tech Stack Cast
    const techGrid = document.getElementById('tech-crew-grid');
    if (techGrid) {
      techGrid.innerHTML = TECH_CREW.map(tech => `
        <div class="skill-chip">
          <span style="font-size:1.2rem;">${tech.icon}</span>
          <div>
            <div style="font-weight:700;font-size:0.92rem;">${tech.name}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);">${tech.role}</div>
          </div>
        </div>
      `).join('');
    }

    // Bind card events
    this.bindCardEvents();
  }

  renderWatchlistShelf() {
    const watchlistShelf = document.getElementById('shelf-watchlist-wrap');
    const watchlistSlider = document.getElementById('shelf-watchlist-slider');
    if (!watchlistShelf || !watchlistSlider) return;

    if (this.watchlist.length === 0) {
      watchlistShelf.style.display = 'none';
      return;
    }

    watchlistShelf.style.display = 'block';
    const listMovies = this.movies.filter(m => this.watchlist.includes(m.id));
    watchlistSlider.innerHTML = listMovies.map(m => this.createMovieCardHTML(m)).join('');
    this.bindCardEvents();
  }

  createMovieCardHTML(movie) {
    const isLiked = !!this.likes[movie.id];
    const inWatchlist = this.watchlist.includes(movie.id);

    return `
      <div class="movie-card" data-id="${movie.id}">
        <div class="card-poster-wrapper">
          <img src="${movie.poster}" alt="${movie.title}" class="card-poster-img" loading="lazy" />
          <div class="card-badge-top">${movie.badge}</div>
          <div class="card-match-badge">${movie.matchScore}</div>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h4 class="card-title">${movie.title}</h4>
            <div class="card-actions-quick">
              <button class="quick-icon-btn card-play-trigger" title="Play Showreel" data-id="${movie.id}">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button class="quick-icon-btn card-watchlist-trigger ${inWatchlist ? 'active' : ''}" title="Add to My List" data-id="${movie.id}">
                ${inWatchlist
                  ? `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
                  : `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`
                }
              </button>
              <button class="quick-icon-btn card-like-trigger ${isLiked ? 'active' : ''}" title="Like Production" data-id="${movie.id}">
                <svg width="14" height="14" fill="${isLiked ? 'var(--accent-red)' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </button>
            </div>
          </div>
          <p class="card-desc">${movie.synopsis}</p>
          <div class="card-meta-row">
            <span style="color:var(--accent-cyan);font-weight:700;">${movie.quality}</span>
            <span>•</span>
            <span>${movie.year}</span>
            <span>•</span>
            <span>${movie.duration}</span>
          </div>
          <div class="card-tags">
            ${movie.tags.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  bindCardEvents() {
    document.querySelectorAll('.movie-card').forEach(card => {
      card.onclick = (e) => {
        // If clicked on quick action buttons, prevent whole card opening
        if (e.target.closest('.quick-icon-btn')) return;
        const id = card.dataset.id;
        this.openCinemaModal(id);
      };

      // Sound feedback on card hover
      card.onmouseenter = () => {
        this.playUIAudio('blip');
      };
    });

    document.querySelectorAll('.card-play-trigger').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        this.openCinemaModal(btn.dataset.id);
      };
    });

    document.querySelectorAll('.card-watchlist-trigger').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        this.toggleWatchlist(btn.dataset.id);
      };
    });

    document.querySelectorAll('.card-like-trigger').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        this.toggleLike(btn.dataset.id);
      };
    });
  }

  /* --------------------------------------------------------------------------
     SHELF SCROLL CONTROLS
  -------------------------------------------------------------------------- */
  setupEventListeners() {
    // Scroll buttons
    document.querySelectorAll('.shelf-scroll-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const slider = document.getElementById(targetId);
        if (!slider) return;
        const scrollAmount = 680;
        if (btn.classList.contains('shelf-scroll-left')) {
          slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        this.playUIAudio('whoosh');
      });
    });

    // Audio Ambient Toggle
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => this.toggleAmbientAudio());
    }

    // Modal close
    const modalClose = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('cinema-modal-overlay');
    if (modalClose) {
      modalClose.onclick = () => this.closeCinemaModal();
    }
    if (modalOverlay) {
      modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) this.closeCinemaModal();
      };
    }

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCinemaModal();
      } else if (e.code === 'Space' && this.activeModalMovie) {
        e.preventDefault();
        this.togglePlayerPlayback();
      } else if (e.key === 'm' || e.key === 'M') {
        this.toggleAmbientAudio();
      }
    });

    // Theater controls
    const playPauseBtn = document.getElementById('player-play-btn');
    if (playPauseBtn) {
      playPauseBtn.onclick = () => this.togglePlayerPlayback();
    }

    const skipBackBtn = document.getElementById('player-skip-back');
    if (skipBackBtn) {
      skipBackBtn.onclick = () => this.seekPlayback(-10);
    }

    const skipForwardBtn = document.getElementById('player-skip-fwd');
    if (skipForwardBtn) {
      skipForwardBtn.onclick = () => this.seekPlayback(10);
    }

    const trackWrapper = document.getElementById('progress-track-wrapper');
    if (trackWrapper) {
      trackWrapper.onclick = (e) => {
        const rect = trackWrapper.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.playbackProgress = pct * 100;
        this.updateProgressBar();
      };
    }

    const fsBtn = document.getElementById('player-fullscreen-btn');
    if (fsBtn) {
      fsBtn.onclick = () => {
        const screen = document.getElementById('modal-theater-screen');
        if (!document.fullscreenElement) {
          screen.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      };
    }
  }

  /* --------------------------------------------------------------------------
     CINEMA THEATER MODAL ENGINE
  -------------------------------------------------------------------------- */
  openCinemaModal(movieId) {
    const movie = this.movies.find(m => m.id === movieId);
    if (!movie) return;

    this.activeModalMovie = movie;
    const overlay = document.getElementById('cinema-modal-overlay');
    const modalTitle = document.getElementById('modal-project-title');
    const modalMeta = document.getElementById('modal-meta-pills');
    const modalSynopsis = document.getElementById('modal-synopsis-text');
    const modalLaunchLive = document.getElementById('modal-launch-live');
    const modalGithub = document.getElementById('modal-github');
    const episodesList = document.getElementById('episodes-list');
    const ambientGlow = document.getElementById('theater-ambient-glow');

    modalTitle.textContent = movie.title;
    modalSynopsis.textContent = movie.synopsis;

    modalMeta.innerHTML = `
      <span class="badge-quality">${movie.quality}</span>
      <span class="badge-match">${movie.matchScore}</span>
      <span class="badge-year">${movie.year}</span>
      <span class="badge-category">${movie.category}</span>
    `;

    modalLaunchLive.href = movie.liveUrl;
    modalGithub.href = movie.githubUrl;

    if (ambientGlow) {
      ambientGlow.style.background = `radial-gradient(circle, ${movie.color} 0%, transparent 70%)`;
    }

    // Render feature episodes
    episodesList.innerHTML = movie.episodes.map(ep => `
      <div class="episode-item" data-time="${ep.duration}">
        <div class="episode-num">${ep.num}</div>
        <div class="episode-info">
          <div class="episode-title">${ep.title}</div>
          <div class="episode-desc">${ep.desc}</div>
        </div>
        <div class="episode-duration">${ep.duration}</div>
      </div>
    `).join('');

    // Episode item clicks
    episodesList.querySelectorAll('.episode-item').forEach(item => {
      item.onclick = () => {
        this.showToast(`Now Streaming: ${item.querySelector('.episode-title').textContent}`);
        this.playbackProgress = 0;
        this.startPlayerPlayback();
      };
    });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start playback simulation
    this.playbackProgress = 0;
    this.startPlayerPlayback();
    this.playUIAudio('boom');
  }

  closeCinemaModal() {
    const overlay = document.getElementById('cinema-modal-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.pausePlayerPlayback();
    this.activeModalMovie = null;
  }

  togglePlayerPlayback() {
    if (this.isPlaying) {
      this.pausePlayerPlayback();
    } else {
      this.startPlayerPlayback();
    }
  }

  startPlayerPlayback() {
    this.isPlaying = true;
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.innerHTML = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    }

    if (this.playbackTimer) clearInterval(this.playbackTimer);
    this.playbackTimer = setInterval(() => {
      this.playbackProgress += 0.4;
      if (this.playbackProgress >= 100) {
        this.playbackProgress = 0;
      }
      this.updateProgressBar();
    }, 100);
  }

  pausePlayerPlayback() {
    this.isPlaying = false;
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.innerHTML = `<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    }
    if (this.playbackTimer) clearInterval(this.playbackTimer);
  }

  seekPlayback(secondsDelta) {
    this.playbackProgress = Math.max(0, Math.min(100, this.playbackProgress + (secondsDelta * 0.8)));
    this.updateProgressBar();
    this.playUIAudio('blip');
  }

  updateProgressBar() {
    const fillBar = document.getElementById('progress-fill-bar');
    const handle = document.getElementById('progress-handle');
    const timeDisplay = document.getElementById('time-display');

    if (fillBar) fillBar.style.width = `${this.playbackProgress}%`;
    if (handle) handle.style.left = `${this.playbackProgress}%`;

    if (timeDisplay) {
      const totalSec = 180;
      const currentSec = Math.floor((this.playbackProgress / 100) * totalSec);
      const min = Math.floor(currentSec / 60);
      const sec = currentSec % 60;
      timeDisplay.textContent = `0${min}:${sec < 10 ? '0' : ''}${sec} / 03:00`;
    }
  }

  /* --------------------------------------------------------------------------
     WATCHLIST & LIKES LOGIC
  -------------------------------------------------------------------------- */
  toggleWatchlist(movieId) {
    const idx = this.watchlist.indexOf(movieId);
    if (idx > -1) {
      this.watchlist.splice(idx, 1);
      this.showToast('Removed from My List');
    } else {
      this.watchlist.push(movieId);
      this.showToast('Added to My List ⭐');
    }
    localStorage.setItem('jayflix_watchlist', JSON.stringify(this.watchlist));
    this.renderShelves();
    this.renderHero(this.currentHeroIndex);
    this.playUIAudio('whoosh');
  }

  toggleLike(movieId) {
    this.likes[movieId] = !this.likes[movieId];
    localStorage.setItem('jayflix_likes', JSON.stringify(this.likes));
    this.renderShelves();
    if (this.likes[movieId]) {
      this.showToast('Loved it! Rated 99% 💖');
      this.triggerConfetti();
    }
    this.playUIAudio('blip');
  }

  triggerConfetti() {
    // Quick celebratory visual pulse
    const toast = document.getElementById('cinema-toast');
    if (toast) {
      toast.style.borderColor = 'var(--accent-red)';
      toast.style.boxShadow = '0 0 30px var(--accent-red-glow)';
      setTimeout(() => {
        toast.style.borderColor = '';
        toast.style.boxShadow = '';
      }, 2000);
    }
  }

  showToast(message) {
    const toast = document.getElementById('cinema-toast');
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     SEARCH ENGINE
  -------------------------------------------------------------------------- */
  setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const allCards = document.querySelectorAll('.movie-card');

      if (!q) {
        allCards.forEach(card => card.style.display = '');
        return;
      }

      allCards.forEach(card => {
        const id = card.dataset.id;
        const movie = this.movies.find(m => m.id === id);
        if (!movie) return;

        const match = movie.title.toLowerCase().includes(q) ||
          movie.category.toLowerCase().includes(q) ||
          movie.synopsis.toLowerCase().includes(q) ||
          movie.tags.some(t => t.toLowerCase().includes(q));

        card.style.display = match ? '' : 'none';
      });
    });
  }

  /* --------------------------------------------------------------------------
     CANVAS PROCEDURAL VIDEO VISUALIZER (HIGH-FPS 4K CINEMATIC ENGINE)
  -------------------------------------------------------------------------- */
  setupCanvasVisualizer() {
    const resizeCanvases = () => {
      if (this.heroCanvas) {
        this.heroCanvas.width = this.heroCanvas.clientWidth || 1280;
        this.heroCanvas.height = this.heroCanvas.clientHeight || 720;
      }
      if (this.modalCanvas) {
        this.modalCanvas.width = this.modalCanvas.clientWidth || 1280;
        this.modalCanvas.height = this.modalCanvas.clientHeight || 720;
      }
    };

    window.addEventListener('resize', resizeCanvases);
    resizeCanvases();

    const renderLoop = () => {
      this.canvasFrame++;

      // Render Hero Ambient Visualizer
      if (this.heroCtx && this.heroCanvas) {
        this.drawHeroCanvas(this.heroCtx, this.heroCanvas.width, this.heroCanvas.height);
      }

      // Render Modal Theater Visualizer if open
      if (this.modalCtx && this.modalCanvas && this.activeModalMovie) {
        this.drawTheaterCanvas(this.modalCtx, this.modalCanvas.width, this.modalCanvas.height, this.activeModalMovie);
      }

      this.animFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
  }

  drawHeroCanvas(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);

    // Deep cosmic space gradient
    const grad = ctx.createRadialGradient(w * 0.7, h * 0.4, 50, w * 0.5, h * 0.5, w * 0.8);
    grad.addColorStop(0, 'rgba(20, 26, 45, 0.45)');
    grad.addColorStop(0.5, 'rgba(10, 14, 25, 0.7)');
    grad.addColorStop(1, 'rgba(7, 9, 14, 0.95)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Animated holographic grid lines
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)';
    ctx.lineWidth = 1;
    const step = 45;
    const offset = (this.canvasFrame * 0.5) % step;

    for (let x = offset; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Floating neural particles
    ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
    for (let i = 0; i < 28; i++) {
      const px = ((i * 12345 + this.canvasFrame * (0.3 + (i % 3) * 0.2)) % w);
      const py = ((i * 54321 + Math.sin(this.canvasFrame * 0.02 + i) * 60) % h);
      const r = (i % 4) + 1;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawTheaterCanvas(ctx, w, h, movie) {
    ctx.clearRect(0, 0, w, h);

    // Themed backdrop
    ctx.fillStyle = '#06080d';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const time = this.canvasFrame * 0.03;

    if (movie.theme === 'neural') {
      // Neural brain synapses
      ctx.strokeStyle = movie.color;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const rad = 120 + Math.sin(time + i) * 35;
        ctx.arc(cx, cy, rad, i * 0.8, (i + 1) * 0.8);
        ctx.stroke();
      }
    } else if (movie.theme === 'audio') {
      // Dynamic audio waveform frequencies
      const bars = 48;
      const barWidth = w / bars;
      ctx.fillStyle = movie.color;
      for (let i = 0; i < bars; i++) {
        const height = Math.abs(Math.sin(time + i * 0.3)) * 140 + 20;
        ctx.fillRect(i * barWidth, cy - height / 2, barWidth - 4, height);
      }
    } else if (movie.theme === 'eco') {
      // Green earth telemetry orbit rings
      ctx.strokeStyle = '#00df89';
      ctx.lineWidth = 2;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, 140 * (i * 0.5), 60 * (i * 0.5), time * 0.4 * (i % 2 === 0 ? 1 : -1), 0, Math.PI * 2);
        ctx.stroke();
      }
    } else {
      // Futuristic matrix code horizon
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 12; i++) {
        const y = cy + Math.tan(i * 0.2 + (time * 0.1 % 0.5)) * 30;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    }

    // Playback watermark & quality indicator
    ctx.font = '700 13px "Fira Code", monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillText(`STREAMING: ${movie.title.toUpperCase()} // 4K 60FPS HDR`, 24, 38);
    ctx.fillText(`CODEC: AV1-DEV // DOLBY ATMOS 7.1`, 24, 58);
  }

  /* --------------------------------------------------------------------------
     WEB AUDIO API - AMBIENT CINEMA SOUND & UI SOUND FX
  -------------------------------------------------------------------------- */
  initAudioContext() {
    if (this.audioCtx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioCtx();
  }

  toggleAmbientAudio() {
    this.initAudioContext();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const btn = document.getElementById('audio-toggle-btn');
    if (this.isAudioPlaying) {
      // Mute
      if (this.ambientGain) {
        this.ambientGain.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.8);
      }
      this.isAudioPlaying = false;
      btn.classList.remove('playing');
      btn.querySelector('.audio-label').textContent = 'Audio Off';
      this.showToast('Ambient Audio Muted');
    } else {
      // Unmute & play lush synth drone
      this.startAmbientSynth();
      this.isAudioPlaying = true;
      btn.classList.add('playing');
      btn.querySelector('.audio-label').textContent = 'Audio On';
      this.showToast('Cinematic Audio Streaming 🎧');
    }
  }

  startAmbientSynth() {
    if (!this.audioCtx) return;

    this.ambientGain = this.audioCtx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    this.ambientGain.gain.linearRampToValueAtTime(0.12, this.audioCtx.currentTime + 2);
    this.ambientGain.connect(this.audioCtx.destination);

    // Root chord oscillators (C - G - D# space chord)
    const freqs = [65.41, 98.00, 155.56, 196.00];
    freqs.forEach(freq => {
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Subtle LFO vibrato
      const lfo = this.audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.2, this.audioCtx.currentTime);
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(1.5, this.audioCtx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.ambientGain);
      osc.start();
    });
  }

  playUIAudio(type) {
    if (!this.audioCtx || this.audioCtx.state === 'suspended' || !this.isAudioPlaying) return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'blip') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'whoosh') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.19);
      } else if (type === 'boom') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.6);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.62);
      }
    } catch (e) {
      // Audio fallback safe
    }
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.jayflixApp = new JayFlixApp();
});
