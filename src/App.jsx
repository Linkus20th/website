import { useEffect } from 'react'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Proof from './sections/Proof.jsx'
import About from './sections/About.jsx'
import How from './sections/How.jsx'
import Scenes from './sections/Scenes.jsx'
import Recruit from './sections/Recruit.jsx'
import Faq from './sections/Faq.jsx'
import Marquee from './sections/Marquee.jsx'
import Apply from './sections/Apply.jsx'
import Footer from './sections/Footer.jsx'
import Dock from './sections/Dock.jsx'

export default function App() {
  useEffect(() => {
    const obs = []

    /* 스크롤 리빌 */
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const rvs = Array.from(document.querySelectorAll('.rv'))
    if (reduce) {
      rvs.forEach(e => e.classList.add('in'))
    } else {
      const io = new IntersectionObserver((es, ob) => {
        es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target) } })
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
      obs.push(io)
      /* 첫 화면 요소는 즉시 노출, 나머지만 관찰 */
      rvs.forEach(e => {
        if (e.getBoundingClientRect().top < innerHeight) e.classList.add('in')
        else io.observe(e)
      })
    }

    /* 헤더 배경 (sentinel 기반) */
    const hd = document.getElementById('hd')
    const hdIo = new IntersectionObserver(es => {
      hd.classList.toggle('on', !es[0].isIntersecting)
    }, { threshold: 0 })
    hdIo.observe(document.getElementById('sentinel'))
    obs.push(hdIo)

    /* 모바일 하단 고정 CTA */
    const dock = document.getElementById('dock')
    let passedHero = false, atApply = false
    const sync = () => dock.classList.toggle('show', passedHero && !atApply)
    const heroIo = new IntersectionObserver(es => { passedHero = !es[0].isIntersecting; sync() }, { threshold: 0 })
    heroIo.observe(document.querySelector('.hero'))
    const applyIo = new IntersectionObserver(es => { atApply = es[0].isIntersecting; sync() }, { threshold: 0 })
    applyIo.observe(document.getElementById('apply'))
    obs.push(heroIo, applyIo)

    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <Header />
      <div id="sentinel" aria-hidden="true" style={{ position: 'absolute', top: 8, height: 1, width: 1 }} />
      <main>
        <Hero />
        <Proof />
        <About />
        <How />
        <Scenes />
        <Recruit />
        <Faq />
        <Marquee />
        <Apply />
      </main>
      <Footer />
      <Dock />
    </>
  )
}
