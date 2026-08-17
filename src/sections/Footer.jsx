import { LINKS } from '../links.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <p><strong>Link-Us</strong>실무형 AI 커리어 동아리<br/>2016년 시작 · 20기</p>
          <p><strong>Contact</strong>
            <a href={LINKS.kakao} target="_blank" rel="noopener">카카오톡 채널</a><br/>
            <a href={LINKS.insta} target="_blank" rel="noopener">@linkus_official_</a></p>
          <p><strong>Apply</strong>
            <a href={LINKS.form} target="_blank" rel="noopener">지원서 작성하기 ↗</a><br/>
            마감 2026.08.23(일) 18:00</p>
        </div>
        <div className="f-bottom">
          <p>링커스는 대학생에 의해 자치적으로 운영되며 정치·종교·시민단체와 전혀 무관합니다.</p>
          <p>© 2026 Link-Us</p>
        </div>
      </div>
    </footer>
  )
}
