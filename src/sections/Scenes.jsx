import { LINKS } from '../links.js'
import scene1 from '../assets/linkus-scene-1.jpg'
import scene2 from '../assets/linkus-scene-2.jpg'
import scene3 from '../assets/linkus-scene-3.jpg'

export default function Scenes() {
  return (
    <section className="sec" id="scenes">
      <div className="wrap scenes-grid">
        <div>
          <h2 className="h2 rv">말보다 장면이<br/>빠르니까.</h2>
          <p className="lede rv" style={{'--d':'80ms'}}>10년간의 활동이 117개의 영상으로 남아 있습니다. 어떤 분위기인지 3분이면 알 수 있어요.</p>
          <div className="scenes-links rv" style={{'--d':'140ms'}}>
            <a className="tlink" href={LINKS.youtube} target="_blank" rel="noopener">유튜브 채널 <span aria-hidden="true">↗</span></a>
            <a className="tlink" href={LINKS.insta} target="_blank" rel="noopener">인스타그램 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="yt rv" style={{'--d':'120ms'}}>
          <iframe src="https://www.youtube-nocookie.com/embed/gClkxai8kw4" title="링커스 활동 소개 영상: 활동 전 필수시청" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="wrap">
        <div className="scene-cards">
          <a className="scene-card rv" href="https://www.instagram.com/linkus_official_/p/DaNFtGvj4A-/" target="_blank" rel="noopener"><img src={scene1} alt="링커스 19기 스태프 인터뷰 아카이브: 19기의 시작과 끝에 있는 우리" loading="lazy" width="1080" height="1440"/></a>
          <a className="scene-card rv" style={{'--d':'90ms'}} href="https://www.instagram.com/linkus_official_/p/DaNFE6wj9Ws/" target="_blank" rel="noopener"><img src={scene2} alt="링커스 19기 아카이빙: 우리 모두 하나가 되는 순간" loading="lazy" width="1080" height="1440"/></a>
          <a className="scene-card rv" style={{'--d':'180ms'}} href="https://www.instagram.com/linkus_official_/p/DaNEfBfj8Mh/" target="_blank" rel="noopener"><img src={scene3} alt="링커스 19기 멤버 인터뷰 아카이브: 링커스의 마침표를 맺으며" loading="lazy" width="1080" height="1426"/></a>
        </div>
      </div>
    </section>
  )
}
