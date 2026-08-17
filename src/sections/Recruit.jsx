export default function Recruit() {
  return (
    <section className="sec" id="recruit">
      <div className="wrap">
        <p className="eyebrow rv">RECRUITMENT</p>
        <h2 className="h2 rv" style={{'--d':'60ms',marginTop:14}}>모집 안내</h2>
        <p className="lede rv" style={{'--d':'120ms'}}>지원 조건은 이게 전부입니다. 전공·개발 경험은 보지 않습니다.</p>

        <div className="spec rv" style={{'--d':'160ms'}}>
          <article className="spec-cell"><span className="k">누가</span>
            <span className="v">재학·휴학·졸업유예<br/>+ 졸업생</span>
            <span className="d">20기부터 졸업생도 지원 가능. 약 60명 내외 모집.</span></article>
          <article className="spec-cell"><span className="k">언제</span>
            <span className="v">매주 토요일<br/>14:00~18:00</span>
            <span className="d">9/5 ~ 12/26 · 16주. 시험기간 2주는 쉽니다.</span></article>
          <article className="spec-cell"><span className="k">어디서</span>
            <span className="v">서울<br/>오프라인</span>
            <span className="d">정기 활동은 대면, 면접만 온라인입니다.</span></article>
          <article className="spec-cell"><span className="k">얼마</span>
            <span className="v">1학기<br/>50,000원</span>
            <span className="d">대관·물품·운영비. 내역은 부원에게 공개합니다.</span></article>
        </div>

        <ol className="sched rv" style={{'--d':'200ms'}}>
          <li className="now"><span className="st">서류 접수</span><span className="dt">~ 8/23(일) 18:00</span></li>
          <li><span className="st">서류 발표</span><span className="dt">8/26(수)</span></li>
          <li><span className="st">온라인 면접</span><span className="dt">8/29~30</span></li>
          <li><span className="st">최종 발표</span><span className="dt">9/2(수)</span></li>
          <li><span className="st">OT<span className="must">필참</span></span><span className="dt">9/5(토)</span></li>
        </ol>
      </div>
    </section>
  )
}
