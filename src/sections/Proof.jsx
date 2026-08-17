export default function Proof() {
  return (
    <section className="proof" aria-label="수상 및 선정 이력">
      <div className="wrap">
        <p className="eyebrow cap rv">외부 기관이 인정한 링커스</p>
        <div className="proof-grid">
          <div className="proof-item rv"><b>TOP 2</b><span>2026 캠퍼스픽<br/>창업·취업 동아리</span></div>
          <div className="proof-item rv" style={{'--d':'70ms'}}><b>TOP 50</b><span>2023·2024 아웃캠퍼스<br/>명품동아리</span></div>
          <div className="proof-item rv" style={{'--d':'140ms'}}><b>TOP 10</b><span>2017~2019<br/>명품동아리</span></div>
          <div className="proof-item rv" style={{'--d':'210ms'}}><b>대표동아리</b><span>2018·2019<br/>스펙업 선정</span></div>
        </div>
      </div>
    </section>
  )
}
