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
            <a href="#features">Features</a>
            <a href="#agents">Agentic Firewall</a>
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
              Clawgress is a purpose‑built network control plane for AI agents. It delivers DNS +
              egress enforcement, policy orchestration, and enterprise‑grade observability so
              autonomous systems can run safely in production.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#get-started">Get Clawgress</a>
              <a className="ghost" href="#features">View Features</a>
            </div>
            <div className="hero-meta">
              <span>ISO / OVA / QCOW2</span>
              <span>Policy + API + CLI</span>
              <span>LTS support available</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-title">Policy in motion</div>
            <div className="policy-visual">
              <div className="pulse" />
              <div className="node">Agent</div>
              <div className="node">Clawgress</div>
              <div className="node">Allowed APIs</div>
            </div>
            <div className="policy-json">{`{
  "version": 1,
  "allow": {
    "domains": ["api.openai.com"],
    "ports": [53, 80, 443]
  },
  "labels": {"api.openai.com": "llm-provider"}
}`}</div>
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
        <div className="section-title">Features</div>
        <h2>Clawgress capability set.</h2>
        <div className="grid features">
          <div className="panel">VyOS‑based hardened appliance</div>
          <div className="panel">bind9 RPZ enforcement</div>
          <div className="panel">Policy engine + CLI/API</div>
          <div className="panel">Forced DNS + egress firewall (53/80/443)</div>
          <div className="panel">Logging + deny‑reason mapping</div>
          <div className="panel">ISO / OVA / QCOW2 artifacts</div>
          <div className="panel">Proxy/SNI allowlist mode</div>
          <div className="panel">Per‑host policies</div>
          <div className="panel">Agent telemetry (usage/denies/cache)</div>
          <div className="panel">mTLS between gateways/agents</div>
          <div className="panel">Rate limiting / shaping</div>
          <div className="panel">Policy signing + approval workflow</div>
          <div className="panel">Alerting + dashboards</div>
          <div className="panel">Time‑based policy windows</div>
          <div className="panel">Data exfiltration caps</div>
          <div className="panel">Orchestration control plane (time‑boxed overrides)</div>
          <div className="panel">Agent identity attestation</div>
          <div className="panel">Dynamic tool‑permission broker</div>
          <div className="panel">Policy simulation + drift detection</div>
          <div className="panel">Per‑agent behavioral baselines</div>
          <div className="panel">Capability‑scoped egress policies</div>
          <div className="panel">Task‑bound egress sessions (auto‑expire)</div>
          <div className="panel">Agent fleet policy templates</div>
          <div className="panel">Policy change provenance + explainability</div>
          <div className="panel">Agent network intent verification</div>
          <div className="panel">Cross‑agent coordination guardrails</div>
          <div className="panel">Adaptive egress throttling on anomaly</div>
          <div className="panel">Multi‑model policy enforcement</div>
          <div className="panel">Data classification‑aware egress</div>
          <div className="panel">Human‑in‑the‑loop escalation gates</div>
          <div className="panel">Federated policy sync (multi‑site)</div>
          <div className="panel">Compromise response mode (kill‑switch)</div>
          <div className="panel">API/CLI parity audit + gap workarounds</div>
          <div className="panel">RBAC + scoped admin roles</div>
          <div className="panel">IdP integration (SAML/OIDC)</div>
          <div className="panel">API token lifecycle (expiry/rotation)</div>
          <div className="panel">Centralized logging (syslog + SIEM JSON)</div>
          <div className="panel">Audit report generator</div>
          <div className="panel">Immutable audit log export (WORM/S3/GCS)</div>
          <div className="panel">Alerting + incident hooks (SIEM/SOAR)</div>
          <div className="panel">Per‑agent policy inheritance + overrides</div>
          <div className="panel">Fleet‑aware identity model</div>
          <div className="panel">Agent attestation + registration flow</div>
          <div className="panel">Multi‑agent‑on‑VM mapping</div>
          <div className="panel">HA pair + failover</div>
          <div className="panel">Config backup/restore snapshots</div>
          <div className="panel">SIEM connectors (Splunk/Sentinel/QRadar)</div>
          <div className="panel">Compliance evidence pack (NIST/CIS)</div>
          <div className="panel">Fed/State hardening guide (STIG/CIS)</div>
          <div className="panel">FIPS‑ready crypto profile</div>
          <div className="panel">Zero‑Trust defaults + continuous verification</div>
          <div className="panel">JIT access controls (time‑boxed grants)</div>
          <div className="panel">…and more!</div>
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
        <div className="download">
          <h3>Download artifacts</h3>
          <p>Latest release assets (ISO / OVA / QCOW2):</p>
          <div className="download-links">
            <a href="https://github.com/bufordtjustice2918/clawgress/releases" target="_blank">Release downloads</a>
            <a href="https://github.com/bufordtjustice2918/clawgress" target="_blank">Source repo</a>
          </div>
        </div>
      </section>

      <section id="support" className="section">
        <div className="section-title">Support</div>
        <h2>LTS support built for enterprise + agentic AI teams.</h2>
        <div className="grid">
          <div className="panel">
            <h3>Silver</h3>
            <p>Business‑hours support, security updates, and LTS patches.</p>
          </div>
          <div className="panel">
            <h3>Gold</h3>
            <p>Faster response SLAs, prioritized fixes, upgrade assistance.</p>
          </div>
          <div className="panel">
            <h3>Platinum</h3>
            <p>24/7 response, dedicated escalation, custom hardening.</p>
          </div>
          <div className="panel">
            <h3>Agentic AI Feed</h3>
            <p>Raw data streams of fixes, CVEs, and policy updates for real‑time agent integration.</p>
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
        <div className="socials">
          <a href="https://github.com/bufordtjustice2918/clawgress" target="_blank">GitHub</a>
          <a href="https://discord.gg/clawd" target="_blank">Discord</a>
          <a href="https://twitter.com" target="_blank">X</a>
          <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
