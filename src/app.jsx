import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: "🤖",
    title: "Custom Chatbots",
    desc: "Deploy intelligent chatbots tailored to your brand voice, trained on your data, live 24/7.",
    color: "#1e40af",
    bg: "#eff6ff",
  },
  {
    icon: "🧠",
    title: "Custom GPTs",
    desc: "Purpose-built AI assistants that know your business inside out — no generic responses.",
    color: "#0d9488",
    bg: "#f0fdfa",
  },
  {
    icon: "☁️",
    title: "Microsoft AI Foundry",
    desc: "Enterprise-grade AI deployment on Azure infrastructure, secure and scalable for teams of any size.",
    color: "#0369a1",
    bg: "#f0f9ff",
  },
  {
    icon: "✈️",
    title: "Co-Pilot Agents",
    desc: "AI that works alongside your team — automating repetitive tasks and amplifying productivity.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: "⚡",
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

export default function SonlineAI() {
  const [activeSentiment, setActiveSentiment] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif", background: "#f8fafc", color: "#0f172a", minHeight: "100vh", overflowX: "hidden" }}>
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
          .sentiment-row { flex-wrap:wrap !important; }
          .footer-cols { flex-direction:column !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 5%", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.3s ease", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}>
        <img src="/logo.jpg" alt="Logo" style={{ height: 130, width: "auto", borderRadius: "6px", objectFit: "contain" }} />
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-links">
          {["Services", "About", "Process", "Contact"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
          ))}
        </div>
        <button className="cta-btn" style={{ padding: "10px 22px", fontSize: 14 }}>Get Started</button>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#f0f7ff 0%,#e0f2fe 50%,#f0f9ff 100%)" }}>
        {/* BG decoration */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(30,64,175,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "2%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%", maxWidth: 1200, margin: "0 auto", gap: 40 }}>
          <div style={{ maxWidth: 800 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#dbeafe", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1e40af", animation: "pulse-ring 1.5s ease-out infinite" }} />
              <span style={{ fontSize: 13, color: "#1e40af", fontWeight: 600 }}>Smart AI. Deployed Your Way.</span>
            </div>
            <h1 className="hero-text" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-1px", color: "#1e293b", marginBottom: 20 }}>
              AI that works for your business.
            </h1>
            <p className="hero-sub" style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, margin: "24px 0 36px", fontWeight: 400 }}>
              Whether you <strong>hate AI</strong>, <strong>fear it</strong>, or <strong>absolutely love it</strong> — we meet you where you are and deploy AI that actually makes sense for you.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="#services"><button className="cta-btn" style={{ fontSize: 16 }}>Explore Our Services</button></a>
              <a href="#contact"><button className="cta-btn-outline">Book a Free Call</button></a>
            </div>

          </div>


        </div>
      </section>

      {/* AI SENTIMENT SECTION */}
      <section id="about" style={{ padding: "80px 5%", background: "white" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0d1b40" }}>
            Where do <em style={{ fontStyle: "normal", color: "#1a6fd4" }}>you</em> stand with AI?
          </h2>
          <p style={{ fontSize: 17, color: "#5a6585", margin: "16px 0 48px", lineHeight: 1.7 }}>
            No judgment. We work with every type — and we've got a solution for all of you.
          </p>
          <div className="sentiment-row" style={{ display: "flex", gap: 20, justifyContent: "center" }}>
            {aiSentiments.map((s, i) => (
              <button key={i} className={`sentiment-btn${activeSentiment === i ? " active" : ""}`} onClick={() => setActiveSentiment(activeSentiment === i ? null : i)}
                style={{ background: activeSentiment === i ? "#e6f1fb" : "#f8fafd", border: activeSentiment === i ? "2px solid #1a6fd4" : "2px solid transparent", borderRadius: 20, padding: "20px 22px", textAlign: "center", width: 150 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{s.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0d1b40" }}>{s.label}</div>
              </button>
            ))}
          </div>
          {activeSentiment !== null && (
            <div style={{ marginTop: 28, padding: "20px 28px", background: "#e6f1fb", borderRadius: 16, display: "inline-block", animation: "slideIn 0.3s ease" }}>
              <p style={{ fontSize: 16, color: "#1a4f96", fontWeight: 500 }}>{aiSentiments[activeSentiment].desc}</p>
              <p style={{ fontSize: 14, color: "#5a6585", marginTop: 8 }}>We have the right AI solution for you. <span style={{ color: "#1a6fd4", fontWeight: 600, cursor: "pointer" }}>Let's talk →</span></p>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "90px 5%", background: "#f8fafd" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1a6fd4", letterSpacing: 2, textTransform: "uppercase" }}>What We Build</span>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0d1b40", marginTop: 10 }}>AI Services, Built for Results</h2>
            <p style={{ fontSize: 17, color: "#5a6585", marginTop: 14, maxWidth: 560, margin: "14px auto 0" }}>From simple chatbots to fully autonomous agents — we deploy AI that fits your exact needs and budget.</p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" onMouseEnter={() => setHoveredService(i)} onMouseLeave={() => setHoveredService(null)}
                style={{ background: "white", borderRadius: 20, padding: "32px 28px", border: `2px solid ${hoveredService === i ? s.color : "transparent"}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", position: "relative", overflow: "hidden" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0d1b40", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "#5a6585", lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: s.color, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  Learn more <span>→</span>
                </div>
                {hoveredService === i && <div style={{ position: "absolute", top: 0, right: 0, width: 4, height: "100%", background: s.color, borderRadius: "0 20px 20px 0" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "90px 5%", background: "white" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#0f6e56", letterSpacing: 2, textTransform: "uppercase" }}>How It Works</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0d1b40", marginTop: 10, marginBottom: 50 }}>Simple. Fast. Deployed.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10, position: "relative" }}>
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your business, goals, and AI comfort level.", color: "#1a6fd4" },
              { step: "02", title: "Solution Design", desc: "We map the right AI services to your exact use case.", color: "#0f6e56" },
              { step: "03", title: "Build & Test", desc: "Rapid development with your feedback at every step.", color: "#854f0b" },
              { step: "04", title: "Deploy & Support", desc: "Go live with ongoing monitoring and continuous improvement.", color: "#534ab7" },
            ].map((p, i) => (
              <div key={i} style={{ background: "#f8fafd", borderRadius: 20, padding: "32px 24px", textAlign: "left", position: "relative" }}>

                <div style={{ width: 36, height: 36, borderRadius: 10, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{p.step}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0d1b40", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#5a6585", lineHeight: 1.7 }}>{p.desc}</p>
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
      <section id="contact" style={{ padding: "100px 5%", background: "#f8fafd", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-1.5px", color: "#0d1b40", lineHeight: 1.2 }}>Ready to get <span style={{ color: "#1a6fd4" }}>sonline.ai</span> up and running?</h2>
          <p style={{ fontSize: 18, color: "#5a6585", margin: "20px 0 40px", lineHeight: 1.7 }}>
            Let's list your basic AI services and start deploying smart AI that works your way — no jargon, no fluff, just results.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact"><button className="cta-btn" style={{ fontSize: 17, padding: "16px 40px" }}>Start for Free</button></a>
            <a href="#contact"><button className="cta-btn-outline" style={{ fontSize: 16 }}>Schedule Demo</button></a>
          </div>
          <p style={{ fontSize: 13, color: "#aab0c0", marginTop: 24 }}>No commitment required · Setup in 48 hours · Cancel anytime</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "rgba(255,255,255,0.7)", padding: "50px 5% 30px" }}>
        <div className="footer-cols" style={{ display: "flex", justifyContent: "space-between", gap: 40, maxWidth: 1200, margin: "0 auto", paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 280 }}>
            <img src="/logo.jpg" alt="Logo" style={{ height: 130, width: "auto", borderRadius: "8px", objectFit: "contain", marginBottom: 14 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>Smart AI. Deployed Your Way. We make AI accessible for every business, regardless of where you stand on the AI spectrum.</p>
          </div>
          {[
            { title: "Services", links: ["Custom Chatbots", "Custom GPTs", "Microsoft AI Foundry", "Co-Pilot Agents", "Agentic AI"] },
            { title: "Company", links: ["About Us", "Our Process", "Case Studies", "Blog", "Contact"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>{col.title}</h4>
              {col.links.map(l => <div key={l} style={{ fontSize: 14, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}>{l}</div>)}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "24px auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13 }}>© 2026 sonline.ai · All rights reserved</span>
          <span style={{ fontSize: 13 }}>Smart AI. Deployed Your Way. 🤖</span>
        </div>
      </footer>
    </div>
  );
}
