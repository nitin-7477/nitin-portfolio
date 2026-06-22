import { useEffect, useState, type FormEvent } from "react";
import { profile } from "./data/profile";
import uiShowcaseImage from "./assets/ui-showcase.png?url";
import { CursorFollower } from "./components/CursorFollower";
import { MobileDevHero } from "./components/MobileDevHero";
import { ProjectPreview } from "./components/ProjectPreview";
import { useInView } from "./hooks/useInView";
import "./App.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">
            Nitin<span>.</span>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a href={profile.resumeUrl} className="nav-cta" download>
            Resume ↓
          </a>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href={profile.resumeUrl} download onClick={closeMenu}>
          Download Resume
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">
              Hi, my name is <strong>{profile.name}</strong>
            </p>
            <h1>
              I'm a <span className="gradient">{profile.title}</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="btn-primary">
                View My Work →
              </a>
              <a href="#contact" className="btn-secondary">
                Message Me
              </a>
            </div>
            <div className="hero-social">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                Email
              </a>
            </div>
          </div>

          <div className="hero-profile">
            <div className="profile-photo-wrap glass-card">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="profile-photo"
                width={400}
                height={360}
              />
              {profile.openToWork && (
                <span className="open-to-work">Open to Work</span>
              )}
            </div>
            <aside className="profile-card-body glass-card">
              <h2 className="profile-name">{profile.name}</h2>
              <p className="profile-handle">@{profile.handle}</p>
              <p className="profile-location">
                <span className="location-icon" aria-hidden="true">
                  🇮🇳
                </span>
                {profile.country}
              </p>
              <p className="profile-role">{profile.title}</p>
              <p className="profile-exp">
                <strong>{profile.yearsOfExperience}</strong> years experience
              </p>
              <div className="experience-includes">
                <span className="experience-includes-label">
                  Experience includes
                </span>
                <div className="experience-chips">
                  {profile.experienceIncludes.map((item) => (
                    <span key={item} className="experience-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a href="#contact" className="btn-primary btn-full profile-cta">
                Message
              </a>
            </aside>
          </div>
        </div>

        <div className="hero-stats">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="stat-item glass-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { bento } = profile;

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="bento-headline">{bento.headline}</h2>

        <div className="bento-grid">
          <article className="bento-card bento-featured glass-card">
            <div className="bento-featured-image">
              <MobileDevHero />
            </div>
            <p className="bento-featured-text">
              <strong>{bento.featured.title}</strong> {bento.featured.text}
            </p>
          </article>

          <article className="bento-card bento-stack glass-card">
            <span className="bento-stack-label">{bento.stack.label}</span>
            <div className="bento-stack-grid">
              {bento.stack.items.map((item) => (
                <span key={item} className="bento-stack-cell">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="bento-card bento-metrics glass-card">
            {bento.metrics.map((m) => (
              <div key={m.label} className="bento-metric">
                <span className="bento-metric-value">{m.value}</span>
                <span className="bento-metric-label">{m.label}</span>
              </div>
            ))}
          </article>

          <article className="bento-card bento-mentality glass-card">
            <h3>{bento.mentality.title}</h3>
            <p>{bento.mentality.text}</p>
            <div className="bento-pills">
              {bento.mentality.pills.map((pill, i) => (
                <span
                  key={pill}
                  className={`bento-pill ${i === 0 ? "bento-pill-active" : ""}`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </article>

          <article className="bento-card bento-visual glass-card">
            <div className="bento-visual-inner">
              <span className="bento-visual-icon">📱</span>
              <p>iOS & Android</p>
              <span className="bento-visual-sub">Cross-platform by default</span>
            </div>
          </article>
        </div>

        <div className="section-header about-below">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">What I do with React Native</h2>
          <p className="section-subtitle">{profile.about}</p>
        </div>
        <div className="specializations-grid">
          {profile.specializations.map((item) => (
            <div key={item.title} className="specialization-card glass-card">
              <span className="spec-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Projects / Work Experience</div>
          <h2 className="section-title">Apps I've built & shipped</h2>
          <p className="section-subtitle">
            Over the years I've worked on projects big and small — from
            healthcare platforms with 1M+ downloads to real-time gaming and
            ecommerce. Here are a few of my favorites.
          </p>
        </div>
        <div className="featured-list">
          {profile.featuredProjects.map((project, i) => (
            <article
              key={project.name}
              className={`featured-item glass-card ${i % 2 === 1 ? "featured-reverse" : ""}`}
            >
              <div className="featured-visual">
                <ProjectPreview
                  imageUrl={project.imageUrl}
                  label={`${project.name} preview`}
                />
              </div>
              <div className="featured-content">
                <span className="featured-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="featured-story">{project.story}</p>
                <ul className="featured-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="featured-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="featured-actions">
                  {project.links.playStore !== "#" && (
                    <a
                      href={project.links.playStore}
                      className="btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Play Store
                    </a>
                  )}
                  {project.links.appStore !== "#" && (
                    <a
                      href={project.links.appStore}
                      className="btn-secondary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on App Store
                    </a>
                  )}
                  {project.links.website !== "#" && (
                    <a
                      href={project.links.website}
                      className="btn-secondary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  )}
                  {project.links.playStore === "#" &&
                    project.links.appStore === "#" &&
                    project.links.website === "#" && (
                      <span className="link-soon">
                        Store links coming soon
                      </span>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UiShowcase() {
  return (
    <section className="section ui-showcase-section" id="ui-showcase">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="section-label">UI Showcase</div>
          <h2 className="section-title">Mobile app design across industries</h2>
          <p className="section-subtitle">
            A visual spread of polished mobile UI concepts — ecommerce, healthcare,
            travel, finance, learning, and food delivery.
          </p>
        </div>
        <figure className="ui-showcase-frame glass-card">
          <img
            src={uiShowcaseImage}
            alt="Mobile app UI showcase featuring ecommerce, medical, travel, finance, learning, and food delivery designs"
            loading="lazy"
            width={1536}
            height={1024}
          />
        </figure>
      </div>
    </section>
  );
}

function MoreProjects() {
  return (
    <section className="section section-tight" id="more-projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">More Projects</div>
          <h2 className="section-title">Other apps in my portfolio</h2>
          <p className="section-subtitle">
            More shipped mobile apps and web projects — including proposal sites,
            platforms, and product documentation.
          </p>
        </div>
        <div className="projects-grid">
          {profile.projects
            .filter(
              (p) =>
                !profile.featuredProjects.some((f) => f.name === p.name),
            )
            .map((project) => (
              <article key={project.name} className="project-card glass-card">
                {"type" in project && project.type === "web" && (
                  <span className="project-type">Web · Proposal</span>
                )}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {"type" in project && project.type === "web" ? (
                    <a
                      href={project.links.website}
                      className="project-link-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Proposal →
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.links.playStore}
                        className={
                          project.links.playStore === "#" ? "disabled" : ""
                        }
                      >
                        Play Store{" "}
                        {project.links.playStore === "#" && "(soon)"}
                      </a>
                      <a
                        href={project.links.appStore}
                        className={
                          project.links.appStore === "#" ? "disabled" : ""
                        }
                      >
                        App Store {project.links.appStore === "#" && "(soon)"}
                      </a>
                      {project.links.website !== "#" && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Website
                        </a>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

function FavoriteTools() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="section-label">Languages & Tools</div>
          <h2 className="section-title">Technologies I love working with</h2>
          <p className="section-subtitle">
            The React Native ecosystem and the tools that power production mobile
            apps.
          </p>
        </div>
        <div className="tools-cloud">
          {profile.favoriteTools.map((tool) => (
            <span key={tool} className="tool-pill">
              {tool}
            </span>
          ))}
        </div>
        <div className="skills-grid skills-grid-compact">
          {profile.skills.map((group) => (
            <div key={group.category} className="skill-group glass-card">
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="journey-layout">
          <div className="journey-sidebar">
            <div className="section-label">My Story</div>
            <h2 className="section-title">{profile.journey.title}</h2>
          </div>
          <div className="journey-content">
            {profile.journey.paragraphs.map((para) => (
              <p key={para.slice(0, 40)} className="journey-paragraph">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="experience-block">
          <h3 className="experience-heading">Work Experience</h3>
          <div className="timeline">
            {profile.experience.map((job) => (
              <div key={job.company} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{job.role}</div>
                      <div className="timeline-company">{job.company}</div>
                    </div>
                    <span className="timeline-period">{job.period}</span>
                  </div>
                  {"location" in job && job.location && (
                    <div className="timeline-location">{job.location}</div>
                  )}
                  <ul className="timeline-highlights">
                    {job.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  item,
  index,
  visible,
}: {
  item: { name: string; icon: string; tag: string; description: string };
  index: number;
  visible: boolean;
}) {
  return (
    <article
      className={`insight-card glass-card ${visible ? "insight-visible" : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="insight-card-header">
        <span className="insight-icon" aria-hidden="true">
          {item.icon}
        </span>
        <span className="insight-tag">{item.tag}</span>
      </div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
    </article>
  );
}

function GrowthColumn({
  label,
  title,
  subtitle,
  items,
  accent,
}: {
  label: string;
  title: string;
  subtitle: string;
  items: { name: string; icon: string; tag: string; description: string }[];
  accent: "blue" | "violet";
}) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`growth-column growth-column-${accent}`}>
      <div className="growth-column-header">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        <p className="growth-subtitle">{subtitle}</p>
      </div>
      <div className="insight-list">
        {items.map((item, i) => (
          <InsightCard key={item.name} item={item} index={i} visible={inView} />
        ))}
      </div>
    </div>
  );
}

function LearningAndHobbies() {
  return (
    <section className="section growth-section" id="learning">
      <div className="container">
        <div className="growth-grid">
          <GrowthColumn
            label="Things I'm Learning"
            title="Always growing"
            subtitle="Staying ahead with the latest React Native tools and patterns."
            items={profile.learning}
            accent="blue"
          />
          <GrowthColumn
            label="Beyond Code"
            title="My interests"
            subtitle="What keeps me curious outside of shipping production apps."
            items={profile.hobbies}
            accent="violet"
          />
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section section-tight" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic background</h2>
        </div>
        <div className="education-grid">
          {profile.education.map((edu) => (
            <div key={edu.school} className="education-card glass-card">
              <h3>{edu.school}</h3>
              <p className="education-degree">{edu.degree}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info-side">
            <div className="section-label">Contact</div>
            <h2 className="section-title">I'd love to connect & chat</h2>
            <p className="section-subtitle">
              Leave your info and I'll reach out to say hello. Open to full-time
              roles, contract work, and React Native consulting.
            </p>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <span>{profile.location}</span>
            </div>
            <div className="contact-social-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={profile.resumeUrl} download>
                Resume
              </a>
            </div>
          </div>
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <p>Opening your email client…</p>
                <p className="form-success-sub">
                  Or email me directly at {profile.email}
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button type="submit" className="btn-primary btn-full">
                  Send Message →
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} <span>{profile.name}</span> — React
          Native Developer ·{" "}
          <a
            href="https://nitin-7477.github.io/nitin-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nitin-7477.github.io
          </a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <CursorFollower />
      <div className="bg-mesh" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <UiShowcase />
        <MoreProjects />
        <FavoriteTools />
        <Journey />
        <LearningAndHobbies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
