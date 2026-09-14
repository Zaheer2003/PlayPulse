import './App.css';
import {
  Bell,
  BoxingGlove,
  BookmarkSimple,
  CaretDown,
  CaretLeft,
  CaretRight,
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
        {/* Hero / Dashboard */}
        <section className="dashboard-grid" aria-label="Play Pulse dashboard">
          <article className="trailer-panel" id="games">
            <div className="trailer-art">
              <img src="/Assets/Home Carousel 1.jpg" alt="The Blood of Dawn Walker trailer artwork" />
              <div className="trailer-overlay">
                <div className="trailer-overlay-header">
                  <span className="trailer-kicker">#Trending</span>
                  <h2>The Blood of <em style={{color:'#fff'}}>Dawn Walker</em></h2>
                </div>
                <p>Enter a dark, mythic adventure and fight your way through a world shaped by ancient power.</p>
                <div style={{marginTop:'30px'}} className="trailer-actions">
                  <button className="play-now-button" type="button"><Play weight="regular" /> Play now</button>
                  <button className="save-trailer-button" type="button" aria-label="Save The Blood of Dawn Walker" title="Save trailer"><BookmarkSimple weight="regular" /></button>
                </div>
              </div>
              <div className="trailer-bottom-meta">
                <div className="watch-preview">
                  <img src="/Assets/Home Carousel 2.jpg" alt="Trailer preview" />
                  <span>Watch trailer</span>
                  <Play weight="fill" />
                </div>
                <div className="trailer-stats">
                  <span className="rating-stat"><Star weight="fill" /> 4.8/5</span>
                  <span className="watch-stat"><span className="stat-dot" /> 13,419,785 play times</span>
                </div>
              </div>
              <div className="carousel-controls">
                <div className="carousel-dots" aria-label="Carousel slide position">
                  <span className="active" /><span /><span />
                </div>
              </div>
            </div>
          </article>

          <div className="dashboard-side">
            <section className="hub-panel" id="community" aria-labelledby="hub-title">
              <div className="panel-heading compact"><div><h2 id="hub-title">Community hub</h2></div></div>
              <div className="profile-row">
                <div className="profile-card"><img src="/Assets/Ellipse 27.png" alt="Maya profile" /><div className="profile-info"><strong>Maya</strong><span>The Blood of Dawn Walker</span></div><button className="live-button" type="button"><span />Live</button></div>
                <div className="profile-card"><img src="/Assets/Ellipse 27-1.png" alt="Jordan profile" /><div className="profile-info"><strong>Jordan</strong><span>Hades II</span></div><button className="live-button" type="button"><span />Live</button></div>
                <div className="profile-card"><img src="/Assets/Ellipse 27-2.png" alt="Kai profile" /><div className="profile-info"><strong>Kai</strong><span>Split Fiction</span></div><button className="live-button" type="button"><span />Live</button></div>
              </div>
              <a className="show-more community-show-more" href="#community">Show more <ArrowRight /></a>
            </section>
            <section className="channels-panel" id="playlists" aria-labelledby="channels-title">
              <div className="panel-heading compact"><div><h2 id="channels-title">Discover channels</h2></div></div>
              <div className="channel-row">
                <div className="channel-card"><img src="/Assets/Indie Spotlight 1.png" alt="Indie spotlight channel" /><div className="channel-info"><strong>Indie spotlight</strong><small>24 games</small></div><button className="join-button" type="button">Join</button></div>
                <div className="channel-card"><img src="/Assets/Indie Spotlight 2.png" alt="Late-night co-op channel" /><div className="channel-info"><strong>Late-night co-op</strong><small>18 games</small></div><button className="join-button" type="button">Join</button></div>
              </div>
              <a className="show-more channel-show-more" href="#playlists">Show more <ArrowRight /></a>
            </section>
          </div>
        </section>

        {/* Trending Games */}
        <section className="trending-section" aria-labelledby="trending-title">
          <div className="trending-header">
            <h2 id="trending-title">Trending <em>Games</em></h2>
          </div>
          <div className="trending-list">
            <div className="trending-wrapper">
              {[
                { img: '/Assets/Trending%201.png', title: 'Darkwood', desc: 'A terrifying survival horror set in a mysterious, ever-changing forest.', rating: '4.6' },
                { img: '/Assets/Trending%20%202.png', title: "Assassin's Creed", desc: 'Relive the Crusades as a master assassin in a vast open world.', rating: '4.7' },
                { img: '/Assets/Trending%203.png', title: 'NFS: Shift', desc: 'High-octane street racing with precision handling and roaring engines.', rating: '4.5' },
                { img: '/Assets/Trending%20%204.png', title: 'Warface', desc: 'Fast-paced online tactical shooter with intense multiplayer combat.', rating: '4.4' },
                { img: '/Assets/Trending%205.png', title: "Assassin's Creed Valhalla", desc: 'Lead Viking raids across England in this epic open-world adventure.', rating: '4.8' },
              ].map((game) => (
                <div className="trending-card" key={game.title}>
                  <img src={game.img} alt={game.title} />
                  <div className="trending-card-name-row">
                    <h3>{game.title}</h3>
                    <span className="trending-rating"><Star weight="fill" /> {game.rating}/5</span>
                  </div>
                  <p>{game.desc}</p>
                  <button className="play-now-button" type="button">Play now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Categories */}
        <section className="categories-section" aria-labelledby="categories-title">
          <div className="categories-header">
            <h2 id="categories-title">Browse <em>Categories</em></h2>
          </div>
          <div className="categories-grid">
            {[
              ['Driving', SteeringWheel, '124 Games'],
              ['Shooting', Crosshair, '98 Games'],
              ['Sports', Football, '76 Games'],
              ['Adventure', Mountains, '112 Games'],
              ['Fighting', BoxingGlove, '89 Games'],
              ['Puzzle', PuzzlePiece, '65 Games'],
              ['Management', CrownCross, '54 Games'],
              ['Strategy', CurrencyCircleDollar, '71 Games'],
              ['Educational', GraduationCap, '43 Games'],
            ].map(([label, Icon, count]) => (
              <a className="category-card" href={`#${label.toLowerCase()}`} key={label}>
                <div className="category-icon"><Icon size={38} weight="regular" /></div>
                <div className="category-info">
                  <span className="category-name">{label}</span>
                  <span className="category-count">{count}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Upcoming Games */}
        <section className="upcoming-section" aria-labelledby="upcoming-title">
          <div className="upcoming-header">
            <h2 id="upcoming-title">Upcoming <em>Games</em></h2>
          </div>
          <div className="upcoming-grid">
            {[
              { img: '/Assets/Upcoming%201.png', title: 'Uncharted 4', desc: 'A haunting action RPG set in a fractured world between life and shadow.', price: 'LKR 3,999' },
              { img: '/Assets/Upcoming%202.png', title: 'FC 26', desc: 'Command massive war machines in an epic futuristic battlefield.', price: 'LKR 4,999' },
              { img: '/Assets/Upcoming%203.png', title: 'RDR2', desc: 'A sci-fi stealth thriller where every choice reshapes the galaxy.', price: 'LKR 4,499' },
            ].map((game) => (
              <div className="upcoming-card" key={game.title}>
                <img src={game.img} alt={game.title} />
                <div className="upcoming-body">
                  <h3>{game.title}</h3>
                  <p>{game.desc}</p>
                  <div className="upcoming-footer">
                    <span className="upcoming-price">{game.price}</span>
                    <button className="preorder-button" type="button">Pre-order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Indie Spotlight */}
        <section className="indie-section" aria-labelledby="indie-title">
          <div className="indie-divider-header">
            <span className="indie-line" />
            <h2 id="indie-title">Indie <em>Spotlight</em></h2>
            <span className="indie-line" />
          </div>
          <p className="indie-section-desc">Discover handpicked indie gems that push the boundaries of storytelling, art, and gameplay. These titles prove that the best experiences don't always come from the biggest studios.</p>
          <div className="indie-content">
            <div className="indie-detail-card">
              <h3 className="indie-game-title">Ghost of Tsushima</h3>
              <span className="indie-release">Release Date: November 18, 2021</span>
              <p className="indie-desc">A breathtaking open-world samurai epic set in feudal Japan, where honor and survival collide against the Mongol invasion.</p>
              <div className="indie-tags">
                <span className="indie-tag">Action</span>
                <span className="indie-tag">Adventure</span>
                <span className="indie-tag">Open World</span>
                <span className="indie-tag">Samurai</span>
              </div>
              <button className="play-now-button indie-play-btn" type="button"><Play weight="regular" /> Play Now</button>
              <div className="indie-bottom-row">
                <span className="indie-rating"><Star weight="fill" /> 4.9/5</span>
                <div className="indie-platforms">
                  <span className="indie-platforms-label">Available on:</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-label="PlayStation"><path d="M8.984 2.596v14.347l3.219 1.016V6.207s2.735.68 2.735 3.337c0 2.728-1.765 3.755-2.735 3.755v2.78s4.668-.784 4.668-6.535c0-5.728-7.887-6.948-7.887-6.948zM0 17.244l4.668 1.512 3.219-1.016v-2.78L3.219 16.228V13.45L0 14.464v2.78zm15.016 1.512l4.668-1.512v-2.78l-3.219 1.016v-2.78l-3.219 1.016v2.78l1.77-.557v2.817z"/></svg>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-label="Xbox"><path d="M4.102 5.481C2.786 6.96 2 8.892 2 11c0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.108-.786-4.04-2.102-5.519C14.516 6.74 12.376 8.5 10 8.5S5.484 6.74 4.102 5.481zM10 2a9 9 0 0 1 6.538 2.838C15.119 3.675 12.67 2.5 10 2.5S4.881 3.675 3.462 4.838A9 9 0 0 1 10 2zm0 8.5c1.933 0 3.725-.672 5.14-1.787A7.965 7.965 0 0 1 18 11c0 4.418-3.582 8-8 8s-8-3.582-8-8a7.965 7.965 0 0 1 2.86-6.287C6.275 9.828 8.067 10.5 10 10.5z"/></svg>
                </div>
              </div>
            </div>
            <div className="indie-right">
              <div className="indie-card">
                <img src="/Assets/Indie%20Spotlight%201.png" alt="Ghost of Tsushima" />
              </div>
              <div className="indie-nav">
                <button className="indie-nav-btn" type="button" aria-label="Previous"><CaretLeft size={18} weight="bold" /></button>
                <button className="indie-nav-btn" type="button" aria-label="Next"><CaretRight size={18} weight="bold" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* New Release / Most Played / Top Rated */}
        <section className="three-col-section" aria-label="Game collections">
          <div className="three-col-grid">
            {[
              { title: 'New Release', games: [
                { img: '/Assets/New%20release%20(1).png', name: 'Ghostbusters: Spirits Unleashed', desc: 'A fast-paced cyberpunk slasher.', rating: '4.5' },
                { img: '/Assets/New%20release%20(2).png', name: 'God of War', desc: 'Race through the cosmos at light speed.', rating: '4.3' },
                { img: '/Assets/New%20release%20(3).png', name: 'Days Gone', desc: 'Dark fantasy RPG with brutal combat.', rating: '4.6' },
                { img: '/Assets/New%20release%20(4).png', name: 'God of War 4', desc: 'Survive the endless void alone.', rating: '4.2' },
              ]},
              { title: 'Most Played', games: [
                { img: '/Assets/Most%20played%20(1).png', name: 'Iron Clash', desc: 'Massive multiplayer tank warfare.', rating: '4.7' },
                { img: '/Assets/Most%20played%20(2).png', name: 'Storm Arena', desc: 'Battle royale in a raging storm.', rating: '4.6' },
                { img: '/Assets/Most%20played%20(3).png', name: 'Dark Nexus', desc: 'Hack and slash through dark realms.', rating: '4.5' },
                { img: '/Assets/Most%20played%20(4).png', name: 'Blaze Squad', desc: 'Co-op shooter with explosive action.', rating: '4.4' },
              ]},
              { title: 'Top Rated', games: [
                { img: '/Assets/Top%20rated%20(1).png', name: 'Dota 2', desc: 'Puzzle adventure in a mirrored world.', rating: '4.9' },
                { img: '/Assets/Top%20rated%20(2).png', name: "Assassin's Creed Mirage", desc: 'Defend your city in neon-lit chaos.', rating: '4.8' },
                { img: '/Assets/Top%20rated%20(3).png', name: 'Uncharted: Legacy of Thieves', desc: 'Command an army across frozen lands.', rating: '4.8' },
                { img: '/Assets/Top%20rated%20(4).png', name: 'Evil Dead: The Game', desc: 'Claim the throne in this epic RPG.', rating: '4.7' },
              ]},
            ].map((col) => (
              <div className="three-col" key={col.title}>
                <div className="three-col-header">
                  <h2>{col.title}</h2>
                  <button className="three-col-more" type="button">View More <CaretRight size={13} weight="bold" /></button>
                </div>
                <div className="three-col-list">
                  {col.games.map((game) => (
                    <div className="three-col-card" key={game.name}>
                      <img src={game.img} alt={game.name} />
                      <div className="three-col-info">
                        <span className="three-col-name">{game.name}</span>
                        <span className="three-col-desc">{game.desc}</span>
                        <span className="three-col-rating"><Star weight="fill" /> {game.rating}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
