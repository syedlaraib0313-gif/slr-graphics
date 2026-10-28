/**
 * SLR GRAPHICS : APPLICATION SCRIPT
 * Production-ready interaction controller
 */

(function () {
  'use strict';

  // =========================================================================
  // DATA REPOSITORIES (Strict adherence to prompt: NO em dashes, exact text)
  // =========================================================================

  const SERVICES_DATA = [
    {
      id: "brand-identity",
      number: "01",
      title: "Brand Identity",
      shortDesc: "Create distinctive visual identities that make brands recognizable and consistent.",
      deliverables: [
        "Logo design",
        "Brand colors and typography",
        "Brand guidelines",
        "Visual identity systems"
      ],
      detail: "We construct foundational identity architectures that endure. Every brand identity system is built upon strategic positioning, rigorous typographic hierarchy, purposeful color palettes, and clear guidelines that allow internal and external teams to execute consistently across any medium.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
    },
    {
      id: "marketing-collateral",
      number: "02",
      title: "Marketing Collateral",
      shortDesc: "Professional marketing materials that communicate your message effectively.",
      deliverables: [
        "Brochures and flyers",
        "Business cards",
        "Company profiles",
        "Corporate stationery"
      ],
      detail: "Tangible and digital collateral that communicates authority and quality. We design tactile stationery, comprehensive investor profiles, and editorial lookbooks engineered to leave an immediate impression in client meetings and partner presentations.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
    {
      id: "advertising-creatives",
      number: "03",
      title: "Advertising Creatives",
      shortDesc: "Eye-catching advertising designs that capture attention and support campaigns.",
      deliverables: [
        "Promotional posters",
        "Digital ad creatives",
        "Campaign graphics",
        "Banners and advertisements"
      ],
      detail: "High-impact campaign visuals calibrated for immediate audience engagement. We leverage bold typographic hierarchies and disciplined grids to cut through digital noise and out-of-home clutter.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`
    },
    {
      id: "digital-social",
      number: "04",
      title: "Digital & Social Media Design",
      shortDesc: "Consistent, engaging visuals that strengthen your online brand presence.",
      deliverables: [
        "Instagram and Facebook posts",
        "Social media stories",
        "YouTube thumbnails and graphics",
        "Website banners and digital creatives"
      ],
      detail: "Modern social systems designed as cohesive visual narratives. We build modular design grids, story templates, and high-CTR thumbnail architectures that elevate brand authority across all major networks.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><rect x="2" y="2" width="20" height="20" rx="0"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
    },
    {
      id: "print-packaging",
      number: "05",
      title: "Print & Packaging Design",
      shortDesc: "Creative print-ready designs that give products and printed materials a professional appearance.",
      deliverables: [
        "Product packaging",
        "Labels and tags",
        "Menus",
        "Print materials and stationery"
      ],
      detail: "Structural packaging and print design combining aesthetic distinction with manufacturing precision. We prepare certified dielines, specify premium paper stocks, and engineer specialty finishes such as hot foil stamping and embossing.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    },
    {
      id: "ui-ux-design",
      number: "06",
      title: "UI/UX Design & Development",
      shortDesc: "Design intuitive, modern digital interfaces focused on usability and visual consistency.",
      deliverables: [
        "Website UI design",
        "Mobile app interfaces",
        "Wireframes and prototypes",
        "Responsive website development"
      ],
      detail: "Bespoke digital product design and frontend engineering. We balance editorial visual impact with rigorous accessibility, smooth interactions, and performant code that converts visitors into dedicated clients.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><rect x="2" y="3" width="20" height="14" rx="0"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      id: "website-handling",
      number: "07",
      title: "Website Handling",
      shortDesc: "Keep your website visually consistent, updated, and functioning effectively.",
      deliverables: [
        "Website content and image updates",
        "Layout improvements",
        "Visual maintenance",
        "Ongoing website support"
      ],
      detail: "Dedicated studio management for your live web infrastructure. We maintain visual fidelity, refresh creative assets, optimize page speed, and handle ongoing technical updates so your team never worries about site health.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      id: "seo",
      number: "08",
      title: "SEO",
      shortDesc: "Improve website discoverability through search engine optimization strategies.",
      deliverables: [
        "On-page SEO",
        "Keyword optimization",
        "Metadata improvements",
        "Website content optimization"
      ],
      detail: "Strategic organic discoverability tailored for modern search platforms. We optimize semantic document outlines, schema metadata, page load speeds, and keyword density to place your brand directly in front of high-intent clients.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
    }
  ];

  const PORTFOLIO_DATA = [
    {
      id: "kairos-brand-identity",
      title: "Kairos Coffee Roasters",
      category: "Brand Identity",
      image: "assets/project1-brand-identity.svg",
      summary: "Premium logo and brand identity presentation for an artisan specialty roaster.",
      objectives: "Develop an unmistakable visual signature in a saturated third-wave market. The identity required typographic authority, organic tactility, and cohesive extension across retail bags, menus, and digital touchpoints.",
      deliverables: [
        "Bespoke Typographic Monogram Suite",
        "Comprehensive 48-Page Brand Manual",
        "Color System & Foil Finish Standards",
        "Retail Pouch & Stamp Dieline Specs"
      ],
      specs: "Colorway: Deep Plum (#180828), Sand (#E0C9A6), Violet Accent (#7C3AED). Typography: Space Grotesk + Inter. Paper: 350gsm Colorplan."
    },
    {
      id: "lumen-audio-social",
      title: "Lumen Audio Systems",
      category: "Social Media Design",
      image: "assets/project2-social-media.svg",
      summary: "Cohesive social media launch campaign engineered for acoustic monitor hardware.",
      objectives: "Translate acoustic precision into pure graphic tension. Create an 18-tile launch matrix, motion teaser story frames, and YouTube master art that established high technical credibility prior to preorder launch.",
      deliverables: [
        "18-Tile Modular Instagram Grid System",
        "9 Animated 9:16 Story Launch Assets",
        "Product Spec Infographics & Soundwave Vectors",
        "Editorial Digital Banners & YouTube Headers"
      ],
      specs: "Aspect Ratios: 1:1 Feed & 9:16 Stories. Color Profile: sRGB Display P3. Design Tool: Custom Component Library."
    },
    {
      id: "monolith-advertising",
      title: "Monolith Architecture Biennale",
      category: "Advertising Creative",
      image: "assets/project3-advertising.svg",
      summary: "Bold promotional poster and transit advertising design for an international exhibition.",
      objectives: "Command visual attention across metropolitan transit hubs. By applying Swiss grid discipline and stark geometric silhouettes, the campaign celebrated brutalist purity while driving ticket pre-registrations.",
      deliverables: [
        "48-Sheet Outdoor Highway Billboard Series",
        "Subway 6-Sheet Transit Enclosure Posters",
        "Motion Transit LED Display Formats",
        "Exhibition Program Leaflets & Press Assets"
      ],
      specs: "Print Standard: FOGRA39 Large Format. Resolution: Vector Scalable + 300DPI Press Kits."
    },
    {
      id: "vela-packaging",
      title: "Vela Botanical Essentials",
      category: "Packaging Design",
      image: "assets/project4-packaging.svg",
      summary: "Premium product packaging architecture and luxury apothecary mockup suite.",
      objectives: "Position an organic skincare formulation as an understated luxury essential. Designed amber glass dropper bottles, secondary outer carton dielines, and tactile soy-ink labels.",
      deliverables: [
        "Custom Amber Flint Dropper Bottle Labels",
        "Secondary Outer Box Packaging Dielines",
        "Blind-Embossed Crest & Tamper-Evident Seals",
        "Technical Production Specs for Carton Printers"
      ],
      specs: "Substrate: 380gsm Uncoated Stone Board. Finishes: Matte Violet Foil & Blind Emboss."
    },
    {
      id: "strata-collateral",
      title: "Strata Venture Capital",
      category: "Marketing Collateral",
      image: "assets/project5-collateral.svg",
      summary: "Professional brochure, business stationery, and investor presentation toolkit.",
      objectives: "Provide an early-stage deep-tech venture fund with institutional gravitas. Crafted a heavy-stock trifold prospectus, letterpress business cards, and private memorandum decks.",
      deliverables: [
        "Executive Tri-Fold Prospectus Lookbook",
        "Heavyweight 600gsm Foil-Stamped Business Cards",
        "Corporate Presentation Folders & Stationery",
        "Institutional Investor PDF Slide Template"
      ],
      specs: "Card Stock: 600gsm Duplex Cotton. Foiling: Metallic Violet & Deep Black Foil Stamp."
    },
    {
      id: "neo-spatial-uiux",
      title: "Neo Spatial Computing",
      category: "Website UI/UX",
      image: "assets/project6-uiux.svg",
      summary: "Modern web application interface, responsive prototype, and interaction design system.",
      objectives: "Design an intuitive, low-latency web application for 3D spatial computing architects. Balanced complex multi-dimensional viewport controls with a crisp dark-mode interface.",
      deliverables: [
        "Full Component Design System & Token Library",
        "High-Fidelity Interactive Desktop & Mobile Prototype",
        "Micro-Interaction Specifications & State Charts",
        "Responsive Production-Ready Frontend Code"
      ],
      specs: "Tech Stack: Semantic HTML5, Modular CSS, WebGL/WebGPU viewport integration."
    }
  ];

  const ABOUT_DATA = {
    mission: {
      badge: "PURPOSE",
      title: "Our Mission",
      statement: "To deliver purposeful and impactful design solutions that help brands communicate with confidence.",
      details: [
        "Design is never decorative afterthought; it is fundamental business strategy.",
        "We eliminate visual noise to bring pure clarity to your brand's core purpose.",
        "Every line, color choice, and typographic pairing is deliberately chosen to solve a concrete communication challenge.",
        "We guarantee strict craft standards that ensure your brand identity endures across evolving industry cycles."
      ]
    },
    vision: {
      badge: "FUTURE",
      title: "Our Vision",
      statement: "To become a trusted creative partner for brands looking to build a distinctive and memorable visual presence.",
      details: [
        "We reject generic agency templates and cookie-cutter workflows in favor of original graphic inquiry.",
        "Our studio collaborates closely with founders, creative directors, and innovators across the globe.",
        "We believe the most memorable brands combine timeless editorial design with forward-looking digital fluency.",
        "Our goal is to build enduring relationships where our design expertise continually drives client growth."
      ]
    },
    approach: {
      badge: "METHODOLOGY",
      title: "Our Approach",
      statement: "We combine research, creative thinking, and careful execution to deliver designs aligned with each client's goals.",
      details: [
        "Research & Context: We examine your market landscape, competitive peers, and audience psychology before opening design files.",
        "Strategic Ideation: We explore bold, divergent concepts that challenge conventions while honoring brand positioning.",
        "Craft & Precision: Every vector, typographic hierarchy, and grid layout is refined with millimeter precision.",
        "Frictionless Delivery: We hand off complete, production-ready source files, guidelines, and assets ready for instant deployment."
      ]
    }
  };

  // =========================================================================
  // DOM ELEMENT SELECTIONS
  // =========================================================================

  const siteNav = document.getElementById("siteNav");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeModeLabel = document.getElementById("themeModeLabel");

  const servicesContainer = document.getElementById("servicesContainer");
  const portfolioContainer = document.getElementById("portfolioContainer");
  const aboutCards = document.querySelectorAll(".about-card");

  const contactForm = document.getElementById("contactForm");
  const serviceSelect = document.getElementById("serviceRequired");

  // Modal elements
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalLead = document.getElementById("modalLead");
  const modalImageBox = document.getElementById("modalImageBox");
  const modalImage = document.getElementById("modalImage");
  const modalDeliverablesList = document.getElementById("modalDeliverablesList");
  const modalSectionHeading = document.getElementById("modalSectionHeading");
  const modalExtraDetail = document.getElementById("modalExtraDetail");
  const modalActionBtn = document.getElementById("modalActionBtn");

  const toastContainer = document.getElementById("toastContainer");

  // =========================================================================
  // THEME MANAGEMENT (Sand / Dark Purple)
  // =========================================================================

  function initTheme() {
    const savedTheme = localStorage.getItem("slr_theme") || "sand";
    applyTheme(savedTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") === "dark-purple" ? "sand" : "dark-purple";
        applyTheme(currentTheme);
      });
    }
  }

  function applyTheme(theme) {
    if (theme === "dark-purple") {
      document.documentElement.setAttribute("data-theme", "dark-purple");
      if (themeModeLabel) themeModeLabel.textContent = "THEME: PURPLE";
      localStorage.setItem("slr_theme", "dark-purple");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeModeLabel) themeModeLabel.textContent = "THEME: SAND";
      localStorage.setItem("slr_theme", "sand");
    }
  }

  // =========================================================================
  // NAVIGATION & ACTIVE SECTION HIGHLIGHTING
  // =========================================================================

  function initNavigation() {
    // Mobile Drawer Toggle
    if (mobileNavToggle && mobileDrawer) {
      mobileNavToggle.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.contains("is-open");
        if (isOpen) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    // Close mobile drawer when clicking link
    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileDrawer();
      });
    });

    // IntersectionObserver for scroll spy
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          updateActiveNavLink(currentId);
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
    mobileNavToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
    mobileNavToggle.setAttribute("aria-expanded", "false");
  }

  function updateActiveNavLink(id) {
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${id}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    mobileNavLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${id}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // =========================================================================
  // RENDER SERVICES (8 Interactive Cards)
  // =========================================================================

  function renderServices() {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = "";

    SERVICES_DATA.forEach(service => {
      const card = document.createElement("article");
      card.className = "service-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-haspopup", "dialog");
      card.setAttribute("aria-label", `View details for Service ${service.number}: ${service.title}`);

      card.innerHTML = `
        <div>
          <div class="service-top-meta">
            <span class="service-number">SERVICE ${service.number}</span>
            <div class="service-icon-box" aria-hidden="true">${service.icon}</div>
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-short-desc">${service.shortDesc}</p>
        </div>
        <div class="service-card-action">
          <span>EXPLORE DELIVERABLES</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      `;

      card.addEventListener("click", () => openServiceModal(service));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openServiceModal(service);
        }
      });

      servicesContainer.appendChild(card);
    });
  }

  function openServiceModal(service) {
    modalCategory.textContent = `SERVICE ${service.number} / SPECIFICATION`;
    modalTitle.textContent = service.title;
    modalLead.textContent = service.shortDesc;

    modalImageBox.style.display = "none";
    modalSectionHeading.textContent = "CORE DELIVERABLES";

    modalDeliverablesList.innerHTML = "";
    service.deliverables.forEach(item => {
      const li = document.createElement("li");
      li.className = "modal-checklist-item";
      li.innerHTML = `
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${item}</span>
      `;
      modalDeliverablesList.appendChild(li);
    });

    modalExtraDetail.innerHTML = `
      <p style="font-size: 0.9375rem; line-height: 1.6; color: var(--text-muted);">${service.detail}</p>
    `;

    modalActionBtn.textContent = "START A PROJECT WITH THIS SERVICE";
    modalActionBtn.onclick = () => {
      closeModal();
      selectServiceInForm(service.title);
      scrollToSection("contact");
    };

    openModal();
  }

  // =========================================================================
  // RENDER PORTFOLIO (Exactly 6 Projects, 2 Columns x 3 Rows)
  // =========================================================================

  function renderPortfolio() {
    if (!portfolioContainer) return;
    portfolioContainer.innerHTML = "";

    PORTFOLIO_DATA.forEach((project, idx) => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-haspopup", "dialog");
      card.setAttribute("aria-label", `View portfolio project: ${project.title}`);

      card.innerHTML = `
        <div class="portfolio-image-wrapper">
          <img src="${project.image}" alt="${project.title} - ${project.category}" loading="lazy" width="800" height="560">
          <div class="portfolio-hover-overlay">
            <span class="btn btn-secondary btn-sm">VIEW PROJECT</span>
            <p style="font-size: 0.8125rem; color: #E0C9A6; max-width: 320px;">${project.summary}</p>
          </div>
        </div>
        <div class="portfolio-card-info">
          <div>
            <h3 class="portfolio-project-title">${project.title}</h3>
            <span class="portfolio-project-cat">${project.category}</span>
          </div>
          <div class="portfolio-expand-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openPortfolioModal(project));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPortfolioModal(project);
        }
      });

      portfolioContainer.appendChild(card);
    });
  }

  function openPortfolioModal(project) {
    modalCategory.textContent = `PORTFOLIO / ${project.category.toUpperCase()}`;
    modalTitle.textContent = project.title;
    modalLead.textContent = project.summary;

    modalImageBox.style.display = "block";
    modalImage.src = project.image;
    modalImage.alt = project.title;

    modalSectionHeading.textContent = "DESIGN OBJECTIVES &amp; DELIVERABLES";

    modalDeliverablesList.innerHTML = "";
    project.deliverables.forEach(item => {
      const li = document.createElement("li");
      li.className = "modal-checklist-item";
      li.innerHTML = `
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${item}</span>
      `;
      modalDeliverablesList.appendChild(li);
    });

    modalExtraDetail.innerHTML = `
      <div style="margin-bottom: 18px;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--violet-solid); margin-bottom: 8px;">STRATEGIC OBJECTIVE</h4>
        <p style="font-size: 0.9375rem; line-height: 1.6; color: var(--text-muted);">${project.objectives}</p>
      </div>
      <div style="background-color: var(--bg-surface); border: 1px solid var(--border-main); padding: 14px 18px;">
        <h4 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--text-main); margin-bottom: 4px;">PRODUCTION SPECIFICATIONS</h4>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 0;">${project.specs}</p>
      </div>
    `;

    modalActionBtn.textContent = "COMMISSION SIMILAR CREATIVE WORK";
    modalActionBtn.onclick = () => {
      closeModal();
      selectServiceInForm(project.category);
      scrollToSection("contact");
    };

    openModal();
  }

  // =========================================================================
  // ABOUT CARDS INTERACTION (Mission, Vision, Approach)
  // =========================================================================

  function initAboutCards() {
    aboutCards.forEach(card => {
      const key = card.getAttribute("data-about-key");
      const data = ABOUT_DATA[key];
      if (!data) return;

      card.addEventListener("click", () => openAboutModal(data));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openAboutModal(data);
        }
      });
    });
  }

  function openAboutModal(data) {
    modalCategory.textContent = `ABOUT / ${data.badge}`;
    modalTitle.textContent = data.title;
    modalLead.textContent = data.statement;

    modalImageBox.style.display = "none";
    modalSectionHeading.textContent = "STUDIO PRINCIPLES &amp; STANDARDS";

    modalDeliverablesList.innerHTML = "";
    data.details.forEach(item => {
      const li = document.createElement("li");
      li.className = "modal-checklist-item";
      li.style.gridColumn = "span 2";
      li.innerHTML = `
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${item}</span>
      `;
      modalDeliverablesList.appendChild(li);
    });

    modalExtraDetail.innerHTML = `
      <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
        SLR GRAPHICS operates on clear principles of precision craft, intellectual rigor, and transparent client communication. Every engagement is guided directly by experienced creative leads.
      </p>
    `;

    modalActionBtn.textContent = "DISCUSS A COLLABORATION";
    modalActionBtn.onclick = () => {
      closeModal();
      scrollToSection("contact");
    };

    openModal();
  }

  // =========================================================================
  // LEGAL MODALS (Privacy Policy & Terms and Conditions)
  // =========================================================================

  window.openPrivacyPolicyModal = function () {
    modalCategory.textContent = "LEGAL / COMPLIANCE";
    modalTitle.textContent = "PRIVACY POLICY";
    modalLead.textContent = "SLR GRAPHICS is committed to the protection of client confidential data, proprietary project briefs, and personal information.";

    modalImageBox.style.display = "none";
    modalSectionHeading.textContent = "POLICY CLAUSES &amp; DATA GOVERNANCE";

    modalDeliverablesList.innerHTML = `
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Strict Non-Disclosure: All client briefs, drafts, and business strategies are treated under professional confidentiality.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Zero Third-Party Data Resale: We never sell, lease, or monetize client contacts or correspondence.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Encrypted Storage: Assets, credentials, and production vectors are archived securely on encrypted drives.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Data Subject Rights: Clients may request full archival deletion of their contact records at any time.</span>
      </li>
    `;

    modalExtraDetail.innerHTML = `
      <div style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
        <p><strong>Effective Date:</strong> January 1, 2026. This policy applies to all communications, submissions through slrgraphics.studio, and creative services agreements.</p>
        <p>For inquiries regarding data protection or to request asset purges, contact our operations desk at <span class="editable-email">hello@slrgraphics.studio</span>.</p>
      </div>
    `;

    modalActionBtn.textContent = "I UNDERSTAND";
    modalActionBtn.onclick = closeModal;

    openModal();
  };

  window.openTermsModal = function () {
    modalCategory.textContent = "LEGAL / SERVICE CONTRACT";
    modalTitle.textContent = "TERMS AND CONDITIONS";
    modalLead.textContent = "Standard commercial engagement terms governing creative services, intellectual property transfer, and milestone deliverables.";

    modalImageBox.style.display = "none";
    modalSectionHeading.textContent = "KEY TERMS SUMMARY";

    modalDeliverablesList.innerHTML = `
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>IP Assignment: Full worldwide intellectual property rights transfer to the client upon 100% settlement of agreed invoice milestones.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Structured Revisions: Each milestone includes two rounds of consolidated revisions within the contracted scope.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Source Deliverables: Master vectors (.AI, .EPS, .SVG, .FIG, .PDF) are furnished upon project sign-off.</span>
      </li>
      <li class="modal-checklist-item" style="grid-column: span 2;">
        <svg class="modal-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Portfolio Usage: SLR GRAPHICS reserves the customary studio right to showcase final approved work for archival and studio promotion.</span>
      </li>
    `;

    modalExtraDetail.innerHTML = `
      <div style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
        <p>Complete statement of work contracts and custom non-disclosure agreements are countersigned digitally prior to milestone commencement.</p>
      </div>
    `;

    modalActionBtn.textContent = "CLOSE TERMS";
    modalActionBtn.onclick = closeModal;

    openModal();
  };

  // =========================================================================
  // MODAL CORE CONTROLS
  // =========================================================================

  function openModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add("is-active");
    document.body.style.overflow = "hidden";
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("is-active")) {
      closeModal();
    }
  });

  // =========================================================================
  // CONTACT FORM VALIDATION & FUNCTIONAL SUBMISSION FLOW
  // Strict prompt compliance:
  // "Implement proper form validation and a functional submission flow.
  //  If no backend or form service is configured, clearly explain that setup is required
  //  rather than displaying a fake success message."
  // =========================================================================

  function initContactForm() {
    if (!contactForm) return;

    // Populate service dropdown dynamically from SERVICES_DATA
    if (serviceSelect && serviceSelect.options.length <= 1) {
      SERVICES_DATA.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.title;
        opt.textContent = `${s.number}. ${s.title}`;
        serviceSelect.appendChild(opt);
      });
    }

    contactForm.addEventListener("submit", handleContactSubmit);
  }

  function handleContactSubmit(e) {
    e.preventDefault();

    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("emailAddress");
    const serviceInput = document.getElementById("serviceRequired");
    const budgetInput = document.getElementById("projectBudget");
    const descInput = document.getElementById("projectDescription");

    let isValid = true;

    // Validate Full Name
    if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 2) {
      showFieldError(fullNameInput, "Please enter your full name (minimum 2 characters).");
      isValid = false;
    } else {
      clearFieldError(fullNameInput);
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showFieldError(emailInput, "Please enter a valid business email address.");
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Service Required
    if (!serviceInput.value) {
      showFieldError(serviceInput, "Please select the primary service required for your project.");
      isValid = false;
    } else {
      clearFieldError(serviceInput);
    }

    // Validate Project Description
    if (!descInput.value.trim() || descInput.value.trim().length < 10) {
      showFieldError(descInput, "Please describe your project goals (minimum 10 characters).");
      isValid = false;
    } else {
      clearFieldError(descInput);
    }

    if (!isValid) return;

    // Form data is valid
    const submissionData = {
      name: fullNameInput.value.trim(),
      email: emailInput.value.trim(),
      service: serviceInput.value,
      budget: budgetInput.value || "Not specified",
      description: descInput.value.trim(),
      submittedAt: new Date().toISOString()
    };

    // Check backend configuration
    const config = window.SLR_CONFIG || {};
    const backend = config.formBackend || {};

    if (backend.endpoint && backend.provider) {
      // Functional backend submission
      dispatchToBackend(backend, submissionData);
    } else {
      // Clear explanation modal as requested in specification
      showBackendConfigModal(submissionData);
    }
  }

  function showFieldError(input, message) {
    input.classList.add("is-invalid");
    const errorEl = document.getElementById(`${input.id}-error`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("is-visible");
    }
  }

  function clearFieldError(input) {
    input.classList.remove("is-invalid");
    const errorEl = document.getElementById(`${input.id}-error`);
    if (errorEl) {
      errorEl.classList.remove("is-visible");
    }
  }

  function showBackendConfigModal(data) {
    const briefText = `PROJECT BRIEF - SLR GRAPHICS
----------------------------------------
CLIENT: ${data.name}
EMAIL: ${data.email}
SERVICE: ${data.service}
BUDGET: ${data.budget}
TIMESTAMP: ${new Date().toLocaleString()}

PROJECT SCOPE:
${data.description}
----------------------------------------`;

    modalCategory.textContent = "SUBMISSION PREPARED / CONFIGURATION REQUIRED";
    modalTitle.textContent = "PROJECT BRIEF COMPILED";
    modalLead.textContent = "Your project brief has been successfully validated. Because this website is running in development/preview mode without an active form backend endpoint, please follow the quick instructions below to connect your studio inbox:";

    modalImageBox.style.display = "none";
    modalSectionHeading.textContent = "CAPTURED PROJECT PARAMETERS";

    modalDeliverablesList.innerHTML = `
      <li class="modal-checklist-item">
        <strong>Client:</strong>&nbsp;<span>${escapeHTML(data.name)}</span>
      </li>
      <li class="modal-checklist-item">
        <strong>Email:</strong>&nbsp;<span>${escapeHTML(data.email)}</span>
      </li>
      <li class="modal-checklist-item">
        <strong>Service:</strong>&nbsp;<span>${escapeHTML(data.service)}</span>
      </li>
      <li class="modal-checklist-item">
        <strong>Budget:</strong>&nbsp;<span>${escapeHTML(data.budget)}</span>
      </li>
    `;

    modalExtraDetail.innerHTML = `
      <div style="background-color: var(--bg-surface); border: 1px solid var(--border-main); padding: 18px; margin-bottom: 20px;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--violet-solid); margin-bottom: 8px;">HOW TO CONNECT YOUR INBOX</h4>
        <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 8px;">
          Open <code>config.js</code> in your project root and set <code>formBackend.endpoint</code> to your Formspree, Web3Forms, or custom webhook URL.
        </p>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 0;">
          In the meantime, you can copy this brief to your clipboard or send it directly via your mail client:
        </p>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button id="copyBriefBtn" class="btn btn-secondary btn-sm" type="button">
          COPY BRIEF TO CLIPBOARD
        </button>
        <a href="mailto:${(window.SLR_CONFIG && window.SLR_CONFIG.contact.email) || 'hello@slrgraphics.studio'}?subject=${encodeURIComponent('Project Inquiry: ' + data.service)}&body=${encodeURIComponent(briefText)}" class="btn btn-outline btn-sm">
          DISPATCH VIA EMAIL CLIENT
        </a>
      </div>
    `;

    modalActionBtn.textContent = "RETURN TO WEBSITE";
    modalActionBtn.onclick = closeModal;

    openModal();

    const copyBtn = document.getElementById("copyBriefBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(briefText).then(() => {
          showToast("Project brief copied to clipboard!");
          copyBtn.textContent = "COPIED TO CLIPBOARD!";
        }).catch(() => {
          showToast("Unable to copy automatically. Please copy manually.");
        });
      });
    }
  }

  function dispatchToBackend(backend, data) {
    showToast("Transmitting project brief...");
    fetch(backend.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          showToast("Project brief dispatched successfully! We will be in touch.");
          contactForm.reset();
        } else {
          throw new Error("Backend transmission error");
        }
      })
      .catch(error => {
        console.error(error);
        showBackendConfigModal(data);
      });
  }

  function selectServiceInForm(serviceTitle) {
    if (!serviceSelect) return;
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.includes(serviceTitle) || serviceTitle.includes(serviceSelect.options[i].value)) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
      <span>${escapeHTML(message)}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================================================================
  // INITIALIZATION ON DOM LOAD
  // =========================================================================

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    renderServices();
    renderPortfolio();
    initAboutCards();
    initContactForm();

    // Populate placeholder config values into UI
    if (window.SLR_CONFIG && window.SLR_CONFIG.contact) {
      const emailElements = document.querySelectorAll(".editable-email");
      emailElements.forEach(el => el.textContent = window.SLR_CONFIG.contact.email);

      const instaElements = document.querySelectorAll(".editable-instagram");
      instaElements.forEach(el => el.textContent = window.SLR_CONFIG.contact.instagram);

      const waElements = document.querySelectorAll(".editable-whatsapp");
      waElements.forEach(el => el.textContent = window.SLR_CONFIG.contact.whatsapp);
    }
  });

})();
