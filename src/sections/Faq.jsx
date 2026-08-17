import { useState } from 'react'
import { LINKS } from '../links.js'

const FAQ = [
  {
    q: '개발을 전혀 모르는데 지원해도 되나요?',
    a: `네. 전공과 개발 경험은 지원 자격이 아니고, 매 기수 비전공자 부원이 함께합니다.
개인 프로젝트는 각자의 수준에 맞게 주제를 잡고, AI 코칭과 매주 피드백이 함께 갑니다.`,
  },
  {
    q: '학기 중인데 시간이 될까요?',
    a: `정기 활동은 매주 토요일 14:00~18:00이고, 시험기간 2주는 쉽니다.
토요일 오후만 비워두면 인턴·다른 동아리와 병행하는 부원도 많습니다.
프로젝트 마감 전에는 개인 시간이 더 들어갑니다. 부담이 없다기보다, 예측 가능한 부담입니다.`,
  },
  {
    q: '면접은 어떻게 진행되나요?',
    a: `8/29(토)~30(일) 온라인 화상 면접입니다. 사전 과제, 기술 시험, 코딩 테스트 모두 없습니다.
실력이나 스펙보다 16주를 끝까지 해낼 사람인지를 봅니다. 시간대는 서류 발표 때 조율합니다.`,
  },
  {
    q: '활동비 5만원은 어디에 쓰이나요?',
    a: `강의실 대관, 활동 물품, 기수 운영에 사용합니다. 최종 합격 후 OT 전까지 납부하고,
사용 내역은 학기 중 부원들에게 공개합니다.`,
  },
  {
    q: '더 궁금한 게 있으면 어디로 물어보나요?',
    a: <>{'카카오톡 채널('}<a href={LINKS.kakao} target="_blank" rel="noopener">pf.kakao.com/_ccQMM</a>{') 또는 인스타그램 '}<a href={LINKS.insta} target="_blank" rel="noopener">@linkus_official_</a>{` DM으로 물어보세요.
지원 여부와 상관없이 답변드립니다.`}</>,
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="sec" id="faq">
      <div className="wrap faq-grid">
        <div>
          <h2 className="h2 rv">자주 묻는 질문</h2>
          <div className="faq-contact rv" style={{ '--d': '80ms' }}>
            <a className="tlink" href={LINKS.kakao} target="_blank" rel="noopener">카카오톡 채널 <span aria-hidden="true">↗</span></a>
            <a className="tlink" href={LINKS.insta} target="_blank" rel="noopener">인스타그램 DM <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="faq-list rv" style={{ '--d': '140ms' }}>
          {FAQ.map((item, i) => (
            <div className="qa" key={i} data-open={open === i ? 'true' : 'false'}>
              <button type="button" aria-expanded={open === i ? 'true' : 'false'} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="qt">{item.q}</span><span className="sign" aria-hidden="true">+</span>
              </button>
              <div className="ans"><div>{item.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
