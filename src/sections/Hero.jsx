import { LINKS } from '../links.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-num" aria-hidden="true">20TH</div>
      <div className="wrap">
        <span className="eyebrow rv">LINKUS 20TH · 서류 마감 8/23(일) 18:00</span>
        <h1 className="rv" style={{'--d':'80ms'}}>관심을 연결하고,<br/><span className="mk">가능성을 발견하다.</span></h1>
        <p className="lede rv" style={{'--d':'160ms'}}>현직 실무자를 인터뷰해 진짜 문제를 찾고,
          16주 동안 AI로 두 개의 결과물을 만들며 성장합니다.</p>
        <p className="hero-tags rv" style={{'--d':'200ms'}} aria-label="활동 키워드"><span>직무 탐구</span><span>산업 이슈</span><span>실무자 컨택</span><span>AI &amp; 콘텐츠</span></p>
        <div className="hero-cta rv" style={{'--d':'240ms'}}>
          <a className="btn btn-accent btn-lg" href={LINKS.form} target="_blank" rel="noopener">20기 지원하기</a>
          <a className="tlink" href="#recruit">모집 안내 보기 <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}
