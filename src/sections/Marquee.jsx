import { CLOSED } from '../links.js'

export default function Marquee() {
  const text = CLOSED ? '20TH · 모집 마감' : '20TH RECRUITING · 지원 마감 8월 23일'
  return (
    <div className="mq" aria-hidden="true">
      <div>{Array.from({length:16}, (_, i) => <span key={i}>{text}</span>)}</div>
    </div>
  )
}
