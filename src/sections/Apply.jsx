import { LINKS, CLOSED } from '../links.js'

export default function Apply() {
  return (
    <section className="sec" id="apply">
      <svg className="apply-loop" viewBox="0 0 900 420" aria-hidden="true" focusable="false">
        <path d="M60 300 C 180 60, 360 60, 450 210 C 540 360, 720 360, 840 120" />
      </svg>
      <div className="wrap">
        <h2 className="h2 rv">{CLOSED ? '20기 모집이 마감되었습니다.' : '지원서 한 장이면 됩니다.'}</h2>
        <p className="lede rv" style={{'--d':'80ms'}}>{CLOSED
          ? '다음 기수 소식은 카카오톡 채널과 인스타그램으로 가장 먼저 전해드립니다.'
          : '준비된 사람이 아니라, 16주를 끝까지 해볼 사람을 찾습니다.'}</p>
        <div className="apply-row rv" style={{'--d':'140ms'}}>
          {CLOSED
            ? <>
                <a className="btn btn-accent btn-lg" href={LINKS.kakao} target="_blank" rel="noopener">다음 기수 소식 받기</a>
                <a className="btn btn-out btn-lg" href={LINKS.insta} target="_blank" rel="noopener">인스타그램</a>
              </>
            : <>
                <a className="btn btn-accent btn-lg" href={LINKS.form} target="_blank" rel="noopener">20기 지원하기</a>
                <a className="btn btn-out btn-lg" href={LINKS.kakao} target="_blank" rel="noopener">카카오톡 문의</a>
              </>}
        </div>
        <p className="apply-dl rv" style={{'--d':'180ms'}}>{CLOSED
          ? '서류 마감 · 2026.08.23(일) 18:00 종료'
          : '서류 마감 · 2026.08.23(일) 18:00'}</p>
      </div>
    </section>
  )
}
