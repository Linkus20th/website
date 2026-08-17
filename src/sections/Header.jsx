import logo from '../assets/logo.png'
import { LINKS } from '../links.js'

export default function Header() {
  return (
    <header className="hd" id="hd">
      <a className="mark" href="#top" aria-label="링커스 홈"><img src={logo} alt="" height="26"/></a>
      <nav className="nav" aria-label="주요 섹션">
        <a href="#about">소개</a>
        <a href="#how">커리큘럼</a>
        <a href="#recruit">모집 안내</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="btn btn-accent" href={LINKS.form} target="_blank" rel="noopener">지원하기</a>
    </header>
  )
}
