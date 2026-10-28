# SLR GRAPHICS : Premium Creative Agency Website

> **Main Tagline:** GIVE YOUR BRAND A VISUAL IDENTITY  
> **Aesthetic:** Editorial deep maroon and warm sand interface inspired by high-end Behance and Awwwards creative agency showcases.

A complete, production-ready website designed and developed for **SLR GRAPHICS**, an independent graphic design and visual communications studio.

---

## 1. Project Overview & Features

- **Brand Visual System:** Built with exact color specifications:
  - Default Editorial Sand Background: `#E0C9A6` with deep ink black typography (`#0E0E0E`)
  - Accent Palette: Velvet Maroon (`#2B080C`) and regal solid crimson maroon (`#8B1E2D`)
  - Instant Palette Switcher: Toggle between **Editorial Sand** (`#E0C9A6`) and **Dark Maroon** (`#180407`)
  - Clean Dark-Maroon Footer with crimson accent border (`#220508` / `#8B1E2D`)
- **Strict Brand Rules Enforced:**
  - Zero gradients (clean, solid editorial color blocks only)
  - Zero pill-shaped buttons (strict architectural rectangular styling)
  - Zero emoji icons (clean geometric SVG icons only)
  - Zero em dashes (typography strictly adheres to colons, slashes, and clean spacing)
  - Zero fake reviews, fake metrics, or fake counters
  - Zero AI slop photos or robotic copy (bespoke vector graphics and realistic mockups)
  - Zero cursor animations or chaotic scroll physics
- **Complete Website Structure:**
  1. **Home / Hero Section:** Large editorial typography (`SLR GRAPHICS`, `GIVE YOUR BRAND A VISUAL IDENTITY`, supporting text, original geometric SLR brand monogram, and single primary CTA: `START A PROJECT`).
  2. **Services Section (What We Do):** 8 interactive service cards with custom icons and complete deliverables modals:
     - 01. Brand Identity
     - 02. Marketing Collateral
     - 03. Advertising Creatives
     - 04. Digital & Social Media Design
     - 05. Print & Packaging Design
     - 06. UI/UX Design & Development
     - 07. Website Handling
     - 08. SEO
  3. **Portfolio Section (Selected Work):** Exactly 6 project case studies arranged in 2 columns and 3 rows with custom vector mockups and detailed project modal overlays:
     - Kairos Coffee Roasters (Brand Identity)
     - Lumen Audio Systems (Digital & Social Media Design)
     - Monolith Architecture Biennale (Advertising Creatives)
     - Vela Botanical Essentials (Print & Packaging Design)
     - Strata Venture Capital (Marketing Collateral)
     - Neo Spatial Computing (UI/UX Design & Development)
  4. **About Section (Behind the Design):** Studio statement, agency description, and 3 interactive cards (Our Mission, Our Vision, Our Approach).
  5. **Why SLR GRAPHICS?:** 4 core studio benefits (Creative Thinking, Consistent Quality, Brand-Focused Approach, Complete Design Solutions).
  6. **Our Creative Process:** 5-phase timeline (Discover, Strategize, Design, Refine, Deliver) horizontal on desktop and vertical on mobile.
  7. **Contact Section (Let's Create Something Great):** Validated contact form + verified editable placeholders for email, Instagram, and WhatsApp.
  8. **Footer:** Studio branding, quick navigation links, services links, social links, legal modals, and 2026 copyright notice.
  9. **Legal Compliances:** Full interactive Privacy Policy and Terms & Conditions modals.

---

## 2. Directory Structure

```
slr-graphics/
├── index.html                  # Semantic, accessible HTML5 website structure
├── styles.css                  # Custom CSS design system, typography, & layouts
├── app.js                      # Modular interaction controller, modals, & validation
├── config.js                   # Studio configuration (email, social links, form backend)
├── favicon.svg                 # SLR Studio SVG favicon
├── README.md                   # Documentation and deployment guide
└── assets/
    ├── slr-symbol.svg          # Original SLR geometric identity monogram
    ├── project1-brand-identity.svg   # Kairos Coffee Roasters case study mockup
    ├── project2-social-media.svg     # Lumen Audio Systems case study mockup
    ├── project3-advertising.svg      # Monolith Biennale case study mockup
    ├── project4-packaging.svg        # Vela Botanicals case study mockup
    ├── project5-collateral.svg       # Strata Venture Capital case study mockup
    └── project6-uiux.svg             # Neo Spatial Studio case study mockup
```

---

## 3. How to Launch & Test Locally

You can open the website immediately in any modern browser without needing to install Node.js or run build tools:

1. Navigate to the project directory:
   ```
   C:\Users\Administrator\.gemini\antigravity\scratch\slr-graphics\
   ```
2. Double-click `index.html` to open in Google Chrome or Microsoft Edge.
3. Alternatively, serve with any local static HTTP server (e.g. VS Code Live Server, Python `python -m http.server 8000`, or `npx serve`).

---

## 4. Customizing Studio Information

All client-facing contact points and metadata are centralized in `config.js`:

```javascript
window.SLR_CONFIG = {
  studio: {
    name: "SLR GRAPHICS",
    tagline: "GIVE YOUR BRAND A VISUAL IDENTITY",
    subtext: "Creative design solutions built to make your brand look professional, memorable, and impactful.",
    currentYear: 2026
  },
  contact: {
    email: "hello@slrgraphics.studio",          // Your actual studio email
    instagram: "@slrgraphics.studio",          // Your Instagram handle
    instagramUrl: "https://instagram.com/...", // Your Instagram link
    whatsapp: "+1 (555) 019-2834",             // Your WhatsApp number
    whatsappUrl: "https://wa.me/...",          // Your direct WhatsApp link
    behanceUrl: "https://behance.net/...",     // Your Behance profile
    dribbbleUrl: "https://dribbble.com/...",   // Your Dribbble profile
    linkedinUrl: "https://linkedin.com/..."    // Your LinkedIn company page
  },
  formBackend: {
    provider: null,                            // e.g. "formspree" or "web3forms"
    endpoint: null                             // e.g. "https://formspree.io/f/xyz"
  }
};
```

---

## 5. Connecting the Contact Form Backend

The contact form includes complete client-side validation for:
- Full Name (required, min 2 characters)
- Email Address (required, valid email pattern)
- Service Required (required dropdown selection)
- Project Budget (optional tier)
- Project Description (required, min 10 characters)

### Option A: Using Formspree (Recommended, Free)
1. Register at [formspree.io](https://formspree.io) and create a new form.
2. In `config.js`, set:
   ```javascript
   formBackend: {
     provider: "formspree",
     endpoint: "https://formspree.io/f/YOUR_FORM_ID"
   }
   ```

### Option B: Using Web3Forms
1. Generate an Access Key at [web3forms.com](https://web3forms.com).
2. In `config.js`, set:
   ```javascript
   formBackend: {
     provider: "web3forms",
     endpoint: "https://api.web3forms.com/submit",
     apiKey: "YOUR_ACCESS_KEY"
   }
   ```

### Option C: Default Behavior (No Setup Required)
When no backend endpoint is configured, submitting the form compiles the client's inquiry into a clean, formatted project brief and opens a verification modal. From there, the client or team can:
- **Copy Brief to Clipboard** with one click.
- **Dispatch via Default Email Client (`mailto:`)** pre-filled with the brief data.

---

## 6. Deploying to Production

This website uses clean, standard HTML5, CSS3, and JavaScript with zero build dependencies, making deployment instant:

- **Netlify / Vercel:** Drag and drop the `slr-graphics` folder into the Netlify or Vercel dashboard.
- **GitHub Pages:** Push the repository to GitHub and enable Pages under repository Settings.
- **AI Coding Builders (Lovable, Bolt, Replit):** Simply copy and paste the prompt or import these source files.
