:root {
  --primary-color: #7d6b56;
  --secondary-color: #c5a059;
  --bg-color: #faf8f5;
  --card-bg: #ffffff;
  --text-color: #4a4a4a;
  --white: #ffffff;
  --font-heading: 'Cormorant Garamond', serif;
  --font-sans: 'Montserrat', sans-serif;
  --font-script: 'Alex Brush', cursive;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: #e5dfd5;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.cover-container, .content-container {
  width: 100%;
  max-width: 480px;
  background-color: var(--bg-color);
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}

.hidden {
  display: none !important;
}

/* COVER SCREEN */
.cover-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80') center/cover;
  color: var(--white);
  position: fixed;
  z-index: 999;
}

.subtitle {
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.couple-title {
  font-family: var(--font-script);
  font-size: 4rem;
  color: var(--secondary-color);
  line-height: 1.1;
  margin-bottom: 10px;
}

.date-text {
  font-size: 0.95rem;
  letter-spacing: 2px;
}

.guest-box {
  margin: 30px 0;
  padding: 15px 25px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(5px);
}

.guest-label {
  font-size: 0.85rem;
  margin-bottom: 5px;
}

#guest-name {
  font-size: 1.3rem;
  color: var(--secondary-color);
  font-weight: 600;
}

/* BUTTONS */
.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.btn-primary:hover {
  background-color: var(--secondary-color);
}

.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-block { width: 100%; }

/* MUSIC CONTROL */
.music-control {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* HERO SECTION */
.hero-section {
  height: 60vh;
  background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
}

/* SECTIONS */
.section-card {
  padding: 40px 25px;
  border-bottom: 1px solid #eaeaea;
}

.text-center { text-align: center; }
.bg-gold { background-color: var(--primary-color); color: var(--white); }

.section-title {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 10px;
}

.bg-gold .section-title { color: var(--white); }

.section-subtitle {
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 25px;
  color: #666;
  line-height: 1.5;
}

/* AYAT */
.arabic-text {
  font-size: 1.2rem;
  line-height: 2;
  margin-bottom: 15px;
  direction: rtl;
}

.quote-text {
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.6;
}

.quote-author {
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 10px;
}

/* MEMPELAI */
.couple-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 25px;
}

.mempelai-box { text-align: center; }

.mempelai-img-wrapper {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px auto;
  border: 4px solid var(--secondary-color);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.mempelai-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mempelai-nama {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.mempelai-ortu {
  font-size: 0.85rem;
  line-height: 1.5;
}

.ampersand {
  font-family: var(--font-script);
  font-size: 3.5rem;
  color: var(--secondary-color);
  text-align: center;
}

/* TIMER */
.timer-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.timer-box {
  background: rgba(255,255,255,0.15);
  padding: 10px;
  border-radius: 8px;
  width: 65px;
  text-align: center;
}

.timer-box span {
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
}

.timer-box small {
  font-size: 0.7rem;
  text-transform: uppercase;
}

/* LOVE STORY TIMELINE */
.timeline {
  position: relative;
  margin-top: 20px;
  padding-left: 20px;
  border-left: 2px dashed var(--secondary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 25px;
  padding-left: 20px;
}

.timeline-badge {
  position: absolute;
  left: -31px;
  top: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
}

.timeline-panel h4 { font-family: var(--font-heading); font-size: 1.2rem; }
.timeline-date { font-size: 0.75rem; color: var(--secondary-color); font-weight: 600; display: block; margin-bottom: 5px; }
.timeline-panel p { font-size: 0.85rem; line-height: 1.4; }

/* EVENT CARDS */
.event-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event-card {
  background-color: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #eee;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.event-icon {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.event-card h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.event-time {
  font-size: 0.85rem;
  color: var(--secondary-color);
  font-weight: 600;
  margin-bottom: 10px;
}

.event-location {
  font-size: 0.8rem;
  line-height: 1.5;
}

.margin-top { margin-top: 20px; }

/* GALLERY GRID */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.gallery-grid img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

/* BANK CARD */
.bank-card {
  background: var(--card-bg);
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.bank-icon { font-size: 2rem; color: var(--primary-color); margin-bottom: 8px; }
.account-number { font-size: 1.2rem; font-weight: 700; color: var(--primary-color); margin: 5px 0; }
.account-name { font-size: 0.85rem; color: #666; margin-bottom: 12px; }

.btn-copy {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 6px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-copy:hover {
  background: var(--primary-color);
  color: var(--white);
}

/* RSVP FORM */
.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-group input, .form-group select, .form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: var(--font-sans);
}

/* FOOTER */
.footer-section {
  padding: 40px 20px;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--white);
}

.footer-section h3 {
  font-family: var(--font-script);
  font-size: 3rem;
  color: var(--secondary-color);
  margin-top: 10px;
}
