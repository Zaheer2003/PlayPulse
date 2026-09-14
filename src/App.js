import './App.css';
import {
  Bell,
  BoxingGlove,
  BookmarkSimple,
  CaretDown,
  CirclesThreePlus,
  Crosshair,
  CrownCross,
  CurrencyCircleDollar,
  FacebookLogo,
  Fire,
  Football,
  GraduationCap,
  InstagramLogo,
  MagnifyingGlass,
  Mountains,
  Play,
  PuzzlePiece,
  ArrowRight,
  SquaresFour,
  Star,
  SteeringWheel,
  UserList,
  UsersThree,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import Footer from './Footer';

const sidebarPrimary = [
  ['Dashboard', SquaresFour],
  ['User list', UserList],
  ['Fire', Fire],
  ['Circles three plus', CirclesThreePlus],
  ['Users three', UsersThree],
];

const sidebarCategories = [
  ['Driving', SteeringWheel],
  ['Shooting', Crosshair],
  ['Sports', Football],
  ['Adventure', Mountains],
  ['Fighting', BoxingGlove],
  ['Puzzle', PuzzlePiece],
  ['Management', CrownCross],
  ['Strategy', CurrencyCircleDollar],
  ['Educational', GraduationCap],
];

const sidebarSocials = [
  ['Facebook', FacebookLogo],
  ['Instagram', InstagramLogo],
  ['YouTube', YoutubeLogo],
  ['X', XLogo],
];

function SidebarGroup({ items }) {
  return items.map(([label, Icon]) => (
    <a className={`sidebar-link${label === 'Dashboard' ? ' active' : ''}`} href={`#${label.toLowerCase().replaceAll(' ', '-')}`} aria-label={label} title={label} key={label}>
      <Icon aria-hidden="true" size={20} weight={label === 'Dashboard' ? 'fill' : 'regular'} />
    </a>
  ));
}

function App() {
  return (
    <div className="site-shell">
      <a className="corner-brand" href="#top" aria-label="Play Pulse home"><img src="/Assets/Logo.png" alt="Play Pulse" /></a>
      <aside className="sidebar" aria-label="Browse Play Pulse">
        <div className="sidebar-group"><SidebarGroup items={sidebarPrimary} /></div>
        <div className="sidebar-divider" />
        <div className="sidebar-group"><SidebarGroup items={sidebarCategories} /></div>
        <div className="sidebar-divider" />
        <div className="sidebar-group"><SidebarGroup items={sidebarSocials} /></div>
      </aside>
      <nav className="navbar" aria-label="Primary navigation">
        <form className="nav-search" role="search">
          <input type="search" placeholder="Search games" aria-label="Search games" />
          <MagnifyingGlass aria-hidden="true" size={16} weight="regular" />
        </form>
        <button className="icon-button menu-button" type="button" aria-label="Open menu">☰</button>
        <div className="nav-actions">
          <button className="language-button" type="button" aria-label="Select language"><img src="/Assets/UK flag.png" alt="" /> Eng <CaretDown aria-hidden="true" size={12} weight="bold" /></button>
          <button className="nav-icon-button" type="button" aria-label="Saved games" title="Saved games"><BookmarkSimple aria-hidden="true" size={17} weight="regular" /></button>
          <button className="nav-icon-button" type="button" aria-label="Notifications" title="Notifications"><Bell aria-hidden="true" size={17} weight="regular" /></button>
          <button className="login-button" type="button">Login</button>
        </div>
      </nav>

      <main id="top">
        <section className="dashboard-grid" aria-label="Play Pulse dashboard">
          <article className="trailer-panel" id="games">
            <div className="trailer-art"><img src="/Assets/Home Carousel 1.jpg" alt="The Blood of Dawn Walker trailer artwork" /><div className="trailer-overlay"><div className="trailer-overlay-header"><span className="trailer-kicker">#Trending</span><h2>The Blood of <em style={{color:'#fff'}}>Dawn Walker</em></h2></div><p>Enter a dark, mythic adventure and fight your way through a world shaped by ancient power.</p><div style={{marginTop:'30px'}} className="trailer-actions"><button className="play-now-button" type="button"><Play weight="regular" /> Play now</button><button className="save-trailer-button" type="button" aria-label="Save The Blood of Dawn Walker" title="Save trailer"><BookmarkSimple weight="regular" /></button></div></div><div className="trailer-bottom-meta"><div className="watch-preview"><img src="/Assets/Home Carousel 2.jpg" alt="Trailer preview" /><span>Watch trailer</span><Play weight="fill" /></div><div className="trailer-stats"><span className="rating-stat"><Star weight="fill" /> 4.8/5</span><span className="watch-stat"><span className="stat-dot" /> 13,419,785 play times</span></div></div><div className="carousel-controls"><div className="carousel-dots" aria-label="Carousel slide position"><span className="active" /><span /><span /></div></div></div>
          </article>

          <div className="dashboard-side">
            <section className="hub-panel" id="community" aria-labelledby="hub-title"><div className="panel-heading compact"><div><h2 id="hub-title">Community hub</h2></div></div><div className="profile-row"><div className="profile-card"><img src="/Assets/Ellipse 27.png" alt="Maya profile" /><div className="profile-info"><strong>Maya</strong><span>The Blood of Dawn Walker</span></div><button className="live-button" type="button"><span />Live</button></div><div className="profile-card"><img src="/Assets/Ellipse 27-1.png" alt="Jordan profile" /><div className="profile-info"><strong>Jordan</strong><span>Hades II</span></div><button className="live-button" type="button"><span />Live</button></div><div className="profile-card"><img src="/Assets/Ellipse 27-2.png" alt="Kai profile" /><div className="profile-info"><strong>Kai</strong><span>Split Fiction</span></div><button className="live-button" type="button"><span />Live</button></div></div><a className="show-more community-show-more" href="#community">Show more <ArrowRight /></a></section>
            <section className="channels-panel" id="playlists" aria-labelledby="channels-title"><div className="panel-heading compact"><div><h2 id="channels-title">Discover channels</h2></div></div><div className="channel-row"><div className="channel-card"><img src="/Assets/Indie Spotlight 1.png" alt="Indie spotlight channel" /><div className="channel-info"><strong>Indie spotlight</strong><small>24 games</small></div><button className="join-button" type="button">Join</button></div><div className="channel-card"><img src="/Assets/Indie Spotlight 2.png" alt="Late-night co-op channel" /><div className="channel-info"><strong>Late-night co-op</strong><small>18 games</small></div><button className="join-button" type="button">Join</button></div></div><a className="show-more channel-show-more" href="#playlists">Show more <ArrowRight /></a></section>
          </div>
        </section>

        <section className="trending-section" aria-labelledby="trending-title">
          <div className="trending-header">
            <h2 id="trending-title">Trending <em>Games</em></h2>
          </div>
          <div className="trending-list">
            <div className="trending-wrapper">
            {[
              { img: '/Assets/Trending 1.png', title: 'Darkwood', desc: 'A terrifying survival horror set in a mysterious, ever-changing forest.', rating: '4.6' },
              { img: '/Assets/Trending 2.png', title: "Assassin's Creed", desc: 'Relive the Crusades as a master assassin in a vast open world.', rating: '4.7' },
              { img: '/Assets/Trending 3.png', title: 'NFS: Shift', desc: 'High-octane street racing with precision handling and roaring engines.', rating: '4.5' },
              { img: '/Assets/Trending 4.png', title: 'Warface', desc: 'Fast-paced online tactical shooter with intense multiplayer combat.', rating: '4.4' },
              { img: '/Assets/Trending 5.png', title: "Assassin's Creed Valhalla", desc: 'Lead Viking raids across England in this epic open-world adventure.', rating: '4.8' },
            ].map((game) => (
              <div className="trending-card" key={game.title}>
                <div className="trending-card-top">
                  <img src={game.img} alt={game.title} />
                  <div className="trending-card-meta">
                    <h3>{game.title}</h3>
                    <span className="trending-rating"><Star weight="fill" /> {game.rating}</span>
                  </div>
                </div>
                <p>{game.desc}</p>
                <button className="play-now-button" type="button"><Play weight="regular" /> Play now</button>
              </div>
            ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
