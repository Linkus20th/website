export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div>{Array.from({length:16}, (_, i) => <span key={i}>20TH RECRUITING · 지원 마감 8월 23일</span>)}</div>
    </div>
  )
}
