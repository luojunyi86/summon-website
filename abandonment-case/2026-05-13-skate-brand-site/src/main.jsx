import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const images = {
  logo: '/images/logo.png',
  hero: '/images/hero.jpg',
  about: '/images/about.jpg',
  space01: '/images/space-01.jpg',
  space02: '/images/space-02.jpg',
  space03: '/images/space-03.jpg',
  nike: '/images/event-nike.jpg',
  dc: '/images/event-dc.jpg',
  world: '/images/event-world-skate-day.jpg',
  party: '/images/event-party.jpg',
  media01: '/images/media-01.jpg',
  media02: '/images/media-02.jpg',
  media03: '/images/media-03.jpg',
}

const nav = [
  ['Brand', 'brand'],
  ['Park', 'park'],
  ['Sessions', 'sessions'],
  ['Crew', 'crew'],
  ['Contact', 'contact'],
]

const drops = [
  ['NIKE SB DUNK Yuto', 'MATCHA DROP', images.nike],
  ['DC Guangzhou', 'SKATE NIGHT', images.dc],
  ['Go Skateboarding Day', 'LOCAL SESSION', images.world],
  ['Night Run', 'PARTY / HALLOWEEN / NEW YEAR', images.party],
]

const terrains = ['BANK', 'RAIL', 'LED', 'STAIR', 'PLAZA', 'FOOD TRUCK', 'POP-UP', 'FILM SPOT']

const crew = ['SKATERS', 'FILMERS', 'COACHES', 'DJs', 'PHOTOGRAPHERS', 'BRANDS', 'LOCAL KIDS', 'NIGHT RIDERS']

function ImageBlock({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`image-block ${className}`}>
      {!failed && <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {failed && (
        <div className="image-fallback">
          <strong>{alt}</strong>
          <span>SUMMON IMAGE</span>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#home" aria-label="SUMMON home">
          <img src={images.logo} alt="SUMMON Skatepark" />
        </a>
        <nav aria-label="Main navigation">
          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
          <a className="entry" href="/entry">
            Entry
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
        <ImageBlock src={images.hero} alt="SUMMON skatepark night session" className="hero-image" />
        <div className="hero-copy">
          <p>GUANGZHOU SKATEBOARDING</p>
          <h1>SUMMON SKATEPARK</h1>
          <div className="hero-row">
            <span>RIDE THE LIGHT</span>
            <span>HANXI CHIMELONG</span>
            <span>OPEN SESSION</span>
          </div>
          <div className="hero-actions">
            <a href="/entry">自助入场</a>
            <a href="#sessions">看活动</a>
          </div>
        </div>
      </section>

      <section id="brand" className="brand-section">
        <div>
          <span className="eyebrow">Brand</span>
          <h2>不是游乐项目。是滑板现场。</h2>
        </div>
        <p>
          SUMMON 从滑板出发。我们做场地、做夜滑、做比赛、做影像，也做品牌一起落地的真实瞬间。
        </p>
      </section>

      <section id="park" className="park-section">
        <div className="park-head">
          <span className="eyebrow">Park</span>
          <h2>透明道具。蓝色灯光。商场中庭里的街头地形。</h2>
        </div>
        <div className="park-grid">
          <ImageBlock src={images.space01} alt="SUMMON transparent skate terrain" className="wide" />
          <ImageBlock src={images.space02} alt="SUMMON rail and led obstacle" />
          <ImageBlock src={images.space03} alt="SUMMON night plaza" />
        </div>
        <div className="terrain-strip">
          {terrains.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="sessions" className="sessions-section">
        <div className="section-line">
          <span className="eyebrow">Sessions</span>
          <h2>每一次活动，都应该有人真的在滑。</h2>
        </div>
        <div className="drop-wall">
          {drops.map(([title, tag, image]) => (
            <article key={title}>
              <ImageBlock src={image} alt={title} />
              <div>
                <span>{tag}</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="media-section">
        <div className="media-copy">
          <span className="eyebrow">Film</span>
          <h2>能滑。能拍。能发出去。</h2>
          <p>照片、短片、发布会、夜场内容。滑板品牌不靠介绍，靠画面。</p>
        </div>
        <div className="media-images">
          <ImageBlock src={images.media01} alt="SUMMON event photo" />
          <ImageBlock src={images.media02} alt="SUMMON skater film" />
          <ImageBlock src={images.media03} alt="SUMMON brand content" />
        </div>
      </section>

      <section id="crew" className="crew-section">
        <h2>Built by the session.</h2>
        <div className="crew-grid">
          {crew.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span className="eyebrow">Collab</span>
          <h2>Bring a board. Bring a camera. Bring a brand.</h2>
          <p>品牌活动 / 发售 / 比赛 / 拍摄 / 快闪 / 课程 / 夜场</p>
        </div>
        <a href="/entry">自助入场</a>
      </section>

      <footer>
        <img src={images.logo} alt="SUMMON Skatepark" />
        <p>Guangzhou · Hanxi Chimelong · Fanghuali</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
