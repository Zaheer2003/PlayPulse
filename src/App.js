import './App.css';
import { FaBell, FaBookmark, FaChevronDown, FaSearch } from 'react-icons/fa6';
import Footer from './Footer';

function App() {
  return (
    <div className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Play Pulse home"><img src="/Assets/Logo.png" alt="Play Pulse" /></a>
        <form className="nav-search" role="search">
          <FaSearch aria-hidden="true" />
          <input type="search" placeholder="Search games" aria-label="Search games" />
        </form>
        <button className="icon-button menu-button" type="button" aria-label="Open menu">☰</button>
        <div className="nav-actions">
          <button className="language-button" type="button" aria-label="Select language">Eng <FaChevronDown aria-hidden="true" /></button>
          <button className="nav-icon-button" type="button" aria-label="Saved games" title="Saved games"><FaBookmark aria-hidden="true" /></button>
          <button className="nav-icon-button" type="button" aria-label="Notifications" title="Notifications"><FaBell aria-hidden="true" /></button>
          <button className="login-button" type="button">Login</button>
        </div>
      </nav>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> Live now · 24,891 players</p>
            <h1 id="hero-title">Find your next <em>favorite</em> game.</h1>
            <p className="hero-description">A living space for people who play, discover, and share the games that keep their heart racing.</p>
            <div className="hero-actions"><button className="primary-button" type="button">Explore games <span aria-hidden="true">↗</span></button><button className="text-button" type="button"><span className="play-icon" aria-hidden="true">▶</span> See how it works</button></div>
            <div className="member-note"><div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>K</span><span>+</span></div><span>Joined by <strong>120k+</strong> players</span></div>
          </div>
          <div className="hero-art" aria-label="Featured game artwork"><div className="art-glow" /><div className="art-grid" /><div className="floating-tag tag-top">01 / 04 <span>FEATURED</span></div><div className="game-character"><div className="visor" /><div className="character-body" /><div className="character-arm arm-left" /><div className="character-arm arm-right" /></div><div className="game-card"><span className="card-kicker">PLAYLIST 014</span><strong>Into the<br /><i>unknown.</i></strong><span className="card-arrow">↗</span></div><div className="floating-tag tag-bottom"><span className="sound-wave">)))</span> curated for you</div></div>
        </section>

        <section className="pulse-strip" id="games" aria-label="Trending games"><p>Trending through the pulse</p><div className="trend-list"><span>01 <b>Hades II</b></span><span>02 <b>Split Fiction</b></span><span>03 <b>Balatro</b></span><span>04 <b>Monster Hunter</b></span></div><a href="#playlists" className="round-arrow" aria-label="View trending games">↗</a></section>
        <section className="community-section" id="community"><div><p className="eyebrow">More than a library</p><h2>Stay curious.<br /><em>Play together.</em></h2></div><p className="section-copy">Follow the people who get your taste, swap recommendations, and always have somewhere new to go next.</p><a className="outline-button" id="playlists" href="#top">Discover the community <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
