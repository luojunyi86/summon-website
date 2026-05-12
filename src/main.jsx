import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="entry-only">
      <section>
        <p className="kicker">SUMMON Skatepark</p>
        <h1>自助入场</h1>
        <p className="intro">官网入口已简化。入场、票务、支付和场地规则请前往独立入口页面。</p>
        <a href="/entry">进入 /entry</a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
