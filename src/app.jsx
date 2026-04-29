import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';

const services = [
  {
    icon: "🤖",
    image: "/Chartbotai.jpg",
    title: "Custom Chatbots",
    desc: "Deploy intelligent chatbots tailored to your brand voice, trained on your data, live 24/7.",
    color: "#1e40af",
    bg: "#eff6ff",
  },
  {
    icon: "🧠",
    image: "/customGPT.jpg",
    title: "Custom GPTs",
    desc: "Purpose-built AI assistants that know your business inside out — no generic responses.",
    color: "#0d9488",
    bg: "#f0fdfa",
  },
  {
    icon: "☁️",
    image: "/MicroAI.jpg",
    title: "Microsoft AI Foundry",
    desc: "Enterprise-grade AI deployment on Azure infrastructure, secure and scalable for teams of any size.",
    color: "#0369a1",
    bg: "#f0f9ff",
  },
  {
    icon: "✈️",
    image: "/copilot.jpg",
    title: "Co-Pilot Agents",
    desc: "AI that works alongside your team — automating repetitive tasks and amplifying productivity.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: "⚡",
    image: "/AgenticAI.jpg",
    title: "Agentic AI",
    desc: "Fully autonomous agents that research, decide, and act — completing complex multi-step workflows.",
    color: "#4338ca",
    bg: "#eef2ff",
  },
];

const aiSentiments = [
  { emoji: "", label: "Hate AI", desc: "Think it'll destroy jobs and creativity?" },
  { emoji: "", label: "Fear AI", desc: "Worried it's moving too fast to trust?" },
  { emoji: "", label: "Curious", desc: "Not sure what all the fuss is about?" },
  { emoji: "", label: "Like AI", desc: "Use it occasionally and see the value?" },
  { emoji: "", label: "Love AI", desc: "Obsessed and can't imagine life without it?" },
];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.round(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const accomplishFeatures = [
  {
    title: "Intelligent",
    desc: "Advanced AI understanding of your complex task requirements.",
  },
  {
    title: "Automated",
    desc: "Seamlessly connects to your favorite tools and platforms.",
  },
  {
    title: "Secure",
    desc: "Your data is always encrypted and protected by enterprise-grade security.",
  },
];

function AccomplishPage({ onBack, darkMode, setDarkMode }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif", background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh", display: "flex", flexDirection: "column", transition: "background 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        @keyframes accomplishSlideIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes accomplishFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes gentleFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .accomplish-feature-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
        .accomplish-feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(30,64,175,0.15); }
        .accomplish-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .accomplish-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(30,64,175,0.35); }
        .accomplish-outline-btn { transition: all 0.2s ease; }
        .accomplish-outline-btn:hover { background: #1e40af !important; color: white !important; border-color: #1e40af !important; }
        .nav-link { color: var(--text-secondary) !important; }
        .nav-link:hover { color: var(--primary-blue) !important; }
        .dropdown-item { color: var(--text-secondary) !important; }
        .dropdown-item:hover { color: var(--primary-blue) !important; }
      `}</style>

      {/* TOP BAR */}
      <div style={{ background: "var(--footer-bg)", padding: "12px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={onBack}>
          <span style={{ color: "var(--text-muted)", fontSize: 18 }}>←</span>
          <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 500 }}>Back to Home</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "#1e40af" : "#e2e8f0",
              border: "none",
              borderRadius: "20px",
              width: "44px",
              height: "24px",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: "2px",
              display: "flex",
              alignItems: "center"
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div style={{
              width: "20px",
              height: "20px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: darkMode ? "translateX(20px)" : "translateX(0)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {darkMode ? <FiMoon size={12} color="#1e40af" /> : <FiSun size={12} color="#1e40af" />}
            </div>
          </button>
          <span style={{ color: "var(--text-muted)", fontSize: 13, fontWeight: 500 }}>Sonline.ai LLC</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 5% 40px", background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
        {/* BG Decorations */}
        <div style={{ position: "absolute", top: "5%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Logo */}
        <div style={{ animation: "accomplishFadeIn 0.6s ease forwards", marginBottom: 32 }}>
          <img src="/logo.jpg" alt="Sonline Logo" style={{ height: 64, width: "auto", borderRadius: 12, objectFit: "contain", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }} />
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--text-primary)", textAlign: "center", lineHeight: 1.2, animation: "accomplishSlideIn 0.7s ease forwards", marginBottom: 16 }}>
          Accomplish more with <span style={{ color: "#1079cfd5" }}>Sonline</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 17, color: "var(--text-secondary)", textAlign: "center", maxWidth: 600, lineHeight: 1.8, animation: "accomplishSlideIn 0.7s ease 0.15s forwards", opacity: 0, animationFillMode: "forwards", marginBottom: 40 }}>
          Accomplish more with less effort using Sonline.ai. Streamline your workflows, automate repetitive tasks, and unlock smarter decision-making with powerful AI-driven solutions designed to boost productivity and efficiency.
        </p>

        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", animation: "accomplishSlideIn 0.7s ease 0.3s forwards", opacity: 0, animationFillMode: "forwards", marginBottom: 20 }}>
          <button
            className="accomplish-btn"
            style={{ background: "linear-gradient(135deg, #1e40af, #1e3a8a)", color: "white", border: "none", padding: "14px 36px", borderRadius: 50, fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif", display: "flex", alignItems: "center", gap: 8 }}
          >
            Get Started <span style={{ fontSize: 18 }}>→</span>
          </button>
          <button
            className="accomplish-outline-btn"
            style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-color)", padding: "14px 28px", borderRadius: 50, fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}
          >
            Try Free
          </button>
        </div>



        {/* FEATURE CARDS */}
        <div style={{ display: "flex", gap: 24, flexWrap: "nowrap", justifyContent: "center", maxWidth: 900, width: "100%", animation: "accomplishSlideIn 0.7s ease 0.5s forwards", opacity: 0, animationFillMode: "forwards" }}>
          {accomplishFeatures.map((f, i) => (
            <div
              key={i}
              className="accomplish-feature-card"
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                flex: 1,
                background: "var(--card-bg)",
                borderRadius: 20,
                padding: "32px 28px",
                textAlign: "center",
                border: hoveredFeature === i ? "2px solid #1e40af" : "2px solid var(--border-color)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", padding: "20px 5%", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>© 2026 Sonline.ai LLC. All rights reserved.</p>
      </div>
    </div>
  );
}

export default function SonlineAI() {
  const [activeSentiment, setActiveSentiment] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHero, setHoveredHero] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (currentPage === "accomplish") {
    return <AccomplishPage onBack={() => setCurrentPage("landing")} darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  return (
    <div style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif", background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh", overflowX: "hidden", transition: "background 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity:1; } 100% { transform: scale(1.4); opacity:0; } }
        @keyframes slideIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeRight { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        @keyframes orbit { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        .hero-text { animation: slideIn 0.8s ease forwards; }
        .hero-sub { animation: slideIn 0.8s ease 0.2s forwards; opacity:0; }
        .hero-cta { animation: slideIn 0.8s ease 0.4s forwards; opacity:0; }
        .service-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor:pointer; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(30,64,175,0.1); }
        .sentiment-btn { transition: all 0.2s ease; cursor:pointer; border:none; }
        .sentiment-btn:hover { transform: scale(1.06); }
        .sentiment-btn.active { transform: scale(1.1); }
        .nav-link { text-decoration:none; color:#475569; font-size:14px; font-weight:500; transition: color 0.2s; }
        .nav-link:hover { color:#1e40af; }
        .cta-btn { background: linear-gradient(135deg, #1e40af, #1e3a8a); color:white; border:none; padding:14px 32px; border-radius:50px; font-size:16px; font-weight:600; cursor:pointer; transition: transform 0.2s, box-shadow 0.2s; font-family:'Sora',sans-serif; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(30,64,175,0.4); }
        .cta-btn-outline { background:transparent; color:#1e40af; border:2px solid #1e40af; padding:12px 28px; border-radius:50px; font-size:15px; font-weight:600; cursor:pointer; transition: all 0.2s; font-family:'Sora',sans-serif; }
        .cta-btn-outline:hover { background:#1e40af; color:white; }
        .orbit-dot { position:absolute; width:10px; height:10px; border-radius:50%; animation: orbit linear infinite; }
        @media (max-width:768px) {
          .hero-grid { flex-direction:column !important; }
          .services-grid { grid-template-columns:1fr !important; }
          .stats-row { flex-direction:column; gap:20px !important; }
          .sentiment-container { flex-direction:column !important; text-align:center !important; gap:30px !important; }
          .sentiment-row { justifyContent:center !important; }
          .sentiment-btn { width: 100% !important; }
          .footer-cols { flex-direction:column !important; }
        }
        .dropdown-container { position:relative; }
        .dropdown-menu { 
          position:absolute; top:110%; left:0; width:180px; 
          background:white; border-radius:12px; padding:8px; 
          box-shadow: 0 10px 40px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.04);
          opacity: 0; transform: translateY(10px); pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1001; 
        }
        .dropdown-menu.visible { opacity:1; transform:translateY(0); pointer-events:all; }
        .dropdown-item { 
          display:block; padding:10px 14px; color:#475569; text-decoration:none; 
          font-size:14px; font-weight:500; border-radius:8px; transition: all 0.2s;
        }
        .dropdown-item:hover { background:#f1f5f9; color:#1e40af; transform:translateX(4px); }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--nav-bg)", backdropFilter: "blur(12px)", transition: "all 0.3s ease", boxShadow: scrolled ? "0 2px 20px var(--border-color)" : "none", borderBottom: `1px solid ${scrolled ? 'var(--border-color)' : 'transparent'}` }}>
        <img src="/logo.jpg" alt="Logo" style={{ height: 50, width: "auto", borderRadius: "6px", objectFit: "contain", filter: darkMode ? "brightness(0.9) contrast(1.1)" : "none" }} />
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-links">
            {["AI Services", "About", "Process", "Contact"].map(n => (
              n === "AI Services" ? (
                <div key={n} className="dropdown-container">
                  <a href="#" className="nav-link"
                    onClick={(e) => { e.preventDefault(); setServicesDropdownOpen(!servicesDropdownOpen); }}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: "var(--text-secondary)" }}
                  >
                    {n} <span style={{ fontSize: 9, transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'inline-block' }}>▼</span>
                  </a>
                  <div className={`dropdown-menu ${servicesDropdownOpen ? "visible" : ""}`} style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}>
                    {["SupportIQ", "Policy AI", "Voter AI"].map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="dropdown-item" style={{ color: "var(--text-secondary)" }}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={n} href={`#${n.toLowerCase()}`} className="nav-link" style={{ color: "var(--text-secondary)" }}>{n}</a>
              )
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "#1e40af" : "#e2e8f0",
              border: "none",
              borderRadius: "20px",
              width: "48px",
              height: "26px",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: "3px",
              display: "flex",
              alignItems: "center"
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div style={{
              width: "20px",
              height: "20px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: darkMode ? "translateX(22px)" : "translateX(0)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {darkMode ? <FiMoon size={12} color="#1e40af" /> : <FiSun size={12} color="#1e40af" />}
            </div>
          </button>

          <button className="cta-btn" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => setCurrentPage("accomplish")}>Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden", background: "var(--bg-primary)" }}>
        {/* BG decoration */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,64,175,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "2%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", maxWidth: 1200, margin: "0 auto", gap: 60 }}>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#dbeafe", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1e40af", animation: "pulse-ring 1.5s ease-out infinite" }} />
              <span style={{ fontSize: 13, color: "#1e40af", fontWeight: 600 }}>Smart AI. Deployed Your Way.</span>
            </div>
            <h1 className="hero-text" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-1px", color: "var(--text-primary)", marginBottom: 20 }}>
              AI that works for your business.
            </h1>
            <p className="hero-sub" style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, margin: "24px 0 36px", fontWeight: 400 }}>
              Whether you <strong>hate AI</strong>, <strong>fear it</strong>, or <strong>absolutely love it</strong> — we meet you where you are and deploy AI that actually makes sense for you.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#services"><button className="cta-btn" style={{ fontSize: 16 }}>Explore Our Services</button></a>
              <a href="#contact"><button className="cta-btn-outline">Book a Free Call</button></a>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="/home.jpg"
              alt="AI Technology"
              onMouseEnter={() => setHoveredHero(true)}
              onMouseLeave={() => setHoveredHero(false)}
              style={{
                width: "100%",
                maxWidth: 540,
                borderRadius: 20,
                objectFit: "cover",
                border: hoveredHero ? "3px solid #1e40af" : "3px solid transparent",
                boxShadow: hoveredHero
                  ? "0 24px 64px rgba(30,64,175,0.3), 0 0 0 4px rgba(30,64,175,0.1)"
                  : "0 20px 60px rgba(30,64,175,0.15)",
                transform: hoveredHero ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </section>

      {/* AI SENTIMENT SECTION */}
      <section id="about" style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}>
        <div className="sentiment-container" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 60, textAlign: "left" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: 1.2 }}>
              Where do <em style={{ fontStyle: "normal", color: "#1a6fd4" }}>you</em> stand with AI?
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", marginTop: 20, lineHeight: 1.7 }}>
              No judgment. We work with every type — and we've got a solution for all of you.
            </p>
          </div>
          <div style={{ flex: 1.4 }}>
            <div className="sentiment-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "flex-start" }}>
              {aiSentiments.map((s, i) => (
                <button key={i} className={`sentiment-btn${activeSentiment === i ? " active" : ""}`} onClick={() => setActiveSentiment(activeSentiment === i ? null : i)}
                  style={{ background: activeSentiment === i ? "rgba(30,64,175,0.1)" : "var(--bg-primary)", border: activeSentiment === i ? "2px solid #1a6fd4" : "2px solid var(--border-color)", borderRadius: 16, padding: "18px 20px", textAlign: "center", width: "calc(33.33% - 8px)", minWidth: 140, boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{s.label}</div>
                </button>
              ))}
            </div>
            {activeSentiment !== null && (
              <div style={{ marginTop: 20, padding: "24px", background: "var(--bg-primary)", borderRadius: 20, width: "100%", animation: "slideIn 0.3s ease", border: "1px solid var(--border-color)" }}>
                <p style={{ fontSize: 16, color: "var(--primary-blue)", fontWeight: 600 }}>{aiSentiments[activeSentiment].desc}</p>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 10, display: "flex", alignItems: "center", gap: 4 }}>
                  We have the right AI solution for you. <span style={{ color: "#1a6fd4", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Let's talk →</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "90px 5%", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1a6fd4", letterSpacing: 2, textTransform: "uppercase" }}>What We Build</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--text-primary)", marginTop: 10 }}>AI Services, Built for Results</h2>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", marginTop: 14, maxWidth: 560, margin: "14px auto 0" }}>From simple chatbots to fully autonomous agents — we deploy AI that fits your exact needs and budget.</p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" onMouseEnter={() => setHoveredService(i)} onMouseLeave={() => setHoveredService(null)}
                style={{ background: "var(--card-bg)", borderRadius: 20, padding: s.image ? "0" : "32px 28px", border: `2px solid ${hoveredService === i ? s.color : "var(--border-color)"}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>
                {s.image ? (
                  <>
                    <img src={s.image} alt={s.title} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "18px 18px 0 0" }} />
                    <div style={{ padding: "24px 28px 32px" }}>
                      <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>{s.title}</h3>
                      <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>{s.desc}</p>
                      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: s.color, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                        Learn more <span>→</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: darkMode ? "rgba(255,255,255,0.05)" : s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>{s.icon}</div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>{s.desc}</p>
                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: s.color, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                      Learn more <span>→</span>
                    </div>
                  </>
                )}
                {hoveredService === i && <div style={{ position: "absolute", top: 0, right: 0, width: 4, height: "100%", background: s.color, borderRadius: "0 20px 20px 0" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "90px 5%", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#0f6e56", letterSpacing: 2, textTransform: "uppercase" }}>How It Works</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--text-primary)", marginTop: 10, marginBottom: 50 }}>Simple. Fast. Deployed.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10, position: "relative" }}>
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your business, goals, and AI comfort level.", color: "#1a6fd4" },
              { step: "02", title: "Solution Design", desc: "We map the right AI services to your exact use case.", color: "#0f6e56" },
              { step: "03", title: "Build & Test", desc: "Rapid development with your feedback at every step.", color: "#854f0b" },
              { step: "04", title: "Deploy & Support", desc: "Go live with ongoing monitoring and continuous improvement.", color: "#534ab7" },
            ].map((p, i) => (
              <div key={i} style={{ background: "var(--bg-primary)", borderRadius: 20, padding: "32px 24px", textAlign: "left", position: "relative", border: "1px solid var(--border-color)" }}>

                <div style={{ width: 36, height: 36, borderRadius: 10, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{p.step}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section style={{ padding: "70px 5%", background: "linear-gradient(135deg,#0d1b40,#1a3a6d)", color: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 30, textAlign: "center" }}>
          {[["50", "+", "Projects Delivered"], ["24", "/7", "AI Uptime"], ["5", "x", "Avg ROI"], ["48", "hr", "Avg Deploy Time"]].map(([n, s, l], i) => (
            <div key={i}>
              <div style={{ fontSize: 52, fontWeight: 800, color: "white", lineHeight: 1 }}>
                <AnimatedCounter target={parseInt(n)} /><span style={{ color: "#48b8e8" }}>{s}</span>
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 6, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "100px 5%", background: "var(--bg-primary)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, textAlign: "left", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--text-primary)", lineHeight: 1.2 }}>Ready to get <span style={{ color: "#1a6fd4" }}>sonline</span> up and running?</h2>
            <p style={{ fontSize: 18, color: "var(--text-secondary)", margin: "20px 0 0", lineHeight: 1.7 }}>
              Let's list your basic AI services and start deploying smart AI that works your way — no jargon, no fluff, just results.
            </p>
            <p style={{ fontSize: 13, color: "#aab0c0", marginTop: 24 }}>No commitment required · Setup in 48 hours · Cancel anytime</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 240, width: "100%", maxWidth: 300 }}>
            <button className="cta-btn" style={{ fontSize: 17, padding: "16px 40px", width: "100%" }} onClick={() => setCurrentPage("accomplish")}>Start for Free</button>
            <a href="#contact" style={{ textDecoration: "none", width: "100%" }}><button className="cta-btn-outline" style={{ fontSize: 16, width: "100%", padding: "16px 40px" }}>Schedule Demo</button></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--footer-bg)", color: "var(--text-muted)", padding: "50px 5% 30px" }}>
        <div className="footer-cols" style={{ display: "flex", justifyContent: "space-between", gap: 40, maxWidth: 1200, margin: "0 auto", paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 280 }}>
            <img src="/logo.jpg" alt="Logo" style={{ height: 50, width: "auto", borderRadius: "8px", objectFit: "contain", marginBottom: 14, filter: darkMode ? "brightness(0.9) contrast(1.1)" : "none" }} />
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>Smart AI. Deployed Your Way. We make AI accessible for every business, regardless of where you stand on the AI spectrum.</p>
          </div>
          {[
            { title: "Services", links: ["Custom Chatbots", "Custom GPTs", "Microsoft AI Foundry", "Co-Pilot Agents", "Agentic AI"] },
            { title: "Company", links: ["About Us", "Our Process", "Case Studies", "Blog", "Contact"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>{col.title}</h4>
              {col.links.map(l => (
                <div key={l} style={{ fontSize: 14, marginBottom: 10, cursor: "pointer", transition: "color 0.2s", color: "var(--text-muted)" }}>
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "24px auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>© 2026 sonline.ai LLC · All rights reserved</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Smart AI. Deployed Your Way. 🤖</span>
        </div>
      </footer>
    </div>
  );
}
