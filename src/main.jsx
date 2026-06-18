import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const ASSET_BASE = 'https://raw.githubusercontent.com/luojunyi86/summon-entrance/main/public/assets/'

const tickets = [
  {
    id: 'single',
    title: '单次入场',
    price: '¥10 / 人',
    amount: '¥10',
    detail: '含指定饮品一杯',
    selectNote: '含饮品',
    requiresPayment: true,
  },
  {
    id: 'student',
    title: '学生票',
    price: '¥5 / 人',
    amount: '¥5',
    detail: '18 岁以下凭有效学生证使用，不含饮品',
    selectNote: '18岁以下',
    requiresPayment: true,
  },
  {
    id: 'free',
    title: '每周二免费',
    price: 'FREE',
    amount: 'FREE',
    detail: '免费日仍需遵守场地规则',
    selectNote: '周二免费',
    requiresPayment: false,
  },
]

const paymentMethods = [
  {
    id: 'wechat',
    title: '微信支付',
    image: `${ASSET_BASE}wechat-qr.png`,
    alt: '微信支付收款码',
  },
  {
    id: 'alipay',
    title: '支付宝',
    image: `${ASSET_BASE}alipay-qr.png`,
    alt: '支付宝收款码',
  },
]

const reminders = [
  '请保留微信 / 支付宝付款记录。',
  '无人时自助入场，有人时随机抽查。',
  '未缴费进入滑板区域者，将被要求补票或离场。',
  '学生票需出示有效学生证，无学生证需补差价。',
]

const rules = [
  '入场前请自觉完成门票支付。',
  '请按自身能力练习，建议佩戴护具；酒后或危险动作禁止入场。',
  '禁止在场地内抽烟、乱丢烟头。',
  '禁止进入吧台区域拿取物品或存放个人物品。',
  '未缴费进入滑板区域者，将被要求补票或离场。',
]

const notifyChannels = [
  {
    title: '微信群',
    text: '活动通知',
    action: '到前台扫码',
  },
  {
    title: '小红书',
    text: '照片攻略',
    action: '打开主页',
    href: 'https://xhslink.com/m/9ZX7hmfOB9q',
  },
  {
    title: '抖音',
    text: '动作视频',
    action: '打开主页',
    href: 'https://v.douyin.com/t65jLV8zixI/',
  },
  {
    title: '约课 / 包场',
    text: '教学咨询',
    action: '联系前台',
  },
]

function SkateboardIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="滑板" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 35c7-12 33-12 40 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M14 36c9 8 27 8 36 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="22" cy="47" r="5" fill="currentColor" />
      <circle cx="42" cy="47" r="5" fill="currentColor" />
    </svg>
  )
}

function SimpleIcon({ label }) {
  return <span className="simple-icon" aria-hidden="true">{label}</span>
}

function Home() {
  return (
    <main className="home-page">
      <section className="home-card">
        <p className="kicker">SUMMON Skatepark</p>
        <h1>官网入口</h1>
        <p className="intro">自助入场、票务支付和场地规则已经接入官网。现场扫码或直接进入独立入口页面完成付款。</p>
        <div className="home-actions">
          <a className="primary-link" href="/entry">进入自助入场</a>
          <a className="secondary-link" href="https://summonskate.com/entry">打开正式入口</a>
        </div>
      </section>
    </main>
  )
}

function Hero() {
  return (
    <section className="hero">
      <img src={`${ASSET_BASE}summon-night.jpg`} alt="SUMMON Skatepark 夜间场地" className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="brand-mark">
          <img src={`${ASSET_BASE}summon-logo-complete.png`} alt="SUMMON Skatepark" />
        </div>
        <div className="official-chip">
          <SimpleIcon label="✓" />
          SUMMON 官方自助入场
        </div>
        <h1>SUMMON Skatepark 自助入场</h1>
        <div className="intro-card">
          <p>欢迎来到 SUMMON。</p>
          <p>本场地采用自助入场方式。进入滑板区域前，请先完成门票支付。</p>
          <p>付款后请保留微信 / 支付宝付款记录，工作人员在场时可能随机抽查。</p>
        </div>
        <button type="button" className="primary-action" onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}>
          <SimpleIcon label="→" />
          选择票种付款
        </button>
      </div>
    </section>
  )
}

function EntryPaymentSection() {
  const [selectedTicketId, setSelectedTicketId] = useState('single')
  const selectedTicket = tickets.find((ticket) => ticket.id === selectedTicketId) || tickets[0]

  return (
    <section className="section-block entry-payment-section" id="payment">
      <div className="section-title">
        <span>Entry Payment</span>
        <h2>选择票种并扫码付款</h2>
      </div>

      <div className="ticket-select-grid">
        {tickets.map((ticket, index) => {
          const active = selectedTicketId === ticket.id

          return (
            <button
              type="button"
              className={`ticket-select-card ${active ? 'is-selected' : ''}`}
              style={{ '--ticket-index': index }}
              key={ticket.id}
              onClick={() => setSelectedTicketId(ticket.id)}
            >
              <div className="price-icon">
                <SkateboardIcon size={24} />
              </div>
              <div>
                <h3>{ticket.title}</h3>
                <strong>{ticket.price}</strong>
                <p>{ticket.selectNote}</p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="selected-payment-panel">
        <div className="selected-payment-head">
          <span>当前选择</span>
          <h3>{selectedTicket.title}</h3>
          <strong>{selectedTicket.amount}</strong>
          <p>{selectedTicket.detail}</p>
        </div>

        {selectedTicket.requiresPayment ? (
          <>
            <div className="payment-method-title">
              <span>请选择支付方式</span>
              <p>请选择微信或支付宝付款。付款金额需与当前选择票种一致，付款后请保留微信 / 支付宝付款记录。</p>
            </div>

            <div className="payment-method-grid">
              {paymentMethods.map((method) => (
                <article className="payment-method-card" key={method.id}>
                  <div className="payment-method-head">
                    <span>{method.title}</span>
                    <strong>{selectedTicket.amount}</strong>
                  </div>
                  <div className="qr-box">
                    <img src={method.image} alt={method.alt} className="qr-image" />
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="free-entry-box">
            <strong>无需付款</strong>
            <p>周二免费入场，无需付款。免费日仍需遵守场地规则，工作人员可能进行现场抽查与秩序提醒。</p>
          </div>
        )}
      </div>

      <div className="notice">
        <SimpleIcon label="!" />
        <p>付款后请保留付款记录。工作人员在场时，可能随机查看当天付款记录。</p>
      </div>
    </section>
  )
}

function ReminderSection() {
  return (
    <section className="reminder-panel">
      <div className="reminder-title">
        <div className="price-icon"><SimpleIcon label="✓" /></div>
        <div>
          <span>重要提示</span>
          <h2>付款记录 = 入场凭证</h2>
        </div>
      </div>
      <ul>
        {reminders.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function RulesSection() {
  return (
    <section className="section-block rules-section">
      <div className="section-title">
        <span>Rules</span>
        <h2>入场规则</h2>
      </div>
      <ul className="rules-list">
        {rules.map((rule, index) => (
          <li key={rule}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{rule}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function NotifyFooter() {
  return (
    <footer className="footer-action">
      <div className="footer-action-head">
        <span><SimpleIcon label="•" /> 活动通知</span>
        <h2>关注 SUMMON 最新动态</h2>
      </div>
      <div className="notify-grid">
        {notifyChannels.map((channel) => {
          const content = (
            <>
              <div className="notify-icon"><SimpleIcon label="+" /></div>
              <div>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
                <strong>{channel.action}</strong>
              </div>
            </>
          )
          if (channel.href) {
            return (
              <a className="notify-card" key={channel.title} href={channel.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            )
          }
          return (
            <article className="notify-card" key={channel.title}>
              {content}
            </article>
          )
        })}
      </div>
    </footer>
  )
}

function EntryPage() {
  return (
    <main className="entry-page">
      <Hero />
      <section className="content-wrap">
        <div className="status-strip">
          <SimpleIcon label="✓" />
          <span>自助扫码付款后即可入场，请保留当天付款记录供随机抽查。</span>
        </div>
        <EntryPaymentSection />
        <ReminderSection />
        <RulesSection />
        <NotifyFooter />
      </section>
    </main>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return path === '/entry' ? <EntryPage /> : <Home />
}

createRoot(document.getElementById('root')).render(<App />)
