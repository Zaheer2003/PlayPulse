import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Play Pulse home"><span className="brand-mark" aria-hidden="true">P</span><span>play<span>pulse</span></span></a>
        <div className="nav-links"><a href="#games">Games</a><a href="#community">Community</a><a href="#playlists">Playlists</a></div>
        <button className="icon-button menu-button" type="button" aria-label="Open menu">☰</button>
        <button className="nav-cta" type="button">Join the pulse <span aria-hidden="true">↗</span></button>
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
