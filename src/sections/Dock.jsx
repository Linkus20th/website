import { LINKS, CLOSED } from '../links.js'

export default function Dock() {
  return (
    <div className="dock" id="dock">
      <a className="btn btn-out" href={LINKS.kakao} target="_blank" rel="noopener">문의</a>
      {CLOSED
        ? <span className="btn btn-accent is-closed" aria-disabled="true">모집 마감</span>
        : <a className="btn btn-accent" href={LINKS.form} target="_blank" rel="noopener">20기 지원하기</a>}
    </div>
  )
}
