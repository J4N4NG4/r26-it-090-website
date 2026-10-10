// The home page. It reads everything from data/siteData.js,
// so you normally edit that file, not this one.
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import {
  project, researchGapIntro, researchGaps, literatureReview, features, gallery,
  milestones, documentGroups, team, supervisors, references, contact,
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
    <a className="btn btn--small" href={item.file}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}>
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
          <a href="#research-gap" className="btn btn--accent">Learn More</a>
        </div>
      </section>

      {/* ---------- RESEARCH GAP ---------- */}
      <section id="research-gap" className="section">
        <div className="container">
          <SectionTitle title="Research Gap" subtitle={researchGapIntro} />
          <div className="grid grid--4">
            {researchGaps.map((g, i) => (
              <article key={g.title} className="card card--gap">
                <span className="card__num">0{i + 1}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LITERATURE REVIEW ---------- */}
      <section id="literature-review" className="section section--tint">
        <div className="container container--narrow">
          <SectionTitle title="Literature Review" />
          {literatureReview.map((para, i) => <p key={i} className="prose">{para}</p>)}
        </div>
      </section>

      {/* ---------- COMPONENTS / FEATURES ---------- */}
      <section id="components" className="section">
        <div className="container">
          <SectionTitle title="System Components & Features" />
          <div className="grid grid--4">
            {features.map((f) => (
              <article key={f.title} className="feature">
                <div className="feature__icon"><Icon name={f.icon} size={28} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY (hidden when empty) ---------- */}
      {gallery.length > 0 && (
        <section id="gallery" className="section section--tint">
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
          <SectionTitle title="Meet the Team"
            subtitle="Final-year undergraduates of the Department of Information Technology, SLIIT." />
          <div className="grid grid--4">
            {team.map((m) => <Person key={m.id} p={m} sub={m.id} />)}
          </div>
          <div className="grid grid--2 supervisors">
            {supervisors.map((s) => <Person key={s.name} p={s} sub={s.role} />)}
          </div>
        </div>
      </section>

      {/* ---------- REFERENCES ---------- */}
      <section id="references" className="section section--tint">
        <div className="container container--narrow">
          <SectionTitle title="References" />
          <ol className="references">
            {references.map((r, i) => <li key={i}>{r}</li>)}
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
