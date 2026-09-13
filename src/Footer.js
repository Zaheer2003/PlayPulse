import './Footer.css';

const resources = ['About us', 'Developers', 'Careers', 'Info for parents'];
const categories = ['Driving', 'Shooting', 'Sports', 'Adventure', 'Puzzle', 'Fighting', 'Management', 'Strategy', 'Educational'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <a className="footer-brand" href="#top" aria-label="Play Pulse home">
            <img src="/Assets/Logo.png" alt="Play Pulse" />
          </a>
          <p>Discover your next favorite game, connect with fellow players, and keep your pulse on everything worth playing.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-link-column">
            <h2>Resources</h2>
            {resources.map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
          </div>
          <div className="footer-link-column footer-category-column">
            <h2>Categories</h2>
            <div className="category-links">
              {categories.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
            </div>
          </div>
        </div>

        <div className="footer-aside">
          <div className="social-links" aria-label="Social media links">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
            <a href="#x" aria-label="X">𝕏</a>
          </div>

          <div className="footer-app-row">
            <p className="footer-kicker">Play anywhere, play instantly.</p>
            <div className="store-badges" aria-label="Download Play Pulse">
              <a href="#app-store" aria-label="Download on the App Store"><img src="/Assets/App store.png" alt="App Store" /></a>
              <a href="#microsoft-store" aria-label="Get it from Microsoft"><img src="/Assets/Microsoft.png" alt="Microsoft" /></a>
              <a href="#google-play" aria-label="Get it on Google Play"><img src="/Assets/Google play.png" alt="Google Play" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <nav className="legal-links" aria-label="Legal links">
          <a href="#terms">Terms of service</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#refunds">Store refund policy</a>
        </nav>
        <p>© 2026 Play Pulse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;