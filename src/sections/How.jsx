export default function How() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <h2 className="h2 rv">묻고, 혼자 만들고, 같이 만듭니다.</h2>
        <p className="lede rv" style={{'--d':'80ms'}}>2026.09.05 ~ 12.26 · 매주 토요일 14:00~18:00</p>
        <div className="rail">
          <article className="rail-col rv">
            <p className="rail-meta"><span>1~5주차</span></p>
            <div className="rail-badge" aria-hidden="true">01</div>
            <h3>링커슈 · 실무자 인터뷰</h3>
            <p>현직 실무자 인터뷰를 통해 <b>현장에서 검증된 문제 정의</b>를 얻습니다.</p>
          </article>
          <article className="rail-col rv" style={{'--d':'90ms'}}>
            <p className="rail-meta"><span>6~10주차</span></p>
            <div className="rail-badge" aria-hidden="true">02</div>
            <h3>개인 프로젝트</h3>
            <p>AI 코칭과 매주 피드백을 통해 <b>내 이름으로 설명할 수 있는 결과물</b>을 얻습니다.</p>
          </article>
          <article className="rail-col rv" style={{'--d':'180ms'}}>
            <p className="rail-meta"><span>11~16주차</span></p>
            <div className="rail-badge" aria-hidden="true">03</div>
            <h3>팀 프로젝트</h3>
            <p>팀으로 부딪히고 조율하는 과정을 통해 <b>함께 만든 결과물과 협업 경험</b>을 얻습니다.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
