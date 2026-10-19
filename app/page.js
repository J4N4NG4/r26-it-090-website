// The home page. It reads everything from data/siteData.js,
// so you normally edit that file, not this one.
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  project,
  researchProblem,
  researchObjectives,
  methodology,
  technologies,
  literatureReview,
  features,
  gallery,
  milestones,
  documentGroups,
  team,
  supervisors,
  references,
  contact,
} from "@/data/siteData";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span className="section-title__bar" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function DownloadButton({ item }) {
  if (!item.file) {
    return <span className="btn btn--small btn--disabled">Coming soon</span>;
  }
  const external = item.file.startsWith("http");
  return (
    <a
      className="btn btn--small"
      href={item.file}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
    >
      Download <Icon name="download" size={16} />
    </a>
  );
}

function Person({ p, sub }) {
  return (
    <div className="person">
      <img src={p.photo} alt={p.name} className="person__photo" />
      <h3>{p.name}</h3>
      <p className="person__id">{sub}</p>
      {p.id && <p className="person__role">{p.role}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section id="top" className="hero" style={{ backgroundImage: `url(${project.coverImage})` }}>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__eyebrow">{project.groupId} · {project.university}</p>
          <h1>{project.shortName}</h1>
          <p className="hero__title">{project.title}</p>
          <p className="hero__tagline">{project.tagline}</p>
          <a href="#problem" className="btn btn--accent">Explore Research</a>
        </div>
      </section>

      {/* ---------- RESEARCH PROBLEM & GAP ---------- */}
      <section id="problem" className="section">
        <div className="container">
          <SectionTitle
            title="Research Problem & Gap"
            subtitle="Addressing key market failures in Sri Lanka's informal household maintenance sector."
          />
          <p className="problem-intro">{researchProblem.intro}</p>

          <div className="grid--3">
            {researchProblem.problems.map((p) => (
              <article key={p.title} className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__num">{p.num}</span>
                  <div className="problem-card__icon">
                    <Icon name={p.icon} size={22} />
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>

          <div className="gap-callout">
            <span className="gap-callout__badge">
              <Icon name="target" size={14} /> {researchProblem.gapTitle}
            </span>
            <p>{researchProblem.gapStatement}</p>
          </div>

          <h3 className="component-gaps-title">Research Gaps Addressed by Sub-Components</h3>
          <div className="grid grid--4">
            {researchProblem.componentGaps.map((g, i) => (
              <article key={g.title} className="card card--gap">
                <span className="card__num">0{i + 1}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RESEARCH OBJECTIVES ---------- */}
      <section id="objectives" className="section section--tint">
        <div className="container">
          <SectionTitle
            title="Research Objectives"
            subtitle="A structured artificial intelligence framework spanning intent recognition, hybrid recommendation, sentiment-based trust, and dynamic pricing."
          />

          <div className="objective-main">
            <span className="objective-main__eyebrow">
              <Icon name="target" size={16} /> Main Objective
            </span>
            <h3>Overarching Goal</h3>
            <p>{researchObjectives.main}</p>
          </div>

          <h3 className="component-gaps-title">Specific Objectives</h3>
          <div className="grid--5">
            {researchObjectives.specific.map((obj) => (
              <article key={obj.id} className="objective-card">
                <div className="objective-card__header">
                  <span className="badge badge--accent">{obj.badge}</span>
                  <div className="objective-card__icon">
                    <Icon name={obj.icon} size={20} />
                  </div>
                </div>
                <h3>{obj.title}</h3>
                <p>{obj.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- METHODOLOGY & ARCHITECTURE ---------- */}
      <section id="methodology" className="section">
        <div className="container">
          <SectionTitle
            title="Methodology & Architecture"
            subtitle={methodology.subtitle}
          />

          {/* Pipeline flow */}
          <div className="pipeline">
            {methodology.flowSteps.map((step, idx) => (
              <div key={step.step} style={{ display: "contents" }}>
                <div className="pipeline-step">
                  <div className="pipeline-step__num">{step.step}</div>
                  <div className="pipeline-step__content">
                    <div className="pipeline-step__meta">
                      <span className="badge badge--primary">{step.badge}</span>
                      <span className="pipeline-step__actor">{step.actor}</span>
                    </div>
                    <h3 className="pipeline-step__title">{step.title}</h3>
                    <p className="pipeline-step__desc">{step.desc}</p>
                  </div>
                </div>
                {idx < methodology.flowSteps.length - 1 && (
                  <div className="pipeline-connector">
                    <Icon name="arrowDown" size={22} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Component summaries & metrics */}
          <h3 className="metrics-title">Component Summaries & Performance Metrics</h3>
          <div className="grid grid--4">
            {methodology.componentSummaries.map((s) => (
              <article key={s.code} className="summary-card">
                <div>
                  <div className="summary-card__header">
                    <span className="badge badge--primary">{s.badge}</span>
                    <span className="badge badge--accent">{s.code}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <div className="summary-card__metric-box">
                    <div className="summary-card__metric">{s.metric}</div>
                    <div className="summary-card__metric-label">{s.metricLabel}</div>
                    <div className="summary-card__baseline">{s.baseline}</div>
                  </div>
                  <div className="summary-card__model">{s.model}</div>
                </div>
                <p className="summary-card__desc">{s.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LITERATURE REVIEW ---------- */}
      <section id="literature-review" className="section section--tint">
        <div className="container container--narrow">
          <SectionTitle title="Literature Review" />
          {literatureReview.map((para, i) => (
            <p key={i} className="prose">{para}</p>
          ))}
        </div>
      </section>

      {/* ---------- COMPONENTS / FEATURES ---------- */}
      <section id="components" className="section">
        <div className="container">
          <SectionTitle title="System Components & Features" />
          <div className="grid grid--4">
            {features.map((f) => (
              <article key={f.title} className="feature">
                <div className="feature__icon">
                  <Icon name={f.icon} size={28} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECHNOLOGIES USED ---------- */}
      <section id="technologies" className="section section--tint">
        <div className="container">
          <SectionTitle
            title="Technologies Used"
            subtitle="Full-stack AI tools, microservices, frameworks, and deployment platforms powering the marketplace."
          />
          <div className="tech-grid">
            {technologies.map((t) => (
              <article key={t.area} className="tech-card">
                <h4 className="tech-card__area">
                  <Icon name="cpu" size={18} /> {t.area}
                </h4>
                <div className="tech-tags">
                  {t.tech.map((badge) => (
                    <span key={badge} className="tech-tag">{badge}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY (hidden when empty) ---------- */}
      {gallery.length > 0 && (
        <section id="gallery" className="section">
          <div className="container">
            <SectionTitle title="Field Visit" />
            <Gallery images={gallery} />
          </div>
        </section>
      )}

      {/* ---------- MILESTONES ---------- */}
      <section id="milestones" className="section">
        <div className="container">
          <SectionTitle title="Milestones" subtitle="Timeline in brief" />
          <ol className="timeline">
            {milestones.map((m, i) => (
              <li key={m.title} className={`timeline__item ${i % 2 ? "timeline__item--right" : ""}`}>
                <div className="timeline__card">
                  <span className="timeline__date">{m.date}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- DOCUMENTS ---------- */}
      <section id="documents" className="section section--tint">
        <div className="container">
          <SectionTitle title="Documents" />
          {documentGroups.map((group) => (
            <div key={group.title} className="doc-group">
              <h3 className="doc-group__title">{group.title}</h3>
              <div className="doc-group__grid">
                {group.items.map((item) => (
                  <div key={item.label} className="doc-card">
                    <p>{item.label}</p>
                    <DownloadButton item={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section id="team" className="section">
        <div className="container">
          <SectionTitle
            title="Meet the Team"
            subtitle="Final-year undergraduates of the Department of Information Technology, SLIIT."
          />
          <div className="grid grid--4">
            {team.map((m) => (
              <Person key={m.id} p={m} sub={m.id} />
            ))}
          </div>
          <div className="grid grid--2 supervisors">
            {supervisors.map((s) => (
              <Person key={s.name} p={s} sub={s.role} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REFERENCES ---------- */}
      <section id="references" className="section section--tint">
        <div className="container container--narrow">
          <SectionTitle title="References" />
          <ol className="references">
            {references.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="section section--dark">
        <div className="container contact">
          <div>
            <h2>Get in Touch</h2>
            <p>Send us a message and we&apos;ll get back to you as soon as possible.</p>
            <ContactForm email={contact.email} />
          </div>
          <aside className="contact__details">
            <h3>Contact Us</h3>
            <p><Icon name="pin" size={18} /> {contact.address}</p>
            {contact.phone && <p><Icon name="call" size={18} /> {contact.phone}</p>}
            {contact.email && <p><Icon name="mail" size={18} /> {contact.email}</p>}
          </aside>
        </div>
      </section>

      <footer className="footer">
        © {project.year} {project.groupId} · {project.department}, {project.university}
      </footer>
    </>
  );
}
