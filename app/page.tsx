export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <img src="/logo.svg" alt="Clawgress" />
            <span>Clawgress</span>
          </div>
          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#features">MVPv1</a>
            <a href="#agents">Agentic Firewalling</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="cta" href="#get-started">Get Started</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise open source</p>
            <h1>Agentic firewalling that keeps autonomy safe.</h1>
            <p className="subhead">
              Clawgress is a purpose‑built network control plane for AI agents. It enforces DNS
              egress, policy‑driven allowlists, and observability so autonomous systems can run
              safely in production.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#get-started">Launch MVPv1</a>
              <a className="ghost" href="#features">View MVPv1 Features</a>
            </div>
            <div className="hero-meta">
              <span>ISO / OVA / QCOW2</span>
              <span>VyOS‑based appliance</span>
              <span>Policy‑first DNS egress</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-title">Clawgress Policy</div>
            <pre>{`{
  "version": 1,
  "allow": {
    "domains": ["api.openai.com"],
    "ports": [53, 80, 443]
  },
  "labels": {"api.openai.com": "llm-provider"}
}`}</pre>
          </div>
        </div>
      </header>

      <section id="product" className="section">
        <div className="section-title">Product</div>
        <h2>Built for agentic systems, not retrofitted.</h2>
        <p>
          Traditional firewalls assume humans at the keyboard. Clawgress assumes autonomous agents.
          It provides deterministic egress policy, DNS‑level enforcement, and a clean control plane
          for AI runtime safety.
        </p>
        <div className="grid">
          <div className="panel">
            <h3>Policy‑first egress</h3>
            <p>Allowlist domains, ports, and IPs with a single JSON policy.</p>
          </div>
          <div className="panel">
            <h3>DNS enforcement</h3>
            <p>RPZ‑backed DNS control with explicit deny reason logging.</p>
          </div>
          <div className="panel">
            <h3>Observability</h3>
            <p>Visibility into denies, labels, and applied policy state.</p>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-title">MVPv1 Features</div>
        <h2>What ships in MVPv1.</h2>
        <div className="grid features">
          <div className="panel">VyOS‑based hardened appliance</div>
          <div className="panel">Bind9 RPZ enforcement</div>
          <div className="panel">Forced DNS + egress firewall (53/80/443)</div>
          <div className="panel">Policy engine + CLI/API</div>
          <div className="panel">Logging + deny reason mapping</div>
          <div className="panel">ISO / OVA / QCOW2 artifacts</div>
        </div>
      </section>

      <section id="agents" className="section">
        <div className="section-title">Agentic Firewalling</div>
        <h2>Why agents need a firewall.</h2>
        <p>
          Agents can call tools, reach APIs, and explore the web. That power requires containment.
          Clawgress provides the missing layer of control: deterministic, auditable egress built for
          autonomous systems.
        </p>
        <div className="grid">
          <div className="panel">
            <h3>Least‑privilege by default</h3>
            <p>Ship with a strict baseline policy and expand only when required.</p>
          </div>
          <div className="panel">
            <h3>Explainable enforcement</h3>
            <p>Each deny is labeled so operators can reason about intent and risk.</p>
          </div>
          <div className="panel">
            <h3>Ops‑friendly</h3>
            <p>Standard Linux tooling with predictable network behavior.</p>
          </div>
        </div>
      </section>

      <section id="get-started" className="section">
        <div className="section-title">Get Started</div>
        <h2>Deploy in minutes.</h2>
        <div className="steps">
          <div>
            <span>1</span>
            <p>Download the ISO/OVA/QCOW2 image.</p>
          </div>
          <div>
            <span>2</span>
            <p>Boot and apply a minimal policy.</p>
          </div>
          <div>
            <span>3</span>
            <p>Route agent egress through Clawgress.</p>
          </div>
        </div>
      </section>

      <section id="support" className="section">
        <div className="section-title">Support</div>
        <h2>We ship OSS with enterprise expectations.</h2>
        <div className="grid">
          <div className="panel">
            <h3>Documentation</h3>
            <p>Quickstart, policy schema, and troubleshooting guides.</p>
          </div>
          <div className="panel">
            <h3>Community</h3>
            <p>Public roadmap, issues, and transparent progress updates.</p>
          </div>
          <div className="panel">
            <h3>Commercial support</h3>
            <p>Need SLAs or custom policy work? We can help.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-title">Contact</div>
        <h2>Let’s talk.</h2>
        <div className="contact">
          <div>
            <p>General inquiries:</p>
            <a href="mailto:hello@clawgress.io">hello@clawgress.io</a>
          </div>
          <div>
            <p>Security & responsible disclosure:</p>
            <a href="mailto:security@clawgress.io">security@clawgress.io</a>
          </div>
          <div>
            <p>Press:</p>
            <a href="mailto:press@clawgress.io">press@clawgress.io</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 Clawgress. Built for agentic safety.</div>
        <div>clawgress.io</div>
      </footer>
    </main>
  );
}
