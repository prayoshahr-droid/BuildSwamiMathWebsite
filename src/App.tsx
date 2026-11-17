import { useEffect, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1792159691477-9fe9347b949f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800";
const diyaImage =
  "https://images.unsplash.com/photo-1741003410796-987aea47a48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400";
const ceremonyImage =
  "https://images.unsplash.com/photo-1784815130752-60dec0d7a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";
const ganeshaImage =
  "https://images.unsplash.com/photo-1790738259777-9b51a4823b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";
const flagsImage =
  "https://images.unsplash.com/photo-1791356651372-5801069d4789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

type IconName =
  | "menu"
  | "close"
  | "chevron"
  | "arrow"
  | "calendar"
  | "camera"
  | "heart"
  | "play"
  | "map"
  | "phone"
  | "mail"
  | "clock"
  | "user"
  | "flower";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    camera: (
      <>
        <path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <circle cx="12" cy="12.5" r="3.5" />
      </>
    ),
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m10 8 6 4-6 4Z" />
      </>
    ),
    map: (
      <>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    flower: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10c-3-2-4-6-1-7 3-1 3 4 1 7Zm2 2c2-3 6-4 7-1 1 3-4 3-7 1Zm-2 2c3 2 4 6 1 7-3 1-3-4-1-7Zm-2-2c-2 3-6 4-7 1-1-3 4-3 7-1Z" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About Math",
    href: "#about",
    children: [
      "History of Math",
      "About Math Founder",
      "Trustees",
      "Social Activities",
      "Do's & Don'ts",
    ],
  },
  { label: "eDarshan", href: "#darshan" },
  {
    label: "Online Seva",
    href: "#seva",
    children: ["Registration", "Donation", "Abhishek", "Laghurudra"],
  },
  { label: "Math Utsav", href: "#utsav", children: ["Utsav Calendar", "Utsav Photos"] },
  { label: "An Appeal", href: "#appeal" },
  {
    label: "Gallery",
    href: "#gallery",
    children: ["Swami Wallpapers", "Other Deities", "Utsav Photos"],
  },
  { label: "Contact Us", href: "#contact" },
];

const sevas = [
  {
    icon: "user" as IconName,
    title: "Seva Registration",
    text: "Register for upcoming puja, utsav and special occasions.",
  },
  {
    icon: "heart" as IconName,
    title: "Donation",
    text: "Contribute securely towards the Math and its social initiatives.",
  },
  {
    icon: "flower" as IconName,
    title: "Abhishek",
    text: "Offer a sacred Abhishek in the name of you and your family.",
  },
  {
    icon: "play" as IconName,
    title: "Laghurudra",
    text: "Book the auspicious Laghurudra seva with complete details.",
  },
];

const events = [
  {
    day: "14",
    month: "APR",
    title: "Swami Prakat Din",
    time: "5:30 AM onwards",
    detail: "Kakad Aarti, Abhishek & Mahaprasad",
  },
  {
    day: "22",
    month: "APR",
    title: "Thursday Palkhi",
    time: "7:30 PM",
    detail: "Evening Aarti followed by Palkhi Sohala",
  },
  {
    day: "03",
    month: "MAY",
    title: "Guru Pushyamrut",
    time: "6:00 AM onwards",
    detail: "Special puja and collective naam smaran",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="announcement">
          <div className="container announcement-inner">
            <span>॥ श्री स्वामी समर्थ ॥</span>
            <p>Daily Darshan: 5:30 AM – 10:00 PM</p>
            <div className="announcement-links">
              <a href="tel:+912223867532">
                <Icon name="phone" /> +91 22 2386 7532
              </a>
              <a href="#contact">
                <Icon name="map" /> Girgaum, Mumbai
              </a>
            </div>
          </div>
        </div>

        <div className="brand-row container">
          <a className="brand" href="#home" aria-label="Shree Swami Samarth Maharaj Math home">
            <div className="brand-seal">
              <span>श्री</span>
            </div>
            <div className="brand-copy">
              <span className="brand-kicker">Shree Swami Samarth Maharaj</span>
              <strong>Math – Kandewadi, Girgaum</strong>
              <small>Serving devotees since 1893 · Mumbai</small>
            </div>
          </a>
          <p className="brand-mantra">
            भिऊ नकोस,
            <br />
            <strong>मी तुझ्या पाठीशी आहे</strong>
          </p>
          <a className="header-donate" href="#appeal">
            <Icon name="heart" /> Make a Donation
          </a>
          <button
            className="mobile-toggle"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>

        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="container nav-inner">
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                <a href={item.href}>
                  {item.label}
                  {item.children && <span className="down">⌄</span>}
                </a>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <a href={item.href} key={child}>
                        {child}
                        <Icon name="chevron" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="drawer-backdrop"
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation"
        />
        <div className="drawer-panel">
          <div className="drawer-head">
            <span>॥ श्री स्वामी समर्थ ॥</span>
            <button type="button" onClick={closeMenu} aria-label="Close navigation">
              <Icon name="close" />
            </button>
          </div>
          <nav>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
                <Icon name="chevron" />
              </a>
            ))}
          </nav>
          <a className="drawer-donate" href="#appeal" onClick={closeMenu}>
            Make a Donation <Icon name="arrow" />
          </a>
        </div>
      </div>

      <main>
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay" />
          <div className="hero-pattern" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow light">A sacred space in the heart of Girgaum</span>
              <h1>
                Faith. Seva.
                <br />
                <em>Swami’s Grace.</em>
              </h1>
              <p>
                Welcome to Shree Swami Samarth Maharaj Math, Kandewadi — a timeless sanctuary of
                devotion, service and spiritual belonging.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#darshan">
                  <Icon name="play" /> Watch Live Darshan
                </a>
                <a className="button ghost" href="#about">
                  Discover Our History <Icon name="arrow" />
                </a>
              </div>
            </div>
            <div className="hero-card">
              <span>Today at the Math</span>
              <h3>Daily Aarti & Darshan</h3>
              <div>
                <Icon name="clock" />
                <p>
                  <strong>Kakad Aarti</strong>
                  <small>5:30 AM</small>
                </p>
              </div>
              <div>
                <Icon name="clock" />
                <p>
                  <strong>Madhyan Aarti</strong>
                  <small>12:00 PM</small>
                </p>
              </div>
              <div>
                <Icon name="clock" />
                <p>
                  <strong>Shej Aarti</strong>
                  <small>9:30 PM</small>
                </p>
              </div>
              <a href="#darshan">
                View full schedule <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        {noticeOpen && (
          <div className="notice-strip">
            <div className="container notice-inner">
              <span className="notice-label">NOTICE</span>
              <p>
                <strong>Swami Prakat Din Mahotsav:</strong> Seva registration and Mahaprasad coupons
                are now available at the Math office.
              </p>
              <a href="#utsav">
                Know more <Icon name="arrow" />
              </a>
              <button
                type="button"
                aria-label="Dismiss notice"
                onClick={() => setNoticeOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>
          </div>
        )}

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-images">
              <div className="image-tall">
                <img src={ceremonyImage} alt="Devotee lighting a traditional ceremonial lamp" />
              </div>
              <div className="image-small">
                <img src={flagsImage} alt="Saffron Om banners at a Hindu temple" />
              </div>
              <div className="year-badge">
                <strong>130+</strong>
                <span>
                  Years of
                  <br />
                  Devotion
                </span>
              </div>
            </div>
            <div className="about-copy">
              <span className="eyebrow">Our sacred legacy</span>
              <h2>
                A place where every prayer <em>finds peace.</em>
              </h2>
              <div className="ornament">
                <span>◆</span>
              </div>
              <p className="lead">
                For more than a century, the Kandewadi Math has been a spiritual home for devotees
                of Shree Swami Samarth Maharaj in Mumbai.
              </p>
              <p>
                Rooted in the teachings of compassion, faith and selfless service, the Math
                continues to preserve its sacred traditions while serving the changing needs of the
                community.
              </p>
              <blockquote>“अनंतकोटी ब्रह्मांडनायक राजाधिराज योगिराज श्री स्वामी समर्थ”</blockquote>
              <a className="text-link" href="#about">
                Explore our history <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="darshan-section"
          id="darshan"
          style={{ backgroundImage: `url(${diyaImage})` }}
        >
          <div className="darshan-shade" />
          <div className="container darshan-content">
            <span className="eyebrow light">eDarshan</span>
            <h2>
              Receive Swami’s blessings,
              <br />
              <em>wherever you are.</em>
            </h2>
            <p>Join the live Aarti and experience the serenity of the Math from your home.</p>
            <button
              className="live-button"
              type="button"
              onClick={() =>
                alert("The live stream will be available here during scheduled Aarti timings.")
              }
            >
              <span className="play-ring">
                <Icon name="play" />
              </span>
              <span>
                <small>
                  <i /> LIVE FROM KANDEWADI
                </small>
                <strong>Watch Live Darshan</strong>
              </span>
            </button>
          </div>
        </section>

        <section className="seva section" id="seva">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Online seva</span>
                <h2>
                  Offer your seva with <em>devotion.</em>
                </h2>
              </div>
              <p>
                Participate in sacred rituals and support the Math from wherever you are. Every
                offering is performed with complete faith and tradition.
              </p>
            </div>
            <div className="seva-grid">
              {sevas.map((seva, index) => (
                <a
                  href={index === 1 ? "#appeal" : "#contact"}
                  className="seva-card"
                  key={seva.title}
                >
                  <span className="seva-number">0{index + 1}</span>
                  <span className="seva-icon">
                    <Icon name={seva.icon} />
                  </span>
                  <h3>{seva.title}</h3>
                  <p>{seva.text}</p>
                  <span className="card-link">
                    Learn more <Icon name="arrow" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="utsav section" id="utsav">
          <div className="container utsav-grid">
            <div className="events-copy">
              <span className="eyebrow light">Math utsav</span>
              <h2>
                Upcoming sacred <em>celebrations.</em>
              </h2>
              <p>
                Come together in devotion and celebrate the traditions that connect our community.
              </p>
              <a className="button cream" href="#gallery">
                <Icon name="calendar" /> View full calendar
              </a>
            </div>
            <div className="event-list">
              {events.map((event) => (
                <article className="event" key={event.title}>
                  <div className="date">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.detail}</p>
                    <span className="event-time">
                      <Icon name="clock" /> {event.time}
                    </span>
                  </div>
                  <a href="#contact" aria-label={`Details for ${event.title}`}>
                    <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="appeal section" id="appeal">
          <div className="container appeal-card">
            <div className="appeal-art">
              <span className="om">ॐ</span>
              <i className="halo h1" />
              <i className="halo h2" />
            </div>
            <div className="appeal-copy">
              <span className="eyebrow">An appeal to devotees</span>
              <h2>
                Help us preserve a legacy of <em>faith and service.</em>
              </h2>
              <p>
                Your generous contribution supports temple restoration, daily annadaan, healthcare
                assistance and educational initiatives undertaken by the Math.
              </p>
              <div className="appeal-stats">
                <div>
                  <strong>1,200+</strong>
                  <span>Meals served monthly</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>Active social projects</span>
                </div>
              </div>
              <a className="button primary" href="#contact">
                <Icon name="heart" /> Contribute Now
              </a>
              <small>Donations are eligible for tax benefits as applicable.</small>
            </div>
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="container">
            <div className="gallery-head">
              <div>
                <span className="eyebrow">Divine moments</span>
                <h2>
                  Glimpses from the <em>Math.</em>
                </h2>
              </div>
              <a className="text-link" href="#gallery">
                View complete gallery <Icon name="arrow" />
              </a>
            </div>
            <div className="gallery-grid">
              <figure className="gallery-main">
                <img
                  src={ganeshaImage}
                  alt="Ganesha idol decorated with flowers in a Mumbai temple"
                />
                <figcaption>
                  <span>Other Deities</span>
                  <strong>Sacred Darshan</strong>
                </figcaption>
              </figure>
              <figure>
                <img src={flagsImage} alt="Traditional Om banners in saffron" />
                <figcaption>
                  <span>Math</span>
                  <strong>Festival Decorations</strong>
                </figcaption>
              </figure>
              <figure>
                <img src={ceremonyImage} alt="Traditional lamp lighting ceremony" />
                <figcaption>
                  <span>Utsav</span>
                  <strong>Devotion in Light</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand-seal">
              <span>श्री</span>
            </div>
            <h3>Shree Swami Samarth Maharaj Math</h3>
            <p>Kandewadi, Girgaum · Mumbai</p>
            <strong>॥ श्री स्वामी समर्थ ॥</strong>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#about">About the Math</a>
            <a href="#darshan">Live eDarshan</a>
            <a href="#seva">Online Seva</a>
            <a href="#utsav">Utsav Calendar</a>
          </div>
          <div>
            <h4>Information</h4>
            <a href="#contact">Contact Us</a>
            <a href="#contact">Terms of Use</a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Refund & Cancellation</a>
          </div>
          <div className="footer-contact">
            <h4>Visit the Math</h4>
            <p>
              <Icon name="map" /> 110, Kandewadi, Girgaum,
              <br />
              Mumbai, Maharashtra 400004
            </p>
            <p>
              <Icon name="phone" /> +91 22 2386 7532
            </p>
            <p>
              <Icon name="mail" /> seva@swamimathgirgaon.com
            </p>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>© 2026 Shree Swami Samarth Maharaj Math. All rights reserved.</p>
          <p>Made with reverence in Mumbai</p>
        </div>
      </footer>
    </div>
  );
}
