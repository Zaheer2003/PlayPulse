import './App.css';
import {
  Bell,
  BoxingGlove,
  BookmarkSimple,
  CaretDown,
  Clock,
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
            <div className="panel-heading"><div><p className="eyebrow">Trending now</p><h1 id="hero-title">Trending trailers</h1></div><span className="slide-count">01 / 04</span></div>
            <div className="trailer-art"><img src="/Assets/Home Carousel 1.jpg" alt="The Blood of Dawn Walker trailer artwork" /><div className="trailer-overlay"><span className="trailer-kicker">#Trending</span><h2>The Blood of <em>Dawn Walker</em></h2><p>Enter a dark, mythic adventure and fight your way through a world shaped by ancient power.</p><div className="trailer-main-meta"><strong>Watch trailer</strong><div className="trailer-stats"><span><Star weight="fill" /> 4.9</span><span><Clock /> 2h 10m</span></div></div><div className="trailer-actions"><button className="play-now-button" type="button"><Play weight="fill" /> Play now</button><button className="save-trailer-button" type="button" aria-label="Save The Blood of Dawn Walker" title="Save trailer"><BookmarkSimple weight="regular" /></button></div></div></div>
            <div className="trailer-footer"><div className="trailer-thumb"><img src="/Assets/Home Carousel 2.jpg" alt="The Blood of Dawn Walker trailer preview" /><Play className="thumb-play" weight="fill" /></div><a href="#games" aria-label="Next trailer"><ArrowRight /></a></div>
          </article>

          <div className="dashboard-side">
            <section className="hub-panel" id="community" aria-labelledby="hub-title"><div className="panel-heading compact"><div><p className="eyebrow">Find your people</p><h2 id="hub-title">Community hub</h2></div><a className="show-more" href="#community">Show more <ArrowRight /></a></div><p className="panel-description">See what players with your taste are discovering.</p><div className="profile-row"><div className="profile-card"><img src="/Assets/Ellipse 27.png" alt="Maya profile" /><strong>Maya</strong><span>Co-op fan</span></div><div className="profile-card"><img src="/Assets/Ellipse 27-1.png" alt="Jordan profile" /><strong>Jordan</strong><span>Indie hunter</span></div><div className="profile-card"><img src="/Assets/Ellipse 27-2.png" alt="Kai profile" /><strong>Kai</strong><span>RPG player</span></div></div></section>
            <section className="channels-panel" id="playlists" aria-labelledby="channels-title"><div className="panel-heading compact"><div><p className="eyebrow">Curated for you</p><h2 id="channels-title">Discover channels</h2></div><a className="show-more" href="#playlists">Show more <ArrowRight /></a></div><div className="channel-row"><a className="channel-card" href="#strategy"><img src="/Assets/Indie Spotlight 1.png" alt="Indie spotlight channel" /><span>Indie spotlight</span><small>24 games</small></a><a className="channel-card" href="#multiplayer"><img src="/Assets/Indie Spotlight 2.png" alt="Multiplayer channel" /><span>Late-night co-op</span><small>18 games</small></a></div></section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
