import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Menu,
  X,
  Mail,
  Linkedin,
  Sparkles,
  Globe,
  Layers,
  Terminal,
  Server,
  Bug,
  Cloud,
  ExternalLink,
  Lock,
  CheckCircle2,
  Send,
  Cpu,
  Database
} from 'lucide-react'
import {
  profile,
  projects,
  skills,
  services,
  processSteps,
  stats,
  marqueeItems,
  heroTechBadges
} from './data'
import './style.css'

const ease = [0.22, 1, 0.36, 1]
const initialsFor = name => name.split(/\s+/).map(part => part[0]).join('').slice(0, 2)

function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function IconLink({ href, children, className = '', ...props }) {
  if (!href) {
    return (
      <span className={`${className} unavailable`} aria-disabled="true">
        {children}
      </span>
    )
  }
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      className={className}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact']
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
          ANIKET<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Let's Talk <ArrowUpRight size={14} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {navItems.map(item => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} style={{ color: 'var(--lime)', fontWeight: 600 }}>
                Let's Talk
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function CodeCard() {
  return (
    <motion.div
      className="code-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease }}
    >
      <div className="code-head">
        <div className="window-dots">
          <i className="dot-red" />
          <i className="dot-yellow" />
          <i className="dot-green" />
        </div>
        <span className="code-filename">
          <Terminal size={12} /> aniket.dev.js
        </span>
        <span className="code-badge">Full Stack</span>
      </div>

      <div className="code-body">
        <div>
          <small>01</small>
          <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
        </div>
        <div>
          <small>02</small>
          <span className="code-indent">
            <span className="code-prop">name</span>: <span className="code-string">"Aniket Kumar"</span>,
          </span>
        </div>
        <div>
          <small>03</small>
          <span className="code-indent">
            <span className="code-prop">role</span>: <span className="code-string">"Full Stack Developer"</span>,
          </span>
        </div>
        <div>
          <small>04</small>
          <span className="code-indent">
            <span className="code-prop">stack</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Node"</span>, <span className="code-string">"Express"</span>, <span className="code-string">"Mongo"</span>],
          </span>
        </div>
        <div>
          <small>05</small>
          <span className="code-indent">
            <span className="code-prop">available</span>: <span className="code-bool">true</span>
          </span>
        </div>
        <div>
          <small>06</small>
          {'}'};<span className="code-cursor" />
        </div>
      </div>

      <div className="code-foot">
        <span className="online-dot pulsing" />
        <span>OPEN TO OPPORTUNITIES</span>
        <span className="code-foot-time">UTC+05:30</span>
      </div>
    </motion.div>
  )
}

function FloatingTechBadges() {
  const reduce = useReducedMotion()
  const badgeIcons = {
    React: Code2,
    'Node.js': Server,
    JavaScript: Terminal,
    MongoDB: Database,
    Express: Cpu,
    PostgreSQL: Database,
    'REST API': Globe,
  }

  return (
    <>
      {heroTechBadges.map((badge, i) => {
        const IconComponent = badgeIcons[badge.name] || Terminal
        return (
          <motion.div
            key={badge.name}
            className={`floating-badge badge-${badge.pos}`}
            animate={
              reduce
                ? false
                : {
                    y: [0, -6, 0],
                    x: [0, (i % 2 === 0 ? 3 : -3), 0],
                  }
            }
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          >
            <IconComponent size={12} color="var(--lime)" />
            <span>{badge.name}</span>
          </motion.div>
        )
      })}
    </>
  )
}

function ProjectVisual({ type }) {
  if (type === 'ekart') {
    return (
      <div className="project-visual ekart" aria-hidden="true">
        <div className="visual-top">
          <span className="visual-mark">eKart Storefront</span>
          <span className="visual-small">LIVE MERN PROJECT</span>
          <span className="visual-menu">···</span>
        </div>
        <div className="ekart-mockup" style={{ margin: '14px auto', width: '92%' }}>
          <div className="ekart-mockup-nav">
            <div className="ekart-mockup-logo">e<span>Kart</span></div>
            <div className="ekart-mockup-search">Search electronics...</div>
            <div className="ekart-mockup-cart">Cart (2)</div>
          </div>
          <div className="ekart-mockup-grid">
            <div className="ekart-product-item">
              <span className="ekart-product-badge">HEADPHONES</span>
              <div className="ekart-product-title">Pro Wireless Audio</div>
              <div className="ekart-product-price">
                <span>₹4,999</span>
                <span className="ekart-add-btn">Add +</span>
              </div>
            </div>
            <div className="ekart-product-item">
              <span className="ekart-product-badge">KEYBOARD</span>
              <div className="ekart-product-title">RGB Mechanical Pro</div>
              <div className="ekart-product-price">
                <span>₹3,499</span>
                <span className="ekart-add-btn">Add +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'hub') {
    return (
      <div className="project-visual" aria-hidden="true">
        <div className="visual-top">
          <span className="visual-mark">AI Tool Hub v1.0</span>
          <span className="visual-small">MCA FINAL PROJECT</span>
          <span className="visual-menu">···</span>
        </div>
        <div className="hub-preview">
          <div className="hub-greeting">
            One workspace.<br />
            <em>Multi-tool AI suite.</em>
          </div>
          <div className="hub-pills">
            <i>Text Summarizer</i>
            <i>Translator</i>
            <i>Code Debugger</i>
            <i>Notes</i>
          </div>
          <div className="hub-input">
            Ask workspace or generate code... <ArrowRight size={13} />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'placement') {
    return (
      <div className="project-visual" aria-hidden="true">
        <div className="visual-top">
          <span className="visual-mark">Placement Management</span>
          <span className="visual-small">STUDENT & RECRUITER PORTAL</span>
          <span className="visual-menu">···</span>
        </div>
        <div className="placement-preview">
          <div className="placement-stat-row">
            <div className="placement-stat-box">
              <small>ELIGIBLE</small>
              <b>420</b>
            </div>
            <div className="placement-stat-box">
              <small>COMPANIES</small>
              <b>38</b>
            </div>
            <div className="placement-stat-box">
              <small>SELECTED</small>
              <b>184</b>
            </div>
          </div>
          <div className="placement-card-snippet">
            <span>TechCorp Campus Drive · Technical Round</span>
            <span style={{ color: 'var(--lime)' }}>Shortlisted</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="visual-top">
        <span className="visual-mark">Room Controller</span>
        <span className="visual-small">IOT & AMBIENT MONITOR</span>
        <span className="visual-menu">···</span>
      </div>
      <div className="room-preview">
        <div className="room-sensor-row">
          <div className="room-sensor-box">
            <span>AMBIENT TEMP</span>
            <strong>22.5°C</strong>
          </div>
          <div className="room-sensor-box">
            <span>LIGHTING</span>
            <strong>75% WARM</strong>
          </div>
        </div>
        <div className="room-toggle-row">
          <div className="room-toggle-item">
            <span>Main Studio Lights</span>
            <span style={{ color: 'var(--lime)' }}>ACTIVE</span>
          </div>
          <div className="room-toggle-item">
            <span>HVAC Climate</span>
            <span style={{ color: 'var(--lime)' }}>AUTO</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className={project.featured ? 'project-featured-reveal' : ''} delay={index * 0.08}>
      <motion.article
        className={`project-card ${project.featured ? 'featured' : ''}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.22 }}
      >
        <div className="project-art">
          <ProjectVisual type={project.visual} />
          <div className="project-status">
            {project.liveUrl ? (
              <>
                <i className="online-dot pulsing" /> LIVE
              </>
            ) : (
              <>
                <span className="status-quiet" /> PROJECT
              </>
            )}
          </div>
        </div>

        <div className="project-copy">
          <div className="project-heading">
            <div>
              <span className="eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
            </div>
            <span className="project-index">0{index + 1}</span>
          </div>

          <p>{project.description}</p>

          {project.deployedOn && (
            <div className="deployment-note">
              <i className="online-dot pulsing" /> Deployed on {project.deployedOn}
            </div>
          )}

          <div className="tags">
            {project.technologies.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="project-actions">
            {project.liveUrl && (
              <IconLink href={project.liveUrl} className="button button-primary" style={{ padding: '9px 14px', fontSize: '11px' }}>
                View Live Project <ArrowUpRight size={14} />
              </IconLink>
            )}
            {project.githubUrl && (
              <IconLink href={project.githubUrl} className="source-link">
                <Github size={14} /> GitHub Code
              </IconLink>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

function App() {
  const [formState, setFormState] = useState('idle')

  useEffect(() => {
    document.title = `${profile.name} | Full Stack Developer`
  }, [])

  function submitContact(e) {
    e.preventDefault()
    if (!profile.email) {
      setFormState('unconfigured')
      return
    }
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const type = data.get('type')
    const message = data.get('message')

    const subject = encodeURIComponent(`Project inquiry from ${name} [${type || 'General'}]`)
    const body = encodeURIComponent(
      `Hi Aniket,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${type || 'Not specified'}\n\nProject details:\n${message}\n`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFormState('sent')
  }

  const serviceIconMap = {
    Globe,
    Layers,
    Terminal,
    Server,
    Bug,
    Cloud,
  }

  const ekartProject = projects.find(p => p.id === 'ekart') || projects[0]

  return (
    <>
      <Nav />

      <main>
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <motion.div
                className="availability"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="online-dot pulsing" /> AVAILABLE FOR FREELANCE & DEVELOPMENT WORK
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease }}
              >
                Building digital experiences<br />
                <span>that actually work<span className="hero-period">.</span></span>
              </motion.h1>

              <motion.p
                className="hero-role"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Hi, I'm Aniket Kumar — a Full Stack Developer focused on building modern, responsive and real-world web applications.
              </motion.p>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                Crafting clean interfaces in React and engineering resilient services with Node.js, Express, MongoDB, and REST APIs. Dedicated to shipping software that is fast, dependable, and useful.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
              >
                <a className="button button-primary" href="#projects">
                  View Projects <ArrowDownRight size={15} />
                </a>
                <a className="button button-outline" href="#contact">
                  Let's Work Together <ArrowUpRight size={15} />
                </a>
              </motion.div>

              <div className="hero-meta-row">
                <div className="hero-status-pill">
                  <span className="online-dot pulsing" /> Available for opportunities
                </div>
                {profile.resume && (
                  <IconLink href={profile.resume} className="resume-link">
                    Download resume <ArrowDown size={12} />
                  </IconLink>
                )}
              </div>
            </div>

            {/* Hero Right: Stage with CodeCard and Floating Tech Badges */}
            <div className="hero-art-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orb-core">
                <span>{initialsFor(profile.name)}</span>
              </div>
              <FloatingTechBadges />
              <CodeCard />
            </div>
          </div>
        </section>

        {/* ==================== 2. STATS ROW ==================== */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.05}>
                  <div className="stat-card">
                    <span className="stat-label">{stat.label}</span>
                    <div className="stat-value">{stat.value}</div>
                    <span className="stat-detail">{stat.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 3. MARQUEE STRIP ==================== */}
        <div className="marquee-container" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.concat(marqueeItems).map((tech, idx) => (
              <span key={`${tech}-${idx}`} className="marquee-item">
                {tech} <span className="marquee-bullet">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ==================== 4. ABOUT SECTION ==================== */}
        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <Reveal className="about-content">
              <span className="kicker">
                <i /> A LITTLE ABOUT ME
              </span>
              <h2>
                Curious by nature.<br />
                <em>Builder by choice.</em>
              </h2>
              <p className="about-lead">
                I'm an MCA graduate and Full Stack Developer focused on turning practical requirements into robust, real-world web applications.
              </p>
              <p>
                My work spans responsive React interfaces and reliable backend architecture using Node.js, Express.js, MongoDB, and REST APIs. I enjoy understanding how each layer fits together—from UI state and accessibility to schema design and API performance.
              </p>
              <p>
                Whether building customer-facing products or resolving complex bugs, I believe in writing readable code, shipping fast, and constantly expanding my technical toolkit.
              </p>

              <div className="about-points">
                <div className="about-point-item">
                  <span>01 / EDUCATION</span>
                  <strong>MCA Graduate</strong>
                  <small>Computer Applications</small>
                </div>
                <div className="about-point-item">
                  <span>02 / SPECIALIZATION</span>
                  <strong>Full Stack Focus</strong>
                  <small>React & Node.js</small>
                </div>
                <div className="about-point-item">
                  <span>03 / MINDSET</span>
                  <strong>Practical Engineering</strong>
                  <small>Clean code & APIs</small>
                </div>
              </div>

              <a href="#contact" className="text-link" style={{ fontSize: '13px', fontWeight: 600 }}>
                Start a project conversation with me <ArrowRight size={15} />
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="developer-profile-card">
                <div className="profile-card-header">
                  <div className="profile-avatar-initials">AK</div>
                  <div className="profile-avail-pill">
                    <span className="online-dot pulsing" />
                    <span>AVAILABLE FOR HIRE</span>
                  </div>
                </div>

                <div className="profile-card-title">
                  <h3>ANIKET KUMAR</h3>
                  <span>Full Stack Developer · MCA Graduate</span>
                </div>

                <div className="profile-card-stack">
                  <small>Primary Toolkit</small>
                  <div className="tags">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>

                <div className="profile-specs-table">
                  <div className="profile-spec-row">
                    <span>Role Focus</span>
                    <strong>Full Stack / Backend</strong>
                  </div>
                  <div className="profile-spec-row">
                    <span>Degree</span>
                    <strong>MCA (Master of Computer Apps)</strong>
                  </div>
                  <div className="profile-spec-row">
                    <span>Status</span>
                    <strong style={{ color: 'var(--lime)' }}>Open to Work & Freelance</strong>
                  </div>
                  <div className="profile-spec-row">
                    <span>GitHub</span>
                    <strong>github.com/Aniketpk</strong>
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <a href="#contact" className="button button-primary" style={{ width: '100%' }}>
                    Let's Work Together <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================== 5. SKILLS SECTION ==================== */}
        <section className="skills-section section-pad" id="skills">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <span className="kicker">
                    <i /> THE TOOLKIT
                  </span>
                  <h2>
                    Tools for the<br />
                    <em>whole stack.</em>
                  </h2>
                </div>
                <p className="section-intro">
                  A working technical toolkit built through hands-on project engineering and continuous learning.
                </p>
              </div>
            </Reveal>

            <div className="skills-grid">
              {skills.map((group, i) => (
                <Reveal key={group.title} delay={i * 0.05}>
                  <div className="skill-group">
                    <span className="skill-count">0{i + 1} / CATEGORY</span>
                    <h3>{group.title}</h3>
                    <div className="tags">
                      {group.items.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 6. BUILT & DEPLOYED SHOWCASE ==================== */}
        <section className="showcase-section section-pad" id="deployed">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <span className="kicker">
                    <i /> PROVEN DEPLOYMENT
                  </span>
                  <h2>
                    BUILT. DEPLOYED. <em>LIVE.</em>
                  </h2>
                </div>
                <p className="section-intro">
                  Real applications, not just concepts. Built from scratch and deployed live to production.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="showcase-card">
                <div className="browser-bar">
                  <div className="window-dots">
                    <i className="dot-red" />
                    <i className="dot-yellow" />
                    <i className="dot-green" />
                  </div>
                  <div className="browser-url">
                    <Lock size={12} className="lock-icon" />
                    <span>{ekartProject.liveUrl}</span>
                    <ExternalLink size={12} />
                  </div>
                  <div className="showcase-live-pill">
                    <span className="online-dot pulsing" />
                    <span>LIVE ON VERCEL</span>
                  </div>
                </div>

                <div className="showcase-body">
                  <div className="showcase-preview-area">
                    <div className="ekart-mockup">
                      <div className="ekart-mockup-nav">
                        <div className="ekart-mockup-logo">
                          e<span>Kart</span>
                        </div>
                        <div className="ekart-mockup-search">Search products, brands...</div>
                        <div className="ekart-mockup-cart">Cart (2)</div>
                      </div>
                      <div className="ekart-mockup-banner">
                        <span>ELECTRONICS STOREFRONT · FULL STACK MERN</span>
                        <strong>Curated Tech & Gadgets Platform</strong>
                      </div>
                      <div className="ekart-mockup-grid">
                        <div className="ekart-product-item">
                          <span className="ekart-product-badge">AUDIO</span>
                          <div className="ekart-product-title">Noise Cancelling Pro</div>
                          <div className="ekart-product-price">
                            <span>₹4,999</span>
                            <span className="ekart-add-btn">Add to cart</span>
                          </div>
                        </div>
                        <div className="ekart-product-item">
                          <span className="ekart-product-badge">PERIPHERALS</span>
                          <div className="ekart-product-title">Mechanical Keyboard RGB</div>
                          <div className="ekart-product-price">
                            <span>₹3,499</span>
                            <span className="ekart-add-btn">Add to cart</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-content">
                    <div className="showcase-heading">
                      <span className="eyebrow">{ekartProject.eyebrow}</span>
                      <h3>{ekartProject.title} Platform</h3>
                    </div>
                    <p>{ekartProject.description}</p>
                    <div className="tags">
                      {ekartProject.technologies.map(t => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="showcase-actions">
                      <IconLink href={ekartProject.liveUrl} className="button button-primary">
                        View Live Project <ArrowUpRight size={15} />
                      </IconLink>
                      <IconLink href={ekartProject.githubUrl} className="button button-outline">
                        <Github size={15} /> GitHub Repository
                      </IconLink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================== 7. SELECTED PROJECTS ==================== */}
        <section className="work-section section-pad" id="projects">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <span className="kicker">
                    <i /> SELECTED WORK
                  </span>
                  <h2>
                    Built around<br />
                    real <em>problems.</em>
                  </h2>
                </div>
                <p className="section-intro">
                  Each application solves a practical challenge with clean UI, modular frontend state, and dedicated APIs.
                </p>
              </div>
            </Reveal>

            <div className="project-grid">
              {projects.map((project, i) => (
                <ProjectCard project={project} index={i} key={project.id} />
              ))}
            </div>

            <div className="source-note">
              <Sparkles size={16} />
              <span>
                Verified code repositories and live production deployments are connected directly to each card.
              </span>
            </div>
          </div>
        </section>

        {/* ==================== 8. WHAT I CAN BUILD ==================== */}
        <section className="services-section section-pad" id="services">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <span className="kicker">
                    <i /> SERVICES & CAPABILITIES
                  </span>
                  <h2>
                    What I can<br />
                    <em>build for you.</em>
                  </h2>
                </div>
                <p className="section-intro">
                  Available for freelance development and full-time engineering roles. Bring a rough concept or a defined spec; we will turn it into reality.
                </p>
              </div>
            </Reveal>

            <div className="service-grid">
              {services.map((item, i) => {
                const IconComp = serviceIconMap[item.icon] || Globe
                return (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <motion.article
                      className="service-card"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="service-card-top">
                        <div className="service-icon-wrap">
                          <IconComp size={18} />
                        </div>
                        <span className="service-no">{item.number}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <ArrowUpRight className="service-arrow" size={16} />
                    </motion.article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================== 9. HOW I WORK ==================== */}
        <section className="process-section section-pad" id="how-i-work">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <span className="kicker">
                    <i /> HOW I WORK
                  </span>
                  <h2>
                    Simple. Structured.<br />
                    <em>Reliable delivery.</em>
                  </h2>
                </div>
                <p className="section-intro">
                  A dependable 4-step workflow that keeps communication clear and ensures production-ready code.
                </p>
              </div>
            </Reveal>

            <div className="process-timeline">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="process-step-card">
                    <div className="process-step-header">
                      <div className="process-step-number">{step.number}</div>
                      <span className="process-step-tagline">{step.tagline}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 10. CONTACT SECTION (FIXED EMPTY SPACE) ==================== */}
        <section className="contact-section section-pad" id="contact">
          <div className="contact-bg-glow" />
          <div className="container contact-layout">
            {/* Left Column: Heading, Info & Social Links */}
            <Reveal className="contact-left">
              <span className="kicker">
                <i /> GET IN TOUCH
              </span>
              <h2>
                Have a project<br />
                in mind<span>?</span>
              </h2>
              <p className="contact-subtitle">Let's build something useful together.</p>
              <p className="contact-description">
                I am open to freelance projects, engineering roles, and technical collaborations. Whether you need a full-stack product, an MVP, or backend API work, feel free to reach out.
              </p>

              <div className="contact-availability-list">
                <div className="contact-avail-item">
                  <span className="online-dot pulsing" /> Open to freelance work
                </div>
                <div className="contact-avail-item">
                  <span className="online-dot pulsing" /> Open to developer opportunities
                </div>
              </div>

              <div className="contact-social-buttons">
                <IconLink href={profile.github} className="contact-social-btn">
                  <Github size={15} /> GitHub
                </IconLink>
                <IconLink href={profile.linkedin} className="contact-social-btn">
                  <Linkedin size={15} /> LinkedIn
                </IconLink>
                <IconLink href={`mailto:${profile.email}`} className="contact-social-btn">
                  <Mail size={15} /> Email Direct
                </IconLink>
              </div>

              <div className="contact-meta-badge">
                <span>
                  <CheckCircle2 size={14} color="var(--lime)" /> Response time: Usually within 24h
                </span>
                <span>India · UTC+05:30</span>
              </div>
            </Reveal>

            {/* Right Column: Balanced Contact Form */}
            <Reveal delay={0.1}>
              <div className="contact-form-card">
                <div className="form-head">
                  <span className="kicker">
                    <i /> SEND A PROJECT NOTE
                  </span>
                  <h3>Let's get started.</h3>
                  <p>
                    Fill in your details below. This will pre-fill a direct draft to <strong>{profile.email}</strong>.
                  </p>
                </div>

                <form onSubmit={submitContact} className="contact-form">
                  <div className="form-row">
                    <label>
                      Your name
                      <input name="name" required autoComplete="name" placeholder="Aniket Kumar" />
                    </label>
                    <label>
                      Your email
                      <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
                    </label>
                  </div>

                  <label>
                    What are you looking to build?
                    <select name="type" defaultValue="">
                      <option value="" disabled>Select a project type</option>
                      <option>Business website</option>
                      <option>React application</option>
                      <option>Full stack application</option>
                      <option>REST API / Backend</option>
                      <option>Website bug fix / Polish</option>
                      <option>Something else</option>
                    </select>
                  </label>

                  <label>
                    A little about the project
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Share your goals, project timeline, or questions…"
                    />
                  </label>

                  <button className="button button-primary form-submit-btn" type="submit">
                    Send Message <Send size={14} />
                  </button>

                  {formState === 'unconfigured' && (
                    <p className="form-feedback" role="status">
                      Please check the email configuration in data.js.
                    </p>
                  )}
                  {formState === 'sent' && (
                    <p className="form-feedback" role="status">
                      <Check size={14} /> Your email client has been opened with your message draft!
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ==================== 11. FOOTER ==================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-name">ANIKET KUMAR</span>
              <span className="footer-role">Full Stack Developer · MCA Graduate</span>
              <p className="footer-motto">
                Building useful, responsive, and dependable software for the open web.
              </p>
            </div>

            <div className="footer-links-group">
              <IconLink href={profile.github} className="footer-social-link">
                <Github size={15} /> GitHub
              </IconLink>
              <IconLink href={profile.linkedin} className="footer-social-link">
                <Linkedin size={15} /> LinkedIn
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} className="footer-social-link">
                <Mail size={15} /> {profile.email}
              </IconLink>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Aniket Kumar. All rights reserved.</span>
            <span>MADE FOR THE OPEN WEB ↗</span>
            <a href="#home" className="back-to-top">
              Back to top <ArrowDown style={{ transform: 'rotate(180deg)' }} size={13} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
