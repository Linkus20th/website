export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-grid">
          <p className="about-kick rv">실무형<br/>AI 커리어<br/>동아리</p>
          <div>
            <h2 className="h2 rv" style={{'--d':'80ms'}}>16주 뒤, 내 이름으로 설명할 결과물 두 개가 남습니다.</h2>
            <p className="lede rv" style={{'--d':'160ms'}}>
              링커스는 2016년 시작한 실무형 AI 커리어 동아리입니다.
              AI를 '배우는' 모임이 아니라 '쓰는' 모임, 현장의 문제를 AI로 직접 풀며 성장합니다.
            </p>
          </div>
        </div>
        <div className="stats rv" style={{'--d':'220ms'}}>
          <div><b>1,300+</b><span>누적 수료생</span></div>
          <div><b>300+</b><span>현직 실무자 네트워크</span></div>
          <div><b>20기</b><span>2016년 시작</span></div>
        </div>
      </div>
    </section>
  )
}
